"use client";

import { useState } from "react";

export function PregnancyCalculator() {
  const [lmp, setLmp] = useState("");

  const result = (() => {
    if (!lmp) return null;
    const start = new Date(lmp);
    const today = new Date();
    const diffDays = Math.floor(
      (today.getTime() - start.getTime()) / (1000 * 60 * 60 * 24)
    );
    const weeks = Math.floor(diffDays / 7);
    const days = diffDays % 7;

    const dueDate = new Date(start);
    dueDate.setDate(dueDate.getDate() + 280);

    let trimester = "";
    if (weeks < 13) trimester = "First trimester";
    else if (weeks < 27) trimester = "Second trimester";
    else trimester = "Third trimester";

    return {
      weeks,
      days,
      dueDate: dueDate.toLocaleDateString("en-IN", {
        day: "numeric",
        month: "long",
        year: "numeric",
      }),
      trimester,
      isValid: weeks >= 0 && weeks <= 45,
    };
  })();

  return (
    <div className="rounded-2xl border border-[#252D45] bg-[#151B2E] p-8">
      <p className="mb-2 font-mono text-xs tracking-widest text-[#A78BFA]">
        PREGNANCY CALCULATOR
      </p>
      <h3 className="mb-8 text-2xl font-bold text-white">
        Track your pregnancy timeline.
      </h3>

      <div className="space-y-6">
        <div>
          <label className="mb-3 block font-mono text-xs tracking-widest text-[#8892B0]">
            FIRST DAY OF LAST PERIOD
          </label>
          <input
            type="date"
            value={lmp}
            onChange={(e) => setLmp(e.target.value)}
            className="input-field"
          />
        </div>

        {result && result.isValid && (
          <div className="space-y-4">
            <div className="rounded-xl border border-[#5B6EF5]/40 bg-[#5B6EF5]/10 p-6 text-center">
              <p className="mb-2 font-mono text-xs tracking-widest text-[#8892B0]">
                YOU ARE
              </p>
              <p className="text-5xl font-bold text-[#5B6EF5]">
                {result.weeks}
                <span className="text-2xl">w</span> {result.days}
                <span className="text-2xl">d</span>
              </p>
              <p className="mt-3 text-sm text-[#5B6EF5]">
                {result.trimester}
              </p>
            </div>

            <div className="rounded-xl border border-[#A78BFA]/40 bg-[#A78BFA]/10 p-6 text-center">
              <p className="mb-2 font-mono text-xs tracking-widest text-[#8892B0]">
                ESTIMATED DUE DATE
              </p>
              <p className="text-2xl font-bold text-[#A78BFA]">
                {result.dueDate}
              </p>
            </div>

            <a
              href="#book"
              className="block w-full rounded-full bg-gradient-to-r from-[#5B6EF5] to-[#6B7FFF] py-3 text-center font-semibold text-white transition hover:from-[#6B7FFF] hover:to-[#8B9FFF]"
            >
              BOOK PRENATAL CONSULTATION →
            </a>
          </div>
        )}

        {!result && (
          <p className="text-center text-sm text-[#8892B0]">
            Enter your last period date to see your timeline.
          </p>
        )}
      </div>
    </div>
  );
}