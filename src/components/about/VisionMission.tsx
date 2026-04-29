import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#f6f0ff,#eef2ff)] shadow-[0_24px_70px_rgba(148,163,184,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[0.65fr_1.9fr_0.65fr]">
          <div className="flex items-center justify-center border-b border-violet-100/80 p-6 lg:border-b-0 lg:border-r">
            <div className="flex min-h-[180px] w-full items-center justify-center rounded-[24px] border-2 border-dashed border-violet-200 bg-white/80">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                  Image Placeholder
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Mission image here
                </p>
              </div>
            </div>
          </div>

          <div className="grid border-b border-violet-100/80 lg:grid-cols-2 lg:border-b-0">
            <div className="flex h-full flex-col justify-center border-b border-violet-100/80 p-6 lg:border-b-0 lg:border-r lg:p-8">
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-3xl">
                Our Mission
              </h2>
              <p className="mt-4 hidden max-w-[36rem] text-[14px] leading-7 text-slate-600 lg:block">
                <span className="block whitespace-nowrap">
                  To empower businesses with intelligent solutions
                </span>
                <span className="block whitespace-nowrap">
                  that automate processes, unlock insights,
                </span>
                <span className="block whitespace-nowrap">
                  and drive sustainable growth.
                </span>
              </p>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-600 lg:hidden">
                To empower businesses with intelligent solutions that automate
                processes, unlock insights, and drive sustainable growth.
              </p>
            </div>

            <div className="flex h-full flex-col justify-center p-6 lg:p-8">
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-3xl">
                Our Vision
              </h2>
              <p className="mt-4 hidden max-w-[36rem] text-[14px] leading-7 text-slate-600 lg:block">
                <span className="block whitespace-nowrap">
                  To be a global leader in AI innovation, creating
                </span>
                <span className="block whitespace-nowrap">
                  a future where technology empowers people
                </span>
                <span className="block whitespace-nowrap">
                  and transforms every possibility.
                </span>
              </p>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-600 lg:hidden">
                To be a global leader in AI innovation, creating a future
                where technology empowers people and transforms every
                possibility.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-center p-6 lg:border-l lg:border-violet-100/80">
            <div className="flex min-h-[180px] w-full items-center justify-center rounded-[24px] border-2 border-dashed border-violet-200 bg-white/80">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                  Image Placeholder
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Vision image here
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
