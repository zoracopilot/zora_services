import React from "react";
import { Cloud, Code2, Cpu, Database, Globe, Layers3, ServerCog } from "lucide-react";
import { websiteWebAppTechnologies } from "../content";

const iconMap: Record<string, React.ComponentType<{ size?: number }>> = {
  React: Code2,
  "Next.js": Globe,
  "Node.js": Cpu,
  Laravel: Layers3,
  PHP: ServerCog,
  Python: Code2,
  MongoDB: Database,
  MySQL: Database,
  AWS: Cloud,
  Docker: Layers3,
};

const TechnologiesSection: React.FC = () => {
  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-[linear-gradient(180deg,#ffffff_0%,#f9fbff_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:px-8">
      <div className="grid gap-8 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)]">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
            Technologies We Use
          </p>
          <h2 className="mt-4 max-w-[360px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.45rem]">
            Modern Technologies for Modern Solutions
          </h2>
          <p className="mt-4 max-w-[360px] text-sm leading-7 text-slate-600">
            We leverage the latest technologies and frameworks to build fast, secure, and
            future-ready applications.
          </p>
        </div>

        <div>
          <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
            {websiteWebAppTechnologies.map((technology) => {
              const Icon = iconMap[technology] ?? Code2;

              return (
                <div
                  key={technology}
                  className="flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <Icon size={20} />
                  </div>
                  <span className="text-base font-semibold text-slate-900">{technology}</span>
                </div>
              );
            })}
          </div>

          <a
            href="#cta"
            className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
          >
            View All Technologies
          </a>
        </div>
      </div>
    </section>
  );
};

export default TechnologiesSection;
