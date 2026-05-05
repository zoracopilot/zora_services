import React from "react";
import { ArrowRight, Bot, MonitorSmartphone, Smartphone } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";
import { businessStrategyExploreServices } from "../content";

const ExploreMoreServicesSection: React.FC = () => {
  const icons = [MonitorSmartphone, Bot, Smartphone] as const;
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 py-7 sm:px-6 sm:py-8 lg:px-8 lg:py-9">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal className="text-center sm:text-left">
          <p
            className="text-sm font-extrabold uppercase tracking-[0.22em]"
            style={{ color: "#6d28d9" }}
          >
            Explore More Services
          </p>
        </TextReveal>

        <div className="mt-5 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {businessStrategyExploreServices.map((service, index) => (
            <TextReveal
              key={service.title}
              delay={0.08 * index}
              className="h-full"
            >
              {(() => {
                const Icon = icons[index] ?? MonitorSmartphone;

                return (
              <article className="group mx-auto flex h-full w-full max-w-none flex-col items-center gap-4 rounded-[22px] border border-[#ece8fb] bg-white px-5 py-5 text-center shadow-[0_12px_30px_rgba(89,76,160,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:shadow-[0_16px_36px_rgba(89,76,160,0.09)] sm:items-start sm:text-left">
                <div className="flex h-[76px] w-[76px] flex-none items-center justify-center rounded-2xl bg-[radial-gradient(circle_at_center,#f7f2ff_0%,#eef2ff_72%,#ffffff_100%)] text-violet-600 transition-transform duration-300 group-hover:scale-[1.03]">
                  <Icon size={34} strokeWidth={1.9} />
                </div>

                <div className="flex flex-1 flex-col items-center sm:items-start">
                  <h3 className="text-[1rem] font-semibold leading-[1.2] tracking-[-0.03em] text-slate-950 sm:text-[1.12rem]">
                    {service.title}
                  </h3>
                  <p className="mt-2 flex-1 text-[0.92rem] leading-7 text-slate-600">
                    {service.description}
                  </p>

                  <Link
                    to={service.href}
                    onClick={scrollTop}
                    className="mt-4 inline-flex min-h-[44px] items-center gap-2 self-center text-sm font-semibold text-violet-600 transition-colors duration-300 hover:text-violet-700 sm:self-start"
                  >
                    View Services
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </article>
                );
              })()}
            </TextReveal>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreServicesSection;
