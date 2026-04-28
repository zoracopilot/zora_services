import { Search, PenTool, Code2, Rocket } from "lucide-react";

const steps = [
  {
    title: "Discover",
    description:
      "We understand business goals, users, and the operating context before defining scope.",
    Icon: Search,
  },
  {
    title: "Design",
    description:
      "We shape the right user flows, technical direction, and solution blueprint for delivery.",
    Icon: PenTool,
  },
  {
    title: "Develop",
    description:
      "We build with precision, test continuously, and keep execution aligned with real priorities.",
    Icon: Code2,
  },
  {
    title: "Deliver",
    description:
      "We launch, support, iterate, and help teams turn technology into long-term business value.",
    Icon: Rocket,
  },
];

const DeliveryProcess: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-white px-4 py-16 text-slate-900 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_15%_20%,rgba(192,132,252,0.08),transparent_30%),radial-gradient(circle_at_85%_75%,rgba(96,165,250,0.06),transparent_28%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="max-w-3xl">
          <h2 className="text-3xl font-serif font-bold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
            From idea to impact, we follow a proven process
          </h2>
          <p className="mt-4 text-sm leading-7 text-slate-600 sm:text-base sm:leading-8">
            The delivery model stays structured across strategy, design,
            engineering, and rollout so teams get clarity, momentum, and better
            outcomes at every stage.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:mt-12 sm:gap-6 lg:grid-cols-4">
          {steps.map(({ title, description, Icon }, index) => (
            <article
              key={title}
              className="relative rounded-[24px] border border-violet-100 bg-white p-5 shadow-[0_18px_50px_rgba(31,41,55,0.08)] sm:rounded-[28px] sm:p-6"
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-violet-500 to-fuchsia-400 text-white shadow-[0_14px_40px_rgba(168,85,247,0.25)]">
                  <Icon size={24} />
                </div>
                <span className="text-sm font-semibold text-violet-300">
                  0{index + 1}
                </span>
              </div>
              <h3 className="text-xl font-semibold text-slate-900">{title}</h3>
              <p className="mt-3 text-sm leading-6 text-slate-600">
                {description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DeliveryProcess;
