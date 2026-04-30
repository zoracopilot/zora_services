import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const HrmsCta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8 lg:py-16">
      <div className="overflow-hidden rounded-[28px] bg-[linear-gradient(120deg,#2563eb_0%,#4f46e5_52%,#a855f7_100%)] p-6 text-white shadow-[0_24px_60px_rgba(79,70,229,0.22)] sm:p-8 lg:rounded-[32px] lg:p-10">
        <div className="grid gap-6 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center lg:gap-8">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-white/80">
              Transform Your HR Operations Today
            </p>
            <h2 className="mt-3 font-serif text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
              Build A More Organized, Efficient, People-Centric Workplace
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-7 text-white/88 sm:text-base sm:leading-8">
              HRMS helps you streamline day-to-day HR operations while giving leadership
              the visibility and control needed to support growth.
            </p>
          </div>

          <Link
            to="/book-appointment"
            className="inline-flex min-h-[48px] items-center justify-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100 sm:w-fit"
          >
            Get Started Now
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HrmsCta;
