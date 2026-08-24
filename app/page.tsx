import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { TrustMarks } from "@/components/TrustMarks";
import { SectionHeading } from "@/components/SectionHeading";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { EditorialImage } from "@/components/EditorialImage";
import { products } from "@/lib/products";
import { getGoldRate } from "@/lib/goldRate";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const pillars = [
  { title: "It begins with thought.", note: "Not inventory." },
  { title: "It begins with a person.", note: "Not a showcase." },
  { title: "It begins with meaning.", note: "Not a trend." },
  { title: "It begins with a conversation.", note: "Not mindless recommendation." },
];

const transparency = [
  {
    title: "Every stone, certified",
    text: "Natural or lab-grown, each diamond arrives with its own IGI certificate. You see the grading before it is set.",
  },
  {
    title: "Itemised pricing",
    text: "Stone, metal and making charge are shown separately, so you know exactly what you are paying for and why.",
  },
  {
    title: "Nothing hidden",
    text: "No inflated MRPs, no showroom mark-up, no pressure. The price you are quoted is the price you pay.",
  },
];

const atelierPoints = [
  "Try 9,000+ designs in the comfort of your home",
  "Compare, swap and try stone shapes & sizes to suit your style",
  "Enjoy the process of crafting your ring with the insights of your loved ones",
  "Design your piece with guidance, never pressure",
];

const featured = ["florence", "sophia", "viola", "cascading-hoops"];

