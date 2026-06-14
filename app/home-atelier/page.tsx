import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { EnquiryForm } from "@/components/EnquiryForm";
import { TrustMarks } from "@/components/TrustMarks";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Atelier - Try 9000+ Designs at Home in Lucknow",
  description:
    "House of Darya's Home Atelier brings 9000+ solitaire ring and earring designs, certified stones and expert guidance to your home in Lucknow. Book your private visit.",
};

const visitSteps = [
  {
    title: "We listen first",
    text: "Before the visit, a consultant calls to understand the occasion, your taste and your timeline, so the curation is yours, not generic.",
  },
  {
    title: "The atelier arrives",
    text: "Trays of solitaire designs, loose IGI certified diamonds, SGL certified gemstones and metal samples arrive at your door at your chosen hour.",
  },
  {
    title: "Try, compare, decide slowly",
    text: "Wear designs in your own mirror and your own light. Compare natural and lab-grown stones side by side, with every certificate in hand.",
  },
  {
    title: "Design with an expert",
    text: "Refine the setting, the carat, the finish, the hidden details. Your consultant sketches the piece with you before anything is made.",
  },
];

const included = [
  "9,000+ solitaire ring & earring designs to try on",
  "Loose certified stones to view and compare",
  "Gold and platinum metal samples",
  "A dedicated design consultant",
  "Certification walkthrough: IGI, SGL, HUID",
  "Indicative pricing for every option, confirmed before crafting",
];

export default function HomeAtelierPage() {
  return (
    <>
      <section className="relative overflow-hidden">
        <div className="shell grid min-h-[88svh] items-center gap-10 pb-16 pt-32 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <p className="label text-gold">Exclusively in {site.city}</p>
            <h1 className="display mt-5 text-4xl leading-[1.08] text-ink sm:text-5xl lg:text-6xl">
              Nine thousand designs, <em className="italic text-gold">one address: yours</em>
            </h1>
            <p className="mt-7 max-w-md text-[0.97rem] leading-7 text-mist">
              The Home Atelier is House of Darya's signature service: a private jewellery
              consultation that happens entirely in your home. See more designs than any showroom
              holds, with no one watching the clock.
            </p>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <a href="#book" className="btn-gold">
                Book Your Visit
              </a>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-line"
              >
                Ask on WhatsApp
              </a>
            </div>
            <p className="mt-8 text-xs uppercase tracking-[0.2em] text-mist">
              Complimentary · By appointment · No obligation
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.atelierHands}
                alt="Trying a solitaire during a Home Atelier visit"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 48vw"
                className="object-cover"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-y border-line bg-card">
        <div className="shell py-24 lg:py-32">
          <SectionHeading
            eyebrow="The Visit"
            title="An hour that changes how you buy jewellery"
            intro="Four unhurried movements, from first conversation to a design that is unmistakably yours."
          />
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {visitSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div>
                  <span className="font-display text-4xl italic text-gold">{`0${i + 1}`}</span>
                  <h3 className="display mt-4 text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
        <Reveal>
          <div className="relative aspect-square overflow-hidden">
            <Image
              src={images.atelierDetail}
              alt="A curated selection from the Home Atelier"
              fill
              sizes="(max-width: 1024px) 100vw, 48vw"
              className="object-cover"
            />
          </div>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="label text-gold">What Travels With Us</p>
          <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
            Everything a showroom has, except the showroom
          </h2>
          <ul className="mt-9 space-y-5">
            {included.map((item) => (
              <li key={item} className="flex gap-4 text-[0.95rem] leading-6 text-ink">
                <span className="mt-2.5 h-px w-6 shrink-0 bg-gold" />
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </section>

      <section id="book" className="scroll-mt-24 border-t border-line bg-veil/60">
        <div className="shell grid gap-14 py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-32">
          <Reveal>
            <p className="label text-gold">Book the Home Atelier</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl lg:leading-[1.15]">
              Choose a day. We bring the house.
            </h2>
            <p className="mt-6 text-[0.95rem] leading-7 text-mist">
              Share your details and a preferred time. Our concierge will call to confirm your
              visit and ask a few questions, so the designs we bring are already close to the one
              you will keep.
            </p>
            <div className="mt-10 space-y-5 border-t border-line pt-8 text-sm text-mist">
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Where</span>
                Homes across {site.city}, Uttar Pradesh
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">When</span>
                Seven days a week, 10am – 8pm, by appointment
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Cost</span>
                Complimentary, always, with no obligation to commission
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-line bg-card p-7 sm:p-10">
              <EnquiryForm
                type="home-atelier"
                interestOptions={[
                  "Solitaire Rings",
                  "Studs",
                  "Rings & Studs",
                  "A specific design I have seen",
                  "Not sure yet, guide me",
                ]}
              />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell py-16">
          <TrustMarks />
        </div>
      </section>

      <section className="shell pb-24 pt-4 text-center lg:pb-32">
        <Reveal>
          <p className="font-display text-xl italic text-mist">
            Outside {site.city}?{" "}
            <Link href="/consultation" className="text-gold underline-offset-4 hover:underline">
              Request a private consultation
            </Link>{" "}
            and we will find a way to bring Darya to you.
          </p>
        </Reveal>
      </section>
    </>
  );
}
