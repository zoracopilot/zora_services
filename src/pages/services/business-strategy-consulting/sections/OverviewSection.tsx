import React from "react";
import {
  BriefcaseBusiness,
  Megaphone,
  Palette,
  ReceiptText,
  UsersRound,
} from "lucide-react";
import { Link } from "react-router-dom";
import TextReveal from "../../../../components/about/TextReveal";
import { businessStrategyOverviewCards } from "../content";

const icons = [
  BriefcaseBusiness,
  UsersRound,
  Palette,
  ReceiptText,
  Megaphone,
] as const;

const OverviewSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="px-4 py-9 sm:px-6 sm:py-10 lg:px-8 lg:py-11">
      <div className="mx-auto max-w-[1160px]">
        <TextReveal className="mx-auto max-w-[860px] text-center">
          <p
            className="text-sm font-extrabold uppercase tracking-[0.22em]"
            style={{ color: "#6d28d9" }}
          >
            Overview
          </p>
          <h2 className="mt-4 text-[2rem] font-semibold leading-tight tracking-[-0.03em] text-slate-950 sm:text-[2.25rem] md:text-[2.45rem]">
            End-to-End Business Solutions Built for Success
          </h2>
          <p className="mx-auto mt-5 max-w-[760px] text-base leading-8 text-slate-600">
            We help organizations overcome challenges, optimize operations, and
            unlock new opportunities. From strategy to execution, our solutions
            are designed to deliver measurable results and long-term business
            value.
          </p>
        </TextReveal>

        <div className="mt-8 grid gap-4 sm:mt-10 sm:gap-5 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5">
          {businessStrategyOverviewCards.map((item, index) => {
            const Icon = icons[index] ?? BriefcaseBusiness;

            return (
              <TextReveal
                key={item.title}
                delay={0.06 * index}
                className="flex h-full flex-col rounded-[22px] border border-[#ece8fb] bg-white p-5 shadow-[0_12px_30px_rgba(89,76,160,0.05)] sm:p-6 xl:min-h-[292px]"
              >
                <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-[radial-gradient(circle_at_center,#f5f0ff_0%,#ffffff_72%)] text-violet-600 shadow-[0_10px_28px_rgba(124,58,237,0.08)]">
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-[1.2rem] font-semibold leading-8 tracking-[-0.02em] text-[#171a4d]">
                  {item.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-7 text-slate-600">
                  {item.description}
                </p>
                <Link
                  to={item.href}
                  onClick={scrollTop}
                  className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition-colors hover:text-violet-700"
                >
                  Learn More
                  <span aria-hidden="true">&rarr;</span>
                </Link>
              </TextReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