export default async function HomePage() {
  const goldRate = await getGoldRate();
  return (
    <>
      <HomeHero />

      <section className="border-y border-line">
        <div className="shell py-14 lg:py-16">
          <TrustMarks />
        </div>
      </section>

      <section className="bg-night">
        <div className="shell-wide grid items-center gap-14 py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-20 lg:py-24">
          <div>
            <EditorialImage
              src={images.atelierLifestyle}
              alt="A Home Atelier consultation"
              sizes="(max-width: 1024px) 100vw, 55vw"
              aspect="aspect-[4/3]"
            />
            <div className="ml-auto mt-5 w-[78%] sm:w-[66%]">
              <EditorialImage
                src={images.atelierTray}
                alt="A curated tray of solitaire designs"
                sizes="(max-width: 1024px) 78vw, 36vw"
                aspect="aspect-[4/3]"
                delay={0.12}
              />
            </div>
          </div>
          <Reveal delay={0.15}>
            <p className="label text-white/70">The Home Atelier · Launching in {site.city}</p>
            <h2 className="display mt-5 text-3xl text-white sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
              The atelier comes to you
            </h2>
            <span className="mt-7 block h-px w-14 bg-white/40" />
            <p className="mt-7 text-[0.95rem] leading-7 text-white/75">
              No showroom lighting. No glass between you and the jewellery. Our consultants arrive
              at your home with over 9,000 solitaire ring and earring designs with a unique
              &ldquo;build yourself&rdquo; experience, so you can see, wear and weigh every option at
              your own pace, along with the people that matter.
            </p>
            <ul className="mt-10 border-t border-white/15">
              {atelierPoints.map((line, i) => (
                <li
                  key={line}
                  className="flex gap-5 border-b border-white/15 py-4 text-sm leading-6 text-white/90"
                >
                  <span className="font-display text-lg italic leading-6 text-white/45">
                    {`0${i + 1}`}
                  </span>
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/home-atelier#book" className="btn bg-canvas text-night hover:bg-white">
                Book Home Atelier
              </Link>
              <Link
                href="/home-atelier"
                className="btn border border-white/40 text-white transition-colors hover:border-white"
              >
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="py-20 lg:py-24">
        <div className="shell-wide grid items-center gap-14 lg:grid-cols-[1fr_1.15fr] lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="label text-gold">Customization</p>
            <h2 className="display mt-5 text-3xl text-ink sm:text-4xl lg:text-[3rem] lg:leading-[1.1]">
              Designed in conversation, <em className="italic text-gold">never from a shelf</em>
            </h2>
            <span className="mt-7 block h-px w-14 bg-gold" />
            <p className="mt-7 text-[0.95rem] leading-7 text-mist">
              True luxury lies in the details. From your choice of natural or lab-grown diamonds and
              gemstones to the metal, purity and every characteristic of your stone, each element is
              selected with intention. Then make it truly personal with hidden or celebrated
              birthstones, meaningful engravings, and bespoke touches that tell your story.
            </p>
            <div className="mt-8 grid grid-cols-2 gap-px bg-line sm:grid-cols-3">
              {["Stone", "Metal", "Carat", "Colour", "Birthstone", "Inscription"].map((item) => (
                <div key={item} className="bg-canvas px-4 py-4 text-center">
                  <span className="text-[0.65rem] uppercase tracking-[0.2em] text-mist">{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10">
              <Link href="/customise" className="btn-gold">
                Start Online Customization
              </Link>
            </div>
          </Reveal>
          <EditorialImage
            src={images.customiseEditorial}
            alt="Customizing a House of Darya design"
            sizes="(max-width: 1024px) 100vw, 55vw"
            aspect="aspect-[4/3]"
            delay={0.15}
            className="order-1 lg:order-2"
          />
        </div>

        <div className="shell">
          <Reveal className="mt-20 border-t border-line pt-14">
            <p className="label text-gold">Crafted with complete transparency</p>
            <h3 className="display mt-4 max-w-2xl text-2xl text-ink sm:text-3xl">
              Transparency, and exactly what we mean by it
            </h3>
            <div className="mt-10 grid gap-8 sm:grid-cols-3">
              {transparency.map((item) => (
                <div key={item.title}>
                  <span className="block h-px w-10 bg-gold" />
                  <h4 className="display mt-5 text-lg text-ink">{item.title}</h4>
                  <p className="mt-2 text-sm leading-6 text-mist">{item.text}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      <section className="bg-night">
        <div className="shell py-24 lg:py-32">
          <Reveal className="mx-auto max-w-3xl text-center">
            <p className="label text-white/70">The DARYA Philosophy</p>
            <h2 className="display mt-5 text-3xl text-white sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Jewellery marks your moment, and <em className="italic">you</em> deserve a little more
              thought
            </h2>
            <div className="mt-8 space-y-4 text-[0.95rem] leading-7 text-white/75">
              <p>
                The most meaningful jewellery has never been about the diamond. It has always been
                about the thought behind it.
              </p>
              <p>
                That&rsquo;s why every House of Darya piece is made to order. Because something
                created with intention will always mean more than something chosen in a hurry.
              </p>
            </div>
          </Reveal>
          <div className="mt-16 grid gap-10 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {pillars.map((pillar, i) => (
              <Reveal key={pillar.title} delay={i * 0.1}>
                <div>
                  <span className="font-display text-3xl italic text-white/60">{`0${i + 1}`}</span>
                  <h3 className="display mt-4 text-xl text-white">{pillar.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/65">{pillar.note}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <SectionHeading
          eyebrow="Signature Designs"
          title="Pieces our clients have crafted"
          intro="Curated into collections inspired by the intentions behind the people who first crafted them."
        />
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {featured.map((slug, i) => {
            const product = products.find((p) => p.slug === slug)!;
            return (
              <Reveal key={slug} delay={i * 0.08}>
                <ProductCard product={product} goldRate={goldRate} />
              </Reveal>
            );
          })}
        </div>
        <div className="mt-14 text-center">
          <Link href="/collections" className="btn-line">
            View All Collections
          </Link>
        </div>
      </section>

      <section className="bg-night">
        <div className="shell py-24 text-center lg:py-32">
          <Reveal>
            <p className="label text-white/70">Begin at Home</p>
            <h2 className="display mx-auto mt-5 max-w-2xl text-3xl text-white sm:text-4xl lg:text-5xl">
              The most personal jewellery decision deserves the most personal setting
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-7 text-white/70">
              Invite the atelier home. Try 9,000+ designs, meet your consultant, and begin a piece
              that exists nowhere else in the world.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/home-atelier#book" className="btn bg-canvas text-night hover:bg-white">
                Book Home Atelier
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-white/40 text-white transition-colors hover:border-white"
              >
                WhatsApp the Atelier
              </a>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}
