import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-1 pt-2">
      <div className="overflow-hidden bg-[linear-gradient(90deg,#2a1066_0%,#4c1d95_45%,#6d28d9_100%)] px-5 py-7 text-white shadow-[0_22px_60px_rgba(76,29,149,0.28)] sm:px-7 sm:py-8 lg:flex lg:items-center lg:justify-between lg:px-10 lg:py-7">
        <TextReveal className="max-w-[860px]">
          <h2
            className="max-w-[820px] text-3xl font-semibold leading-tight tracking-[-0.03em] !text-white md:text-[2.55rem]"
            style={{ color: "#ffffff", WebkitTextFillColor: "#ffffff", textShadow: "0 2px 10px rgba(0,0,0,0.18)" }}
          >
            Ready To Build Your Next Big Thing?
          </h2>
          <p className="mt-4 max-w-[620px] text-base leading-8 !text-white">
            Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your ideas
            into powerful digital solutions.
          </p>
        </TextReveal>

        <TextReveal delay={0.12}>
          <Link
            to="/book-appointment"
            onClick={scrollTop}
            className="mt-6 inline-flex min-h-[48px] items-center justify-center gap-2 bg-[linear-gradient(135deg,#8b5cf6_0%,#7c3aed_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(139,92,246,0.32)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(139,92,246,0.4)] lg:mt-0 lg:px-7"
          >
            Start Your Project
            <ArrowRight size={16} />
          </Link>
        </TextReveal>
      </div>
    </section>
  );
};

export default CtaSection;
