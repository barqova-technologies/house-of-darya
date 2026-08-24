import type { Metadata } from "next";
import Link from "next/link";
import { Reveal } from "@/components/Reveal";
import { EditorialImage } from "@/components/EditorialImage";
import { CalBooking } from "@/components/CalBooking";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Home Atelier - The House Comes To You",
  description:
    "House of Darya's Home Atelier brings thousands of designs, certified diamonds and expert guidance to your home. Private, complimentary, by appointment. Book your visit.",
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
  imageAspect,
  panel = "bg-canvas",
}: {
  eyebrow: string;
  title: React.ReactNode;
  children: React.ReactNode;
  image: string;
  alt: string;
  imageSide: "left" | "right";
  imageAspect: string;
  panel?: string;
}) {
  const imageFirst = imageSide === "left";
  const gridCols = imageFirst ? "lg:grid-cols-[1.15fr_1fr]" : "lg:grid-cols-[1fr_1.15fr]";

  return (
    <section className={panel}>
      <div className={`shell-wide grid items-center gap-10 py-14 lg:gap-16 lg:py-20 ${gridCols}`}>
        <EditorialImage
          src={image}
          alt={alt}
          sizes="(max-width: 1024px) 100vw, 55vw"
          aspect={imageAspect}
          className={imageFirst ? "lg:order-1" : "order-1 lg:order-2"}
        />
        <Reveal
          delay={0.12}
          className={imageFirst ? "lg:order-2 lg:pl-6" : "order-2 lg:order-1 lg:pr-6"}
        >
          <p className="label text-[0.6rem] text-gold">{eyebrow}</p>
          <h2 className="display mt-5 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
            {title}
          </h2>
          <span className="mt-7 block h-px w-14 bg-gold" />
          <div className="mt-7 max-w-md space-y-4 text-[0.97rem] leading-7 text-mist">
            {children}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export default function HomeAtelierPage() {
  return (
    <>
      <section className="bg-veil/60">
        <div className="shell-wide pb-14 pt-32 lg:pb-20 lg:pt-40">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="label text-gold">The Home Atelier</p>
            <h1 className="display mt-6 text-[2.5rem] leading-[1.02] text-ink sm:text-6xl lg:text-[4rem] xl:text-[4.75rem]">
              The House Comes{" "}
              <em className="font-display italic text-gold">to You</em>
            </h1>
            <p className="mx-auto mt-7 max-w-md text-[0.98rem] leading-7 text-mist">
              Private jewellery consultations, where the showroom is your home.
            </p>
            <a href="#book" className="btn-gold mt-9 inline-flex">
              Book an Atelier
            </a>
          </Reveal>
          <div className="mx-auto mt-14 max-w-6xl lg:mt-16">
            <EditorialImage
              src={images.atelierHero}
              alt="A House of Darya jewellery box opened at home"
              sizes="(max-width: 1152px) 100vw, 1152px"
              aspect="aspect-[3/2]"
              priority
              trigger="mount"
              delay={0.25}
            />
          </div>
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
        imageAspect="aspect-[3/2]"
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
        imageAspect="aspect-[3/2]"
        panel="bg-veil/60"
      >
        <p>
          Thousands of designs. Certified diamonds. Precious metal samples. And the guidance of your
          dedicated design consultant. All brought to you.
        </p>
      </EditorialRow>

      <section className="bg-canvas">
        <div className="shell-wide py-14 lg:py-20">
          <EditorialImage
            src={images.atelierFamily}
            alt="A family choosing a piece together at home"
            sizes="100vw"
            aspect="aspect-[2/1]"
          />
          <div className="mt-10 grid gap-8 lg:mt-12 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <p className="label text-[0.6rem] text-gold">Made to be Shared</p>
              <h2 className="display mt-5 text-3xl leading-tight text-ink sm:text-4xl lg:text-[2.6rem]">
                Some jewellery deserves witnesses.
              </h2>
            </Reveal>
            <Reveal delay={0.12} className="lg:pt-3">
              <span className="block h-px w-14 bg-gold" />
              <p className="mt-7 max-w-md text-[0.97rem] leading-7 text-mist">
                The Home Atelier lets the people who matter be part of the decision. Because the
                best jewellery is never chosen alone.
              </p>
            </Reveal>
          </div>
        </div>
      </section>

      <section className="border-y border-line bg-veil/60">
        <div className="shell-wide py-14 lg:py-20">
          <Reveal>
            <p className="label text-gold">The Journey</p>
          </Reveal>
          <div className="mt-12 grid gap-y-10 sm:grid-cols-2 sm:gap-x-10 md:grid-cols-3 lg:grid-cols-5 lg:gap-x-0">
            {journey.map((item, i) => (
              <Reveal
                key={item.n}
                delay={i * 0.08}
                className="lg:border-l lg:border-line lg:pl-6 lg:first:border-l-0 lg:first:pl-0"
              >
                <span className="font-display text-5xl italic leading-none text-gold">
                  {item.n}
                </span>
                <h3 className="display mt-5 text-xl text-ink">{item.step}</h3>
                <p className="mt-2 max-w-[15rem] text-sm leading-6 text-mist">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section id="book" className="scroll-mt-24 bg-canvas">
        <div className="shell-wide grid gap-10 py-14 lg:grid-cols-[0.85fr_1.45fr] lg:gap-14 lg:py-20">
          <Reveal>
            <p className="label text-gold">Your Time, Our Privilege</p>
            <h2 className="display mt-5 text-3xl text-ink sm:text-4xl lg:leading-[1.15]">
              Choose a day. <em className="italic text-gold">We&rsquo;ll bring the house.</em>
            </h2>
            <p className="mt-6 max-w-md text-[0.95rem] leading-7 text-mist">
              Complimentary. Private. No obligation. Share your details and our concierge will
              confirm your visit.
            </p>
            <div className="mt-8 space-y-5 border-t border-line pt-7 text-sm text-mist">
              <p className="flex gap-4">
                <span className="label mt-0.5 w-16 shrink-0 text-[0.58rem] text-gold sm:w-24">
                  Where
                </span>
                Launching across {site.city}
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-16 shrink-0 text-[0.58rem] text-gold sm:w-24">
                  When
                </span>
                Seven days a week, 11am – 9pm, by appointment
              </p>
              <p className="flex gap-4">
                <span className="label mt-0.5 w-16 shrink-0 text-[0.58rem] text-gold sm:w-24">
                  Cost
                </span>
                Complimentary, always, with no obligation to commission
              </p>
            </div>
            <div className="mt-7 flex flex-wrap gap-x-8 gap-y-3">
              {["Complimentary", "Private", "No Obligation"].map((t) => (
                <span key={t} className="label text-[0.58rem] text-mist">
                  {t}
                </span>
              ))}
            </div>
            <p className="mt-7 border-t border-line pt-6 font-display text-lg italic text-mist">
              Outside {site.city}?{" "}
              <Link href="/consultation" className="text-gold underline-offset-4 hover:underline">
                Request a private consultation
              </Link>{" "}
              and we will find a way to bring Darya to you.
            </p>
          </Reveal>
          <Reveal delay={0.15} className="lg:self-start">
            <CalBooking />
          </Reveal>
        </div>
      </section>
    </>
  );
}
