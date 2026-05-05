import React from "react";
import {
  BarChart3,
  BriefcaseBusiness,
  Search,
  Target,
  Wrench,
} from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { businessStrategyProcessSteps } from "../content";

const icons = [Search, BriefcaseBusiness, Wrench, BarChart3, Target] as const;

const ProcessSection: React.FC = () => {
  return (
    <section className="px-4 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-9 xl:px-10">
      <TextReveal className="mx-auto max-w-[1160px] text-center">
        <p
          className="text-sm font-extrabold uppercase tracking-[0.22em]"
          style={{ color: "#6d28d9" }}
        >
          How We Deliver
        </p>
        <h2 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.2rem] md:text-[2.35rem] xl:text-[2.55rem]">
          Our Proven Approach
        </h2>
      </TextReveal>

      <div className="mx-auto mt-7 grid max-w-[1160px] grid-cols-1 gap-4 rounded-[28px] border border-[#ece9fb] bg-[linear-gradient(180deg,#fdfcff_0%,#f7f8ff_100%)] p-4 shadow-[0_14px_34px_rgba(89,76,160,0.03)] sm:grid-cols-2 sm:p-6 lg:grid-cols-3 xl:grid-cols-5 xl:gap-4 xl:p-8">
        {businessStrategyProcessSteps.map((step, index) => {
          const Icon = icons[index] ?? Search;

          return (
            <TextReveal
              key={step.title}
              delay={0.06 * index}
              className="relative flex h-full flex-col items-center px-4 py-4 text-center sm:px-5 xl:px-4"
            >
              <div className="relative mx-auto mb-4 flex h-[62px] w-[62px] items-center justify-center">
                {index < businessStrategyProcessSteps.length - 1 ? (
                  <div className="absolute left-full top-1/2 hidden h-0 w-[calc(100%+0.7rem)] -translate-y-1/2 xl:block">
                    <div className="w-full border-t border-dotted border-[#d7d0fb]" />
                  </div>
                ) : null}
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#ddd5fb] bg-white text-[#7057f5] shadow-[0_8px_20px_rgba(112,87,245,0.08)]">
                  <Icon size={20} strokeWidth={1.95} />
                </div>
              </div>
              <h3 className="text-base font-semibold leading-7 text-slate-950">
                {step.title}
              </h3>
              <p className="mt-2 max-w-[24ch] text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </TextReveal>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
