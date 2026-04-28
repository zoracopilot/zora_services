import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h,0px)]">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(167,139,250,0.14),transparent_28%),radial-gradient(circle_at_78%_22%,rgba(191,219,254,0.18),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(216,180,254,0.16),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-y-0 right-[-8%] hidden w-[48%] bg-[radial-gradient(circle_at_center,rgba(216,180,254,0.16),transparent_58%)] lg:block" />

      <div className="relative mx-auto max-w-7xl px-4 pb-12 pt-8 sm:px-6 sm:pb-16 sm:pt-12 lg:px-8 lg:pb-20">
        <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,660px)_minmax(280px,1fr)] lg:gap-6 xl:grid-cols-[minmax(0,720px)_minmax(320px,1fr)]">
          <div className="mx-auto w-full max-w-[720px] lg:mx-0">
            <h1 className="max-w-[13ch] font-sans text-[2.75rem] font-semibold leading-[0.96] text-slate-950 sm:max-w-[14ch] sm:text-5xl sm:leading-[0.98] lg:max-w-none lg:text-[3.3rem] lg:leading-[0.95] xl:text-[3.7rem]">
              <span className="block whitespace-nowrap">Built on trust,</span>
              <span className="block whitespace-nowrap bg-gradient-to-r from-[#7c5cff] via-[#6d5ef5] to-[#a78bfa] bg-clip-text text-transparent">
                driven by intelligence
              </span>
            </h1>

            <p className="mt-6 max-w-[32rem] text-base leading-8 text-slate-600 sm:text-lg sm:leading-8">
              Designed with reliability at the core and flexibility for the
              future, our technology evolves alongside your business.
            </p>
            <div className="mt-8 sm:mt-9">
              <Link
                to="/services"
                className="inline-flex min-h-[50px] min-w-[184px] items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-[0_12px_28px_rgba(148,163,184,0.12)] transition-colors hover:bg-violet-50 sm:min-h-[54px]"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
            </div>
          </div>

          <div className="relative mx-auto w-full max-w-[460px] sm:max-w-[520px] lg:ml-auto lg:mr-0 lg:max-w-[560px] xl:max-w-[620px]">
            <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_52%_50%,rgba(216,180,254,0.28),transparent_54%)] blur-3xl" />
            <div className="pointer-events-none absolute inset-x-[16%] bottom-[12%] top-[16%] rounded-[999px] bg-[linear-gradient(135deg,rgba(255,255,255,0.78),rgba(244,239,255,0.28))]" />
            <div className="pointer-events-none absolute inset-x-[8%] inset-y-[8%] rounded-[999px] border border-violet-100/60" />

            <div className="relative overflow-hidden rounded-[32px] sm:rounded-[36px]">
              <img
                src="/hero/robot.webp"
                alt="AI-powered enterprise technology"
                className="mx-auto w-full max-w-[460px] object-contain sm:max-w-[520px] lg:max-w-[560px] xl:max-w-[620px]"
                loading="eager"
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
