import React from "react";
import { ArrowRight, Globe, Layers3, MonitorSmartphone, ShoppingCart } from "lucide-react";
import { websiteWebAppOverviewCards } from "../content";

const icons = [Globe, MonitorSmartphone, ShoppingCart, Layers3] as const;

const OverviewSection: React.FC = () => {
  return (
    <section
      id="overview"
      className="rounded-[32px] border border-slate-200/70 bg-white/92 px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] backdrop-blur-sm lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
            Service Overview
          </p>
          <h2 className="mt-4 max-w-[420px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
            End-to-End Web Solutions Built for Growth
          </h2>
        </div>
        <p className="max-w-[620px] text-base leading-8 text-slate-600">
          As a startup, we help businesses establish a powerful digital presence with custom
          websites and web applications that are fast, secure, and scalable. From idea to launch
          and beyond, we build solutions that grow with your business.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {websiteWebAppOverviewCards.map((item, index) => {
          const Icon = icons[index] ?? Globe;

          return (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                <Icon size={24} />
              </div>
              <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <a
                href="#cta"
                className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
              >
                Learn More
                <ArrowRight size={16} />
              </a>
            </article>
          );
        })}
      </div>
    </section>
  );
};

export default OverviewSection;
