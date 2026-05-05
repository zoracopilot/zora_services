import {
  BrainCircuit,
  ShieldCheck,
  Sparkles,
  BriefcaseBusiness,
} from "lucide-react";

const highlights = [
  {
    title: "AI-Powered Solutions",
    description: "Automation and intelligence tailored to real operations.",
    Icon: BrainCircuit,
  },
  {
    title: "Scalable & Secure",
    description: "Built with resilient architecture and enterprise-grade trust.",
    Icon: ShieldCheck,
  },
  {
    title: "Innovation Driven",
    description: "Modern delivery designed for growth, speed and flexibility.",
    Icon: Sparkles,
  },
  {
    title: "Business Focused",
    description: "Every engagement aligned to outcomes, efficiency and ROI.",
    Icon: BriefcaseBusiness,
  },
];

const HeroHighlights: React.FC = () => {
  return (
    <section className="relative z-10 -mt-4 px-4 pb-16 sm:-mt-8 sm:px-6 sm:pb-20 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {highlights.map(({ title, description, Icon }) => (
            <article
              key={title}
              className="rounded-3xl border border-violet-100 bg-white/88 p-5 text-slate-900 shadow-[0_18px_45px_rgba(14,8,34,0.08)] backdrop-blur-xl sm:p-6"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-400 to-fuchsia-300 text-[#2d1454] shadow-[0_10px_30px_rgba(196,181,253,0.35)]">
                <Icon size={22} strokeWidth={2.2} />
              </div>
              <h3 className="text-base font-semibold text-slate-900 sm:text-lg">
                {title}
              </h3>
              <p className="mt-2 text-sm leading-6 text-slate-600 sm:text-[15px]">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HeroHighlights;
