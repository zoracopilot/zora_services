import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import HrmsHeroVisual from "./HrmsHeroVisual";
import { hrmsHero } from "../data";

const HrmsHero: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 pb-12 pt-28 lg:pb-16 lg:pt-32">
      <div className="grid items-center gap-12 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="mx-auto w-full max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#E6E1F7] text-xl font-black text-[#6C5DD3] shadow-[0_18px_38px_rgba(108,93,211,0.12)] sm:h-16 sm:w-16 sm:text-2xl">
            HR
          </div>
          <p className="mt-5 text-base font-medium text-[#6B7280] sm:text-lg">{hrmsHero.subtitle}</p>
          <h1 className="mt-4 max-w-2xl font-serif text-4xl font-black tracking-tight text-[#1F3A5F] md:text-5xl lg:text-[3.15rem]">
            {hrmsHero.title.split("Driving ")[0]}
            <br />
            Driving <span className="text-[#6C5DD3]">Performance.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base leading-8 text-[#6B7280]">
            {hrmsHero.description}
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6C5DD3] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(108,93,211,0.22)] transition-all duration-300 hover:scale-105 hover:bg-[#5a4dc0]"
            >
              {hrmsHero.primaryCta}
              <ArrowRight size={16} />
            </Link>
            <Link
              to="/book-appointment"
              className="inline-flex items-center gap-2 rounded-xl border border-[#E5E7EB] bg-white px-6 py-3.5 text-sm font-semibold text-[#1F3A5F] shadow-[0_14px_30px_rgba(154,163,178,0.08)] transition-all duration-300 hover:scale-105 hover:bg-[#F5F6FA]"
            >
              {hrmsHero.secondaryCta}
            </Link>
          </div>
        </div>

        <HrmsHeroVisual />
      </div>
    </section>
  );
};

export default HrmsHero;
