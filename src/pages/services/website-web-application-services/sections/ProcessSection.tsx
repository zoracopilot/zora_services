import React from "react";
import { Code2, PencilRuler, Rocket, Search, ShieldCheck, Users } from "lucide-react";
import { websiteWebAppProcessSteps } from "../content";

const icons = [Search, Users, PencilRuler, Code2, ShieldCheck, Rocket] as const;

const ProcessSection: React.FC = () => {
  return (
    <section className="overflow-hidden rounded-[30px] border border-[#ece9fb] bg-[linear-gradient(180deg,#ffffff_0%,#fafbff_100%)] px-6 py-8 shadow-[0_14px_34px_rgba(89,76,160,0.03)] sm:px-8 sm:py-10 lg:px-10 lg:py-12 xl:px-14">
      <div className="mx-auto max-w-[1180px]">
        <p className="text-[10px] font-medium uppercase tracking-[0.3em] text-[#6f7390]">
          How We Deliver
        </p>
        <h2 className="mt-4 max-w-[420px] text-[2rem] font-semibold leading-[1.08] tracking-[-0.045em] text-[#0f172a] sm:text-[2.35rem] xl:max-w-[460px] xl:text-[2.1rem]">
          Our Proven Delivery Process
        </h2>
        <p className="mt-4 max-w-[360px] text-[13px] leading-7 text-[#475569]">
          We follow a collaborative and agile process to deliver high-quality solutions.
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
                <div className="inline-flex h-[62px] w-[62px] items-center justify-center rounded-full border border-[#ddd5fb] bg-[linear-gradient(180deg,#ffffff_0%,#fcfbff_100%)] text-[#7057f5] shadow-[0_4px_12px_rgba(112,87,245,0.04)]">
                  <Icon size={21} strokeWidth={1.95} />
                </div>
              </div>
              <h3 className="text-[13px] font-semibold leading-6 text-[#111827]">{step.title}</h3>
              <p className="mx-auto mt-2.5 max-w-[18ch] text-[10.5px] leading-6 text-[#475569]">
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
