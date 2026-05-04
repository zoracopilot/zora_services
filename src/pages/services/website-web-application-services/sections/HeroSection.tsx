import React from "react";
import { ArrowRight, ChevronRight, Code2, Gauge, Sparkles } from "lucide-react";
import { Link } from "react-router-dom";
import { websiteWebAppHeroHighlights } from "../content";

const HeroSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden rounded-[34px] border border-[#232d73] bg-[#090d2f] shadow-[0_40px_120px_rgba(20,24,74,0.34)]">
      <div className="relative">
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,33,0.96)_0%,rgba(8,11,33,0.92)_35%,rgba(19,18,68,0.8)_62%,rgba(46,14,110,0.68)_100%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,212,255,0.34),transparent_22%),radial-gradient(circle_at_76%_58%,rgba(153,69,255,0.38),transparent_20%),radial-gradient(circle_at_92%_20%,rgba(89,120,255,0.28),transparent_16%)]" />

        <div className="relative grid gap-12 px-8 py-12 lg:grid-cols-[minmax(0,1.02fr)_minmax(360px,0.98fr)] lg:px-12 lg:py-16 xl:px-16">
          <div className="max-w-[560px]">
            <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-white/72">
              <Link to="/" className="transition hover:text-white" onClick={scrollTop}>
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/services" className="transition hover:text-white" onClick={scrollTop}>
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Website &amp; Web Application Services</span>
            </div>

            <h1 className="max-w-[500px] text-4xl font-semibold leading-[1.04] tracking-[-0.045em] text-white md:text-5xl lg:text-[4rem]">
              Website &amp; Web
              <span className="mt-3 block">Application Services</span>
            </h1>

            <p className="mt-6 max-w-[460px] text-lg leading-8 text-white/78 md:text-[1.25rem]">
              Scalable, secure &amp; future-ready web solutions that drive real business impact.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)] transition hover:bg-violet-500"
              >
                Let's Build Together
                <ArrowRight size={16} />
              </Link>
              <a
                href="#overview"
                className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
              >
                View Our Work
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/82">
              {websiteWebAppHeroHighlights.map((item) => (
                <div key={item} className="inline-flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-violet-400" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          <div className="relative hidden min-h-[360px] lg:block">
            <div className="absolute left-[10%] top-[14%] h-10 w-10 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_18px_32px_rgba(8,11,33,0.24)]" />
            <div className="absolute left-[4%] top-[58%] flex h-16 w-16 items-center justify-center rounded-[20px] bg-violet-500/24 text-violet-100 backdrop-blur-md shadow-[0_20px_36px_rgba(92,44,201,0.3)]">
              <Code2 size={26} />
            </div>
            <div className="absolute right-[0%] top-[4%] flex h-16 w-16 items-center justify-center rounded-[20px] bg-sky-400/18 text-sky-100 backdrop-blur-md shadow-[0_20px_36px_rgba(35,165,255,0.25)]">
              <Sparkles size={24} />
            </div>
            <div className="absolute right-[10%] top-[18%] h-[260px] w-[170px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,31,86,0.9),rgba(10,13,42,0.95))] p-4 shadow-[0_28px_70px_rgba(8,11,33,0.4)] backdrop-blur-xl">
              <div className="mb-4 h-7 w-24 rounded-full bg-violet-400/18" />
              <div className="mb-3 h-16 rounded-2xl bg-sky-400/10" />
              <div className="space-y-3">
                <div className="h-2 rounded-full bg-white/20" />
                <div className="h-2 w-4/5 rounded-full bg-white/15" />
                <div className="h-2 w-3/5 rounded-full bg-white/10" />
              </div>
              <div className="mt-6 h-24 rounded-2xl bg-violet-500/14" />
            </div>
            <div className="absolute left-[18%] top-[12%] h-[320px] w-[76%] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,73,0.96),rgba(9,12,42,0.98))] p-5 shadow-[0_34px_80px_rgba(9,12,42,0.5)] backdrop-blur-xl">
              <div className="mb-4 flex items-center gap-2">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
              </div>
              <div className="grid h-[calc(100%-1.5rem)] grid-cols-[1.1fr_0.9fr] gap-4">
                <div className="space-y-4">
                  <div className="grid grid-cols-3 gap-3">
                    {[1, 2, 3].map((item) => (
                      <div key={item} className="h-20 rounded-2xl bg-white/6" />
                    ))}
                  </div>
                  <div className="rounded-[24px] bg-white/6 p-4">
                    <div className="mb-4 h-3 w-36 rounded-full bg-white/18" />
                    <div className="relative h-32 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(30,38,112,0.85),rgba(20,24,73,0.92))]">
                      <div className="absolute inset-x-4 bottom-8 h-[2px] bg-white/10" />
                      <div className="absolute inset-y-4 left-10 w-[2px] bg-white/10" />
                      <div className="absolute left-10 top-16 h-[2px] w-[74%] origin-left rotate-[8deg] rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-300 shadow-[0_0_20px_rgba(96,165,250,0.45)]" />
                      <div className="absolute left-[42%] top-[44%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]" />
                      <div className="absolute left-[70%] top-[34%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.85)]" />
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div className="rounded-[22px] bg-white/6 p-4">
                    <div className="mb-3 h-3 w-24 rounded-full bg-white/18" />
                    <div className="space-y-2">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="h-10 rounded-xl bg-white/8" />
                      ))}
                    </div>
                  </div>
                  <div className="rounded-[22px] bg-white/6 p-4">
                    <div className="mb-3 h-3 w-24 rounded-full bg-white/18" />
                    <div className="grid grid-cols-2 gap-3">
                      {[1, 2, 3, 4].map((item) => (
                        <div key={item} className="flex h-20 items-center justify-center rounded-2xl bg-white/8 text-violet-200/90">
                          <Gauge size={20} />
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
