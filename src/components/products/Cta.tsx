import { Link } from "react-router-dom";
import { ctaPlaceholderIcon as PlaceholderIcon } from "./data";

const Cta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-16">
      <div className="grid gap-10 rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f5f1ff)] p-8 shadow-[0_22px_48px_rgba(148,163,184,0.1)] lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <h2 className="font-serif text-4xl font-black tracking-tight text-slate-950">
            Ready to Transform Your Business?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
            Let&apos;s build the future of your business together with
            intelligent products designed for modern operations.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-colors hover:bg-violet-700"
            >
              Book a Demo
            </Link>
            <a
              href="#our-products"
              className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
            >
              Explore Products
            </a>
          </div>
        </div>

        <div className="flex min-h-[220px] items-center justify-center rounded-[28px] border border-dashed border-violet-200 bg-white/55">
          <PlaceholderIcon size={60} className="text-violet-200" />
        </div>
      </div>
    </section>
  );
};

export default Cta;
