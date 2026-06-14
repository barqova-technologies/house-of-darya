import type { Metadata } from "next";
import { Reveal } from "@/components/Reveal";
import { EnquiryForm } from "@/components/EnquiryForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact the Atelier",
  description:
    "Reach House of Darya in Lucknow by phone, WhatsApp, email or the form below. Every message is answered personally within one business day.",
};

export default function ContactPage() {
  return (
    <section className="shell grid gap-14 pb-24 pt-32 lg:grid-cols-2 lg:gap-20 lg:pb-32 lg:pt-40">
      <Reveal>
        <p className="label text-gold">Contact</p>
        <h1 className="display mt-5 text-4xl leading-[1.1] text-ink sm:text-5xl">
          Write to the house
        </h1>
        <p className="mt-6 max-w-md text-[0.97rem] leading-7 text-mist">
          Questions about a design, a certification, a timeline, or the Home Atelier: every
          message reaches a person, never a queue, and is answered within one business day.
        </p>
        <div className="mt-10 space-y-5 border-t border-line pt-8 text-sm text-mist">
          <p className="flex gap-4">
            <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Atelier</span>
            {site.city}, Uttar Pradesh, India
          </p>
          <p className="flex gap-4">
            <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Phone</span>
            <a href={`tel:${site.phone.replace(/\s/g, "")}`} className="transition-colors hover:text-gold">
              {site.phone}
            </a>
          </p>
          <p className="flex gap-4">
            <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Email</span>
            <a href={`mailto:${site.email}`} className="transition-colors hover:text-gold">
              {site.email}
            </a>
          </p>
          <p className="flex gap-4">
            <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">WhatsApp</span>
            <a
              href={site.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-gold"
            >
              Message the atelier directly
            </a>
          </p>
          <p className="flex gap-4">
            <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Hours</span>
            Seven days a week, 10am – 8pm IST
          </p>
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <div className="border border-line bg-card p-7 sm:p-10">
          <EnquiryForm type="contact" />
        </div>
      </Reveal>
    </section>
  );
}
