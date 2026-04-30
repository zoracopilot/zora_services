import { groomvyScreens } from "../data";
import SectionHeading from "./SectionHeading";

const GroomvyScreens: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <SectionHeading
        eyebrow="Product Screens"
        title="Designed for efficiency. Built for ease."
      />

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {groomvyScreens.map(({ title, description, image }) => (
          <article
            key={title}
            className="overflow-hidden rounded-[24px] border border-slate-200 bg-white shadow-[0_16px_34px_rgba(148,163,184,0.08)]"
          >
            <div className="border-b border-slate-100 bg-[linear-gradient(135deg,#ffffff,#f6f3ff)] p-3">
              <img
                src={image}
                alt={title}
                className="h-48 w-full rounded-[16px] object-cover"
              />
            </div>
            <div className="p-5">
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default GroomvyScreens;
