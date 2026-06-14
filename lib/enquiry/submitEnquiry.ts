import { Resend } from "resend";
import InternalEnquiryEmail from "@/emails/InternalEnquiryEmail";
import CustomerAcknowledgementEmail from "@/emails/CustomerAcknowledgementEmail";
import { persistEnquiry } from "@/lib/enquiry/persistEnquiry";
import type { Enquiry } from "@/lib/enquiry/types";
import { enquiryTypeLabels } from "@/lib/enquiry/types";

export async function submitEnquiry(enquiry: Enquiry): Promise<{ ok: boolean }> {
  await persistEnquiry(enquiry);

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.log("[enquiry:email-skipped] RESEND_API_KEY not set, lead logged above");
    return { ok: true };
  }

  const resend = new Resend(apiKey);
  const from = process.env.ENQUIRY_FROM ?? "House of Darya <atelier@houseofdarya.com>";
  const to = process.env.ENQUIRY_TO ?? "atelier@houseofdarya.com";

  const internal = await resend.emails.send({
    from,
    to,
    replyTo: enquiry.email || undefined,
    subject: `${enquiryTypeLabels[enquiry.type]} - ${enquiry.name}`,
    react: InternalEnquiryEmail({ enquiry }),
  });

  if (internal.error) {
    console.error("[enquiry:internal-email-failed]", internal.error);
    return { ok: false };
  }

  if (enquiry.email) {
    const ack = await resend.emails.send({
      from,
      to: enquiry.email,
      subject: "House of Darya - we have received your enquiry",
      react: CustomerAcknowledgementEmail({ enquiry }),
    });
    if (ack.error) {
      console.error("[enquiry:ack-email-failed]", ack.error);
    }
  }

  return { ok: true };
}
