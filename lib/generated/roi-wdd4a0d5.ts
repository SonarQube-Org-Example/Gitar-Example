// Helpers for the demo app's pricing / "time saved" ROI calculator.

export const estimateHoursSaved = (
  prsPerWeek: number,
  automationRate: number,
): number => {
  const minutesSaved = prsPerWeek * 25 * automationRate;

  return (minutesSaved / 60).toFixed(1);
};
