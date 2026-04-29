import React from "react";

const OurStory: React.FC = () => {
  return (
    <section className="mt-8">
      <div className="grid items-center gap-12 lg:grid-cols-[1.02fr_0.98fr]">
        <div className="relative">
          <div className="absolute -bottom-4 -left-4 h-28 w-28 bg-[radial-gradient(circle,rgba(167,139,250,0.22)_1px,transparent_1px)] bg-[size:10px_10px]" />
          <div className="relative overflow-hidden rounded-[28px] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f7f5ff)] p-5 shadow-[0_24px_70px_rgba(148,163,184,0.12)]">
            <div className="flex min-h-[290px] items-center justify-center rounded-[22px] border-2 border-dashed border-violet-200 bg-white">
              <div className="text-center">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-violet-400">
                  Image Placeholder
                </p>
                <p className="mt-3 text-sm text-slate-400">
                  Story section image can be added here
                </p>
              </div>
            </div>
          </div>
        </div>

        <div>
          <h2 className="font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
            Our Story
          </h2>

          <div className="mt-6 space-y-5 text-base leading-8 text-slate-600 sm:text-lg">
            <p>
              Zora Global AI was founded with a simple idea: make AI
              accessible, actionable, and transformative for every business.
            </p>
            <p>
              What started as a focused technology vision has grown into a
              trusted AI solutions company helping organizations modernize
              operations, improve decision-making, and unlock sustainable
              digital growth.
            </p>
            <p>
              Our journey is built on innovation, collaboration, and a
              relentless focus on delivering value through intelligent systems
              that solve real business problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurStory;
