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
    <section className="overflow-hidden border border-[#efebfb] bg-white px-5 py-10 shadow-[0_14px_40px_rgba(89,76,160,0.05)] sm:px-6 lg:px-8 lg:py-12">
      <div className="mx-auto grid max-w-[1380px] gap-10 lg:grid-cols-[minmax(0,0.9fr)_minmax(560px,1fr)] lg:items-center lg:gap-8">
        <div>
          <TextReveal delay={0.08}>
            <h2 className="max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#0b123f] md:text-[2.55rem]">
              48 Services.
              <span className="mt-2 block text-[#5d3df5]">Delivered in 48 Hours.</span>
            </h2>
          </TextReveal>

          <TextReveal delay={0.16}>
            <p className="mt-6 max-w-[760px] text-base leading-8 text-[#5e6684]">
              We help businesses launch, grow, and scale with 48 essential digital
              solutions, all designed, developed, and delivered within 48 hours with
              finalized requirements.
            </p>
          </TextReveal>

          <div className="mt-12 grid gap-6 md:grid-cols-3 md:gap-0">
            {highlights.map((item, index) => {
              const Icon = item.icon;

              return (
                <TextReveal
                  key={item.title}
                  delay={0.24 + index * 0.08}
                  className={`flex min-h-[198px] items-start gap-5 ${index < highlights.length - 1 ? "md:pr-6" : ""} ${index > 0 ? "md:pl-6" : ""}`}
                >
                  <span className="inline-flex h-16 w-16 flex-none items-center justify-center rounded-full bg-[#f7f2ff] text-[#6f3df4] shadow-[0_10px_24px_rgba(111,61,244,0.08)]">
                    <Icon size={26} strokeWidth={2} />
                  </span>
                  <div className="flex min-w-0 flex-1 flex-col pt-1">
                    <h3 className="min-h-[84px] text-[1.7rem] font-semibold leading-[1.05] tracking-[-0.03em] text-[#121936]">
                      {item.title}
                    </h3>
                    <p className="mt-3 max-w-[12ch] text-lg leading-8 text-[#6a7088]">
                      {item.description}
                    </p>
                  </div>
                </TextReveal>
              );
            })}
          </div>
        </div>

        <TextReveal delay={0.12}>
          <div className="flex justify-end">
            <img
              src="/services/Web_application/ProjectDuration.png"
              alt="48 services delivered in 48 hours"
              className="w-full max-w-[760px] object-contain"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default TimelineSection;
