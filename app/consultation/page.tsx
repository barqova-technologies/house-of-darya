import type { Metadata } from "next";
import Image from "next/image";
import { Reveal } from "@/components/Reveal";
import { ContactActions } from "@/components/ContactActions";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Consultation",
  description:
    "Request a private consultation with a House of Darya design expert by phone, video or through our Home Atelier in Lucknow.",
};

export default function ConsultationPage() {
  return (
    <section className="shell grid gap-14 pb-24 pt-32 lg:grid-cols-2 lg:gap-20 lg:pb-32 lg:pt-40">
      <Reveal>
        <p className="label text-gold">Private Consultation</p>
        <h1 className="display mt-5 text-4xl leading-[1.1] text-ink sm:text-5xl">
          Every great piece starts as a conversation
        </h1>
        <p className="mt-6 max-w-md text-[0.97rem] leading-7 text-mist">
          Whether you have a design saved on your phone, a stone you have inherited, or only a
          feeling you cannot yet describe. A House of Darya consultant will help you give it
          form. By phone, on video, or at home in {site.city} through the Home Atelier.
        </p>
        <div className="relative mt-10 hidden aspect-[4/3] overflow-hidden lg:block">
          <Image
            src={images.consultationEditorial}
            alt="A House of Darya design consultation"
            fill
            sizes="(max-width: 1024px) 100vw, 45vw"
            className="object-cover"
          />
        </div>
      </Reveal>
      <Reveal delay={0.15}>
        <ContactActions
          emailLabel="Request a consultation"
          subject="Private consultation request"
          body={"Hello House of Darya,\n\nI would like to request a private consultation.\n\n"}
          message="Hello House of Darya, I would like to request a private consultation."
        />
      </Reveal>
    </section>
  );
}
