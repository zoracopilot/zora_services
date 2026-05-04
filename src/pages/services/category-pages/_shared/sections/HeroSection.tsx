import React from "react";
import { Link } from "react-router-dom";
import type { ServiceLandingContent } from "../types";

type Props = {
  content: ServiceLandingContent;
};

const HeroSection: React.FC<Props> = ({ content }) => {
  return (
    <section className="border-b border-slate-200 px-6 pb-14 pt-28">
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/services" className="transition hover:text-violet-600">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{content.title}</span>
        </div>

        <div className="overflow-hidden rounded-[30px] border border-slate-200 bg-[linear-gradient(135deg,#0f172a_0%,#1e1b4b_45%,#312e81_100%)] text-white shadow-[0_24px_80px_rgba(30,27,75,0.24)]">
          <div className="relative px-8 py-14 md:px-12 md:py-16">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.22),transparent_32%),radial-gradient(circle_at_76%_24%,rgba(168,85,247,0.22),transparent_28%),radial-gradient(circle_at_62%_74%,rgba(59,130,246,0.18),transparent_32%)]" />
            <div className="relative max-w-4xl">
              <div className="inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-violet-100">
                {content.eyebrow}
              </div>
              <h1 className="mt-6 text-4xl font-extrabold tracking-tight md:text-6xl">
                {content.title}
              </h1>
              <p className="mt-5 max-w-3xl text-lg leading-8 text-slate-200">
                {content.description}
              </p>

              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  to="/book-appointment"
                  className="rounded-2xl bg-white px-7 py-4 font-semibold text-slate-900 transition hover:bg-slate-100"
                >
                  Book Appointment
                </Link>
                <a
                  href="#capabilities"
                  className="rounded-2xl border border-white/20 bg-white/10 px-7 py-4 font-semibold text-white transition hover:bg-white/15"
                >
                  Explore Capabilities
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
