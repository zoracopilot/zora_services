import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { groomvyHero } from "../data";

const GroomvyHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-14 pt-32 lg:pb-20">
      <div className="grid items-center gap-10 lg:grid-cols-[0.9fr_1.1fr]">
        <div>
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl border border-teal-100 bg-teal-50 text-teal-600 shadow-[0_18px_38px_rgba(20,184,166,0.10)]">
            <img
              src="/logo.webp"
              alt=""
              className="h-8 w-8 rounded-lg object-cover"
            />
          </div>

          <h1 className="mt-6 font-serif text-5xl font-black tracking-tight text-slate-950 md:text-6xl">
            {groomvyHero.title}
          </h1>
          <p className="mt-3 text-xl font-medium text-slate-700">
            {groomvyHero.subtitle}
          </p>
          <p className="mt-6 max-w-xl text-base leading-8 text-slate-600">
            {groomvyHero.description}
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-colors hover:bg-violet-700"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
            <a
              href="#groomvy-features"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-colors hover:bg-slate-50"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="rounded-[32px] border border-violet-100 bg-white/90 p-4 shadow-[0_24px_60px_rgba(148,163,184,0.14)]">
          <div className="overflow-hidden rounded-[24px] border border-slate-100 bg-[linear-gradient(135deg,#ffffff,#f6f3ff)]">
            <img
              src={groomvyHero.heroImage}
              alt="Groomvy dashboard preview"
              className="w-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default GroomvyHero;
