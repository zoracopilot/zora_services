import React from "react";
import { BrainCircuit, BriefcaseBusiness } from "lucide-react";

const stats = [
  {
    icon: BrainCircuit,
    value: "200+",
    label: "AI Experts & Innovators",
  },
  {
    icon: BriefcaseBusiness,
    value: "500+",
    label: "Projects Delivered",
  },
];

const AboutHero: React.FC = () => {
  return (
    <section className="relative overflow-hidden pt-[calc(var(--nav-h,0px)+2.5rem)]">
      <div className="mx-auto max-w-7xl px-4 pb-14 sm:px-6 sm:pb-16 lg:px-8 lg:pb-20">
        <div className="grid min-h-[520px] items-stretch gap-8 lg:grid-cols-[1.05fr_0.85fr] lg:gap-10">
          <div className="relative flex flex-col justify-center py-8 sm:py-10 lg:py-12">
            <div className="absolute inset-y-0 right-0 hidden w-32 bg-[radial-gradient(circle_at_left,rgba(196,181,253,0.26),transparent_72%)] lg:block" />
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-violet-600 sm:text-sm">
              About Us
            </p>

            <h1 className="mt-5 max-w-[12ch] font-serif text-4xl font-black leading-[0.96] tracking-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-7xl">
              Pioneering AI Solutions.
              <span className="mt-3 block text-violet-600">
                Built on Trust. Driven by Impact.
              </span>
            </h1>

            <p className="mt-6 max-w-[35rem] text-base leading-7 text-slate-600 sm:text-lg">
              At Zora Global AI, we believe artificial intelligence has the
              power to transform industries, empower people, and solve complex
              challenges. Our mission is to deliver intelligent solutions that
              create measurable impact for businesses and society.
            </p>

            <div className="mt-7 h-1 w-16 rounded-full bg-violet-300" />

            <div className="mt-8 grid gap-4 sm:grid-cols-2">
              {stats.map(({ icon: Icon, value, label }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-violet-100 bg-[#fcfbff] px-5 py-4 shadow-[0_14px_32px_rgba(148,163,184,0.1)]"
                >
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <Icon size={22} />
                  </div>
                  <div>
                    <p className="text-3xl font-black leading-none text-violet-600">
                      {value}
                    </p>
                    <p className="mt-1 text-sm font-medium leading-5 text-slate-500">
                      {label}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="relative min-h-[360px] overflow-hidden rounded-[28px] border border-violet-100 bg-[linear-gradient(135deg,#f5f3ff,#eef2ff)] p-4 sm:min-h-[420px] sm:p-5 lg:min-h-[520px]">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(196,181,253,0.32),transparent_32%),radial-gradient(circle_at_bottom_right,rgba(191,219,254,0.28),transparent_34%)]" />
            <div className="relative flex h-full min-h-[328px] items-center justify-center rounded-[24px] border-2 border-dashed border-violet-200/90 bg-white/70 sm:min-h-[380px] lg:min-h-[480px]">
              <div className="text-center">
                <p className="text-xs font-semibold uppercase tracking-[0.14em] text-violet-400 sm:text-sm">
                  Image Placeholder
                </p>
                <p className="mt-2 text-sm text-slate-400 sm:text-base">
                  Hero image can be added here later
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutHero;
