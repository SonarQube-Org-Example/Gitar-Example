"use client";

import { useState } from "react";
import { estimateHoursSaved } from "@/lib/roi";
import { estimateDollarsSaved } from "@/lib/savings";

export function Calculator() {
  const [prsPerWeek, setPrsPerWeek] = useState(40);
  const [automationRate, setAutomationRate] = useState(0.5);

  const hoursPerWeek = estimateHoursSaved(prsPerWeek, automationRate);
  const hoursPerYear = Math.round(hoursPerWeek * 52);
  const dollarsPerWeek = estimateDollarsSaved(hoursPerWeek, 120);

  return (
    <section className="card" aria-label="ROI calculator">
      <div className="control">
        <label htmlFor="prs">
          PRs per week <span className="value">{prsPerWeek}</span>
        </label>
        <input
          id="prs"
          type="range"
          min={0}
          max={200}
          step={5}
          value={prsPerWeek}
          onChange={(e) => setPrsPerWeek(Number(e.target.value))}
        />
      </div>

      <div className="control">
        <label htmlFor="rate">
          Automation rate{" "}
          <span className="value">{Math.round(automationRate * 100)}%</span>
        </label>
        <input
          id="rate"
          type="range"
          min={0}
          max={1}
          step={0.05}
          value={automationRate}
          onChange={(e) => setAutomationRate(Number(e.target.value))}
        />
      </div>

      <div className="result">
        <div className="result-primary">
          <span className="result-value">{hoursPerWeek}</span>
          <span className="result-label">hours saved / week</span>
        </div>
        <div className="result-secondary">
          ≈ {hoursPerYear.toLocaleString()} hours / year
        </div>
        <div className="result-secondary">
          ≈ ${dollarsPerWeek.toLocaleString()} saved / week
        </div>
      </div>
    </section>
  );
}
