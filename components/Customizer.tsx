"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  birthstoneMonths,
  carats,
  computePrice,
  defaultSelection,
  describeSelection,
  metalColours,
  metals,
  qualities,
  selectionImage,
  stones,
  type MetalId,
  type Selection,
} from "@/lib/customizer";
import { formatPrice, type Product } from "@/lib/products";
import { EnquiryForm } from "@/components/EnquiryForm";

function OptionGroup({
  step,
  title,
  note,
  children,
}: {
  step: string;
  title: string;
  note?: string;
  children: React.ReactNode;
}) {
  return (
    <section className="border-t border-line py-10 first:border-t-0 first:pt-0">
      <div className="flex items-baseline gap-4">
        <span className="font-display text-lg italic text-gold">{step}</span>
        <div>
          <h3 className="display text-xl text-ink">{title}</h3>
          {note && <p className="mt-1 text-sm leading-6 text-mist">{note}</p>}
        </div>
      </div>
      <div className="mt-6">{children}</div>
    </section>
  );
}

function ChoiceButton({
  active,
  onClick,
  title,
  note,
  badge,
}: {
  active: boolean;
  onClick: () => void;
  title: string;
  note?: string;
  badge?: string;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={active}
      className={`flex flex-col gap-1 border px-5 py-4 text-left transition-all duration-300 ${
        active
          ? "border-gold bg-gold/[0.06] text-ink"
          : "border-line text-mist hover:border-gold/50 hover:text-ink"
      }`}
    >
      <span className="flex items-center justify-between gap-3">
        <span className="text-sm font-medium tracking-wide text-ink">{title}</span>
        {badge && <span className="text-[0.58rem] uppercase tracking-[0.18em] text-gold">{badge}</span>}
      </span>
      {note && <span className="text-xs leading-5">{note}</span>}
    </button>
  );
}

