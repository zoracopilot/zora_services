import {
  Building2,
  Factory,
  HeartPulse,
  Landmark,
  ShoppingCart,
  TowerControl,
} from "lucide-react";
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
    transition: { staggerChildren: 0.12 },
  },
};

const itemVariants: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: "easeOut" },
  },
};

const Industries: React.FC = () => {
  return (
    <section className="relative isolate overflow-hidden bg-white py-14 sm:py-16 lg:py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_20%,rgba(167,139,250,0.06),transparent_26%),radial-gradient(circle_at_84%_24%,rgba(125,211,252,0.05),transparent_24%)]" />

      <div className="relative z-10 mx-auto max-w-[1380px] px-4 sm:px-6 lg:px-8">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
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
            className="mx-auto mt-4 max-w-3xl px-2 text-sm leading-7 text-slate-500 sm:mt-5 sm:px-0 sm:text-lg sm:leading-8"
          >
            Focused domain expertise and AI-first execution across high-impact sectors
          </motion.p>
        </motion.div>

        <div className="relative">
          <div className="pointer-events-none absolute bottom-0 left-1/2 top-4 hidden w-px -translate-x-1/2 border-l border-dashed border-violet-200 lg:block" />

          <div className="space-y-5 sm:space-y-7 lg:space-y-8">
            {industries.map((industry, index) => {
              const isLeft = index % 2 === 0;
              const Icon = industry.Icon;

              return (
                <motion.div
                  key={industry.step}
                  initial={{ opacity: 0, x: isLeft ? -36 : 36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ duration: 0.55, ease: "easeOut" }}
                  className="relative lg:grid lg:grid-cols-2 lg:items-center"
                >
                  <div
                    className={`hidden lg:block ${
                      isLeft ? "pr-14 xl:pr-20" : "col-start-2 pl-14 xl:pl-20"
                    }`}
                  >
                    <article
                      className={`relative w-full max-w-[520px] rounded-[24px] border border-violet-100/80 bg-white p-6 shadow-[0_18px_45px_rgba(31,41,55,0.08)] xl:rounded-[26px] xl:p-7 ${
                        isLeft ? "ml-auto" : "mr-auto"
                      }`}
                    >
                      <div
                        className={`absolute bottom-0 top-0 w-[3px] rounded-full bg-gradient-to-b from-[#7c5cff] via-violet-400 to-[#7c5cff] ${
                          isLeft ? "left-0" : "right-0"
                        }`}
                      />

                      <div className="flex items-start gap-5">
                        <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-[18px] bg-violet-50/90 text-violet-600 lg:h-20 lg:w-20 xl:h-[88px] xl:w-[88px] xl:rounded-[20px]">
                          <Icon size={32} strokeWidth={1.8} />
                        </div>

                        <div className="min-w-0">
                          <p className="text-[1.7rem] font-semibold leading-none text-violet-600 xl:text-[2rem]">
                            {industry.step}
                          </p>
                          <h3 className="mt-3 text-2xl font-semibold leading-tight text-slate-900 xl:text-[2.05rem]">
                            {industry.title}
                          </h3>
                          <p className="mt-3 text-base leading-7 text-slate-500 xl:text-[1.08rem] xl:leading-8">
                            {industry.desc}
                          </p>
                        </div>
                      </div>
                    </article>
                  </div>

                  <div className="flex items-start gap-3 sm:gap-4 lg:hidden">
                    <div className="relative flex w-9 shrink-0 justify-center sm:w-10">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-violet-200 bg-white text-[11px] font-semibold text-violet-600 shadow-[0_0_0_4px_rgba(124,92,255,0.08)] sm:h-10 sm:w-10 sm:text-xs">
                        {industry.step}
                      </div>
                      {index !== industries.length - 1 && (
                        <div className="absolute -bottom-5 top-9 w-px bg-gradient-to-b from-violet-300 to-violet-100 sm:-bottom-6 sm:top-10" />
                      )}
                    </div>

                    <article className="relative w-full rounded-[22px] border border-violet-100 bg-white p-4 shadow-[0_14px_36px_rgba(31,41,55,0.08)] sm:rounded-[24px] sm:p-5">
                      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600 sm:h-16 sm:w-16 sm:rounded-[18px]">
                        <Icon size={26} strokeWidth={1.8} />
                      </div>
                      <p className="text-sm font-semibold text-violet-600">
                        {industry.step}
                      </p>
                      <h3 className="mt-2 text-lg font-semibold leading-tight text-slate-900 sm:text-xl">
                        {industry.title}
                      </h3>
                      <p className="mt-3 text-sm leading-7 text-slate-500">
                        {industry.desc}
                      </p>
                    </article>
                  </div>

                  <div className="absolute left-1/2 top-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 lg:block">
                    <div className="relative flex h-16 w-16 items-center justify-center rounded-full border border-violet-200 bg-white text-violet-600 shadow-[0_0_0_10px_rgba(255,255,255,0.98)] xl:h-[78px] xl:w-[78px]">
                      <Icon size={30} strokeWidth={1.8} />
                    </div>
                    <span
                      className={`absolute top-1/2 h-px w-14 -translate-y-1/2 bg-violet-200 xl:w-[86px] ${
                        isLeft ? "right-full" : "left-full"
                      }`}
                    />
                    <span
                      className={`absolute top-1/2 h-2.5 w-2.5 -translate-y-1/2 rounded-full bg-violet-500 ${
                        isLeft ? "right-[calc(100%+3.25rem)] xl:right-[calc(100%+5rem)]" : "left-[calc(100%+3.25rem)] xl:left-[calc(100%+5rem)]"
                      }`}
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Industries;
