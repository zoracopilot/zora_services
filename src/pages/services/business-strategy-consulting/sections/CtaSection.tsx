import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-4 pb-1 pt-5 sm:px-6 lg:px-8 lg:pb-1 lg:pt-6">
      <div className="mx-auto max-w-[1120px] overflow-hidden rounded-[24px] border border-[#ebe7ff] bg-[radial-gradient(circle_at_top_left,rgba(130,98,255,0.12),transparent_34%),radial-gradient(circle_at_bottom_right,rgba(167,139,250,0.12),transparent_30%),linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)] shadow-[0_24px_70px_rgba(109,61,244,0.12)]">
        <div className="grid items-center gap-6 px-5 py-6 sm:px-6 sm:py-7 lg:min-h-[210px] lg:grid-cols-[minmax(0,0.92fr)_minmax(220px,0.58fr)] lg:px-8 xl:px-10">
          <TextReveal className="flex h-full max-w-[640px] flex-col justify-center text-center lg:text-left">
            <span className="services-section-label text-xs font-bold uppercase tracking-[0.22em]">
              Ready to Grow Your Business?
            </span>
            <h2 className="mt-3 text-[1.75rem] font-semibold leading-tight tracking-[-0.03em] text-[#111834] md:text-[2rem]">
              Let&apos;s Build Your <span className="text-[#6a3df6]">Success Story</span>
            </h2>
            <p className="mx-auto mt-3 max-w-[560px] text-sm leading-7 text-[#4f5878] sm:text-base lg:mx-0">
              Partner with us to unlock your business potential and achieve
              remarkable growth through strategy, execution, and support.
            </p>

            <div className="mt-5 flex justify-center lg:justify-start">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[linear-gradient(135deg,#7c3aed_0%,#5b21b6_100%)] px-5 py-2.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(109,61,244,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(109,61,244,0.28)]"
              >
                Talk to Our Experts
                <ArrowRight size={16} />
              </Link>
            </div>
          </TextReveal>

          <TextReveal delay={0.12} className="lg:justify-self-end">
            <div className="flex items-center justify-center">
              <img
                src="/services/Web_application/CTA.png"
                alt="Business growth and strategy illustration"
                className="w-full max-w-[220px] object-contain sm:max-w-[240px] lg:max-w-[260px]"
              />
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;
