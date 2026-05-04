import React from "react";
import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { websiteWebAppTimelineCards } from "../content";

const TimelineSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="overflow-hidden rounded-[24px] border border-[#efebfb] bg-[#faf8ff] px-5 py-9 shadow-[0_10px_34px_rgba(89,76,160,0.04)] sm:px-6 lg:px-8 lg:py-10">
      <div className="mx-auto grid max-w-[1160px] gap-7 xl:grid-cols-[178px_minmax(0,1fr)] xl:items-start xl:gap-6">
        <div className="pt-1">
          <p className="text-[9px] font-semibold uppercase tracking-[0.2em] text-[#9a90c4]">
            Project Duration
          </p>
          <h2 className="mt-3 max-w-[8ch] text-[1.9rem] font-semibold leading-[1.06] tracking-[-0.035em] text-[#1d1b24] sm:text-[2.15rem] xl:text-[2.05rem]">
            Timelines That Fit Your Goals
          </h2>
          <p className="mt-4 max-w-[190px] text-[12px] leading-[1.75] text-[#666979]">
            Every project is unique. Our agile approach ensures transparency and delivery on time,
            every time.
          </p>
          <Link
            to="/book-appointment"
            onClick={scrollTop}
            className="mt-6 inline-flex min-h-[36px] w-full items-center justify-center rounded-[4px] bg-[#6f3df4] px-4 py-2 text-[11px] font-semibold text-white shadow-[0_8px_18px_rgba(111,61,244,0.22)] transition-all duration-300 hover:bg-[#6433ec] hover:shadow-[0_10px_22px_rgba(111,61,244,0.26)] sm:w-auto"
          >
            Discuss Your Project
          </Link>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4 lg:gap-4">
          {websiteWebAppTimelineCards.map((item) => (
            <article
              key={item.title}
              className="flex min-h-[214px] flex-col rounded-[6px] border border-[#f0ecfb] bg-[#fdfcff] px-[15px] pb-[14px] pt-[16px] shadow-[0_4px_14px_rgba(96,83,160,0.04)] transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_10px_22px_rgba(96,83,160,0.07)] lg:min-h-[208px]"
            >
              <div className="text-[1.1rem] font-semibold tracking-[-0.02em] text-[#7655ea] sm:text-[1.2rem]">
                {item.duration}
              </div>
              <h3 className="mt-5 max-w-[14ch] text-[13px] font-semibold leading-[1.45] text-[#232330]">
                {item.title}
              </h3>
              <p className="mt-4 max-w-[17ch] text-[11px] leading-[1.7] text-[#666979]">
                {item.description}
              </p>
              <div className="mt-auto pt-5">
                <div className="inline-flex h-[26px] w-[26px] items-center justify-center rounded-[6px] border border-[#ddd5fb] bg-[#f8f3ff] text-[#7655ea]">
                  <Clock3 size={12} strokeWidth={1.9} />
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
