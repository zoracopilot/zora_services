import React from "react";
import { Clock3 } from "lucide-react";
import { Link } from "react-router-dom";
import { websiteWebAppTimelineCards } from "../content";

const TimelineSection: React.FC = () => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="rounded-[32px] border border-slate-200/70 bg-[linear-gradient(180deg,#ffffff_0%,#f8faff_100%)] px-6 py-14 shadow-[0_20px_70px_rgba(15,23,42,0.05)] lg:px-8">
      <div className="grid gap-6 lg:grid-cols-[minmax(250px,0.7fr)_minmax(0,1.3fr)]">
        <div className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
            Project Duration
          </p>
          <h2 className="mt-4 max-w-[280px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950">
            Timelines That Fit Your Goals
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600">
            Every project is unique. Our agile approach ensures transparency and delivery on time,
            every time.
          </p>
          <Link
            to="/book-appointment"
            onClick={scrollTop}
            className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
          >
            Discuss Your Project
          </Link>
        </div>

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {websiteWebAppTimelineCards.map((item) => (
            <article
              key={item.title}
              className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
            >
              <div className="text-[1.7rem] font-semibold tracking-[-0.03em] text-violet-600">
                {item.duration}
              </div>
              <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-950">
                {item.title}
              </h3>
              <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
              <div className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                <Clock3 size={18} />
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
