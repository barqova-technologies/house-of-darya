import { site } from "@/lib/site";
import { mailtoLink, telLink, whatsappLink } from "@/lib/contact";

export function ContactActions({
  message,
  subject,
  body,
  emailLabel = "Email the Atelier",
  whatsappLabel = "Message on WhatsApp",
}: {
  message: string;
  subject: string;
  body?: string;
  emailLabel?: string;
  whatsappLabel?: string;
}) {
  return (
    <div className="flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center">
      <a href={mailtoLink(subject, body)} className="btn-gold">
        {emailLabel}
      </a>
      <a
        href={whatsappLink(message)}
        target="_blank"
        rel="noopener noreferrer"
        className="btn-line"
      >
        {whatsappLabel}
      </a>
      <a href={telLink} className="btn-line">
        Call {site.phone}
      </a>
    </div>
  );
}
