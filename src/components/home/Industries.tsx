import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  TowerControl,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";

const industries = [
  {
    step: "01",
    title: "Banking & Financial Services",
    desc: "Secure digital products and workflow automation for modern financial institutions.",
    Icon: Landmark,
  },
  {
    step: "02",
    title: "Healthcare & Life Sciences",
    desc: "Compliant platforms and patient-centered experiences that improve outcomes.",
    Icon: HeartPulse,
  },
  {
    step: "03",
    title: "Manufacturing & Supply Chain",
    desc: "Operational visibility and process optimization to improve efficiency and resilience.",
    Icon: Factory,
  },
  {
    step: "04",
    title: "Retail & E-Commerce",
    desc: "Conversion-focused commerce solutions that enhance customer journeys.",
    Icon: ShoppingCart,
  },
  {
    step: "05",
    title: "Telecommunications",
    desc: "Scalable systems for service delivery, customer support, and network management.",
    Icon: TowerControl,
  },
  {
    step: "06",
    title: "Enterprise SaaS",
    desc: "Reliable multi-tenant SaaS products designed to scale with your growth.",
    Icon: Building2,
  },
];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.26, delayChildren: 0.16 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 48, scale: 0.96 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.95, ease: [0.22, 1, 0.36, 1] },
  },
};

const desktopRowVariants: Variants = {
  hidden: (isLeft: boolean) => ({
    opacity: 0,
    x: isLeft ? -110 : 110,
    y: 42,
    scale: 0.94,
  }),
  visible: {
    opacity: 1,
    x: 0,
    y: 0,
    scale: 1,
    transition: { duration: 1.05, ease: [0.22, 1, 0.36, 1] },
  },
};

