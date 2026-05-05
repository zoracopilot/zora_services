import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const HeroSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden border border-slate-200 bg-[linear-gradient(180deg,#ffffff_0%,#fbf9ff_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div className="mx-auto grid max-w-[1180px] items-center gap-6 px-4 py-5 sm:px-6 sm:py-6 md:gap-8 md:px-8 lg:grid-cols-[minmax(0,0.92fr)_minmax(340px,1.08fr)] lg:gap-6 lg:px-10 lg:py-0 xl:px-12">
        <div className="order-2 mx-auto max-w-[540px] py-1 text-center sm:py-2 lg:order-1 lg:mx-0 lg:max-w-[470px] lg:py-10 lg:text-left">
          <TextReveal delay={0.06}>
            <h1 className="mx-auto max-w-[620px] text-[2.2rem] font-semibold leading-[0.95] tracking-[-0.05em] text-[#171a4d] sm:text-[2.8rem] md:text-[3.35rem] lg:mx-0 lg:text-[4.15rem]">
              Business Solutions
              <span className="block">That Drive Growth</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.12}>
            <p className="mx-auto mt-4 max-w-[520px] text-[0.98rem] leading-7 text-slate-600 sm:mt-5 sm:text-base sm:leading-7 md:text-lg md:leading-8 lg:mx-0">
              Strategic consulting, workforce solutions, creative services,
              financial operations, and digital marketing to help your business
              grow stronger and smarter.
            </p>
          </TextReveal>

          <TextReveal delay={0.18}>
            <div className="mt-6 flex flex-wrap justify-center gap-3 sm:mt-8 lg:justify-start">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex min-h-[48px] items-center gap-3 rounded-lg bg-[linear-gradient(135deg,#6d4aff_0%,#4f31d9_100%)] px-5 py-3 text-sm font-semibold text-white shadow-[0_10px_24px_rgba(109,61,244,0.22)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_14px_28px_rgba(109,61,244,0.28)] sm:px-6 sm:py-3.5"
              >
                Consult with Our Experts
                <ArrowRight size={17} />
              </Link>
            </div>
          </TextReveal>
        </div>

        <TextReveal delay={0.12} className="order-1 self-stretch lg:order-2 lg:min-h-[520px]">
          <div className="relative aspect-[5/4] w-full overflow-hidden rounded-[24px] bg-white sm:aspect-[16/10] sm:rounded-[28px] lg:h-full lg:min-h-[520px] lg:aspect-auto lg:rounded-l-[160px] lg:rounded-r-none">
            <div className="absolute inset-y-0 left-0 hidden w-24 bg-[linear-gradient(90deg,rgba(255,255,255,0.98),rgba(255,255,255,0))] lg:block" />
            <img
              src="/services/Business_strategy_consulting/overview.png"
              alt="Business strategy consulting team reviewing performance and growth plans"
              className="relative h-full w-full object-cover object-center lg:object-left"
            />
          </div>
        </TextReveal>
      </div>
    </section>
  );
};

export default HeroSection;
