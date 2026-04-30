import { erpSteps } from "../data";
import SectionHeading from "./shared/SectionHeading";

const ErpWorkflow: React.FC = () => {
  return (
    <section className="mx-auto max-w-7xl px-6 py-10 lg:py-14">
      <div className="overflow-hidden rounded-[32px] border border-[#F1DFD7] bg-[linear-gradient(180deg,#FFF8F5,#FFF2EC_54%,#FFFFFF)] px-6 py-10 shadow-[0_20px_44px_rgba(226,74,26,0.08)] lg:px-10 lg:py-12">
        <SectionHeading
          eyebrow="How It Works"
          title="A Simple Process To Manage Your Billing Effortlessly"
          description="Move from customer details to invoices, payments, and reporting with a clear operational flow."
          align="center"
        />

        <div className="relative mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-5">
          <div className="absolute left-[10%] right-[10%] top-9 hidden border-t border-dashed border-[#F3B29B] xl:block" />
          {erpSteps.map(({ title, description }, index) => (
            <article key={title} className="relative text-center">
              <div className="mx-auto flex h-[72px] w-[72px] items-center justify-center rounded-full border-8 border-[#FFF1EB] bg-[#D62818] text-xl font-black text-white shadow-[0_14px_32px_rgba(214,40,24,0.18)]">
                {index + 1}
              </div>
              <p className="mt-6 text-sm font-semibold text-[#1B2430]">{title}</p>
              <p className="mt-3 text-sm leading-7 text-[#6B7280]">{description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ErpWorkflow;
