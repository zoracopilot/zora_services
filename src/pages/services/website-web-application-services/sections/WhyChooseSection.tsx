import React from "react";
import { LifeBuoy, Rocket, Settings2, Users } from "lucide-react";
import { websiteWebAppDifferentiators } from "../content";

const icons = [Rocket, Users, Settings2, LifeBuoy] as const;

const WhyChooseSection: React.FC = () => {
  return (
<<<<<<< HEAD
    <section className="overflow-hidden rounded-[24px] border border-[#ece8fb] bg-[linear-gradient(180deg,#ffffff_0%,#f7f8ff_100%)] px-5 py-8 shadow-[0_10px_30px_rgba(89,76,160,0.04)] sm:px-6 sm:py-9 lg:px-8 lg:py-10">
      <div className="mx-auto max-w-[1160px]">
        <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a90c4]">
          Why Choose Us
        </p>
=======
    <section className="border border-slate-200/70 bg-white/92 px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
        Why Choose Us
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {websiteWebAppDifferentiators.map((item, index) => {
          const Icon = icons[index] ?? Rocket;
>>>>>>> 1f6d61e57327d7abbe9b2ba7c71d76270402d363

        <div className="mt-6 grid gap-5 sm:grid-cols-2 xl:grid-cols-4 xl:gap-8">
          {websiteWebAppDifferentiators.map((item, index) => {
            const Icon = icons[index] ?? Rocket;

            return (
              <article
                key={item.title}
                className="flex items-start gap-4"
              >
                <div className="inline-flex h-12 w-12 flex-none items-center justify-center rounded-full border border-[#e8defd] bg-[#f8f3ff] text-[#7a58f1] shadow-[0_4px_14px_rgba(122,88,241,0.06)]">
                  <Icon size={18} strokeWidth={2} />
                </div>
                <div className="min-w-0">
                  <h3 className="text-[15px] font-semibold leading-6 text-[#232330]">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-[12px] leading-6 text-[#666979]">
                    {item.description}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseSection;
