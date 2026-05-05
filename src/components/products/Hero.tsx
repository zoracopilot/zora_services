import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";

const Hero: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 pb-16 pt-28 sm:px-6 lg:px-8 lg:pb-20 lg:pt-32">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            "linear-gradient(180deg, rgba(255,255,255,0.18), rgba(255,255,255,0.32)), url('/products/productHero_bg.webp')",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      />
      <div className="relative mx-auto max-w-7xl">
        <div className="px-6 py-16 sm:px-10 lg:px-12 lg:py-20">
          <div className="relative">
            <div className="mx-auto max-w-4xl text-center">
              <h1 className="font-serif text-5xl font-black leading-[1.02] tracking-tight text-slate-950 sm:text-6xl lg:text-7xl">
                Intelligent Products.
                <br />
                Real <span className="text-violet-600">Business Impact.</span>
              </h1>

              <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-600 sm:text-lg">
                Integrated solutions to automate operations, elevate customer
                experiences, and drive sustainable growth.
              </p>

              <div className="mt-8 flex flex-col items-center justify-center gap-4 sm:flex-row">
                <a
                  href="#our-products"
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-2xl bg-violet-600 px-7 py-4 text-base font-semibold text-white shadow-[0_20px_45px_rgba(124,58,237,0.28)] transition-all hover:-translate-y-0.5 hover:bg-violet-700"
                >
                  Explore Products
                  <ArrowRight size={18} />
                </a>
                <Link
                  to="/book-appointment"
                  className="inline-flex min-w-[220px] items-center justify-center gap-2 rounded-2xl border border-violet-100 bg-white px-7 py-4 text-base font-semibold text-violet-700 shadow-[0_16px_34px_rgba(148,163,184,0.14)] transition-all hover:-translate-y-0.5 hover:bg-violet-50"
                >
                  Book a Demo
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
