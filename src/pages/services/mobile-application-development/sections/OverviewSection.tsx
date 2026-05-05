import React from "react";
import { AppWindow, Smartphone, TabletSmartphone, Wrench } from "lucide-react";
import TextReveal from "../../../../components/about/TextReveal";
import { mobileAppOverviewCards } from "../content";

const icons = [Smartphone, TabletSmartphone, AppWindow, Wrench] as const;

const OverviewSection: React.FC = () => {
  return (
    <section
      id="overview"
      className="border border-slate-200/70 bg-[linear-gradient(180deg,#f1f6ff_0%,#dfe9ff_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:px-8"
    >
      <div className="grid gap-10 lg:grid-cols-[minmax(0,0.95fr)_420px] lg:items-start lg:gap-12">
        <div>
          <div className="max-w-[760px]">
            <TextReveal>
              <p className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
                Overview
              </p>
              <h2 className="mt-4 max-w-[520px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
                End-to-End Mobile Apps
                <span className="block">Built for Real Users</span>
              </h2>
            </TextReveal>
            <TextReveal delay={0.08} className="mt-6 max-w-[760px] space-y-5 text-base leading-8 text-slate-600">
              <p>
                We build mobile applications that combine strong user experience,
                scalable engineering, and business-focused functionality. From startup
                MVPs to enterprise mobile products, our team creates solutions that
                feel intuitive and perform reliably across devices.
              </p>
              <p>
                Whether you need an Android app, an iOS experience, or a cross-platform
                product, we focus on speed, stability, and long-term maintainability so
                your app can grow with your users and your business.
              </p>
            </TextReveal>
          </div>

          <TextReveal delay={0.14} className="mt-10">
            <h3 className="text-2xl font-semibold tracking-[-0.02em] text-slate-950">
              What We Offer
            </h3>
          </TextReveal>

          <div className="mt-6 grid max-w-[920px] gap-5 md:grid-cols-2">
            {mobileAppOverviewCards.map((item, index) => {
              const Icon = icons[index] ?? Smartphone;

              return (
                <TextReveal
                  key={item.title}
                  delay={0.06 * index}
                  className="border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center bg-violet-50 text-violet-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                </TextReveal>
              );
            })}
          </div>
        </div>

        <TextReveal delay={0.12} className="lg:sticky lg:top-36">
          <div className="overflow-hidden border border-slate-200 bg-slate-50 shadow-[0_16px_48px_rgba(15,23,42,0.08)]">
            <img
              src="/home-services/mobileapplication.webp"
              alt="Mobile application development"
              className="h-full w-full object-cover"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default OverviewSection;
