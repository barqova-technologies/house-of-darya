import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { CalBooking } from "@/components/CalBooking";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Atelier - The House Comes To You in Lucknow",
  description:
    "House of Darya's Home Atelier brings thousands of designs, certified diamonds and expert guidance to your home in Lucknow. Private, complimentary, by appointment. Book your visit.",
};

const journey = [
  { n: "01", step: "We listen", text: "We understand you and the occasion." },
  { n: "02", step: "We curate", text: "We bring a curated selection to your home." },
  { n: "03", step: "You explore", text: "Try, compare and decide at your own pace." },
  { n: "04", step: "We design", text: "We refine every detail together." },
  { n: "05", step: "We craft", text: "Your piece is handcrafted exclusively for you." },
];

function EditorialRow({
  eyebrow,
  title,
  children,
  image,
  alt,
  imageSide,
  panel = "bg-canvas",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  image: string;
  alt: string;
  imageSide: "left" | "right";
  panel?: string;
}) {
  const imageFirst = imageSide === "left";
  return (
    <section className={`border-b border-line ${panel}`}>
      <div className="shell grid items-center gap-10 py-16 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <Reveal className={imageFirst ? "lg:order-1" : "order-1 lg:order-2"}>
          <div className="relative aspect-[3/2] w-full overflow-hidden border border-line">
            <Image
              src={image}
              alt={alt}
              fill
              sizes="(max-width: 1024px) 100vw, 46vw"
              className="object-cover object-center"
            />
          </div>
        </Reveal>
        <Reveal
          delay={0.12}
          className={imageFirst ? "lg:order-2 lg:pl-4" : "order-2 lg:order-1 lg:pr-4"}
        >
          <p className="label text-[0.6rem] text-gold">{eyebrow}</p>
          <h2 className="display mt-5 text-3xl leading-tight text-ink sm:text-4xl">{title}</h2>
          <span className="mt-6 block h-px w-14 bg-gold" />
          <div className="mt-7 max-w-md space-y-4 text-[0.97rem] leading-7 text-mist">{children}</div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomeAtelierPage() {
  return (
    <>
      {/* Hero */}
      <section className="border-b border-line">
        <div className="shell grid min-h-[88svh] items-center gap-10 pb-16 pt-32 lg:grid-cols-[1.02fr_1.2fr] lg:gap-16">
          <Reveal>
            <p className="label text-gold">The Home Atelier</p>
            <h1 className="display mt-6 text-[2.7rem] leading-[1.04] text-ink sm:text-6xl lg:text-[4.2rem]">
              The House Comes{" "}
              <em className="font-display italic text-gold">to You</em>
            </h1>
            <p className="mt-7 max-w-md text-[0.98rem] leading-7 text-mist">
              Private jewellery consultations, where the showroom is your home.
            </p>
            <a href="#book" className="btn-gold mt-10 inline-flex">
              Book an Atelier
            </a>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-line">
              <Image
                src={images.atelierHero}
                alt="A House of Darya jewellery box opened at home"
                fill
                priority
                sizes="(max-width: 1024px) 100vw, 55vw"
                className="object-cover object-center"
              />
            </div>
          </Reveal>
        </div>
      </section>

      <EditorialRow
        eyebrow="Before We Arrive"
        title={
          <>
            A conversation <br className="hidden sm:block" /> before a collection.
          </>
        }
        image={images.atelierConversation}
        alt="A consultant showing designs to a couple at home"
        imageSide="right"
        panel="bg-canvas"
      >
        <p>
          We take the time to understand the occasion, your style, your preferences and what matters
          most to you.
        </p>
        <p>So we can curate a selection that already feels close to you.</p>
      </EditorialRow>

      <EditorialRow
        eyebrow="What We Bring"
        title="Everything a showroom has. Except the showroom."
        image={images.atelierShowroom}
        alt="A tray of solitaire rings and loose certified diamonds"
        imageSide="left"
        panel="bg-veil/50"
      >
        <p>
          Thousands of designs. Certified diamonds. Precious metal samples. And the guidance of your
          dedicated design consultant. All brought to you.
        </p>
      </EditorialRow>

      <EditorialRow
        eyebrow="Made to be Shared"
        title="Some jewellery deserves witnesses."
        image={images.atelierFamily}
        alt="A family choosing a piece together at home"
        imageSide="right"
        panel="bg-canvas"
      >
        <p>
          The Home Atelier lets the people who matter be part of the decision. Because the best
          jewellery is never chosen alone.
        </p>
      </EditorialRow>

      {/* The Journey */}
      <section className="border-y border-line bg-veil/60">
        <div className="shell py-20 lg:py-24">
          <Reveal className="text-center">
            <p className="label text-gold">The Journey</p>
          </Reveal>
          <div className="mt-14 grid gap-x-6 gap-y-12 sm:grid-cols-2 lg:grid-cols-5">
            {journey.map((item, i) => (
              <Reveal key={item.n} delay={i * 0.08} className="text-center lg:text-left">
                <span className="font-display text-3xl italic text-gold">{item.n}.</span>
                <h3 className="display mt-3 text-xl text-ink">{item.step}</h3>
                <p className="mx-auto mt-2 max-w-[15rem] text-sm leading-6 text-mist lg:mx-0">
                  {item.text}
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="book" className="scroll-mt-24">
        <div className="shell grid gap-14 py-20 lg:grid-cols-[1fr_1.15fr] lg:gap-20 lg:py-24">
          <Reveal>
            <p className="label text-gold">Your Time, Our Privilege</p>
            <h2 className="display mt-5 text-3xl text-ink sm:text-4xl lg:leading-[1.15]">
              Choose a day. <em className="italic text-gold">We&rsquo;ll bring the house.</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-mist">
              Complimentary. Private. One hour. No obligation. Share your details and our concierge
              will confirm your visit.
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
            <div className="mt-8 flex flex-wrap gap-x-8 gap-y-3">
              {["Complimentary", "Private", "One Hour", "No Obligation"].map((t) => (
                <span key={t} className="label text-[0.58rem] text-mist">
                  {t}
                </span>
              ))}
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-line bg-card p-4 sm:p-6">
              <CalBooking />
            </div>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-veil/60">
        <div className="shell py-14 text-center">
          <Reveal>
            <p className="font-display text-xl italic text-mist">
              Outside {site.city}?{" "}
              <Link href="/consultation" className="text-gold underline-offset-4 hover:underline">
                Request a private consultation
              </Link>{" "}
              and we will find a way to bring Darya to you.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
