import { reasons } from "./data";

const WhyChoose: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-8">
      <div className="text-center">
        <h2 className="font-serif text-3xl font-black tracking-tight text-slate-950">
          Why Choose Zora?
        </h2>
        <p className="mt-3 text-base text-slate-500">
          Built with innovation. Backed by trust.
        </p>
      </div>

      <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
        {reasons.map(({ title, description, icon: Icon }) => (
          <div
            key={title}
            className="rounded-[24px] bg-white/72 p-5 shadow-[0_14px_30px_rgba(148,163,184,0.08)]"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-violet-50 text-violet-600">
              <Icon size={21} />
            </div>
            <h3 className="mt-4 text-lg font-semibold text-slate-900">
              {title}
            </h3>
            <p className="mt-2 text-sm leading-6 text-slate-500">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default WhyChoose;
