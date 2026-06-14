"use client";

import Image from "next/image";
import Link from "next/link";
import { useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  birthstoneMonths,
  carats,
  computeRange,
  defaultSelection,
  describeSelection,
  finishes,
  metals,
  selectionImage,
  settings,
  stones,
  type Selection,
} from "@/lib/customizer";
import { formatRange, type Product } from "@/lib/products";
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

  const range = useMemo(() => computeRange(selection), [selection]);
  const image = selectionImage(selection, product);
  const summary = describeSelection(selection);
  const stone = stones.find((s) => s.id === selection.stone)!;

  return (
    <div className="grid gap-14 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
      <div className="lg:sticky lg:top-28 lg:self-start">
        {product && (
          <div className="mb-5 flex items-baseline justify-between gap-4 border border-line bg-card px-6 py-4">
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
        <div className="relative aspect-square overflow-hidden bg-veil">
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
                className="object-cover"
                priority
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <div className="mt-6 border border-line bg-card px-7 py-6">
          <p className="label text-[0.6rem] text-gold">Indicative Range</p>
          <AnimatePresence mode="wait">
            <motion.p
              key={`${range.from}-${range.to}`}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className="display mt-2 text-2xl text-ink"
            >
              {formatRange(range.from, range.to)}
            </motion.p>
          </AnimatePresence>
          <p className="mt-2 text-xs leading-5 text-mist">
            An indicative range for your selections, confirmed at consultation against the exact
            stone you choose. {stone.certification}.
          </p>
          <p className="mt-4 border-t border-line pt-4 text-xs leading-6 text-mist">{summary}</p>
        </div>
      </div>

      <div>
        <OptionGroup step="I" title="Choose your stone" note="Every stone is independently certified and shown to you before it is set.">
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
        </OptionGroup>

        <OptionGroup step="II" title="Select your metal" note="All gold is 18k and HUID hallmarked; platinum is 950 grade.">
          <div className="grid gap-3 sm:grid-cols-2">
            {metals.map((m) => (
              <ChoiceButton
                key={m.id}
                active={selection.metal === m.id}
                onClick={() => set("metal", m.id)}
                title={m.name}
                note={m.note}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup step="III" title="Set your carat weight" note="Each weight is offered at multiple price points depending on colour and clarity.">
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

        <OptionGroup step="IV" title="Choose the setting height">
          <div className="grid gap-3 sm:grid-cols-2">
            {settings.map((s) => (
              <button
                key={s.id}
                type="button"
                onClick={() => set("setting", s.id)}
                aria-pressed={selection.setting === s.id}
                className={`group overflow-hidden border text-left transition-all duration-300 ${
                  selection.setting === s.id
                    ? "border-gold"
                    : "border-line hover:border-gold/50"
                }`}
              >
                <div className="relative aspect-[5/3] overflow-hidden bg-veil">
                  <Image
                    src={s.image}
                    alt={s.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 30vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                <div className="px-5 py-4">
                  <p className="text-sm font-medium text-ink">{s.name}</p>
                  <p className="mt-1 text-xs leading-5 text-mist">{s.note}</p>
                </div>
              </button>
            ))}
          </div>
        </OptionGroup>

        <OptionGroup step="V" title="Select the metal finish">
          <div className="grid gap-3 sm:grid-cols-3">
            {finishes.map((f) => (
              <ChoiceButton
                key={f.id}
                active={selection.finish === f.id}
                onClick={() => set("finish", f.id)}
                title={f.name}
                note={f.note}
              />
            ))}
          </div>
        </OptionGroup>

        <OptionGroup
          step="VI"
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
            <span className="font-display text-lg italic text-gold">VII</span>
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
              context={`${product ? `Design: ${product.name} - ${product.style} (${product.slug}) - ` : ""}Customizer selections - ${summary} - Indicative range ${formatRange(range.from, range.to)}`}
            />
          </div>
        </section>
      </div>
    </div>
  );
}
