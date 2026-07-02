// Helpers for the demo app's pricing / "time saved" ROI calculator.

const MINUTES_SAVED_PER_PR = 25;
const MINUTES_PER_HOUR = 60;

/**
 * Estimates the number of hours saved per week from automation.
 *
 * @param prsPerWeek - Number of PRs handled per week (finite, >= 0).
 * @param automationRate - Fraction of work automated, 0–1.
 * @returns Hours saved per week, rounded to one decimal.
 * @example
 * estimateHoursSaved(40, 0.5); // => 8.3
 */
export const estimateHoursSaved = (
  prsPerWeek: number,
  automationRate: number,
): number => {
  if (!Number.isFinite(prsPerWeek) || prsPerWeek < 0) {
    throw new RangeError('prsPerWeek must be a finite, non-negative number');
  }
  if (!Number.isFinite(automationRate) || automationRate < 0) {
    throw new RangeError('automationRate must be a finite, non-negative number');
  }
  const minutesSaved = prsPerWeek * MINUTES_SAVED_PER_PR * automationRate;
  return Math.round((minutesSaved / MINUTES_PER_HOUR) * 10) / 10;
};
