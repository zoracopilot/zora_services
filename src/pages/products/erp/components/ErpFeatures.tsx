import { erpFeatures } from "../data";
import InfoCard from "./shared/InfoCard";
import SectionHeading from "./shared/SectionHeading";

const ErpFeatures: React.FC = () => {
  return (
    <section id="erp-features" className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-10 xl:grid-cols-[minmax(220px,280px)_1fr] xl:items-start xl:gap-10">
        <div className="max-w-md pt-8 xl:sticky xl:top-28 xl:pt-16">
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need to Manage Billing Smoothly"
            description="Zora ERP brings invoicing, payments, expenses, reminders, and reporting together in one clean workflow."
            align="left"
          />
        </div>

        <div className="grid items-stretch gap-5 md:grid-cols-2 xl:grid-cols-4">
          {erpFeatures.map(({ title, description, icon: Icon }) => (
            <InfoCard
              key={title}
              title={title}
              description={description}
              icon={Icon}
              className="h-full rounded-[28px] border-[#F1DFD7] px-6 py-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] hover:border-[#F3B29B] hover:shadow-[0_24px_48px_rgba(226,74,26,0.12)]"
              iconClassName="bg-[#FFF1EB] text-[#E24A1A] ring-6 ring-[#FFF8F5]"
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpFeatures;