const Industries: React.FC = () => {
  const [activeStep, setActiveStep] = useState(industries[0].step);
  const rowRefs = useRef<Array<HTMLDivElement | null>>([]);

  useEffect(() => {
    const rows = rowRefs.current.filter(Boolean) as HTMLDivElement[];
    if (!rows.length) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntries = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (!visibleEntries.length) return;

        const step = visibleEntries[0].target.getAttribute("data-step");
        if (step) setActiveStep(step);
      },
      {
        threshold: [0.25, 0.45, 0.65, 0.85],
        rootMargin: "-12% 0px -12% 0px",
      }
    );

    rows.forEach((row) => observer.observe(row));
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.06),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(125,211,252,0.05),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.18 }}
          variants={containerVariants}
          className="mb-10 text-center sm:mb-14 lg:mb-16"
        >
          <motion.h2
            variants={itemVariants}
            className="text-3xl font-semibold leading-tight text-slate-950 sm:text-5xl lg:text-6xl xl:text-[4.75rem]"
          >
            Industries{" "}
            <span className="bg-gradient-to-r from-violet-700 to-[#7c5cff] bg-clip-text text-transparent">
              We Serve
            </span>
          </motion.h2>

          <motion.p
            variants={itemVariants}
            className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-7 text-slate-600 sm:mt-5 sm:px-0 sm:text-lg sm:leading-8"
          >
            Focused domain expertise and AI-first execution across high-impact sectors
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-4 hidden w-px -translate-x-1/2 border-l border-violet-200/70 lg:block" />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.12 }}
            variants={containerVariants}
            className="space-y-4 sm:space-y-5 lg:space-y-6"
          >
            {industries.map((industry, index) => {
              const isLeft = index % 2 === 0;
              const Icon = industry.Icon;
              const isActive = activeStep === industry.step;

              return (
                <motion.div
                  key={industry.step}
                  ref={(el) => {
                    rowRefs.current[index] = el;
                  }}
                  data-step={industry.step}
                  custom={isLeft}
                  variants={desktopRowVariants}
                  className="relative lg:grid lg:grid-cols-[minmax(0,1fr)_92px_minmax(0,1fr)] lg:items-center xl:grid-cols-[minmax(0,1fr)_104px_minmax(0,1fr)]"
                >
                  <div
                    className={`hidden lg:block ${
                      isLeft
                        ? "col-start-1 pr-4 xl:pr-6"
                        : "col-start-3 pl-4 xl:pl-6"
                    }`}
                  >
                    <motion.article
                      onMouseEnter={() => setActiveStep(industry.step)}
                      onFocusCapture={() => setActiveStep(industry.step)}
                      onTouchStart={() => setActiveStep(industry.step)}
                      whileHover={{
                        y: -4,
                        scale: 1.01,
                        boxShadow: "0 18px 38px rgba(109,40,217,0.14)",
                      }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className={`relative min-h-[128px] w-full max-w-[390px] rounded-[18px] border bg-white px-3.5 py-3.5 transition-[border-color,box-shadow,background-color] duration-300 xl:max-w-[420px] xl:rounded-[20px] xl:px-4 xl:py-4 ${
                        isActive
                          ? "border-violet-300 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,245,255,0.96))] shadow-[0_0_0_1px_rgba(196,181,253,0.75),0_20px_44px_rgba(109,40,217,0.18),0_0_28px_rgba(139,92,246,0.18)]"
                          : "border-violet-100/80 shadow-[0_12px_28px_rgba(31,41,55,0.08)]"
                      } ${isLeft ? "ml-auto" : "mr-auto"}`}
                    >
                      <div
                        className={`absolute bottom-0 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#7c5cff] via-violet-400 to-[#7c5cff] transition-opacity duration-300 ${
                          isActive ? "opacity-100" : "opacity-80"
                        } ${isLeft ? "left-0" : "right-0"}`}
                      />

                      <div className="flex items-start gap-3">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] text-[0.95rem] font-semibold lg:h-11 lg:w-11 lg:text-base xl:h-12 xl:w-12 xl:rounded-[14px] ${
                            isActive
                              ? "bg-violet-100 text-violet-700"
                              : "bg-violet-50/90 text-violet-600"
                          }`}
                        >
                          {Number(industry.step)}
                        </div>

                        <div className="min-w-0">
                          <h3 className="text-[1.18rem] font-bold leading-[1.15] text-slate-900 xl:text-[1.28rem]">
                            {industry.title}
                          </h3>
                          <p className="mt-2 max-w-[42ch] text-[0.74rem] leading-5 text-slate-600 xl:max-w-[44ch] xl:text-[0.78rem] xl:leading-5">
                            {industry.desc}
                          </p>
                        </div>
                      </div>
                    </motion.article>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 lg:hidden">
                    <div className="relative flex w-9 shrink-0 justify-center self-stretch sm:w-10">
                      <div
                        className={`flex h-9 w-9 items-center justify-center rounded-full border text-[11px] font-semibold shadow-[0_0_0_4px_rgba(124,92,255,0.08)] transition-colors sm:h-10 sm:w-10 sm:text-xs ${
                          isActive
                            ? "border-violet-300 bg-violet-50 text-violet-700"
                            : "border-violet-200 bg-white text-violet-600"
                        }`}
                      >
                        {industry.step}
                      </div>
                      {index !== industries.length - 1 && (
                        <div className="absolute -bottom-4 top-9 w-px bg-gradient-to-b from-violet-300 to-violet-100 sm:-bottom-5 sm:top-10" />
                      )}
                    </div>

                    <motion.article
                      onClick={() => setActiveStep(industry.step)}
                      onTouchStart={() => setActiveStep(industry.step)}
                      whileHover={{
                        y: -3,
                        boxShadow: "0 16px 34px rgba(109,40,217,0.12)",
                      }}
                      transition={{ duration: 0.24, ease: "easeOut" }}
                      className={`relative min-h-[110px] w-full rounded-[16px] border bg-white p-3 transition-[border-color,box-shadow,background-color] duration-300 sm:rounded-[18px] sm:p-3.5 ${
                        isActive
                          ? "border-violet-300 bg-[linear-gradient(180deg,rgba(255,255,255,1),rgba(248,245,255,0.96))] shadow-[0_0_0_1px_rgba(196,181,253,0.65),0_16px_34px_rgba(109,40,217,0.14),0_0_24px_rgba(139,92,246,0.14)]"
                          : "border-violet-100 shadow-[0_10px_24px_rgba(31,41,55,0.08)]"
                      }`}
                    >
                      <div className="flex items-start gap-3 sm:gap-4">
                        <div
                          className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-[12px] text-[0.9rem] font-semibold sm:h-11 sm:w-11 sm:rounded-[14px] sm:text-[0.95rem] ${
                            isActive
                              ? "bg-violet-100 text-violet-700"
                              : "bg-violet-50 text-violet-600"
                          }`}
                        >
                          {Number(industry.step)}
                        </div>
                        <div className="min-w-0">
                          <h3 className="text-[0.98rem] font-bold leading-tight text-slate-900 sm:text-[1.05rem]">
                            {industry.title}
                          </h3>
                        </div>
                      </div>
                      <p className="mt-2.5 max-w-[30ch] text-[0.82rem] leading-5 text-slate-600 sm:mt-3">
                        {industry.desc}
                      </p>
                    </motion.article>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <motion.div
                      animate={
                        isActive
                          ? {
                              scale: [1, 1.08, 1],
                              boxShadow: [
                                "0 0 0 7px rgba(255,255,255,0.98), 0 0 0 0 rgba(139,92,246,0.18)",
                                "0 0 0 10px rgba(237,233,254,0.98), 0 0 26px rgba(139,92,246,0.35)",
                                "0 0 0 7px rgba(255,255,255,0.98), 0 0 0 rgba(139,92,246,0.18)",
                              ],
                            }
                          : {
                              scale: 1,
                              boxShadow: "0 0 0 7px rgba(255,255,255,0.98), 0 0 0 rgba(139,92,246,0)",
                            }
                      }
                      transition={{
                        duration: 1.2,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className={`relative flex h-[52px] w-[52px] items-center justify-center rounded-full border bg-white text-violet-600 xl:h-[58px] xl:w-[58px] ${
                        isActive ? "border-violet-300" : "border-violet-200"
                      }`}
                    >
                      <Icon size={21} strokeWidth={isActive ? 2.2 : 1.8} />
                    </motion.div>
                    <motion.span
                      animate={{ opacity: isActive ? 1 : 0.55, scaleX: isActive ? 1.08 : 1 }}
                      transition={{ duration: 0.35, ease: "easeOut" }}
                      style={{ originX: isLeft ? 1 : 0 }}
                      className={`absolute top-1/2 h-px w-7 -translate-y-1/2 bg-violet-200 xl:w-8 ${
                        isLeft ? "right-full" : "left-full"
                      }`}
                    />
                    <motion.span
                      animate={
                        isActive
                          ? { scale: [1, 1.35, 1], opacity: [0.75, 1, 0.75] }
                          : { scale: 1, opacity: 0.75 }
                      }
                      transition={{
                        duration: 1.1,
                        repeat: isActive ? Infinity : 0,
                        ease: "easeInOut",
                      }}
                      className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-violet-500 ${
                        isLeft
                          ? "right-[calc(100%+1.5rem)] xl:right-[calc(100%+1.8rem)]"
                          : "left-[calc(100%+1.5rem)] xl:left-[calc(100%+1.8rem)]"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
