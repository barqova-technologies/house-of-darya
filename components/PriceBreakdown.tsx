import Image from "next/image";
import { formatPrice, formatRange, productImage, productPriceRange, type Product } from "@/lib/products";
import { designBreakdown } from "@/lib/pricing";

export function PriceBreakdown({ product, goldRate }: { product: Product; goldRate?: number }) {
  const range = productPriceRange(product, goldRate);
  const bd = designBreakdown(product.slug, "gold-18k", goldRate);

  const rows = bd
    ? [
        { label: `18kt gold & making (${bd.weight} g)`, value: formatPrice(bd.metal + bd.making) },
        ...(bd.diamond > 0
          ? [{ label: "Certified diamonds", value: formatPrice(bd.diamond) }]
          : []),
        { label: "Certification & hallmarking", value: "Included" },
      ]
    : [
        { label: "Metal & making", value: "Included" },
        { label: "Centre stone", value: "By carat, colour & clarity" },
        { label: "Certification & hallmarking", value: "Included" },
      ];

  return (
    <div className="border border-line bg-card p-6 sm:p-7">
      <div className="flex items-center gap-5">
        <div className="relative aspect-square w-24 shrink-0 overflow-hidden border border-line bg-veil">
          <Image src={productImage(product)} alt={product.name} fill sizes="96px" className="object-cover" />
        </div>
        <div>
          <p className="label text-[0.58rem] text-gold">Price Break-up</p>
          <p className="display mt-1 text-lg leading-tight text-ink">{product.name}</p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-mist">{product.style}</p>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-line border-t border-line">
        {rows.map((r) => (
          <li key={r.label} className="flex items-start justify-between gap-6 py-4">
            <p className="text-sm text-ink">{r.label}</p>
            <span className="shrink-0 pt-0.5 text-right text-sm text-mist">{r.value}</span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-baseline justify-between gap-6 border-t border-line pt-5">
        <p className="label text-[0.6rem] text-gold">Indicative Total</p>
        <p className="display text-xl text-ink">{formatRange(range.from, range.to)}</p>
      </div>
      <p className="mt-3 text-xs leading-5 text-mist">
        Shown in 18kt gold. Range spans 9kt to 18kt gold and 925 silver. Confirmed at your
        consultation against the exact stone you choose.
      </p>
    </div>
  );
}
