import React from "react";

const VisionMission: React.FC = () => {
  return (
    <section className="mt-20">
      <div className="overflow-hidden rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#f6f0ff,#eef2ff)] shadow-[0_24px_70px_rgba(148,163,184,0.14)]">
        <div className="grid gap-0 lg:grid-cols-[0.8fr_1.7fr_0.8fr]">
          <div className="flex min-h-[220px] items-center justify-center border-b border-violet-100/80 bg-[linear-gradient(180deg,rgba(255,255,255,0.6),rgba(243,237,255,0.92))] px-5 py-7 lg:border-b-0 lg:border-r">
            <img
              src="/about/ourmission.webp"
              alt="Mission illustration"
              className="h-auto w-full max-w-[250px] object-contain mix-blend-multiply"
            />
          </div>

          <div className="grid border-b border-violet-100/80 lg:grid-cols-2 lg:border-b-0">
            <div className="flex h-full flex-col justify-center border-b border-violet-100/80 p-6 lg:border-b-0 lg:border-r lg:px-10 lg:py-8">
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-[2rem]">
                Our Mission
              </h2>
              <p className="mt-5 hidden max-w-[20rem] text-[13px] leading-8 text-slate-600 lg:block">
                To empower businesses with intelligent solutions that automate
                processes, unlock insights, and drive growth.
              </p>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-600 lg:hidden">
                To empower businesses with intelligent solutions that automate
                processes, unlock insights, and drive growth.
              </p>
            </div>

            <div className="flex h-full flex-col justify-center p-6 lg:px-10 lg:py-8">
              <h2 className="whitespace-nowrap font-serif text-2xl font-black tracking-tight text-violet-700 xl:text-[2rem]">
                Our Vision
              </h2>
              <p className="mt-5 hidden max-w-[20rem] text-[13px] leading-8 text-slate-600 lg:block">
                To be a global leader in AI innovation, creating a future
                where technology empowers people and transforms possibility.
              </p>
              <p className="mt-4 max-w-[32rem] text-[15px] leading-7 text-slate-600 lg:hidden">
                To be a global leader in AI innovation, creating a future
                where technology empowers people and transforms possibility.
              </p>
            </div>
          </div>

          <div
            className="min-h-[220px] bg-[linear-gradient(180deg,rgba(255,255,255,0.08),rgba(243,237,255,0.12)),url('/about/ourvision.webp')] bg-[length:100%_100%,92%] bg-[position:center,center] bg-no-repeat lg:border-l lg:border-violet-100/80"
            aria-label="Vision illustration"
            role="img"
          />
        </div>
      </div>
    </section>
  );
};

export default VisionMission;
