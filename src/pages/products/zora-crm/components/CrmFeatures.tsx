import { crmFeatures } from "../data";
import SectionHeading from "./shared/SectionHeading";

const CrmFeatures: React.FC = () => {
  return (
    <section id="crm-features" className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-10 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start xl:gap-12">
        <div className="xl:pt-6">
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need To Run Your CRM Smoothly"
            description="Zora CRM centralizes leads, pipeline activity, communication, and reporting so your team can work faster with better visibility."
            align="left"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {crmFeatures.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="min-h-[252px] rounded-[28px] border border-[#ece7fb] bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(124,58,237,0.12)]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#f5efff] text-violet-700">
                <Icon size={19} />
              </div>
              <h3 className="mt-5 text-lg font-semibold leading-8 text-slate-900">
                {title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CrmFeatures;
