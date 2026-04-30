import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import HrmsDashboardPreview from "./HrmsDashboardPreview";
import { hrmsHero, hrmsHighlights } from "../data";

const HrmsHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 pb-12 pt-24 sm:px-6 sm:pb-14 lg:px-8 lg:pb-20 lg:pt-28 xl:pt-32">
      <div className="grid items-center gap-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(0,1.08fr)] lg:gap-10 xl:gap-14">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-blue-50 text-xl font-black text-blue-600 shadow-[0_18px_38px_rgba(59,130,246,0.10)] sm:h-16 sm:w-16 sm:text-2xl">
            HR
          </div>
          <p className="mt-4 text-base font-medium text-slate-600 sm:mt-5 sm:text-lg">{hrmsHero.subtitle}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-5xl lg:text-[3.5rem] lg:leading-[1.02]">
            Empowering People.
            <br />
            Driving <span className="text-blue-600">Performance.</span>
          </h1>
          <p className="mt-5 max-w-2xl text-sm leading-7 text-slate-600 sm:mt-6 sm:text-base sm:leading-8">
            {hrmsHero.description}
          </p>

          <div className="mt-7 grid gap-3 sm:mt-8 sm:grid-cols-2 sm:gap-4">
            {hrmsHighlights.map((item) => (
              <div
                key={item}
                className="flex min-h-[56px] items-center gap-3 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-slate-700 shadow-[0_12px_30px_rgba(148,163,184,0.06)]"
              >
                <CheckCircle2 size={18} className="text-blue-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-7 flex flex-col gap-3 sm:mt-8 sm:flex-row sm:flex-wrap sm:gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(37,99,235,0.22)] transition-colors hover:bg-blue-700"
            >
              {hrmsHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-colors hover:bg-slate-50"
            >
              {hrmsHero.secondaryCta}
            </Link>
          </div>
        </div>

        <HrmsDashboardPreview />
      </div>
    </section>
  );
};

export default HrmsHero;
