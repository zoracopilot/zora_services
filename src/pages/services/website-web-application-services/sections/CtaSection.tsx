import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-1 pt-2">
      <div className="overflow-hidden rounded-[16px] bg-[linear-gradient(90deg,#2a1066_0%,#4c1d95_45%,#6d28d9_100%)] px-5 py-7 text-white shadow-[0_22px_60px_rgba(76,29,149,0.28)] sm:px-7 sm:py-8 lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-7">
        <div className="max-w-[620px]">
          <p className="text-[10px] font-semibold uppercase tracking-[0.18em] !text-white">
            Ready To Build Your Next Big Thing?
          </p>
          <h2 className="mt-3 text-[1.9rem] font-semibold leading-[1.12] tracking-[-0.03em] !text-white sm:text-[2.2rem] lg:text-[2.15rem]">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mt-3 max-w-[540px] text-[13px] leading-6 !text-white sm:text-sm sm:leading-7">
            Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your ideas
            into powerful digital solutions.
          </p>
        </div>

        <Link
          to="/book-appointment"
          onClick={scrollTop}
          className="mt-6 inline-flex min-h-[44px] items-center justify-center gap-2 rounded-[8px] bg-[linear-gradient(135deg,#8b5cf6_0%,#7c3aed_100%)] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(139,92,246,0.4)] lg:mt-0 lg:px-6"
        >
          Start Your Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
