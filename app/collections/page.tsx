import type { Metadata } from "next";
import Link from "next/link";
import { CollectionCard } from "@/components/CollectionCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { collections } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collections - Made-to-Order Rings & Studs",
  description:
    "Explore House of Darya's made-to-order collections: Modern & Elegant, Classic & Designer and Statement rings, plus solitaire Studs. Every design customizable, every piece crafted for you.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="shell pb-16 pt-36 lg:pt-44">
        <SectionHeading
          eyebrow="The Collections"
          title="Where your piece begins"
          intro="Four made-to-order collections, each a different temperament. Choose the one that feels like you, then change everything about it."
        />
      </section>
      <section className="shell pb-24 lg:pb-32">
        <div className="grid gap-5 sm:grid-cols-2">
          {collections.map((collection, i) => (
            <Reveal key={collection.slug} delay={i * 0.08}>
              <CollectionCard collection={collection} />
              <p className="mx-auto mt-5 max-w-md text-center text-sm leading-6 text-mist">
                {collection.description}
              </p>
            </Reveal>
          ))}
        </div>
        <Reveal className="mt-20 text-center">
          <p className="font-display text-xl italic text-mist">
            Prefer to see them in person?{" "}
            <Link href="/home-atelier" className="text-gold underline-offset-4 hover:underline">
              The Home Atelier brings all 9,000+ designs to you.
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
