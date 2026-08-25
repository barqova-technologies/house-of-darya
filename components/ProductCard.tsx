import Image from "next/image";
import Link from "next/link";
import type { Product } from "@/lib/products";
import { formatPrice, productHover, productImage, productPriceRange } from "@/lib/products";

export function ProductCard({
  product,
  priority = false,
  goldRate,
  silverRate,
}: {
  product: Product;
  priority?: boolean;
  goldRate?: number;
  silverRate?: number;
}) {
  return (
    <Link href={`/jewellery/${product.slug}`} className="group block">
      <div className="relative aspect-square overflow-hidden bg-veil">
        <Image
          src={productImage(product)}
          alt={`${product.name} - ${product.style}`}
          fill
          priority={priority}
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-0"
        />
        <Image
          src={productHover(product)}
          alt=""
          fill
          sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
          className="object-cover opacity-0 transition-all duration-700 ease-out group-hover:scale-[1.04] group-hover:opacity-100"
        />
      </div>
      <div className="pt-5 text-center">
        <h3 className="display text-xl text-ink transition-colors duration-300 group-hover:text-gold">
          {product.name}
        </h3>
        <p className="mt-1 text-[0.72rem] uppercase tracking-[0.18em] text-mist">{product.style}</p>
        <p className="mt-2 text-sm text-gold">From {formatPrice(productPriceRange(product, goldRate, silverRate).from)}</p>
      </div>
    </Link>
  );
}
