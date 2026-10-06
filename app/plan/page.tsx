"use client";

import Link from "next/link";
import { useState } from "react";
import { milestones } from "@/data/milestones";

export default function Plan() {
  const [completed, setCompleted] = useState<string[]>([]);

  function toggleAction(action: string) {
    setCompleted((prev) =>
      prev.includes(action)
        ? prev.filter((item) => item !== action)
        : [...prev, action],
    );
  }

  const totalActions = milestones.reduce(
    (total, milestone) => total + milestone.actions.length,
    0,
  );

  const progress =
    totalActions === 0
      ? 0
      : Math.round((completed.length / totalActions) * 100);

  return (
    <main className="flex min-h-[70vh] items-center justify-center px-6 py-10">
      <div className="w-full max-w-4xl">
        <div className="mb-8 text-center">
          <p className="mb-2 text-sm font-semibold uppercase tracking-widest text-blue-600">
            Your Journey
          </p>

          <h1 className="mb-3 text-4xl font-bold text-gray-900">My Plan</h1>

          <p className="text-gray-500">
            Follow these milestones and complete the actions along the way.
          </p>
        </div>
        <div className="mb-8 rounded-3xl border border-gray-200 bg-white p-6 shadow-sm">
          <div className="mb-3 flex items-center justify-between">
            <div>
              <p className="font-semibold text-gray-900">Overall Progress</p>
              <p className="text-sm text-gray-500">
                {completed.length} of {totalActions} actions completed
              </p>
            </div>

            <span className="text-2xl font-bold text-blue-600">
              {progress}%
            </span>
          </div>

          <div className="h-3 overflow-hidden rounded-full bg-gray-100">
            <div
              className="h-full rounded-full bg-blue-600 transition-all duration-500"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>

        <div className="space-y-6">
          {milestones.map((milestone, index) => {
            const completedActions = milestone.actions.filter((action) =>
              completed.includes(action),
            ).length;

            return (
              <section
                key={milestone.title}
                className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
              >
                <div className="mb-5 flex items-start justify-between gap-4">
                  <div className="flex gap-4">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-blue-50 font-bold text-blue-600">
                      {index + 1}
                    </div>

                    <div>
                      <h2 className="text-xl font-bold text-gray-900">
                        {milestone.title}
                      </h2>

                      <p className="mt-1 text-gray-500">
                        {milestone.description}
                      </p>
                    </div>
                  </div>

                  <span className="whitespace-nowrap rounded-full bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-600">
                    {completedActions}/{milestone.actions.length}
                  </span>
                </div>

                <div>
                  {milestone.actions.map((action) => {
                    const isCompleted = completed.includes(action);

                    return (
                      <label
                        key={action}
                        className={`flex cursor-pointer items-center gap-3 rounded-xl border p-4 transition ${
                          isCompleted
                            ? "border-blue-100 bg-blue-50"
                            : "border-gray-100 hover:bg-gray-50"
                        }`}
                      >
                        <input
                          type="checkbox"
                          checked={isCompleted}
                          onChange={() => toggleAction(action)}
                          className="h-5 w-5 accent-blue-600"
                        />

                        <span
                          className={
                            isCompleted
                              ? "text-gray-400 line-through"
                              : "font-medium text-gray-700"
                          }
                        >
                          {action}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </section>
            );
          })}
        </div>
        <div className="mt-10 text-center">
          <Link
            href="/"
            className="text-sm font-medium text-blue-600 transition hover:text-blue-800"
          >
            ← Back to Home
          </Link>
        </div>
      </div>
    </main>
  );
}
