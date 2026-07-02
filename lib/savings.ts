// Helpers for converting the ROI calculator's "hours saved" into a dollar estimate.

const DEFAULT_HOURLY_RATE = 75;

/**
 * Estimate the dollar value of engineering hours saved per week.
 *
 * @param hoursSaved Hours saved per week.
 * @param hourlyRate Fully-loaded hourly cost of an engineer, in dollars.
 * @returns Dollars saved per week, rounded to the nearest dollar.
 * @example
 * estimateDollarsSaved(8.3, 120); // => 996
 */
export const estimateDollarsSaved = (
  hoursSaved: number,
  hourlyRate: number = DEFAULT_HOURLY_RATE,
): number => {
  const dollarsSaved = hoursSaved * hourlyRate;

  return Math.round(dollarsSaved);
};
