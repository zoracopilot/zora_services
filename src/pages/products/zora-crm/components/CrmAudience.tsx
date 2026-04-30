import { crmAudiences } from "../data";
import SectionHeading from "./shared/SectionHeading";

const CrmAudience: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="03 Who It's For"
          title="Built for Teams of All Sizes"
          description="Zora CRM adapts across departments so every team can manage customer interactions with more confidence and clarity."
          align="center"
        />
      </div>

      <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
        {crmAudiences.map(({ title, description, icon: Icon, image }) => (
          <article
            key={title}
            className="overflow-hidden rounded-[28px] border border-white/80 bg-white shadow-[0_20px_44px_rgba(148,163,184,0.12)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_26px_54px_rgba(124,58,237,0.14)]"
          >
            <div className="h-52 overflow-hidden">
              <img
                src={image}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="relative p-6">
              <div className="-mt-12 mb-4 flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-[0_16px_32px_rgba(124,58,237,0.26)]">
                <Icon size={20} />
              </div>
              <h3 className="text-lg font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default CrmAudience;
