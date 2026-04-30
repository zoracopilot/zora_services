import { careloopFeatures } from "../data";
import SectionHeading from "./SectionHeading";

const CareloopFeatures: React.FC = () => {
  return (
    <section id="careloop-features" className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <SectionHeading
        eyebrow="Core Modules"
        title="Everything You Need To Run Your Clinic Smarter"
        description="CareLoop brings together the operational tools clinics need to manage patient flow, communication, reporting, and subscriptions in one place."
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {careloopFeatures.map(({ title, description, icon: Icon }, index) => (
          <article
            key={title}
            className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_38px_rgba(148,163,184,0.09)]"
          >
            <div
              className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                index % 3 === 0
                  ? "bg-teal-50 text-teal-600"
                  : index % 3 === 1
                    ? "bg-indigo-50 text-indigo-600"
                    : "bg-sky-50 text-sky-600"
              }`}
            >
              <Icon size={24} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CareloopFeatures;
