import React from "react";
import type { ServiceLandingContent } from "../types";

type Props = {
  content: ServiceLandingContent;
};

const OverviewSection: React.FC<Props> = ({ content }) => {
  return (
    <section
      id="capabilities"
      className="rounded-3xl border border-slate-200 bg-white/92 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-10"
    >
      <div className="max-w-3xl">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
          Service Overview
        </p>
        <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
          {content.overviewTitle}
        </h2>
        <p className="mt-4 text-lg leading-relaxed text-slate-600">
          {content.overviewDescription}
        </p>
      </div>

      <div className="mt-10 grid gap-6 md:grid-cols-2">
        {content.capabilities.map((capability) => (
          <article
            key={capability.title}
            className="rounded-[28px] border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] p-7 shadow-[0_10px_30px_rgba(15,23,42,0.04)]"
          >
            <h3 className="text-2xl font-bold text-slate-900">{capability.title}</h3>
            <p className="mt-3 text-base leading-7 text-slate-600">{capability.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {capability.highlights.map((highlight) => (
                <span
                  key={highlight}
                  className="rounded-full border border-slate-200 bg-white px-3 py-1.5 text-sm text-slate-700"
                >
                  {highlight}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default OverviewSection;
