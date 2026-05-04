import React from "react";
import { ArrowRight, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

const trailSegments = [
  { width: "11rem", left: "46%", top: "18%", rotate: "-18deg", color: "from-cyan-300/95 via-sky-400/80 to-transparent" },
  { width: "9rem", left: "56%", top: "24%", rotate: "16deg", color: "from-fuchsia-300/90 via-violet-400/70 to-transparent" },
  { width: "12rem", left: "60%", top: "34%", rotate: "-10deg", color: "from-sky-300/95 via-cyan-300/85 to-transparent" },
  { width: "10rem", left: "72%", top: "21%", rotate: "30deg", color: "from-cyan-200/90 via-sky-400/70 to-transparent" },
  { width: "13rem", left: "67%", top: "48%", rotate: "-22deg", color: "from-fuchsia-300/85 via-violet-400/65 to-transparent" },
  { width: "14rem", left: "52%", top: "60%", rotate: "10deg", color: "from-cyan-300/95 via-sky-400/80 to-transparent" },
  { width: "8rem", left: "78%", top: "64%", rotate: "-28deg", color: "from-cyan-200/85 via-sky-300/65 to-transparent" },
  { width: "7rem", left: "82%", top: "42%", rotate: "38deg", color: "from-fuchsia-300/80 via-violet-400/60 to-transparent" },
];

const orbitRings = [
  "h-[250px] w-[250px] rotate-[8deg]",
  "h-[320px] w-[320px] rotate-[18deg]",
  "h-[390px] w-[390px] rotate-[30deg]",
  "h-[470px] w-[470px] rotate-[42deg]",
];

const HeroSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="relative overflow-hidden rounded-[28px] border border-white/8 bg-[#05101f] shadow-[0_34px_110px_rgba(2,8,23,0.42)]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_14%_24%,rgba(29,78,216,0.22),transparent_24%),radial-gradient(circle_at_80%_12%,rgba(34,211,238,0.25),transparent_20%),radial-gradient(circle_at_72%_58%,rgba(14,165,233,0.22),transparent_26%),radial-gradient(circle_at_62%_74%,rgba(217,70,239,0.16),transparent_20%)]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(3,10,22,0.92)_0%,rgba(4,14,29,0.88)_34%,rgba(5,16,31,0.56)_62%,rgba(7,23,45,0.24)_100%)]" />
      <div className="absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-fuchsia-300/0 via-fuchsia-300/85 to-cyan-300/0" />

      <div className="relative min-h-[360px] px-6 py-8 sm:px-8 lg:min-h-[430px] lg:px-16 lg:py-10">
        <div className="absolute inset-y-0 right-0 hidden w-[60%] md:block">
          <div className="absolute right-[-4%] top-[-2%] h-[72%] w-[56%] rounded-full bg-cyan-400/18 blur-[90px]" />
          <div className="absolute right-[20%] top-[42%] h-[42%] w-[26%] rounded-full bg-fuchsia-500/18 blur-[80px]" />

          <div className="absolute left-[30%] top-[7%] h-[82%] w-[58%]">
            {orbitRings.map((ring) => (
              <div
                key={ring}
                className={`absolute left-1/2 top-1/2 rounded-full border border-cyan-200/10 -translate-x-1/2 -translate-y-1/2 ${ring}`}
              />
            ))}

            <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-fuchsia-200/10" />

            <div className="absolute left-1/2 top-1/2 h-[280px] w-[280px] -translate-x-1/2 -translate-y-1/2 rounded-full border border-sky-200/10">
              <span className="absolute left-[70%] top-[12%] h-[4px] w-14 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.95)]" />
              <span className="absolute left-[8%] top-[58%] h-[4px] w-10 rounded-full bg-fuchsia-300 shadow-[0_0_16px_rgba(244,114,182,0.85)]" />
              <span className="absolute left-[46%] top-[84%] h-[4px] w-16 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(56,189,248,0.95)]" />
            </div>

            {trailSegments.map((segment, index) => (
              <span
                key={`${segment.left}-${segment.top}-${index}`}
                className={`absolute h-[5px] rounded-full bg-gradient-to-r ${segment.color} shadow-[0_0_24px_rgba(34,211,238,0.34)]`}
                style={{
                  left: segment.left,
                  top: segment.top,
                  width: segment.width,
                  transform: `rotate(${segment.rotate})`,
                }}
              />
            ))}

            <div className="absolute right-[12%] top-[20%] h-28 w-28 rounded-[22px] border border-cyan-200/12 bg-white/5 backdrop-blur-[2px]" />
            <div className="absolute right-[8%] top-[44%] h-36 w-24 rounded-[20px] border border-white/10 bg-white/10 backdrop-blur-[2px]" />
          </div>
        </div>

        <div className="relative z-10 flex min-h-[344px] items-center lg:min-h-[390px]">
          <div className="max-w-[560px]">
            <div className="mb-7 flex flex-wrap items-center gap-2 text-sm font-medium text-white/78">
              <Link to="/" className="transition hover:text-white" onClick={scrollTop}>
                Home
              </Link>
              <ChevronRight size={14} />
              <Link to="/services" className="transition hover:text-white" onClick={scrollTop}>
                Services
              </Link>
              <ChevronRight size={14} />
              <span className="text-white">Website &amp; Web Application Services</span>
            </div>

            <h1 className="max-w-[540px] text-[2.7rem] font-semibold leading-[0.98] tracking-[-0.05em] text-white sm:text-5xl lg:text-[4.2rem]">
              Website &amp; Web
              <span className="block">Application Services</span>
            </h1>

            <p className="mt-5 max-w-[470px] text-base leading-7 text-white/82 sm:text-lg sm:leading-8">
              Building conversion-focused websites and scalable web applications for modern business growth.
            </p>

            <div className="mt-8">
              <Link
                to="/book-appointment"
                onClick={scrollTop}
                className="inline-flex items-center gap-3 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-slate-900 shadow-[0_18px_40px_rgba(15,23,42,0.28)] transition hover:bg-slate-100"
              >
                Connect with our experts
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
