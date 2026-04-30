import { groomvySteps } from "../data";
import SectionHeading from "./SectionHeading";

const GroomvyWorkflow: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <SectionHeading
        eyebrow="How It Works"
        title="A simple workflow that keeps everything connected"
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-5">
        {groomvySteps.map(({ title, description, icon: Icon }, index) => (
          <article key={title} className="relative text-center">
            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full border border-violet-100 bg-white text-violet-600 shadow-[0_18px_36px_rgba(124,58,237,0.08)]">
              <Icon size={28} />
            </div>
            <p className="mt-5 text-sm font-semibold text-slate-900">
              {index + 1}. {title}
            </p>
            <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GroomvyWorkflow;
