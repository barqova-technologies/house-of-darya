import Image from "next/image";
import Link from "next/link";
import { HomeHero } from "@/components/HomeHero";
import { TrustMarks } from "@/components/TrustMarks";
import { SectionHeading } from "@/components/SectionHeading";
import { CollectionCard } from "@/components/CollectionCard";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { collections, products } from "@/lib/products";
import { images } from "@/lib/images";
import { site } from "@/lib/site";

const processSteps = [
  {
    title: "Discover",
    text: "Explore our collections online or let a consultant curate designs around your taste, occasion and budget conversation.",
  },
  {
    title: "Try at Home",
    text: "Our Home Atelier brings 9,000+ solitaire ring and earring designs to your home in Lucknow, so you see everything in your own light.",
  },
  {
    title: "Design Together",
    text: "Choose your stone, metal, setting and the details only you will know: a hidden birthstone, an inscription inside the band.",
  },
  {
    title: "Crafted for You",
    text: "Your piece is made to order, HUID hallmarked, and set with IGI certified diamonds and gemstones before it reaches you.",
  },
];

const featured = ["ava", "olympus", "eve", "iris-round-studs"];

export default function HomePage() {
  return (
    <>
      <HomeHero />

      <section className="border-y border-line">
        <div className="shell py-14 lg:py-16">
          <TrustMarks />
        </div>
      </section>

      <section className="bg-veil/60">
        <div className="shell grid items-center gap-12 py-24 lg:grid-cols-2 lg:gap-20 lg:py-32">
          <Reveal>
            <div className="relative">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={images.atelierLifestyle}
                  alt="A Home Atelier consultation"
                  fill
                  sizes="(max-width: 1024px) 100vw, 48vw"
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-8 -right-6 hidden w-48 overflow-hidden border-4 border-veil sm:block lg:-right-10 lg:w-60">
                <div className="relative aspect-[4/3]">
                  <Image
                    src={images.atelierTray}
                    alt="A curated tray of solitaire designs"
                    fill
                    sizes="240px"
                    className="object-cover"
                  />
                </div>
              </div>
            </div>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="label text-gold">The Home Atelier · Only in {site.city}</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              The atelier comes to you
            </h2>
            <p className="mt-6 text-[0.95rem] leading-7 text-mist">
              No showroom lighting. No glass between you and the jewellery. Our consultants arrive
              at your home with over 9,000 solitaire ring and earring designs, loose certified
              stones and metal samples, so you can see, wear and weigh every option at your own
              pace, in your own light.
            </p>
            <ul className="mt-8 space-y-4">
              {[
                "Try 9,000+ designs in the comfort of your home",
                "A personal consultation with a House of Darya design expert",
                "Compare certified natural and lab-grown diamonds side by side",
                "Design your piece with guidance, never pressure",
              ].map((line) => (
                <li key={line} className="flex gap-4 text-sm leading-6 text-ink">
                  <span className="mt-2.5 h-px w-6 shrink-0 bg-gold" />
                  {line}
                </li>
              ))}
            </ul>
            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link href="/home-atelier" className="btn-gold">
                Book Home Atelier
              </Link>
              <Link href="/home-atelier" className="btn-line">
                How it works
              </Link>
            </div>
          </Reveal>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-20">
          <Reveal className="order-2 lg:order-1">
            <p className="label text-gold">Customization</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl lg:text-[2.75rem] lg:leading-[1.15]">
              Designed in conversation, <em className="italic text-gold">never from a shelf</em>
            </h2>
            <p className="mt-6 text-[0.95rem] leading-7 text-mist">
              Choose your stone: an IGI certified natural diamond, lab-grown diamond or gemstone.
              Add your metal, karat and carat weight, and the colour and clarity that suit you. Then
              make it secretly yours with a hidden birthstone and an inscription only you will read.
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
          <Reveal delay={0.15} className="order-1 lg:order-2">
            <div className="relative aspect-[4/5] overflow-hidden">
              <Image
                src={images.customiseEditorial}
                alt="Customizing a House of Darya design"
                fill
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
            eyebrow="The Darya Way"
            title="From first glance to forever"
            intro="A made-to-order house works differently. Nothing is pre-made, nothing is compromised. Every step happens with you."
          />
          <div className="mt-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
            {processSteps.map((step, i) => (
              <Reveal key={step.title} delay={i * 0.1}>
                <div className="text-center">
                  <span className="font-display text-4xl italic text-gold">{`0${i + 1}`}</span>
                  <h3 className="display mt-4 text-xl text-ink">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-mist">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="shell py-24 lg:py-32">
        <SectionHeading
          eyebrow="Signature Designs"
          title="Pieces our clients begin with"
          intro="Each one a starting point: see it at home, then make it entirely yours."
        />
        <div className="mt-14 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
          {featured.map((slug, i) => {
            const product = products.find((p) => p.slug === slug)!;
            return (
              <Reveal key={slug} delay={i * 0.08}>
                <ProductCard product={product} />
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
            <p className="label text-gold-soft">Begin at Home</p>
            <h2 className="display mx-auto mt-5 max-w-2xl text-3xl text-[#ece4d6] sm:text-4xl lg:text-5xl">
              The most personal jewellery decision deserves the most personal setting
            </h2>
            <p className="mx-auto mt-6 max-w-xl text-[0.95rem] leading-7 text-[#a89a86]">
              Invite the atelier home. Try 9,000+ designs, meet your consultant, and begin a piece
              that exists nowhere else in the world.
            </p>
            <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/home-atelier#book" className="btn bg-gold-soft text-canvas hover:bg-gold">
                Book Home Atelier
              </Link>
              <a
                href={site.whatsapp}
                target="_blank"
                rel="noopener noreferrer"
                className="btn border border-[#a89a86]/40 text-[#ece4d6] hover:border-gold-soft hover:text-gold-soft"
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
