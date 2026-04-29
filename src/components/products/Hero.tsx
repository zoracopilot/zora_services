import { Link } from "react-router-dom";

const Hero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:pb-20">
      <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
        <div>
          <h1 className="max-w-2xl font-serif text-5xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
            Intelligent Products.
            <br />
            Real <span className="text-violet-600">Business Impact.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
            Integrated solutions to automate operations, elevate customer
            experiences, and drive sustainable growth.
          </p>

          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href="#our-products"
              className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-colors hover:bg-violet-700"
            >
              Explore Products
            </a>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-colors hover:bg-slate-50"
            >
              Book a Demo
            </Link>
          </div>
        </div>

        <div className="relative">
          <div className="min-h-[420px] rounded-[32px] border border-dashed border-violet-200/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(245,243,255,0.88))] shadow-[0_26px_60px_rgba(148,163,184,0.12)]" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
