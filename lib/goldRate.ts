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
