import { hrmsBenefits } from "../data";
import SectionHeading from "./SectionHeading";

const HrmsBenefits: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="rounded-[28px] border border-slate-200 bg-white p-5 shadow-[0_18px_38px_rgba(148,163,184,0.08)] sm:p-6 lg:rounded-[32px] lg:p-8">
        <SectionHeading
          eyebrow="05 Benefits / Business Outcomes"
          title="Measurable Outcomes For Efficiency, Accuracy, And Growth"
          description="HRMS delivers measurable benefits that improve efficiency, accuracy, and overall organizational growth."
          align="left"
        />

        <div className="mt-8 grid gap-4 sm:grid-cols-2 xl:mt-10 xl:grid-cols-3 xl:gap-5">
          {hrmsBenefits.map(({ title, description, icon: Icon }) => (
            <article
              key={title}
              className="rounded-[22px] border border-slate-200 bg-slate-50/70 p-5 lg:rounded-[24px]"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-emerald-600 shadow-[0_10px_24px_rgba(148,163,184,0.08)]">
                <Icon size={22} />
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

export default HrmsBenefits;
