import React from "react";
import { BadgeCheck, Rocket, ShieldCheck } from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";

const highlights = [
  {
    icon: Rocket,
    title: "48 HOURS",
    description: "Fast Delivery",
  },
  {
    icon: ShieldCheck,
    title: "100% QUALITY",
    description: "No Compromise",
  },
  {
    icon: BadgeCheck,
    title: "CLIENT FOCUSED",
    description: "Your Success, Our Priority",
  },
] as const;

const TimelineSection: React.FC = () => {
  return (
    <section
      className="relative min-h-[440px] overflow-hidden border border-[#efebfb] bg-white px-5 pt-8 pb-6 shadow-[0_14px_40px_rgba(89,76,160,0.05)] sm:px-6 lg:min-h-[520px] lg:px-8 lg:pt-9 lg:pb-7"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 bg-right bg-cover bg-no-repeat"
        style={{
          backgroundImage: "url('/services/Web_application/timeline_BG.png')",
        }}
      />

      <div className="relative z-10 mx-auto max-w-[1380px]">
        <div className="flex min-h-[360px] max-w-[760px] flex-col items-start justify-center lg:min-h-[440px]">
          <TextReveal delay={0.08}>
            <h2 className="max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0b123f] md:text-[2.55rem]">
              48 Services.
              <span className="mt-2 block text-[#5d3df5]">Delivered in 48 Hours.</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.16}>
            <p className="mt-4 max-w-[700px] text-base leading-7 text-[#5e6684]">
              We help businesses launch, grow, and scale with 48 essential digital
              solutions, all designed, developed, and delivered within 48 hours with
              finalized requirements.
            </p>
          </TextReveal>

          <div className="mt-6 grid w-full max-w-[740px] gap-4 md:grid-cols-3 md:gap-4">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <TextReveal
                  key={item.title}
                  delay={0.24 + index * 0.08}
                  className="flex items-center gap-4"
                >
                  <span className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[#f7f2ff] text-[#6f3df4] shadow-[0_10px_24px_rgba(111,61,244,0.08)]">
                    <Icon size={21} strokeWidth={2} />
                  </span>
                  <div className="min-w-0">
                    <h3 className="text-[1.05rem] font-semibold leading-tight tracking-[-0.02em] text-[#121936] md:whitespace-nowrap">
                      {item.title}
                    </h3>
                    <p className="mt-0.5 text-[0.95rem] leading-6 text-[#6a7088] md:whitespace-nowrap">
                      {item.description}
                    </p>
                  </div>
                </TextReveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
