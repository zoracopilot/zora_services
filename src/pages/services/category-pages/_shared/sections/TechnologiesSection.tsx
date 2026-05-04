import React from "react";
import type { ServiceLandingContent } from "../types";

type Props = {
  content: ServiceLandingContent;
};

const TechnologiesSection: React.FC<Props> = ({ content }) => {
  return (
    <section className="rounded-3xl border border-slate-200 bg-white/92 p-8 shadow-[0_24px_70px_rgba(15,23,42,0.08)] md:p-10">
      <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-600">
        Technologies
      </p>
      <h2 className="mt-3 text-3xl font-extrabold tracking-tight text-slate-900 md:text-4xl">
        Category-specific tools and platforms
      </h2>
      <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
        Each service category uses a different operating stack, delivery model and execution toolkit
        based on the business problem being solved.
      </p>

      <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {content.technologies.map((technology) => (
          <div
            key={technology}
            className="rounded-2xl border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_100%)] px-5 py-4 text-center text-base font-semibold text-slate-800"
          >
            {technology}
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologiesSection;
