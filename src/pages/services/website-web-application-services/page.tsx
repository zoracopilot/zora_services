import React, { useEffect } from "react";
import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import CtaSection from "./sections/CtaSection";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import ProcessSection from "./sections/ProcessSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import TimelineSection from "./sections/TimelineSection";
import WhyChooseSection from "./sections/WhyChooseSection";

const WebsiteWebApplicationServicesPage: React.FC = () => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(180deg,#fcfdff_0%,#f7f9ff_38%,#ffffff_100%)] px-4 pb-24 pt-24 text-slate-900 sm:px-6 lg:px-8">
      <PageSEO
        title="Website & Web Application Services | Zora Global AI"
        description="Scalable, secure and future-ready website and web application services for startups, businesses and growing digital products."
        canonical="/services/website-web-application-services"
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          {
            name: "Website & Web Application Services",
            path: "/services/website-web-application-services",
          },
        ]}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-180px] top-[180px] h-[420px] w-[420px] rounded-full bg-violet-200/50 blur-[140px]" />
        <div className="absolute right-[-220px] top-[620px] h-[520px] w-[520px] rounded-full bg-sky-200/50 blur-[160px]" />
        <div className="absolute bottom-[-120px] left-[25%] h-[360px] w-[360px] rounded-full bg-indigo-100/70 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <HeroSection />

        <div className="mt-8 space-y-8">
          <OverviewSection />
          <TimelineSection />
          <ProcessSection />
          <TechnologiesSection />
          <WhyChooseSection />
          <CtaSection />
        </div>
      </div>
    </section>
  );
};

export default WebsiteWebApplicationServicesPage;
