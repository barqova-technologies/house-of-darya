import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Reveal } from "@/components/Reveal";
import { ProductCard } from "@/components/ProductCard";
import { ProductGallery } from "@/components/ProductGallery";
import { PriceBreakdown } from "@/components/PriceBreakdown";
import { EnquiryForm } from "@/components/EnquiryForm";
import {
  formatRange,
  getCollection,
  getProduct,
  getProductsByCollection,
  products,
} from "@/lib/products";
import { site } from "@/lib/site";

export function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const product = getProduct((await params).slug);
  if (!product) return {};
  return {
    title: `${product.name} - ${product.style}`,
    description: product.description,
  };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const product = getProduct((await params).slug);
  if (!product) notFound();
  const collection = getCollection(product.collection)!;
  const related = getProductsByCollection(product.collection)
    .filter((p) => p.slug !== product.slug)
    .slice(0, 3);

  return (
    <>
      <section className="shell grid gap-12 pb-24 pt-32 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:pt-40">
        <ProductGallery product={product} />

        <div className="lg:sticky lg:top-28 lg:self-start">
          <Reveal>
            <nav className="label flex flex-wrap items-center gap-3 text-[0.6rem] text-mist">
              <Link href="/collections" className="transition-colors hover:text-gold">
                Collections
              </Link>
              <span className="text-gold">·</span>
              <Link
                href={`/collections/${collection.slug}`}
                className="transition-colors hover:text-gold"
              >
                {collection.name}
              </Link>
            </nav>
            <h1 className="display mt-5 text-4xl text-ink sm:text-5xl">{product.name}</h1>
            <p className="mt-2 text-[0.72rem] uppercase tracking-[0.22em] text-mist">
              {product.style}
            </p>
            <div className="mt-7 border-y border-line py-5">
              <p className="label text-[0.6rem] text-gold">Indicative Range</p>
              <p className="display mt-2 text-2xl text-ink">
                {formatRange(product.priceFrom, product.priceTo)}
              </p>
              <p className="mt-2 text-xs leading-5 text-mist">
                Varies with stone, carat and metal, confirmed at your consultation, never before.
              </p>
            </div>
            <div className="mt-9 flex flex-col gap-4">
              <Link href="/home-atelier#book" className="btn-gold w-full">
                See It at Home · Book the Atelier
              </Link>
              <div className="grid grid-cols-2 gap-4">
                <Link href={`/customise?design=${product.slug}`} className="btn-line">
                  Customise
                </Link>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-line"
                >
                  WhatsApp
                </a>
              </div>
            </div>
            <p className="mt-7 flex flex-wrap gap-x-5 gap-y-2 text-[0.6rem] uppercase tracking-[0.18em] text-mist">
              <span>Made-to-Order</span>
              <span>HUID Hallmarked</span>
              <span>IGI Certified</span>
            </p>
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line">
        <div className="shell grid gap-12 py-20 lg:grid-cols-[1.1fr_1fr] lg:gap-20 lg:py-24">
          <Reveal>
            <p className="label text-gold">The Design</p>
            <p className="mt-5 max-w-xl text-[0.98rem] leading-7 text-ink">{product.story}</p>
            <dl className="mt-9 space-y-4 border-t border-line pt-8">
              {product.details.map((detail) => (
                <div key={detail.label} className="flex gap-4 text-sm">
                  <dt className="label mt-0.5 w-32 shrink-0 text-[0.58rem] text-gold">
                    {detail.label}
                  </dt>
                  <dd className="text-ink">{detail.value}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
          <Reveal delay={0.12} className="lg:pt-8">
            <PriceBreakdown product={product} />
          </Reveal>
        </div>
      </section>

      <section className="border-t border-line bg-veil/60">
        <div className="shell grid gap-12 py-24 lg:grid-cols-2 lg:gap-20">
          <Reveal>
            <p className="label text-gold">Enquire About {product.name}</p>
            <h2 className="display mt-4 text-3xl text-ink sm:text-4xl">
              Begin with this design
            </h2>
            <p className="mt-5 max-w-md text-[0.95rem] leading-7 text-mist">
              Tell us you are drawn to the {product.name} and our consultants will bring it, and
              everything you might compare it against, to your home in {site.city}, or walk you
              through it on a call.
            </p>
          </Reveal>
          <Reveal delay={0.15}>
            <div className="border border-line bg-card p-7 sm:p-10">
              <EnquiryForm type="product" context={`${product.name} - ${product.style} (${product.slug})`} />
            </div>
          </Reveal>
        </div>
      </section>

      {related.length > 0 && (
        <section className="shell py-24 lg:py-30">
          <Reveal className="text-center">
            <p className="label text-gold">From {collection.name}</p>
            <h2 className="display mt-4 text-3xl text-ink">You may also love</h2>
          </Reveal>
          <div className="mt-12 grid grid-cols-2 gap-x-5 gap-y-12 lg:grid-cols-3">
            {related.map((p, i) => (
              <Reveal key={p.slug} delay={i * 0.08}>
                <ProductCard product={p} />
              </Reveal>
            ))}
          </div>
        </section>
      )}
    </>
  );
}
