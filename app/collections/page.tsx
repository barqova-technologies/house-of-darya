import type { Metadata } from "next";
import Link from "next/link";
import { CollectionCard } from "@/components/CollectionCard";
import { Reveal } from "@/components/Reveal";
import { SectionHeading } from "@/components/SectionHeading";
import { collectionParents, getCollectionsByParent } from "@/lib/products";

export const metadata: Metadata = {
  title: "Collections - Made-to-Order Rings & Earrings",
  description:
    "Explore House of Darya's made-to-order collections. Rings: Modern & Elegant, Classic & Designer, Statement and Engagement. Earrings: Studs and Signature. Every design customizable, every piece crafted for you.",
};

export default function CollectionsPage() {
  return (
    <>
      <section className="shell pb-14 pt-24 lg:pt-28">
        <SectionHeading
          eyebrow="The Collections"
          title="Pieces our clients have crafted"
          intro="Curated into collections inspired by the intentions behind the people who first crafted them. Take inspiration from what feels like you, then make it your own."
        />
      </section>
      <section className="shell pb-24 lg:pb-32">
        {collectionParents.map((parent, p) => (
          <div key={parent} className={p > 0 ? "mt-20 border-t border-line pt-16" : ""}>
            <Reveal className="flex items-baseline justify-between gap-4">
              <h2 className="display text-3xl text-ink sm:text-4xl">{parent}</h2>
              <span className="label text-[0.6rem] text-gold">
                {getCollectionsByParent(parent).length} collections
              </span>
            </Reveal>
            <div className="mt-8 grid gap-5 sm:grid-cols-2">
              {getCollectionsByParent(parent).map((collection, i) => (
                <Reveal key={collection.slug} delay={i * 0.08}>
                  <CollectionCard collection={collection} />
                  <p className="mx-auto mt-5 max-w-md text-center text-sm leading-6 text-mist">
                    {collection.description}
                  </p>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
        <Reveal className="mt-20 text-center">
          <p className="font-display text-xl italic text-mist">
            Want to start your own journey of crafting your dream jewellery at home?{" "}
            <Link href="/home-atelier" className="text-gold underline-offset-4 hover:underline">
              The Home Atelier brings thousands of design inspirations to you.
            </Link>
          </p>
        </Reveal>
      </section>
    </>
  );
}
