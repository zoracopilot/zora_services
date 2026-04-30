import { hrmsSteps } from "../data";
import SectionHeading from "./SectionHeading";

const HrmsWorkflow: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="grid gap-6 xl:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] xl:items-start xl:gap-8">
        <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(148,163,184,0.08)] sm:p-6 lg:rounded-[32px] lg:p-8">
          <SectionHeading
            eyebrow="02 How It Works"
            title="Structured HR Operations From Input To Insight"
            description="HRMS automates and streamlines HR operations through a structured and efficient workflow."
            align="left"
          />

          <div className="mt-8 rounded-[24px] border border-slate-200 bg-slate-50 p-3 sm:p-4">
            <img
              src="/products/hrms/how-it-works-workflow.svg"
              alt="HRMS workflow illustration showing centralized data, automation, approvals, insights, and better decisions"
              className="w-full rounded-[18px]"
            />
          </div>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 2xl:grid-cols-5">
          {hrmsSteps.map(({ title, description, icon: Icon }, index) => (
            <article
              key={title}
              className="rounded-[24px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(148,163,184,0.08)] lg:rounded-[28px]"
            >
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 text-blue-600">
                  <Icon size={20} />
                </div>
                <span className="text-sm font-bold text-blue-600">0{index + 1}</span>
              </div>
              <h3 className="mt-4 text-base font-bold text-slate-950 sm:text-lg">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HrmsWorkflow;
