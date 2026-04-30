import { careloopStats } from "../data";

const CareloopStats: React.FC = () => {
  return (
    <section className="border-y border-slate-200/80 bg-white/70">
      <div className="mx-auto max-w-7xl px-6 py-7">
        <p className="text-center text-lg font-semibold text-slate-800">
          Trusted by clinics and doctors to deliver better care every day.
        </p>

        <div className="mt-6 grid gap-4 text-center sm:grid-cols-2 lg:grid-cols-5">
          {careloopStats.map((item) => (
            <div
              key={item.label}
              className="rounded-[24px] border border-slate-200 bg-white px-5 py-5 shadow-[0_12px_28px_rgba(148,163,184,0.08)]"
            >
              <p className="text-3xl font-black tracking-tight text-slate-950">
                {item.value}
              </p>
              <p className="mt-2 text-sm font-medium text-slate-500">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareloopStats;
