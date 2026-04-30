import BreadcrumbSchema from "../../../components/BreadcrumbSchema";
import PageSEO from "../../../components/PageSEO";
import HrmsBenefits from "./components/HrmsBenefits";
import HrmsCta from "./components/HrmsCta";
import HrmsFeatures from "./components/HrmsFeatures";
import HrmsHero from "./components/HrmsHero";
import HrmsUseCases from "./components/HrmsUseCases";
import HrmsWorkflow from "./components/HrmsWorkflow";
import { hrmsHero } from "./data";

const ZoraHrmsPage: React.FC = () => {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#f8fbff] text-slate-900">
      <PageSEO
        title="HRMS - Smart HR, Stronger Workplace"
        description={hrmsHero.description}
        canonical="/products/zora-hrms"
        serviceSchema={{
          name: "HRMS",
          description: hrmsHero.description,
          url: "https://www.zoraglobalai.com/products/zora-hrms",
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: "HRMS", path: "/products/zora-hrms" },
        ]}
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 16%, rgba(59,130,246,0.14), transparent 30%),
            radial-gradient(circle at 86% 12%, rgba(99,102,241,0.10), transparent 28%),
            radial-gradient(circle at 52% 88%, rgba(14,165,233,0.08), transparent 32%)
          `,
        }}
      />

      <div className="relative z-10 flex flex-col">
        <HrmsHero />
        <HrmsFeatures />
        <HrmsWorkflow />
        <HrmsUseCases />
        <HrmsBenefits />
        <HrmsCta />
      </div>
    </main>
  );
};

export default ZoraHrmsPage;
