import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ProductCard } from "@/components/ProductCard";
import { Reveal } from "@/components/Reveal";
import { collections, getCollection, getProductsByCollection } from "@/lib/products";
import { getGoldRate, getSilverRate } from "@/lib/goldRate";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return collections.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const collection = getCollection((await params).slug);
  if (!collection) return {};
  return {
    title: `${collection.name} - ${collection.parent}`,
    description: collection.description,
  };
}

export default async function CollectionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const collection = getCollection((await params).slug);
  if (!collection) notFound();
  const items = getProductsByCollection(collection.slug);
  const goldRate = await getGoldRate();
  const silverRate = await getSilverRate();

  return (
    <>
      <section className="shell pb-14 pt-24 lg:pt-28">
        <Reveal className="mx-auto max-w-2xl text-center">
          <nav className="label flex items-center justify-center gap-3 text-[0.6rem] text-mist">
            <Link href="/collections" className="transition-colors hover:text-gold">
              Collections
            </Link>
            <span className="text-gold">·</span>
            <span className="text-mist">{collection.parent}</span>
            <span className="text-gold">·</span>
            <span className="text-gold">{collection.name}</span>
          </nav>
          <h1 className="display mt-6 text-4xl text-ink sm:text-5xl">{collection.name}</h1>
          <p className="mt-3 label text-[0.62rem] text-gold">{collection.subtext}</p>
          <p className="mt-5 text-[0.95rem] leading-7 text-mist">{collection.description}</p>
        </Reveal>
      </section>
      <section className="shell pb-24 lg:pb-32">
        {items.length > 0 ? (
          <div className="grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-4">
            {items.map((product, i) => (
              <Reveal key={product.slug} delay={(i % 4) * 0.07}>
                <ProductCard product={product} priority={i < 4} goldRate={goldRate} silverRate={silverRate} />
              </Reveal>
            ))}
          </div>
        ) : (
          <Reveal className="mx-auto max-w-lg border border-line bg-card px-8 py-16 text-center">
            <p className="label text-gold">Photography in progress</p>
            <h2 className="display mt-4 text-2xl text-ink sm:text-3xl">
              This collection is being made
            </h2>
            <p className="mx-auto mt-4 max-w-sm text-sm leading-6 text-mist">
              Every {collection.name} piece is made to order. The full range is available to see and
              try now at the Home Atelier, while photography is finalised for the site.
            </p>
            <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Link href="/home-atelier#book" className="btn-gold">
                See It at the Atelier
              </Link>
              <Link href="/customise" className="btn-line">
                Customise a Design
              </Link>
            </div>
          </Reveal>
        )}
        <Reveal className="mt-20 border-t border-line pt-14 text-center">
          <p className="label text-gold">Beyond this page</p>
          <h2 className="display mx-auto mt-4 max-w-xl text-2xl text-ink sm:text-3xl">
            These are beginnings. The Home Atelier holds 9,000+ more.
          </h2>
          <p className="mx-auto mt-4 max-w-md text-sm leading-6 text-mist">
            Every design here can be tried at home in {site.city}, alongside thousands that never
            appear online.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <Link href="/home-atelier#book" className="btn-gold">
              Book Home Atelier
            </Link>
            <Link href="/customise" className="btn-line">
              Customise a Design
            </Link>
          </div>
        </Reveal>
      </section>
    </>
  );
}