export function Customizer({ product }: { product?: Product }) {
  const [selection, setSelection] = useState<Selection>(defaultSelection);
  const set = <K extends keyof Selection>(key: K, value: Selection[K]) =>
    setSelection((s) => ({ ...s, [key]: value }));

  const selectMetal = (id: MetalId) =>
    setSelection((s) => {
      const next = metals.find((m) => m.id === id)!;
      const colour = next.colours.includes(s.colour) ? s.colour : next.colours[0];
      return { ...s, metal: id, colour };
    });

  const price = useMemo(() => computePrice(selection), [selection]);
  const image = selectionImage(selection, product);

  const priceCardRef = useRef<HTMLDivElement>(null);
  const [showBar, setShowBar] = useState(false);
  useEffect(() => {
    const el = priceCardRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => setShowBar(!entry.isIntersecting), {
      threshold: 0,
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);
  const summary = describeSelection(selection);
  const stone = stones.find((s) => s.id === selection.stone)!;
  const activeMetal = metals.find((m) => m.id === selection.metal)!;
  const activeColours = metalColours.filter((c) => activeMetal.colours.includes(c.id));

  return (
    <div className="grid gap-14 pb-24 lg:grid-cols-[1fr_1.1fr] lg:gap-20 lg:pb-0">
      <div className="flex flex-col lg:sticky lg:top-24 lg:self-start">
        {product && (
          <div className="order-1 mb-4 flex items-baseline justify-between gap-4 border border-line bg-card px-5 py-3">
            <div>
              <p className="label text-[0.58rem] text-gold">Customising</p>
              <p className="display mt-1 text-xl text-ink">
                {product.name}
                <span className="ml-3 text-[0.65rem] font-body uppercase tracking-[0.18em] text-mist">
                  {product.style}
                </span>
              </p>
            </div>
            <Link
              href={`/jewellery/${product.slug}`}
              className="shrink-0 text-[0.6rem] uppercase tracking-[0.18em] text-mist transition-colors hover:text-gold"
            >
              View design
            </Link>
          </div>
        )}
        <div ref={priceCardRef} className="order-2 overflow-hidden border border-line bg-card">
          <div className="relative h-64 w-full border-b border-line bg-veil sm:h-72 lg:h-64">
            <AnimatePresence mode="popLayout">
              <motion.div
                key={image}
                initial={{ opacity: 0, scale: 1.03 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                className="absolute inset-0"
              >
                <Image
                  src={image}
                  alt={product ? `${product.name} design preview` : "Your design preview"}
                  fill
                  sizes="(max-width: 1024px) 100vw, 45vw"
                  className="object-contain"
                  priority
                />
              </motion.div>
            </AnimatePresence>
          </div>
          <div className="px-7 py-6">
            <p className="label text-[0.6rem] text-gold">Indicative Price</p>
            <AnimatePresence mode="wait">
              <motion.p
                key={price.total}
                initial={{ opacity: 0, y: 6 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.3 }}
                className="display mt-2 text-3xl text-ink"
              >
                {formatPrice(price.total)}
              </motion.p>
            </AnimatePresence>
            <dl className="mt-5 space-y-2 border-t border-line pt-4 text-xs text-mist">
              <div className="flex items-center justify-between gap-4">
                <dt>Centre stone ({selection.carat} ct)</dt>
                <dd className="text-ink">{formatPrice(price.diamond)}</dd>
              </div>
              <div className="flex items-center justify-between gap-4">
                <dt>Metal &amp; setting</dt>
                <dd className="text-ink">{formatPrice(price.metal)}</dd>
              </div>
              {price.birthstone > 0 && (
                <div className="flex items-center justify-between gap-4">
                  <dt>Hidden birthstone</dt>
                  <dd className="text-ink">{formatPrice(price.birthstone)}</dd>
                </div>
              )}
              <div className="flex items-center justify-between gap-4">
                <dt>Making charge</dt>
                <dd className="text-ink">{formatPrice(price.making)}</dd>
              </div>
            </dl>
            <p className="mt-4 border-t border-line pt-4 text-xs leading-5 text-mist">
              Indicative for your selections; confirmed at consultation against the exact stone you
              choose. {stone.certification}.
            </p>
          </div>
        </div>
      </div>

      <div>
        <OptionGroup step="I" title="Choose your stone" note="Diamonds and gemstones alike are IGI certified and shown to you before they are set.">
          <div className="grid gap-3 sm:grid-cols-2">
            {stones.map((s) => (
              <ChoiceButton
                key={s.id}
                active={selection.stone === s.id}
                onClick={() => set("stone", s.id)}
                title={s.name}
                note={s.note}
                badge={s.certification}
              />
            ))}
          </div>
          <div className="mt-5">
            <p className="field-label">Colour &amp; clarity</p>
            <div className="grid gap-3 sm:grid-cols-2">
              {qualities.map((q) => (
                <ChoiceButton
                  key={q.id}
                  active={selection.quality === q.id}
                  onClick={() => set("quality", q.id)}
                  title={q.name}
                  note={q.note}
                />
              ))}
            </div>
          </div>
        </OptionGroup>

        <OptionGroup step="II" title="Select your metal" note="Karat sets the gold content; choose your colour beneath. All gold is HUID hallmarked.">
          <div className="grid gap-3 sm:grid-cols-2">
            {metals.map((m) => (
              <ChoiceButton
                key={m.id}
                active={selection.metal === m.id}
                onClick={() => selectMetal(m.id)}
                title={m.name}
                note={m.note}
              />
            ))}
          </div>
          {activeColours.length > 1 && (
            <div className="mt-5">
              <p className="field-label">Metal colour</p>
              <div className="flex flex-wrap gap-3">
                {activeColours.map((c) => (
                  <button
                    key={c.id}
                    type="button"
                    onClick={() => set("colour", c.id)}
                    aria-pressed={selection.colour === c.id}
                    className={`flex items-center gap-2.5 border px-4 py-2.5 text-xs font-medium transition-all duration-300 ${
                      selection.colour === c.id
                        ? "border-gold bg-gold/[0.06] text-ink"
                        : "border-line text-mist hover:border-gold/50 hover:text-ink"
                    }`}
                  >
                    <span
                      className="h-4 w-4 rounded-full border border-line"
                      style={{ background: c.swatch }}
                    />
                    {c.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </OptionGroup>

        <OptionGroup step="III" title="Set your carat weight" note="The live price above updates with every choice, so it is always in view.">
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {carats.map((c) => (
              <ChoiceButton
                key={c.id}
                active={selection.carat === c.id}
                onClick={() => set("carat", c.id)}
                title={c.name}
                note={c.note}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup
          step="IV"
          title="Make it secretly yours"
          note="A hidden birthstone beneath the setting and an inscription inside the band, details only you will know."
        >
          <div className="grid gap-5 sm:grid-cols-2">
            <div>
              <label className="field-label" htmlFor="birthstone">Hidden Birthstone</label>
              <select
                id="birthstone"
                className="field"
                value={selection.birthstone}
                onChange={(e) => set("birthstone", e.target.value)}
              >
                <option value="">None</option>
                {birthstoneMonths.map((m) => (
                  <option key={m} value={m}>
                    {m}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <label className="field-label" htmlFor="inscription">Inscription (complimentary)</label>
              <input
                id="inscription"
                className="field"
                maxLength={20}
                placeholder="Up to 20 characters"
                value={selection.inscription}
                onChange={(e) => set("inscription", e.target.value)}
              />
            </div>
          </div>
        </OptionGroup>

        <section className="border-t border-line pt-10" id="complete">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-lg italic text-gold">V</span>
            <div>
              <h3 className="display text-xl text-ink">See it before it exists</h3>
              <p className="mt-1 text-sm leading-6 text-mist">
                Share your details and our atelier will bring comparable designs, loose stones and
                metal samples to your home in Lucknow. Your design, refined in person.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <EnquiryForm
              type="home-atelier"
              context={`${product ? `Design: ${product.name} - ${product.style} (${product.slug}) - ` : ""}Customizer selections - ${summary} - Indicative price ${formatPrice(price.total)}`}
            />
          </div>
        </section>
      </div>

      <div
        className={`fixed inset-x-0 bottom-0 z-40 border-t border-line bg-canvas/95 backdrop-blur-md transition-transform duration-300 lg:hidden ${
          showBar ? "translate-y-0" : "translate-y-full"
        }`}
      >
        <div className="shell flex items-center justify-between gap-4 py-3 pr-20">
          <div>
            <p className="label text-[0.52rem] text-gold">Indicative Price</p>
            <p className="display text-xl leading-tight text-ink">
              {formatPrice(price.total)}
            </p>
          </div>
          <a
            href="#complete"
            className="text-[0.6rem] uppercase tracking-[0.16em] text-gold underline-offset-4 hover:underline"
          >
            Enquire ↓
          </a>
        </div>
      </div>
    </div>
  );
}
