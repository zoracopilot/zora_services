import { hrmsUseCases } from "../data";
import SectionHeading from "./SectionHeading";
import InfoCard from "./shared/InfoCard";

const HrmsUseCases: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="mx-auto max-w-3xl text-center">
        <SectionHeading
          eyebrow="04 Use Cases / Who It's For"
          title="Built For HR Teams, Managers, And Modern Organizations"
          description="HRMS is suitable for organizations of all sizes and industries. It is designed to simplify HR operations for every role."
          align="center"
        />
      </div>

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {hrmsUseCases.map(({ title, description, icon: Icon }) => (
            <InfoCard
              key={title}
              title={title}
              description={description}
              icon={Icon}
              iconClassName="bg-[#E6E1F7] text-[#6C5DD3]"
              className="bg-white p-6 shadow-[0_18px_38px_rgba(154,163,178,0.10)]"
            />
          ))}
        </div>
    </section>
  );
};

export default HrmsUseCases;
