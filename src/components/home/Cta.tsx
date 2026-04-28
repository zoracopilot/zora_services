import React from "react";
import { Link } from "react-router-dom";

const Cta: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden px-4 py-16 text-center sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="pointer-events-none absolute inset-x-0 top-0 z-[5] h-16 bg-gradient-to-b from-white to-transparent" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 z-[5] h-16 bg-gradient-to-t from-white to-transparent" />

      <div className="absolute inset-0 z-0 bg-white" />

      <div
        className="pointer-events-none absolute inset-0 z-[2] opacity-60 mix-blend-screen"
        style={{
          background:
            "radial-gradient(circle at 50% 45%, rgba(255,255,255,0.58), transparent 55%)",
        }}
      />

      <div
        className="pointer-events-none absolute inset-0 z-[3]"
        style={{
          background:
            "radial-gradient(circle at 22% 25%, rgba(216,180,254,0.42), transparent 58%)," +
            "radial-gradient(circle at 80% 55%, rgba(191,219,254,0.32), transparent 60%)," +
            "linear-gradient(to bottom, rgba(255,255,255,0.28), rgba(255,255,255,0.78))",
        }}
      />

      <div className="pointer-events-none absolute inset-0 z-[4] backdrop-blur-[0.6px]" />

      <div className="relative z-10 mx-auto max-w-4xl">
        <h2 className="mb-5 font-serif text-3xl font-extrabold text-slate-950 drop-shadow-[0_10px_35px_rgba(196,181,253,0.35)] sm:mb-6 sm:text-5xl md:text-6xl">
          Ready to Build Your Competitive Edge?
        </h2>

        <p className="mx-auto mb-8 max-w-2xl text-sm leading-7 text-slate-600 sm:mb-10 sm:text-base sm:leading-8">
          Tailored to your data - Enterprise-grade security - Measurable ROI from
          day one
        </p>

        <Link
          to="/services"
          className="
            group relative inline-flex min-h-[48px] w-full max-w-[280px] items-center justify-center
            overflow-hidden rounded-xl border border-[#c4b5fd] bg-[#c4b5fd] px-6 py-3
            font-sans font-semibold text-[#2f1f52] backdrop-blur-md
            shadow-[0_14px_38px_rgba(196,181,253,0.28),0_0_24px_rgba(196,181,253,0.18),inset_0_1px_0_rgba(255,255,255,0.35)]
            active:scale-[0.97] will-change-transform
            focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-violet-300 focus-visible:ring-offset-2 focus-visible:ring-offset-[#ffffff]
            sm:min-h-[56px] sm:w-auto sm:max-w-none sm:px-8 sm:py-4
          "
        >
          <span className="relative z-10 text-base font-bold sm:text-xl">
            Explore Our Solutions
          </span>
        </Link>
      </div>
    </section>
  );
};

export default Cta;
