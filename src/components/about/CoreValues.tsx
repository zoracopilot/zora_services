import React from "react";
import {
  Lightbulb,
  ShieldCheck,
  Star,
  Target,
  Users,
  type LucideIcon,
} from "lucide-react";

const values: Array<{
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    title: "Integrity",
    description:
      "We build trust through transparency, honesty, and ethical practices.",
    icon: ShieldCheck,
  },
  {
    title: "Innovation",
    description:
      "We push boundaries and create intelligent solutions for tomorrow.",
    icon: Lightbulb,
  },
  {
    title: "Collaboration",
    description: "We believe the best outcomes come from working together.",
    icon: Users,
  },
  {
    title: "Impact",
    description:
      "We focus on delivering measurable results that drive real change.",
    icon: Target,
  },
  {
    title: "Excellence",
    description:
      "We are committed to quality, continuous learning, and exceeding expectations.",
    icon: Star,
  },
];

const CoreValues: React.FC = () => {
  return (
    <section className="mt-20 border-t border-slate-200 pt-14">
      <h2 className="text-center font-serif text-4xl font-black tracking-tight text-slate-950 sm:text-5xl">
        Our Core Values
      </h2>

      <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5 xl:gap-0">
        {values.map(({ title, description, icon: Icon }, index) => (
          <div
            key={title}
            className={`flex flex-col items-center px-5 text-center ${
              index !== values.length - 1
                ? "xl:border-r xl:border-slate-200"
                : ""
            }`}
          >
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-violet-50 text-violet-600 shadow-[0_10px_30px_rgba(196,181,253,0.22)]">
              <Icon size={28} />
            </div>
            <h3 className="mt-5 text-xl font-bold text-slate-900">{title}</h3>
            <p className="mt-3 max-w-[15rem] text-sm leading-7 text-slate-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CoreValues;
