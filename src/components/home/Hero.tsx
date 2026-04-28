import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion, useReducedMotion, type Variants } from "framer-motion";
import heroVideo from "../../assets/AI_hero.mp4";

const Hero: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const lineOne = "Built on trust";
  const lineTwo = "driven by intelligence";
  const lineOneSpeed = 32;
  const lineTwoSpeed = 26;
  const linePause = 90;
  const [lineOneLength, setLineOneLength] = useState(
    prefersReducedMotion ? lineOne.length : 0,
  );
  const [lineTwoLength, setLineTwoLength] = useState(
    prefersReducedMotion ? lineTwo.length : 0,
  );

  const revealVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 28, filter: "blur(12px)" },
        visible: {
          opacity: 1,
          y: 0,
          filter: "blur(0px)",
          transition: {
            duration: 1.5,
            ease: [0.22, 1, 0.36, 1],
          },
        },
      };

  const paragraphVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 0 },
        visible: { opacity: 1 },
      }
    : {
        hidden: {
          opacity: 0,
          clipPath: "inset(0 100% 0 0)",
          y: 8,
        },
        visible: {
          opacity: 1,
          clipPath: "inset(0 0% 0 0)",
          y: 0,
        },
      };

  useEffect(() => {
    if (prefersReducedMotion) {
      setLineOneLength(lineOne.length);
      setLineTwoLength(lineTwo.length);
      return;
    }

    setLineOneLength(0);
    setLineTwoLength(0);

    const timers: number[] = [];
    const lineTwoStart = lineOne.length * lineOneSpeed + linePause;

    for (let index = 0; index < lineOne.length; index += 1) {
      timers.push(
        window.setTimeout(() => {
          setLineOneLength(index + 1);
        }, index * lineOneSpeed),
      );
    }

    for (let index = 0; index < lineTwo.length; index += 1) {
      timers.push(
        window.setTimeout(() => {
          setLineTwoLength(index + 1);
        }, lineTwoStart + index * lineTwoSpeed),
      );
    }

    return () => {
      timers.forEach((timer) => window.clearTimeout(timer));
    };
  }, [lineOne.length, lineTwo.length, prefersReducedMotion]);

  const paragraphDelay = prefersReducedMotion
    ? 0.15
    : (lineOne.length * lineOneSpeed + linePause + lineTwo.length * lineTwoSpeed) / 1000 + 0.18;
  const buttonDelay = paragraphDelay + 0.35;

  return (
    <section className="relative overflow-hidden bg-white pt-[var(--nav-h,0px)]">
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <video
          className="h-full w-full object-cover object-center"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        >
          <source src={heroVideo} type="video/mp4" />
        </video>
      </div>
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,255,255,0.97)_0%,rgba(255,255,255,0.92)_34%,rgba(255,255,255,0.58)_62%,rgba(255,255,255,0.16)_100%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_22%,rgba(167,139,250,0.12),transparent_28%),radial-gradient(circle_at_80%_24%,rgba(191,219,254,0.14),transparent_24%),radial-gradient(circle_at_82%_72%,rgba(216,180,254,0.14),transparent_26%)]" />

      <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-4 pb-12 pt-10 sm:min-h-[560px] sm:px-6 sm:pb-16 sm:pt-12 lg:min-h-[620px] lg:px-8 lg:pb-20">
        <div className="w-full max-w-[720px]">
            <h1 className="flex max-w-[13ch] flex-col font-serif text-[2.5rem] font-black leading-[1.02] tracking-tight text-slate-950 sm:max-w-[14ch] sm:text-5xl sm:leading-[0.99] lg:max-w-none lg:text-[3.3rem] lg:leading-[0.97] xl:text-[3.7rem]">
              <span className="block min-h-[1.05em] sm:whitespace-nowrap">
                {lineOne.slice(0, lineOneLength)}
              </span>
              <span className="mt-2 block min-h-[1.12em] pb-[0.14em] leading-[1.08] sm:mt-3 sm:whitespace-nowrap lg:mt-2">
                <span className="bg-gradient-to-r from-[#7c5cff] via-[#6d5ef5] to-[#a78bfa] bg-clip-text text-transparent">
                  {lineTwo.slice(0, lineTwoLength)}
                </span>
              </span>
            </h1>

            <motion.p
              variants={paragraphVariants}
              initial="hidden"
              animate="visible"
              transition={
                prefersReducedMotion
                  ? { duration: 0.25, delay: paragraphDelay }
                  : { duration: 0.95, delay: paragraphDelay, ease: [0.16, 1, 0.3, 1] }
              }
              className="mt-6 max-w-[32rem] text-base leading-8 text-black sm:text-lg sm:leading-8"
            >
              Designed with reliability at the core and flexibility for the
              future, our technology evolves alongside your business.
            </motion.p>
            <motion.div
              variants={revealVariants}
              initial="hidden"
              animate="visible"
              transition={
                prefersReducedMotion
                  ? { duration: 0.25, delay: buttonDelay }
                  : { duration: 1.2, delay: buttonDelay, ease: [0.22, 1, 0.36, 1] }
              }
              className="mt-8 sm:mt-9"
            >
              <Link
                to="/services"
                className="inline-flex min-h-[50px] min-w-[184px] items-center justify-center gap-2 rounded-xl border border-violet-200 bg-white px-6 py-3 text-sm font-semibold text-violet-700 shadow-[0_12px_28px_rgba(148,163,184,0.12)] transition-colors hover:bg-violet-50 sm:min-h-[54px]"
              >
                Explore Solutions
                <ArrowRight size={16} />
              </Link>
            </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
