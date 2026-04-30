import { ArrowRight, CalendarDays, ShieldCheck } from "lucide-react";
import { Link } from "react-router-dom";
import { careloopTrustPoints } from "../data";

const CareloopCta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16 lg:py-20">
      <div className="overflow-hidden rounded-[32px] bg-[linear-gradient(120deg,#2563eb_0%,#0ea5e9_38%,#14b8a6_100%)] p-8 text-white shadow-[0_24px_60px_rgba(14,165,233,0.22)] sm:p-10">
        <div className="grid gap-8 lg:grid-cols-[1fr_auto] lg:items-center">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Ready For Launch
            </p>
            <h2 className="mt-3 font-serif text-3xl font-black tracking-tight sm:text-4xl">
              Ready To Transform Your Clinic?
            </h2>
            <p className="mt-4 max-w-2xl text-base leading-8 text-white/88">
              Join growing clinics using CareLoop to simplify operations, improve
              communication, and deliver better patient experiences every day.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
            >
              Get Started Now
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-white/35 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              <CalendarDays size={16} />
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="mt-8 grid gap-4 border-t border-white/20 pt-8 md:grid-cols-2 xl:grid-cols-4">
          {careloopTrustPoints.map((item) => (
            <div key={item} className="flex items-center gap-3 rounded-2xl bg-white/10 px-4 py-3">
              <ShieldCheck size={18} className="text-white" />
              <span className="text-sm font-medium text-white/92">{item}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareloopCta;
