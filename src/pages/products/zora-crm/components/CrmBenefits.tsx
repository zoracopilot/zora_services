import { crmBenefits } from "../data";
import SectionHeading from "./shared/SectionHeading";

const CrmBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="04 Benefits & Outcomes"
          title="Grow Faster With Zora CRM"
          description="Bring your customer data, team actions, and revenue insights into one place to improve execution across the funnel."
          align="center"
        />
      </div>

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {crmBenefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="flex items-start gap-4 rounded-[24px] border border-[#ece7fb] bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.10)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_24px_48px_rgba(124,58,237,0.12)]"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                <Icon size={22} />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-600">{description}</p>
              </div>
            </article>
          ))}
      </div>
    </section>
  );
};

export default CrmBenefits;
