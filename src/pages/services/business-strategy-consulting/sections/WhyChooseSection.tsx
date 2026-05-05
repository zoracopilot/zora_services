import React from "react";
import {
  BriefcaseBusiness,
  ChartColumn,
  Headset,
  ShieldCheck,
} from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { businessStrategyDifferentiators } from "../content";

const icons = [BriefcaseBusiness, ChartColumn, ShieldCheck, Headset] as const;

const WhyChooseSection: React.FC = () => {
  return (
    <section className="px-4 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal className="text-center sm:text-left">
          <p
            className="text-sm font-extrabold uppercase tracking-[0.22em]"
            style={{ color: "#6d28d9" }}
          >
            Why Choose Us
          </p>
        </TextReveal>

        <div className="mt-6 grid gap-5 rounded-[24px] border border-[#ece8fb] bg-white p-5 shadow-[0_10px_30px_rgba(89,76,160,0.04)] md:grid-cols-2 sm:p-6 xl:grid-cols-4 xl:gap-8 xl:p-7">
          {businessStrategyDifferentiators.map((item, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;

            return (
              <TextReveal
                key={item.title}
                delay={0.06 * index}
                className="flex flex-col items-center gap-4 text-center sm:flex-row sm:items-start sm:text-left"
              >
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#e8defd] bg-[#f8f3ff] text-[#7a58f1] shadow-[0_4px_14px_rgba(122,88,241,0.06)]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-lg font-semibold leading-7 text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-600">
                    {item.description}
                  </p>
                </div>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
