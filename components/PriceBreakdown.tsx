import Image from "next/image";
import { formatRange, productImage, type Product } from "@/lib/products";

const rows = [
  { label: "Metal & making", note: "Gold / silver, HUID hallmarked", value: "Included" },
  { label: "Centre stone", note: "IGI certified diamond or gemstone", value: "By carat, colour & clarity" },
  { label: "Certification & taxes", note: "IGI grading · BIS HUID · GST", value: "Included" },
];

export function PriceBreakdown({ product }: { product: Product }) {
  return (
    <div className="border border-line bg-card p-6 sm:p-7">
      <div className="flex items-center gap-5">
        <div className="relative aspect-square w-24 shrink-0 overflow-hidden border border-line bg-veil">
          <Image
            src={productImage(product)}
            alt={product.name}
            fill
            sizes="96px"
            className="object-cover"
          />
        </div>
        <div>
          <p className="label text-[0.58rem] text-gold">Price Break-up</p>
          <p className="display mt-1 text-lg leading-tight text-ink">{product.name}</p>
          <p className="mt-1 text-[0.7rem] uppercase tracking-[0.16em] text-mist">
            {product.style}
          </p>
        </div>
      </div>

      <ul className="mt-6 divide-y divide-line border-t border-line">
        {rows.map((r) => (
          <li key={r.label} className="flex items-start justify-between gap-6 py-4">
            <div>
              <p className="text-sm text-ink">{r.label}</p>
              <p className="mt-0.5 text-xs leading-5 text-mist">{r.note}</p>
            </div>
            <span className="shrink-0 pt-0.5 text-right text-[0.62rem] uppercase tracking-[0.14em] text-mist">
              {r.value}
            </span>
          </li>
        ))}
      </ul>

      <div className="mt-2 flex items-baseline justify-between gap-6 border-t border-line pt-5">
        <p className="label text-[0.6rem] text-gold">Indicative Total</p>
        <p className="display text-xl text-ink">
          {formatRange(product.priceFrom, product.priceTo)}
        </p>
      </div>
      <p className="mt-3 text-xs leading-5 text-mist">
        A made-to-order range. Your exact price is itemised and confirmed at your consultation,
        against the stone you choose, never before.
      </p>
    </div>
  );
}
