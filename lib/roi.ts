// Helpers for the demo app's pricing / "time saved" ROI calculator.

const MINUTES_SAVED_PER_PR = 25;
const MINUTES_PER_HOUR = 60;

/**
 * Estimate the weekly engineering hours saved by automating code review.
 *
 * @param prsPerWeek Pull requests opened per week (finite, >= 0).
 * @param automationRate Fraction of review handled automatically, 0..1.
 * @returns Hours saved per week, rounded to one decimal place.
 * @example
 * estimateHoursSaved(40, 0.5); // => 8.3
 */
export const estimateHoursSaved = (
  prsPerWeek: number,
  automationRate: number,
): number => {
  if (![prsPerWeek, automationRate].every((n) => Number.isFinite(n) && n >= 0)) {
    throw new RangeError("inputs must be finite, non-negative numbers");
  }

  const minutesSaved = prsPerWeek * MINUTES_SAVED_PER_PR * automationRate;

  return Number((minutesSaved / MINUTES_PER_HOUR).toFixed(1));
};
