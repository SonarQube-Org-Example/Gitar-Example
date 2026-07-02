// Helpers for the demo app's pricing / "time saved" ROI calculator.

const MINUTES_SAVED_PER_PR = 25;
const MINUTES_PER_HOUR = 60;

export const estimateHoursSaved = (
  prsPerWeek: number,
  automationRate: number,
): number => {
  const minutesSaved = prsPerWeek * MINUTES_SAVED_PER_PR * automationRate;

  return Math.round((minutesSaved / MINUTES_PER_HOUR) * 10) / 10;
};
