import { FaBrain, FaCloud, FaCode, FaChartLine } from "react-icons/fa";
import features from "@/content/features.json";
import type { ReactElement } from "react";

const icons: Record<string, ReactElement> = {
  FaBrain: <FaBrain />,
  FaCloud: <FaCloud />,
  FaCode: <FaCode />,
  FaChartLine: <FaChartLine />,
};

export function FeatureSection() {
  return (
    <section className="flex flex-col items-center text-center">
      <h2 className="text-2xl font-semibold text-zinc-800 dark:text-zinc-100">
        What We Excel At
      </h2>
      <p className="mt-3 text-base text-zinc-600 dark:text-zinc-400 max-w-2xl">
        We combine innovation and technical mastery to deliver powerful digital
        solutions across multiple disciplines.
      </p>

      <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4 w-full max-w-6xl">
        {features.map((feature) => (
          <div
            key={feature.title}
            className="flex flex-col items-center rounded-xl border border-zinc-200 bg-white p-6 shadow-sm transition-transform hover:-translate-y-1 hover:shadow-md dark:border-zinc-800 dark:bg-zinc-900"
          >
            <div className="text-4xl text-blue-600 mb-4">
              {icons[feature.icon] || <FaCode />}
            </div>
            <h3 className="text-lg font-semibold text-zinc-800 dark:text-zinc-100 mb-2">
              {feature.title}
            </h3>
            <p className="text-sm text-zinc-600 dark:text-zinc-400">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
