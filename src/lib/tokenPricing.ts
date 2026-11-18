/**
 * Token cost to unlock a seller's contact, by item price in Naira.
 * Display-only on the app: the Cloud Function that debits tokens reads
 * config/tokenPricing and is the source of truth.
 */
export type PriceBand = { maxPrice: number; tokens: number };

export const DEFAULT_PRICE_BANDS: PriceBand[] = [
  { maxPrice: 50_000, tokens: 1 },
  { maxPrice: 150_000, tokens: 2 },
  { maxPrice: 500_000, tokens: 3 },
  { maxPrice: 1_000_000, tokens: 4 },
  { maxPrice: Number.POSITIVE_INFINITY, tokens: 5 },
];

export function tokenCostForPrice(
  price: number,
  bands: PriceBand[] = DEFAULT_PRICE_BANDS,
): number {
  if (!Number.isFinite(price) || price < 0) {
    throw new Error(`Invalid price: ${price}`);
  }
  const sorted = [...bands].sort((a, b) => a.maxPrice - b.maxPrice);
  const band = sorted.find(b => price <= b.maxPrice);
  return band ? band.tokens : sorted[sorted.length - 1].tokens;
}

export type TokenBundle = {
  id: string;
  tokens: number;
  priceNaira: number;
  validityDays: number;
};

export const DEFAULT_BUNDLES: TokenBundle[] = [
  { id: 'starter', tokens: 2, priceNaira: 500, validityDays: 7 },
  { id: 'standard', tokens: 5, priceNaira: 2_000, validityDays: 30 },
  { id: 'value', tokens: 10, priceNaira: 3_000, validityDays: 30 },
];

export function formatNaira(amount: number): string {
  return `₦${Math.round(amount).toLocaleString('en-NG')}`;
}
