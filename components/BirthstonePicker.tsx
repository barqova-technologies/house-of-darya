"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { birthstones, getBirthstone } from "@/lib/customizer";

export function BirthstonePicker({
  value,
  onChange,
}: {
  value: string;
  onChange: (month: string) => void;
}) {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const selected = getBirthstone(value);

  useEffect(() => {
    if (!open) return;
    const onPointer = (e: MouseEvent) => {
      if (rootRef.current && !rootRef.current.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  const choose = (month: string) => {
    onChange(month);
    setOpen(false);
  };

  return (
    <div ref={rootRef} className="relative">
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="listbox"
        aria-expanded={open}
        className={`flex w-full items-center gap-3 border px-3 py-2.5 text-left transition-colors duration-300 ${
          open ? "border-gold" : "border-line hover:border-gold/50"
        }`}
      >
        <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border border-line bg-veil">
          {selected ? (
            <Image src={selected.image} alt={selected.stone} fill sizes="36px" className="object-cover" />
          ) : (
            <span className="flex h-full w-full items-center justify-center text-[0.6rem] text-mist">
              —
            </span>
          )}
        </span>
        <span className="min-w-0 flex-1">
          {selected ? (
            <>
              <span className="block truncate text-sm text-ink">{selected.stone}</span>
              <span className="block text-[0.62rem] uppercase tracking-[0.18em] text-mist">
                {selected.month}
              </span>
            </>
          ) : (
            <span className="text-sm text-mist">No birthstone</span>
          )}
        </span>
        <svg
          width="12"
          height="12"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.5"
          className={`shrink-0 text-mist transition-transform duration-300 ${open ? "rotate-180" : ""}`}
        >
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -6 }}
            transition={{ duration: 0.18 }}
            role="listbox"
            className="absolute left-0 right-0 z-30 mt-2 max-h-[26rem] overflow-y-auto border border-line bg-card p-3 shadow-xl shadow-night/10"
          >
            <button
              type="button"
              role="option"
              aria-selected={!value}
              onClick={() => choose("")}
              className={`mb-2 w-full border px-3 py-2 text-left text-xs transition-colors ${
                !value ? "border-gold bg-gold/[0.06] text-ink" : "border-transparent text-mist hover:text-ink"
              }`}
            >
              No birthstone
            </button>
            <div className="grid grid-cols-3 gap-2">
              {birthstones.map((b) => {
                const active = b.month === value;
                return (
                  <button
                    key={b.month}
                    type="button"
                    role="option"
                    aria-selected={active}
                    onClick={() => choose(b.month)}
                    className={`group flex flex-col items-center gap-2 border px-2 py-3 transition-all duration-300 ${
                      active
                        ? "border-gold bg-gold/[0.06]"
                        : "border-line hover:border-gold/50 hover:bg-veil/60"
                    }`}
                  >
                    <span className="relative h-12 w-12 overflow-hidden rounded-full border border-line bg-veil">
                      <Image
                        src={b.image}
                        alt={`${b.month} birthstone, ${b.stone}`}
                        fill
                        sizes="48px"
                        className="object-cover transition-transform duration-500 group-hover:scale-105"
                      />
                    </span>
                    <span className="text-center leading-tight">
                      <span className="block text-[0.7rem] text-ink">{b.stone}</span>
                      <span className="block text-[0.55rem] uppercase tracking-[0.14em] text-mist">
                        {b.month}
                      </span>
                    </span>
                  </button>
                );
              })}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
