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
      <div className="overflow-hidden border border-[#ebe7ff] bg-[radial-gradient(circle_at_top_left,rgba(130,98,255,0.08),transparent_34%),linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)] shadow-[0_24px_70px_rgba(109,61,244,0.12)]">
        <div className="grid items-center gap-7 px-5 py-7 sm:px-7 sm:py-8 lg:grid-cols-[minmax(0,0.95fr)_minmax(320px,0.78fr)] lg:px-10 lg:py-8 xl:px-12">
          <TextReveal className="max-w-[860px]">
            <h2 className="max-w-[720px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-[#111834] md:text-[2.55rem]">
              Ready to Build Your <span className="text-[#6a3df6]">Next Big Thing?</span>
            </h2>
            <p className="mt-4 max-w-[620px] text-base leading-8 text-[#4f5878]">
              Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your ideas
              into powerful digital solutions.
            </p>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex min-h-[48px] items-center justify-center gap-2 bg-[linear-gradient(135deg,#7c3aed_0%,#5b21b6_100%)] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_12px_26px_rgba(109,61,244,0.24)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_16px_32px_rgba(109,61,244,0.3)]"
              >
                Start Your Project
                <ArrowRight size={17} />
              </Link>
            </div>
          </TextReveal>

          <TextReveal delay={0.12} className="lg:justify-self-end">
            <div className="mx-auto max-w-[420px] lg:mx-0 lg:w-full">
              <img
                src="/services/Web_application/CTA.png"
                alt="Launch your next big digital product"
                className="w-full object-contain"
              />
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
