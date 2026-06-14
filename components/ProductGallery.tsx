"use client";

import Image from "next/image";
import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { metalNames, type MetalColor, type Product } from "@/lib/products";

const swatch: Record<MetalColor, string> = {
  yellow: "#d4af6a",
  white: "#d9d9d9",
  rose: "#e0a87f",
};

export function ProductGallery({ product }: { product: Product }) {
  const [metal, setMetal] = useState<MetalColor>("yellow");
  const views = product.metals[metal];

  return (
    <div>
      <div className="mb-6 flex flex-wrap items-center gap-3">
        <span className="label text-[0.6rem] text-mist">Shown in</span>
        {(Object.keys(metalNames) as MetalColor[]).map((m) => (
          <button
            key={m}
            type="button"
            onClick={() => setMetal(m)}
            aria-pressed={metal === m}
            className={`flex items-center gap-2.5 border px-4 py-2.5 text-[0.62rem] uppercase tracking-[0.18em] transition-all duration-300 ${
              metal === m
                ? "border-gold text-ink"
                : "border-line text-mist hover:border-gold/50 hover:text-ink"
            }`}
          >
            <span
              className="h-3 w-3 rounded-full border border-night/20"
              style={{ background: swatch[m] }}
            />
            {metalNames[m]}
          </button>
        ))}
      </div>

      <div className="space-y-5">
        <AnimatePresence mode="popLayout" initial={false}>
          {views.map((src, i) => (
            <motion.div
              key={src}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className="relative aspect-square overflow-hidden bg-veil"
            >
              <Image
                src={src}
                alt={`${product.name} in ${metalNames[metal]}, view ${i + 1}`}
                fill
                priority={i === 0}
                sizes="(max-width: 1024px) 100vw, 52vw"
                className="object-cover"
              />
            </motion.div>
          ))}
        </AnimatePresence>
        {product.lifestyle.map((src) => (
          <div key={src} className="relative aspect-square overflow-hidden bg-veil">
            <Image
              src={src}
              alt={`${product.name}, worn`}
              fill
              sizes="(max-width: 1024px) 100vw, 52vw"
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </div>
  );
}
