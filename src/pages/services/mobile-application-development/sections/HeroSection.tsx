import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";

const HeroSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="restore-hero relative overflow-hidden border border-slate-200 bg-[linear-gradient(135deg,#0a0f35_0%,#0b133f_42%,#140734_100%)] shadow-[0_20px_60px_rgba(15,23,42,0.06)]">
      <div
        className="absolute inset-0 hidden bg-cover bg-right-center bg-no-repeat lg:block"
        style={{ backgroundImage: "url('/home-services/mobileapplication.webp')" }}
      />
      <div className="absolute inset-0 hidden bg-[linear-gradient(90deg,rgba(2,6,23,0.84)_0%,rgba(2,6,23,0.68)_42%,rgba(2,6,23,0.16)_100%)] lg:block" />

      <div className="relative px-6 py-12 sm:px-8 sm:py-14 lg:px-16 lg:py-16">
        <div className="max-w-[620px]">
          <TextReveal>
            <h1
              className="max-w-[340px] text-[2.55rem] font-semibold leading-[0.98] tracking-[-0.05em] !text-white sm:max-w-[460px] sm:text-5xl lg:max-w-[560px] lg:text-[4.2rem]"
              style={{ textShadow: "0 10px 30px rgba(15, 23, 42, 0.45)" }}
            >
              Mobile Application
              <span className="block">Development</span>
            </h1>
          </TextReveal>

          <TextReveal delay={0.1}>
            <p
              className="mt-5 max-w-[340px] text-base leading-7 !text-white sm:max-w-[520px] sm:text-lg sm:leading-8"
              style={{ textShadow: "0 8px 24px rgba(15, 23, 42, 0.4)" }}
            >
              Build intuitive Android, iOS, and cross-platform applications that
              improve customer experience and accelerate business growth.
            </p>
          </TextReveal>

          <TextReveal delay={0.18}>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex items-center gap-3 bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:bg-slate-100"
              >
                Connect with our experts
                <ArrowRight size={17} />
              </Link>
            </div>
          </TextReveal>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
