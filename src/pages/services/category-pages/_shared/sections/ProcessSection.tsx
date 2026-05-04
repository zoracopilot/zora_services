import React from "react";
import type { ServiceLandingContent } from "../types";

type Props = {
  content: ServiceLandingContent;
};

const ProcessSection: React.FC<Props> = ({ content }) => {
  return (
    <section className="grid gap-8 lg:grid-cols-[1.15fr_0.85fr]">
      <div className="rounded-3xl border border-slate-200 bg-white/92 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
          Delivery Process
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          Structured for clarity, delivery and growth
        </h2>

        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {content.process.map((step, index) => (
            <article
              key={step.title}
              className="rounded-[26px] border border-slate-200 bg-slate-50 p-6"
            >
              <div className="text-sm font-semibold text-violet-600">0{index + 1}</div>
              <h3 className="mt-3 text-xl font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-base leading-7 text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </div>

      <div className="rounded-3xl border border-slate-200 bg-[linear-gradient(180deg,#f8fbff_0%,#eef4ff_100%)] p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-10">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
          What Clients Get
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900">
          Better structure and clearer positioning
        </h2>
        <div className="mt-6 space-y-4">
          {content.outcomes.map((outcome) => (
            <div
              key={outcome}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 text-base text-slate-700"
            >
              {outcome}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProcessSection;
