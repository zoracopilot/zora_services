import React from "react";
import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";

const CtaSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section id="cta" className="px-1 pt-2">
      <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(90deg,#120e42_0%,#171357_48%,#27108f_100%)] px-8 py-10 text-white shadow-[0_28px_90px_rgba(33,16,110,0.3)] lg:flex lg:items-center lg:justify-between lg:px-12">
        <div className="max-w-[580px]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/64">
            Ready To Build Your Next Big Thing?
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-[2.45rem]">
            Let&apos;s build something amazing together.
          </h2>
          <p className="mt-4 text-base leading-8 text-white/76">
            Whether you&apos;re a startup or an enterprise, we&apos;re here to turn your ideas
            into powerful digital solutions.
          </p>
        </div>

        <Link
          to="/book-appointment"
          onClick={scrollTop}
          className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400 lg:mt-0"
        >
          Start Your Project
          <ArrowRight size={16} />
        </Link>
      </div>
    </section>
  );
};

export default CtaSection;
