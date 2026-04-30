import { careloopSteps } from "../data";
import SectionHeading from "./SectionHeading";

const CareloopWorkflow: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionHeading
        eyebrow="How It Works"
        title="Simple Steps To Launch And Run Your Clinic Digitally"
        description="CareLoop is designed to get clinics live quickly without making setup feel heavy or technical."
      />

      <div className="mt-12 grid gap-5 lg:grid-cols-5">
        {careloopSteps.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[28px] border border-slate-200 bg-white p-6 text-center shadow-[0_18px_38px_rgba(148,163,184,0.09)]"
          >
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-teal-400/15 to-indigo-500/15 text-indigo-600">
              <Icon size={24} />
            </div>
            <h3 className="mt-5 text-lg font-bold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareloopWorkflow;
