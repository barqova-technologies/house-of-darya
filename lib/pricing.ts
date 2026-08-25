import { designSpecs, type DesignSpec } from "@/lib/specs";

// ----- Rates (from the client price sheet) -----
// Making charges (₹ per gram)
export const MAKING_GOLD = 1300;
export const MAKING_SILVER = 800;

// Lab-grown diamond rates, ₹ per carat (EF VS)
const DIAMOND = {
  smallRound: 14000,
  smallFancy: 18000,
  solRound: 22000,
  solFancy: 26000,
};

// Coloured lab-grown diamond rates, ₹ per carat
const COLOURED: Record<string, number> = {
  pink: 28000,
  red: 36000,
  yellow: 24000,
  green: 24000,
};

// ----- Gold / silver metal rate -----
// Default 24k rate when no live rate is supplied. lib/goldRate.ts resolves the
// live/override rate on the server and passes it into the functions below.
export const DEFAULT_GOLD_24K = 9700;
export const DEFAULT_SILVER_PER_GRAM = 95;

export const PURITY = { "gold-18k": 0.75, "gold-14k": 0.585, "gold-9k": 0.375 } as const;

export type PriceMetal = "gold-18k" | "gold-14k" | "gold-9k" | "silver-925";

const round100 = (n: number) => Math.round(n / 100) * 100;

function diamondValue(s: DesignSpec) {
  const solFancyRate = s.colour ? COLOURED[s.colour] ?? DIAMOND.solFancy : DIAMOND.solFancy;
  return (
    s.smallRound * DIAMOND.smallRound +
    s.smallFancy * DIAMOND.smallFancy +
    s.solRound * DIAMOND.solRound +
    s.solFancy * solFancyRate +
    (s.solFancyExtra ?? 0) * DIAMOND.solFancy
  );
}

export function metalWeight(s: DesignSpec, metal: PriceMetal) {
  if (metal === "silver-925") return s.silver;
  if (metal === "gold-18k") return s.g18;
  if (metal === "gold-14k") return s.g14;
  return s.g9;
}

export function designPrice(
  s: DesignSpec,
  metal: PriceMetal,
  gold24k = DEFAULT_GOLD_24K,
  silver = DEFAULT_SILVER_PER_GRAM
) {
  const diamonds = diamondValue(s);
  if (metal === "silver-925") {
    return round100(s.silver * (silver + MAKING_SILVER) + diamonds);
  }
  const weight = metalWeight(s, metal);
  return round100(weight * (gold24k * PURITY[metal] + MAKING_GOLD) + diamonds);
}

const ALL_METALS: PriceMetal[] = ["silver-925", "gold-9k", "gold-14k", "gold-18k"];

export function priceRangeFor(
  slug: string,
  gold24k = DEFAULT_GOLD_24K,
  silver = DEFAULT_SILVER_PER_GRAM
): { from: number; to: number } | null {
  const s = designSpecs[slug];
  if (!s) return null;
  const prices = ALL_METALS.map((m) => designPrice(s, m, gold24k, silver));
  return { from: Math.min(...prices), to: Math.max(...prices) };
}

export function designBreakdown(
  slug: string,
  metal: PriceMetal = "gold-18k",
  gold24k = DEFAULT_GOLD_24K,
  silver = DEFAULT_SILVER_PER_GRAM
) {
  const s = designSpecs[slug];
  if (!s) return null;
  const diamond = round100(diamondValue(s));
  if (metal === "silver-925") {
    return {
      weight: s.silver,
      metal: round100(s.silver * silver),
      making: round100(s.silver * MAKING_SILVER),
      diamond,
    };
  }
  const weight = metalWeight(s, metal);
  return {
    weight,
    metal: round100(weight * gold24k * PURITY[metal]),
    making: round100(weight * MAKING_GOLD),
    diamond,
  };
}
