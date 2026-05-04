import React from "react";
import { Link } from "react-router-dom";
import type { ServiceLandingContent } from "../types";

type Props = {
  content: ServiceLandingContent;
};

const CtaSection: React.FC<Props> = ({ content }) => {
  return (
    <section className="rounded-3xl bg-[linear-gradient(135deg,#111827_0%,#312e81_52%,#4c1d95_100%)] p-8 text-white shadow-[0_24px_80px_rgba(49,46,129,0.24)] md:p-10">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-violet-200">
            Ready To Start
          </p>
          <h2 className="mt-3 text-3xl font-extrabold tracking-tight md:text-4xl">
            {content.ctaTitle}
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-violet-100/90">
            {content.ctaDescription}
          </p>
        </div>

        <div className="flex flex-wrap gap-4">
          <Link
            to="/book-appointment"
            className="rounded-2xl bg-white px-8 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
          >
            Book Appointment
          </Link>
          <Link
            to="/services"
            className="rounded-2xl border border-white/20 bg-white/10 px-8 py-4 font-semibold text-white transition hover:bg-white/15"
          >
            Back to Services
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
