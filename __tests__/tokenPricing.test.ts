import { formatNaira, tokenCostForPrice } from '../src/lib/tokenPricing';

describe('tokenCostForPrice', () => {
  it.each([
    [0, 1],
    [50_000, 1],
    [50_001, 2],
    [150_000, 2],
    [250_000, 3],
    [500_000, 3],
    [1_000_000, 4],
    [1_000_001, 5],
    [25_000_000, 5],
  ])('price %d costs %d token(s)', (price, tokens) => {
    expect(tokenCostForPrice(price)).toBe(tokens);
  });

  it('rejects negative or non-numeric prices', () => {
    expect(() => tokenCostForPrice(-1)).toThrow();
    expect(() => tokenCostForPrice(Number.NaN)).toThrow();
  });
});

test('formatNaira', () => {
  expect(formatNaira(90000)).toBe('₦90,000');
});
