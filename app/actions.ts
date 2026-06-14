"use server";

import { submitEnquiry } from "@/lib/enquiry/submitEnquiry";
import type { Enquiry, EnquiryType } from "@/lib/enquiry/types";

export type EnquiryFormState = {
  status: "idle" | "success" | "error";
  message: string;
};

const validTypes: EnquiryType[] = ["home-atelier", "consultation", "contact", "product"];

const clean = (value: FormDataEntryValue | null, max = 600) =>
  typeof value === "string" ? value.trim().slice(0, max) : "";

export async function submitEnquiryAction(
  _prev: EnquiryFormState,
  formData: FormData
): Promise<EnquiryFormState> {
  const honeypot = clean(formData.get("company"));
  const type = clean(formData.get("type")) as EnquiryType;
  const name = clean(formData.get("name"), 120);
  const phone = clean(formData.get("phone"), 24);
  const email = clean(formData.get("email"), 160);

  const successMessage =
    type === "home-atelier"
      ? "Thank you. Our atelier concierge will call you shortly to confirm your visit."
      : "Thank you. A member of our atelier will be in touch shortly.";

  if (honeypot) {
    return { status: "success", message: successMessage };
  }

  if (!validTypes.includes(type)) {
    return { status: "error", message: "Something went wrong. Please try again." };
  }
  if (name.length < 2) {
    return { status: "error", message: "Please share your name so we may address you properly." };
  }
  if (!/^[+\d][\d\s()-]{7,}$/.test(phone)) {
    return { status: "error", message: "Please provide a valid phone number so we can reach you." };
  }
  if (email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return { status: "error", message: "That email address does not look right. Please check it." };
  }

  const enquiry: Enquiry = {
    type,
    name,
    phone,
    email: email || undefined,
    city: clean(formData.get("city"), 80) || undefined,
    preferredDate: clean(formData.get("preferredDate"), 40) || undefined,
    preferredTime: clean(formData.get("preferredTime"), 40) || undefined,
    interest: clean(formData.get("interest"), 200) || undefined,
    message: clean(formData.get("message")) || undefined,
    context: clean(formData.get("context")) || undefined,
    submittedAt: new Date().toLocaleString("en-IN", { timeZone: "Asia/Kolkata" }),
  };

  try {
    const result = await submitEnquiry(enquiry);
    if (!result.ok) {
      return {
        status: "error",
        message: "We could not send your enquiry. Please try again or reach us on WhatsApp.",
      };
    }
    return { status: "success", message: successMessage };
  } catch (error) {
    console.error("[enquiry:action-failed]", error);
    return {
      status: "error",
      message: "We could not send your enquiry. Please try again or reach us on WhatsApp.",
    };
  }
}
