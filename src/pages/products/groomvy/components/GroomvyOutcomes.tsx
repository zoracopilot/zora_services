import { groomvyOutcomes } from "../data";
import SectionHeading from "./SectionHeading";

const GroomvyOutcomes: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <SectionHeading
        eyebrow="Benefits / Business Outcomes"
        title="Deliver exceptional experiences and measurable growth"
      />

      <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {groomvyOutcomes.map(({ title, description, icon: Icon }) => (
          <article
            key={title}
            className="rounded-[24px] border border-slate-200 bg-white p-6 shadow-[0_14px_30px_rgba(148,163,184,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
              <Icon size={22} />
            </div>
            <h3 className="mt-5 text-lg font-semibold text-slate-900">{title}</h3>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GroomvyOutcomes;
