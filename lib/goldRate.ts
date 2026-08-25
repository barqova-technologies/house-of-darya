// 24k gold rate (₹ per gram). Set GOLD_24K_OVERRIDE to today's rate and update
// it when the market moves; making charge is separate (sheet: ₹1300/gm gold).
// 14kt/9kt derive by purity in lib/pricing.ts; silver is a flat per-gram rate.
import { DEFAULT_GOLD_24K, DEFAULT_SILVER_PER_GRAM } from "@/lib/pricing";

export const FALLBACK_GOLD_24K = DEFAULT_GOLD_24K;

export async function getGoldRate(): Promise<number> {
  const override = Number(process.env.GOLD_24K_OVERRIDE);
  return override > 0 ? Math.round(override) : FALLBACK_GOLD_24K;
}

export const FALLBACK_SILVER = DEFAULT_SILVER_PER_GRAM;

export async function getSilverRate(): Promise<number> {
  const override = Number(process.env.SILVER_PER_GRAM_OVERRIDE);
  return override > 0 ? Math.round(override) : FALLBACK_SILVER;
}
