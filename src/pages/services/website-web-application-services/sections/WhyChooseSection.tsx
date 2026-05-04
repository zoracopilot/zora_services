import React from "react";
import { LifeBuoy, Rocket, Settings2, Users } from "lucide-react";
import { websiteWebAppDifferentiators } from "../content";

const icons = [Rocket, Users, Settings2, LifeBuoy] as const;

const WhyChooseSection: React.FC = () => {
  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-white/92 px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:px-8">
      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
        Why Choose Us
      </p>
      <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {websiteWebAppDifferentiators.map((item, index) => {
          const Icon = icons[index] ?? Rocket;

          return (
            <article
              key={item.title}
              className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                <Icon size={22} />
              </div>
              <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default WhyChooseSection;
