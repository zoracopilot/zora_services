import { careloopRoles } from "../data";
import SectionHeading from "./SectionHeading";

const CareloopRoles: React.FC = () => {
  return (
    <section className="bg-white/70 py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-6">
        <SectionHeading
          eyebrow="Role-Based Experience"
          title="A Platform Built For Every Role In Your Clinic"
          description="Each workspace is tailored so admins, doctors, clinic staff, and patients get the clarity they need without extra complexity."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-2 xl:grid-cols-4">
          {careloopRoles.map(({ title, description, icon: Icon, bullets }, index) => (
            <article
              key={title}
              className="overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_38px_rgba(148,163,184,0.09)]"
            >
              <div className="p-6">
                <div
                  className={`flex h-14 w-14 items-center justify-center rounded-2xl ${
                    index % 2 === 0
                      ? "bg-indigo-50 text-indigo-600"
                      : "bg-teal-50 text-teal-600"
                  }`}
                >
                  <Icon size={24} />
                </div>
                <h3 className="mt-5 text-xl font-bold text-slate-950">{title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-600">{description}</p>
              </div>

              <div className="border-t border-slate-100 bg-slate-50/70 px-6 py-5">
                <div className="space-y-2">
                  {bullets.map((item) => (
                    <div key={item} className="flex items-center gap-3 text-sm text-slate-700">
                      <span className="h-2.5 w-2.5 rounded-full bg-teal-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CareloopRoles;
