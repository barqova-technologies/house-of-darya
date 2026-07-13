import Image from "next/image";
import Link from "next/link";
import type { Collection } from "@/lib/products";

export function CollectionCard({ collection, tall = false }: { collection: Collection; tall?: boolean }) {
  return (
    <Link href={`/collections/${collection.slug}`} className="group relative block overflow-hidden bg-veil">
      <div className={tall ? "relative aspect-[3/4]" : "relative aspect-[4/5] sm:aspect-square"}>
        <Image
          src={collection.image}
          alt={collection.name}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
          className="object-cover transition-transform duration-[1.2s] ease-out group-hover:scale-[1.06]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-night/90 via-night/45 to-transparent" />
      </div>
      <div className="absolute inset-x-0 bottom-0 p-7 text-center">
        <p className="label text-[0.6rem] text-white/90">{collection.subtext}</p>
        <h3 className="display mt-2 text-2xl text-white">{collection.name}</h3>
        <p className="mt-1 font-display text-sm italic text-white/80">{collection.tagline}</p>
        <span className="mt-4 inline-block border-b border-gold-soft pb-1 text-[0.65rem] uppercase tracking-[0.24em] text-gold-soft opacity-0 transition-all duration-500 group-hover:opacity-100">
          {collection.comingSoon ? "Photography soon" : "Explore"}
        </span>
      </div>
    </Link>
  );
}
