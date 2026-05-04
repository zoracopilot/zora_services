import React from "react";
import { Code2, PencilRuler, Rocket, Search, ShieldCheck, Users } from "lucide-react";
import { websiteWebAppProcessSteps } from "../content";

const icons = [Search, Users, PencilRuler, Code2, ShieldCheck, Rocket] as const;

const ProcessSection: React.FC = () => {
  return (
    <section className="overflow-hidden border border-[#ece9fb] bg-[linear-gradient(180deg,#ffffff_0%,#fafbff_100%)] px-6 py-8 shadow-[0_14px_34px_rgba(89,76,160,0.03)] sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
          How We Deliver
        </p>
        <h2 className="mt-4 max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
          Our Proven Delivery Process
        </h2>
        <p className="mt-4 max-w-[520px] text-base leading-8 text-slate-600">
          We follow a collaborative and agile process to deliver high-quality solutions with clear communication, quick iterations, and continuous improvement at every stage of development.
        </p>
      </div>

      <div className="mx-auto mt-10 grid max-w-[1180px] grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-2 lg:grid-cols-3 xl:mt-12 xl:grid-cols-6 xl:gap-x-4 xl:gap-y-0">
        {websiteWebAppProcessSteps.map((step, index) => {
          const Icon = icons[index] ?? Search;

          return (
            <article key={step.title} className="relative text-center">
              <div className="relative mx-auto mb-4 flex h-[62px] w-[62px] items-center justify-center xl:mb-4">
                {index < websiteWebAppProcessSteps.length - 1 ? (
                  <div className="absolute left-full top-1/2 hidden h-0 w-[calc(100%+1rem)] -translate-y-1/2 xl:block">
                    <div className="w-full border-t border-dotted border-[#d7d0fb]" />
                  </div>
                ) : null}
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center border border-[#ddd5fb] bg-[linear-gradient(180deg,#ffffff_0%,#fcfbff_100%)] text-[#7057f5] shadow-[0_4px_12px_rgba(112,87,245,0.04)]">
                  <Icon size={21} strokeWidth={1.95} />
                </div>
              </div>
              <h3 className="text-base font-semibold leading-7 text-slate-950">{step.title}</h3>
              <p className="mx-auto mt-3 max-w-[18ch] text-sm leading-7 text-slate-600">
                {step.description}
              </p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
