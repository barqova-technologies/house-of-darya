"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
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
import { CalBooking } from "@/components/CalBooking";
import { BirthstonePicker } from "@/components/BirthstonePicker";

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
    <section className="border-t border-line py-10">
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

export function Customizer({
  product,
  goldRate,
  silverRate,
}: {
  product?: Product;
  goldRate?: number;
  silverRate?: number;
}) {
  const [selection, setSelection] = useState<Selection>(defaultSelection);
  const set = <K extends keyof Selection>(key: K, value: Selection[K]) =>
    setSelection((s) => ({ ...s, [key]: value }));

  const selectMetal = (id: MetalId) =>
    setSelection((s) => {
      const next = metals.find((m) => m.id === id)!;
      const colour = next.colours.includes(s.colour) ? s.colour : next.colours[0];
      return { ...s, metal: id, colour };
    });

  const price = useMemo(() => computePrice(selection, goldRate, silverRate), [selection, goldRate, silverRate]);
  const image = selectionImage(selection, product);
  const summary = describeSelection(selection);

  const designNotes = useMemo(
    () =>
      [
        product ? `Design: ${product.name} - ${product.style} (${product.slug})` : "Custom design",
        `Selections: ${summary}`,
        `Indicative price: ${formatPrice(price.total)}`,
      ].join(" | "),
    [product, summary, price.total]
  );

  // Debounced so changing a selection does not reload the embedded calendar on every click.
  const [bookingNotes, setBookingNotes] = useState(designNotes);
  useEffect(() => {
    const t = setTimeout(() => setBookingNotes(designNotes), 600);
    return () => clearTimeout(t);
  }, [designNotes]);
  const stone = stones.find((s) => s.id === selection.stone)!;
  const activeMetal = metals.find((m) => m.id === selection.metal)!;
  const activeColours = metalColours.filter((c) => activeMetal.colours.includes(c.id));

  return (
    <div className="grid gap-10 lg:grid-cols-2 lg:items-start lg:gap-14">
      <div className="lg:sticky lg:top-24">
        <div className="relative aspect-square w-full overflow-hidden bg-veil">
          <AnimatePresence mode="popLayout">
            <motion.div
              key={image}
              initial={{ opacity: 0, scale: 1.02 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="absolute inset-0"
            >
              <Image
                src={image}
                alt={product ? `${product.name} design preview` : "Your design preview"}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      <div className="min-w-0">
        <div className="sticky top-20 z-20 flex items-baseline justify-between gap-4 border-b border-line bg-canvas/95 py-4 backdrop-blur-md">
          <p className="label text-[0.58rem] text-gold">Indicative Price</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={price.total}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="display text-2xl text-ink"
            >
              {formatPrice(price.total)}
            </motion.p>
          </AnimatePresence>
        </div>

        {product && (
          <div className="py-8">
            <h2 className="display text-3xl text-ink sm:text-4xl">{product.name}</h2>
            <p className="mt-2 text-[0.7rem] uppercase tracking-[0.2em] text-mist">
              {product.style}
            </p>
            <p className="mt-5 text-[0.95rem] leading-7 text-mist">{product.description}</p>
            <Link
              href={`/jewellery/${product.slug}`}
              className="mt-5 inline-block text-[0.6rem] uppercase tracking-[0.18em] text-gold underline-offset-4 hover:underline"
            >
              View design
            </Link>
          </div>
        )}

        <OptionGroup step="I" title="Choose your stone" note="Diamonds and gemstones alike are IGI certified and shown to you before they are set.">
          <div className="grid gap-3 sm:grid-cols-3">
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

        <OptionGroup step="III" title="Set your carat weight" note="The price above updates with every choice and stays with you as you scroll.">
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
              <span className="field-label">Hidden Birthstone</span>
              <BirthstonePicker
                value={selection.birthstone}
                onChange={(month) => set("birthstone", month)}
              />
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

        <section className="border-t border-line py-10">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-lg italic text-gold">V</span>
            <div>
              <h3 className="display text-xl text-ink">Price break-up</h3>
              <p className="mt-1 text-sm leading-6 text-mist">
                Exactly what makes up your price, itemised.
              </p>
            </div>
          </div>
          <dl className="mt-7 space-y-3 text-sm text-mist">
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
          <div className="mt-5 flex items-baseline justify-between gap-4 border-t border-line pt-5">
            <p className="label text-[0.6rem] text-gold">Indicative Total</p>
            <p className="display text-2xl text-ink">{formatPrice(price.total)}</p>
          </div>
          <p className="mt-4 text-xs leading-5 text-mist">
            Indicative for your selections; confirmed at consultation against the exact stone you
            choose. {stone.certification}.
          </p>
          <p className="mt-3 border-t border-line pt-3 text-xs leading-6 text-mist">{summary}</p>
        </section>

        <section className="border-t border-line pt-10" id="complete">
          <div className="flex items-baseline gap-4">
            <span className="font-display text-lg italic text-gold">VI</span>
            <div>
              <h3 className="display text-xl text-ink">See it before it exists</h3>
              <p className="mt-1 text-sm leading-6 text-mist">
                Share your details and our atelier will bring comparable designs, loose stones and
                metal samples to your home in Lucknow. Your design, refined in person.
              </p>
            </div>
          </div>
          <div className="mt-8">
            <CalBooking id="customise" notes={bookingNotes} />
          </div>
        </section>
      </div>
    </div>
  );
}
