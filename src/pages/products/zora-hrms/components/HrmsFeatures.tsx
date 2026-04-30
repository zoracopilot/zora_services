import { hrmsFeatures } from "../data";
import SectionHeading from "./SectionHeading";

const HrmsFeatures: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[28px] border border-slate-200 bg-white/80 p-5 shadow-[0_18px_38px_rgba(148,163,184,0.08)] sm:p-6 lg:rounded-[32px] lg:p-8">
        <div className="grid gap-8 xl:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)] xl:gap-10">
          <SectionHeading
            eyebrow="01 Key Features / Capabilities"
            title="Everything HR Teams Need In One System"
            description="HRMS offers a complete suite of modules that cover all essential HR functions. Each feature is designed to automate processes, improve accuracy, and enhance the overall employee experience."
            align="left"
          />

          <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-4">
            {hrmsFeatures.map(({ title, description, icon: Icon }) => (
              <article
                key={title}
                className="rounded-[22px] border border-slate-200 bg-white p-5 shadow-[0_12px_28px_rgba(148,163,184,0.06)] lg:rounded-[24px]"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-blue-50 text-blue-600">
                  <Icon size={22} />
                </div>
                <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HrmsFeatures;
