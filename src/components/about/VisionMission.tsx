import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#f6f0ff,#eef2ff)] shadow-[0_24px_70px_rgba(148,163,184,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[1fr_1.1fr_1fr]">
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
            <div className="border-b border-violet-100/80 p-8 lg:border-b-0 lg:border-r lg:p-10">
              <h2 className="font-serif text-3xl font-black tracking-tight text-violet-700">
                Our Mission
              </h2>
              <div className="mt-4 h-[2px] w-14 rounded-full bg-violet-300" />
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                To empower businesses with intelligent solutions that automate
                processes, unlock insights, and drive sustainable growth.
              </p>
            </div>

            <div className="p-8 lg:p-10">
              <h2 className="font-serif text-3xl font-black tracking-tight text-violet-700">
                Our Vision
              </h2>
              <div className="mt-4 h-[2px] w-14 rounded-full bg-violet-300" />
              <p className="mt-5 text-sm leading-7 text-slate-600 sm:text-base">
                To be a global leader in AI innovation, creating a future where
                technology empowers people and transforms every possibility.
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
