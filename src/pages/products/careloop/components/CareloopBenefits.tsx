import { careloopBenefits } from "../data";
import SectionHeading from "./SectionHeading";

const CareloopBenefits: React.FC = () => {
  return (
    <section className="bg-white/70 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Outcomes"
          title="Benefits For Your Clinic And Your Patients"
          description="The platform is built to reduce friction across administration, communication, and care delivery."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {careloopBenefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.09)]"
            >
              <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-orange-50 text-orange-500">
                <Icon size={24} />
              </div>
              <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareloopBenefits;
