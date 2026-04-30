import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const GroomvyCta: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-14 lg:py-20">
      <div className="grid gap-10 overflow-hidden rounded-[32px] bg-[linear-gradient(135deg,#4f39d9,#6d5ef5_45%,#7c3aed)] p-8 text-white shadow-[0_28px_60px_rgba(91,33,182,0.22)] lg:grid-cols-[1fr_0.8fr] lg:items-center">
        <div>
          <h2 className="font-serif text-4xl font-black tracking-tight">
            Ready to Transform Your Salon Operations?
          </h2>
          <p className="mt-4 max-w-xl text-base leading-8 text-white/85">
            Join Groomvy and simplify the way you manage appointments, billing,
            staff, and customer experiences.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-sm font-semibold text-violet-700 transition-colors hover:bg-slate-100"
            >
              Book a Demo
              <ArrowRight size={16} />
            </Link>
            <a
              href="#groomvy-features"
              className="inline-flex items-center gap-2 rounded-xl border border-white/30 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
            >
              Explore Features
            </a>
          </div>
        </div>

        <div className="rounded-[28px] border border-white/15 bg-white/10 p-4 backdrop-blur-sm">
          <img
            src="/hero/salondesk.webp"
            alt="Groomvy preview"
            className="w-full rounded-[20px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default GroomvyCta;
