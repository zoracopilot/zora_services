import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Link } from "react-router-dom";
import CareloopDashboardPreview from "./CareloopDashboardPreview";
import { careloopHero, careloopHighlights } from "../data";

const CareloopHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-32 lg:pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.92fr_1.08fr]">
        <div>
          <div className="inline-flex items-center rounded-full border border-teal-100 bg-teal-50 px-4 py-2 text-sm font-semibold text-teal-700">
            {careloopHero.subtitle}
          </div>

          <h1 className="mt-6 max-w-xl font-serif text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            {careloopHero.title.split("Care Better.")[0]}
            <span className="text-teal-500">Care Better.</span>
          </h1>

          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            {careloopHero.description}
          </p>

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {careloopHighlights.map((item) => (
              <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                <CheckCircle2 size={18} className="text-teal-500" />
                <span>{item}</span>
              </div>
            ))}
          </div>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-indigo-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(79,70,229,0.22)] transition-colors hover:bg-indigo-700"
            >
              {careloopHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-colors hover:bg-slate-50"
            >
              {careloopHero.secondaryCta}
            </Link>
          </div>
        </div>

        <CareloopDashboardPreview />
      </div>
    </section>
  );
};

export default CareloopHero;
