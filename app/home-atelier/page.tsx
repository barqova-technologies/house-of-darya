import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CalBooking } from "@/components/CalBooking";
import { TrustMarks } from "@/components/TrustMarks";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Atelier - The House Comes To You in Lucknow",
  description:
    "House of Darya's Home Atelier brings 9,000+ solitaire designs, certified stones and expert guidance to your home in Lucknow. Private, complimentary, by appointment. Book your visit.",
};

const journey = [
  { step: "Call", text: "We understand the occasion, your style, and what matters most to you." },
  { step: "Curate", text: "We curate a selection of designs, stones and materials, just for you." },
  { step: "Visit", text: "We arrive at your home at your chosen time, with everything you need." },
  { step: "Design", text: "You try, compare and refine. Together, we create your perfect piece." },
  { step: "Craft", text: "Expert hands craft your jewellery exclusively for you." },
  {
    step: "Heirloom Arrives",
    text: "Your finished piece comes home to you, ready to begin its own story.",
  },
];

export default function HomeAtelierPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0">
          <Image
            src={images.atelierTray}
            alt="A House of Darya jewellery case opened at home"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[70%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/80 to-night/25" />
        </div>
        <div className="shell relative z-10 flex min-h-[86svh] flex-col justify-center pb-20 pt-32">
          <div className="max-w-xl">
            <p className="label text-white/70">The Home Atelier</p>
            <h1 className="display mt-6 text-[2.6rem] leading-[1.05] text-white sm:text-6xl lg:text-[4rem]">
              The House Comes <em className="font-display italic text-white/85">To You</em>
            </h1>
            <p className="mt-7 max-w-lg text-[0.98rem] leading-7 text-white/75">
              &ldquo;Atelier&rdquo; is an artist&rsquo;s workspace. House of Darya&rsquo;s flagship
              Home Atelier Service brings a private jewellery consultation where you are the artist,
              and we help you craft your dream jewellery piece &mdash; for you, or for your loved
              one.
            </p>
            <div className="mt-10">
              <a href="#book" className="btn bg-canvas text-night hover:bg-white">
                Book Home Atelier Service
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="grid items-stretch lg:grid-cols-2">
        <Reveal className="relative aspect-[4/3] w-full sm:aspect-[16/9] lg:aspect-auto lg:min-h-[80svh]">
          <Image
            src={images.atelierLifestyle}
            alt="A consultant showing designs during a Home Atelier visit"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.12} className="flex items-center bg-canvas lg:bg-card">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
            <h2 className="display text-3xl leading-tight text-ink sm:text-4xl">
              A conversation, <br className="hidden sm:block" />
              before a collection.
            </h2>
            <span className="mt-6 block h-px w-16 bg-gold" />
            <p className="mt-7 text-[0.95rem] leading-7 text-mist">
              Before we bring jewellery, we understand you.
            </p>
            <p className="mt-5 text-[0.95rem] leading-8 text-ink">
              The occasion.
              <br />
              Your style.
              <br />
              Your budget.
              <br />
              Your story.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0">
          <Image
            src={images.atelierDetail}
            alt="Trays of solitaires and loose certified stones"
            fill
            sizes="100vw"
            className="object-cover object-[60%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/75 to-transparent" />
        </div>
        <div className="shell relative z-10 flex min-h-[62svh] flex-col justify-center py-24">
          <Reveal className="max-w-lg">
            <h2 className="display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Everything a showroom has. Except the showroom.
            </h2>
            <span className="mt-6 block h-px w-16 bg-white/40" />
            <p className="mt-7 text-[0.95rem] leading-8 text-white/80">
              Thousands of design inspirations.
              <br />
              Stones you could want.
              <br />
              In all shapes and sizes.
              <br />
              Currently focussed on rings and studs.
            </p>
          </Reveal>
        </div>
      </section>

      <section className="grid items-stretch lg:grid-cols-2">
        <Reveal className="relative order-2 aspect-[4/3] w-full sm:aspect-[16/9] lg:order-1 lg:aspect-auto lg:min-h-[80svh]">
          <Image
            src={images.consultationEditorial}
            alt="A family choosing a piece together at home"
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover"
          />
        </Reveal>
        <Reveal delay={0.12} className="order-1 flex items-center bg-canvas lg:bg-card lg:order-2">
          <div className="px-6 py-14 sm:px-10 sm:py-16 lg:px-20 lg:py-20">
            <h2 className="display text-3xl leading-tight text-ink sm:text-4xl">
              Because jewellery is rarely chosen alone.
            </h2>
            <span className="mt-6 block h-px w-16 bg-gold" />
            <p className="mt-7 max-w-sm text-[0.95rem] leading-7 text-mist">
              The Home Atelier lets the people who matter be part of the decision.
            </p>
          </div>
        </Reveal>
      </section>

      <section className="bg-night">
        <div className="shell py-24 lg:py-28">
          <Reveal className="text-center">
            <p className="label text-white/70">The Journey</p>
            <h2 className="display mt-4 text-3xl italic text-white sm:text-4xl">
              The Journey to your precious
            </h2>
          </Reveal>
          <div className="mt-16 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {journey.map((item, i) => (
              <Reveal key={item.step} delay={i * 0.08} className="relative text-center">
                <span className="mx-auto flex h-10 w-10 items-center justify-center rounded-full border border-white/45 font-display text-sm italic text-white/85">
                  {i + 1}
                </span>
                <h3 className="display mt-5 text-xl text-white">{item.step}</h3>
                <p className="mx-auto mt-3 max-w-[16rem] text-sm leading-6 text-white/65">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-night">
        <div className="absolute inset-0">
          <Image
            src={images.atelierHands}
            alt="A solitaire held up to the light of home"
            fill
            sizes="100vw"
            className="object-cover object-[75%_center]"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-night via-night/70 to-transparent" />
        </div>
        <div className="shell relative z-10 flex min-h-[58svh] flex-col justify-center py-24">
          <Reveal className="max-w-lg">
            <h2 className="display text-3xl leading-tight text-white sm:text-4xl lg:text-5xl">
              Your living room has better lighting than any showroom.
            </h2>
            <span className="mt-6 block h-px w-16 bg-white/40" />
            <p className="mt-7 text-[0.95rem] leading-8 text-white/80">
              See every detail.
              <br />
              In the light you live in.
            </p>
          </Reveal>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 border-y border-line bg-veil/60">
        <div className="shell grid gap-14 py-24 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-28">
          <Reveal>
            <p className="label text-gold">Book Your Home Atelier</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl lg:leading-[1.15]">
              Choose a day. <em className="italic text-gold">We&rsquo;ll bring the house.</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-mist">
              Complimentary. Private. No obligation. Share your details and our concierge will
              confirm your visit.
            </p>
            <div className="mt-10 space-y-5 border-t border-line pt-8 text-sm text-mist">
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Where</span>
                Homes across {site.city}, Uttar Pradesh
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">When</span>
                Seven days a week, 11am – 9pm, by appointment
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-24 shrink-0 text-[0.58rem] text-gold">Cost</span>
                Complimentary, always, with no obligation to commission
              </p>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-line bg-card p-7 sm:p-10">
              <CalBooking />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-b border-line">
        <div className="shell py-16">
          <TrustMarks />
        </div>
      </section>

      <section className="shell pb-24 pt-4 text-center lg:pb-28">
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
