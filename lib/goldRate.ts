// 24k gold rate (₹ per gram). Set GOLD_24K_OVERRIDE to today's rate and update
// it when the market moves; making charge is separate (sheet: ₹1300/gm gold).
// 14kt/9kt derive by purity in lib/pricing.ts; silver is a flat per-gram rate.
export const FALLBACK_GOLD_24K = 9700;

export async function getGoldRate(): Promise<number> {
  const override = Number(process.env.GOLD_24K_OVERRIDE);
  return override > 0 ? Math.round(override) : FALLBACK_GOLD_24K;
}
