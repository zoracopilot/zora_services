import React, { useEffect } from "react";
import BreadcrumbSchema from "../../../../components/BreadcrumbSchema";
import PageSEO from "../../../../components/PageSEO";
import CtaSection from "./sections/CtaSection";
import HeroSection from "./sections/HeroSection";
import OverviewSection from "./sections/OverviewSection";
import ProcessSection from "./sections/ProcessSection";
import TechnologiesSection from "./sections/TechnologiesSection";
import type { ServiceLandingContent } from "./types";

type Props = {
  content: ServiceLandingContent;
};

const CategoryServiceLanding: React.FC<Props> = ({ content }) => {
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
  }, []);

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef4ff_100%)] text-slate-900">
      <PageSEO
        title={`${content.title} | Zora Global AI`}
        description={content.description}
        canonical={`/services/${content.slug}`}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: content.title, path: `/services/${content.slug}` },
        ]}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-280px] top-[-220px] h-[900px] w-[900px] rounded-full bg-sky-200/45 blur-[180px]" />
        <div className="absolute bottom-[-300px] right-[-260px] h-[900px] w-[900px] rounded-full bg-violet-200/40 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <HeroSection content={content} />

      <div className="px-6 py-14">
        <div className="mx-auto flex max-w-6xl flex-col gap-10">
          <OverviewSection content={content} />
          <ProcessSection content={content} />
          <TechnologiesSection content={content} />
          <CtaSection content={content} />
        </div>
      </div>
    </section>
  );
};

export default CategoryServiceLanding;
