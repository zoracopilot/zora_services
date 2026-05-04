import React from "react";
import { ArrowRight, Medal, Rocket, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";

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
    icon: Medal,
    title: "CLIENT FOCUSED",
    description: "Your Success, Our Priority",
  },
] as const;

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-1 pt-2">
      <div className="overflow-hidden rounded-[26px] border border-[#ece8fb] bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_22%),radial-gradient(circle_at_bottom_right,rgba(139,92,246,0.08),transparent_20%),linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-4 py-5 shadow-[0_20px_56px_rgba(99,102,241,0.08)] sm:px-6 sm:py-7 lg:px-8 lg:py-8 xl:px-10">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,0.94fr)_minmax(320px,0.88fr)] lg:items-center lg:gap-8 xl:grid-cols-[minmax(0,0.98fr)_minmax(420px,0.92fr)]">
          <div className="max-w-[620px]">
            <h3 className="max-w-[10ch] text-[2.25rem] font-semibold leading-[0.98] tracking-[-0.05em] text-[#060b3f] sm:text-[3rem] lg:text-[3.7rem] xl:text-[4.2rem]">
              48 Services.
              <span className="mt-1 block text-[#4f46e5]">Delivered in 48 Hours.</span>
            </h3>

            <p className="mt-5 max-w-[560px] text-[15px] leading-8 text-[#4f5878] sm:text-base lg:text-[1.02rem]">
              We help businesses launch, grow, and scale with 48 essential digital solutions all
              designed, developed, and delivered within 48 hours with finalized requirements.
            </p>

            <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3 lg:gap-0">
              {highlights.map((item, index) => {
                const Icon = item.icon;

                return (
                  <div
                    key={item.title}
                    className={`flex items-center gap-3 lg:px-5 ${index === 0 ? "lg:pl-0" : ""} ${index < highlights.length - 1 ? "lg:border-r lg:border-[#ddd8f7]" : ""}`}
                  >
                    <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full bg-[linear-gradient(180deg,#fbf9ff_0%,#f0ebff_100%)] text-[#5b46f6] shadow-[0_10px_24px_rgba(99,102,241,0.10)] sm:h-14 sm:w-14">
                      <Icon size={22} strokeWidth={1.9} />
                    </div>
                    <div>
                      <p className="text-[0.95rem] font-semibold uppercase tracking-[-0.02em] text-[#0d123f] sm:text-base">
                        {item.title}
                      </p>
                      <p className="mt-0.5 text-[0.95rem] leading-6 text-[#545b79] sm:text-lg">
                        {item.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <div className="mx-auto w-full max-w-[560px] lg:max-w-[460px] xl:max-w-[560px]">
            <img
              src="/services/Web_application/48-hours-visual.webp"
              alt="48 hours service delivery visual"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
