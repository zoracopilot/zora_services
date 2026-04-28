import { motion, type Variants } from "framer-motion";

const EnterpriseDifferentiators: React.FC = () => {
  const differentiators = [
    {
      title: "Board-Level AI Strategy",
      desc: "We align artificial intelligence initiatives with executive business outcomes",
      image: "/home-enterprise/strategy.webp",
      tag: "Strategy",
    },
    {
      title: "Security-First Architecture",
      desc: "Built with enterprise-grade compliance, data encryption and infrastructure resilience",
      image: "/home-enterprise/security.webp",
      tag: "Security",
    },
    {
      title: "Scalable AI Infrastructure",
      desc: "Cloud-native, modular systems designed for long-term digital growth",
      image: "/home-enterprise/scalability.webp",
      tag: "Scalability",
    },
    {
      title: "Data-Driven Decision Intelligence",
      desc: "Real-time insights and predictive analytics that improve strategic and operational outcomes",
      image: "/home-enterprise/insights.webp",
      tag: "Insights",
    },
  ];

  const container: Variants = {
    hidden: { opacity: 0, y: 22 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.12 } },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 26, scale: 0.98 },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: { duration: 0.55, ease: "easeOut" },
    },
  };

  return (
    <section className="relative isolate overflow-hidden bg-white px-4 py-12 sm:px-6 sm:py-16 lg:px-8 lg:py-20">
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_22%_30%,rgba(99,102,241,0.10),transparent_52%),radial-gradient(circle_at_78%_75%,rgba(56,189,248,0.08),transparent_52%)]" />
        <div className="absolute -left-20 -top-28 h-[440px] w-[440px] rounded-full bg-indigo-500/10 blur-[130px]" />
        <div className="absolute -bottom-24 right-0 h-[420px] w-[420px] rounded-full bg-sky-400/10 blur-[130px]" />
      </div>

      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={container}
        className="relative z-10 mx-auto max-w-7xl text-center"
      >
        <motion.h2
          variants={itemVariants}
          className="inline-block bg-gradient-to-r from-[#8b5cf6] via-[#6366f1] to-[#38bdf8] bg-clip-text pb-1 font-serif text-2xl font-bold leading-[1.12] text-transparent drop-shadow-[0_0_18px_rgba(56,189,248,0.32)] sm:text-4xl lg:text-5xl"
        >
          Why Enterprises Choose Us
        </motion.h2>
        <motion.p
          variants={itemVariants}
          className="mx-auto mb-8 mt-3 max-w-3xl px-1 text-sm leading-7 text-slate-600 sm:mb-10 sm:mt-4 sm:text-lg sm:leading-8"
        >
          Built for high-stakes environments where reliability, security and
          long-term scalability are non-negotiable
        </motion.p>

        <div className="relative mx-auto mt-1 max-w-5xl sm:mt-2">
          <div className="pointer-events-none absolute bottom-0 left-5 top-0 w-px bg-gradient-to-b from-indigo-200/0 via-indigo-300 to-indigo-200/0 sm:left-8" />
          <div className="space-y-1.5 sm:space-y-2">
            {differentiators.map((item, idx) => (
              <motion.article
                key={item.title}
                variants={itemVariants}
                className="group relative border-b border-slate-200 py-6 pl-16 pr-4 transition-all duration-500 hover:translate-x-1 hover:-translate-y-0.5 sm:py-7 sm:pl-24 sm:pr-6"
              >
                <span className="absolute left-[8px] top-8 h-[18px] w-[18px] rounded-full border border-indigo-200 bg-gradient-to-br from-indigo-400 to-sky-400 shadow-[0_0_0_4px_rgba(99,102,241,0.12)] transition-all duration-500 group-hover:scale-110 group-hover:shadow-[0_0_0_6px_rgba(129,140,248,0.16),0_0_18px_rgba(56,189,248,0.32)] sm:left-[18px] sm:top-9 sm:h-[20px] sm:w-[20px]" />
                <div className="pointer-events-none absolute inset-y-3 left-10 right-3 rounded-2xl bg-gradient-to-r from-indigo-500/0 via-violet-400/10 to-cyan-300/0 opacity-0 blur-xl transition-opacity duration-500 group-hover:opacity-100 sm:left-14" />

                <div className="flex items-start gap-4 sm:gap-5">
                  <div className="min-w-0 flex-1">
                    <div className="mb-2 flex items-center gap-3 sm:mb-3">
                      <span className="text-[11px] uppercase tracking-[0.16em] text-indigo-600/80 sm:text-xs">
                        {item.tag}
                      </span>
                      <span className="h-px flex-1 bg-gradient-to-r from-indigo-300/65 to-transparent" />
                      <span className="text-[11px] text-slate-400 sm:text-xs">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="text-lg font-semibold text-slate-900 transition-all duration-400 group-hover:text-indigo-700 group-hover:tracking-[0.01em] sm:text-2xl">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600 transition-colors duration-400 group-hover:text-slate-700 sm:mt-3 sm:text-base">
                      {item.desc}
                    </p>
                    <div className="mt-4 h-px w-0 bg-gradient-to-r from-indigo-300 via-violet-300 to-cyan-300 transition-all duration-500 group-hover:w-full" />
                  </div>

                  <div className="relative hidden h-24 w-40 shrink-0 overflow-hidden rounded-[999px] border border-white/20 transition-all duration-500 group-hover:border-indigo-200/60 group-hover:shadow-[0_0_28px_rgba(129,140,248,0.35)] md:block">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110 group-hover:rotate-[0.6deg]"
                    />
                    <span className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0a0618]/20 to-[#160a2a]/55" />
                    <span className="pointer-events-none absolute -left-10 top-0 h-full w-12 -skew-x-12 bg-gradient-to-r from-transparent via-white/40 to-transparent opacity-0 transition-all duration-700 group-hover:left-[120%] group-hover:opacity-100" />
                  </div>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default EnterpriseDifferentiators;
