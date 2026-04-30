import { hrmsFeatures } from "../data";
import SectionHeading from "./SectionHeading";
import InfoCard from "./shared/InfoCard";

const HrmsFeatures: React.FC = () => {
  return (
    <section id="hrms-features" className="mx-auto max-w-7xl px-6 py-12 lg:py-16">
      <div className="grid gap-10 xl:grid-cols-[320px_minmax(0,1fr)] xl:items-start xl:gap-12">
        <div className="xl:pt-6">
          <SectionHeading
            eyebrow="Features"
            title="Everything You Need To Run HR Smoothly"
            description="HRMS offers a complete suite of modules that cover all essential HR functions. Each feature is designed to automate processes, improve accuracy, and enhance the overall employee experience."
            align="left"
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
            {hrmsFeatures.map(({ title, description, icon: Icon }) => (
              <InfoCard
                key={title}
                title={title}
                description={description}
                icon={Icon}
                className="min-h-[252px] rounded-[28px] p-6 shadow-[0_18px_38px_rgba(154,163,178,0.10)]"
              />
            ))}
        </div>
      </div>
    </section>
  );
};

export default HrmsFeatures;
