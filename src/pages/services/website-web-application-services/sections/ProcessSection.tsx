import React from "react";
import { Code2, PencilRuler, Rocket, Search, ShieldCheck, Users } from "lucide-react";
import { websiteWebAppProcessSteps } from "../content";

const icons = [Search, Users, PencilRuler, Code2, ShieldCheck, Rocket] as const;

const ProcessSection: React.FC = () => {
  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-white/92 px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
        How We Deliver
      </p>
      <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-[2.45rem]">
        Our Proven Delivery Process
      </h2>
      <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-600">
        We follow a collaborative and agile process to deliver high-quality solutions.
      </p>

      <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
        {websiteWebAppProcessSteps.map((step, index) => {
          const Icon = icons[index] ?? Search;

          return (
            <article
              key={step.title}
              className="relative rounded-[26px] border border-slate-200/80 bg-white px-5 py-7 text-center shadow-[0_16px_48px_rgba(15,23,42,0.05)]"
            >
              <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-600">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
              {index < websiteWebAppProcessSteps.length - 1 ? (
                <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-violet-200 xl:block" />
              ) : null}
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default ProcessSection;
