import SectionReveal from "./SectionReveal";

const EnterpriseDifferentiators: React.FC = () => {
  const differentiators = [
    {
      number: "01",
      title: "Board-Level AI Strategy",
      desc: "We align artificial intelligence initiatives with executive business outcomes to drive measurable impact, long-term value and sustainable growth across the organization.",
      image: "/home-enterprise/strategy.webp",
      imageLeft: true,
    },
    {
      number: "02",
      title: "Security-First Architecture",
      desc: "Built with enterprise-grade compliance, strong data encryption and resilient infrastructure to protect operations, users and business-critical systems at every layer.",
      image: "/home-enterprise/security.webp",
      imageLeft: false,
    },
    {
      number: "03",
      title: "Scalable AI Infrastructure",
      desc: "Cloud-native, modular systems built to scale your AI capabilities efficiently while supporting long-term digital transformation and future-ready expansion.",
      image: "/home-enterprise/scalability.webp",
      imageLeft: true,
    },
    {
      number: "04",
      title: "Data-Driven Decision Intelligence",
      desc: "Leverage real-time insights and predictive analytics to make smarter, faster and more confident business decisions with greater operational clarity.",
      image: "/home-enterprise/insights.webp",
      imageLeft: false,
    },
  ];

  return (
    <section className="mx-auto max-w-[128rem] px-2 py-14 sm:px-3 lg:px-3 lg:py-18">
      <SectionReveal className="mx-auto max-w-5xl text-center">
        <div className="flex items-center justify-center gap-4">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-violet-500">
            Why Enterprises Choose Us
          </p>
        </div>
        <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-slate-950 sm:text-[3rem] lg:text-[2.8rem]">
          Built for What Matters Most
        </h2>
        <p className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-9 text-slate-600">
          We deliver secure, scalable and intelligent solutions that help enterprises
          thrive in an AI-powered world.
        </p>
      </SectionReveal>

      <div className="mt-10 overflow-hidden rounded-[28px] border border-slate-200 bg-white shadow-[0_18px_40px_rgba(148,163,184,0.08)]">
        {differentiators.map(({ number, title, desc, image, imageLeft }, index) => (
          <article
            key={title}
            className={`flex flex-col gap-8 p-6 lg:items-center lg:justify-between lg:gap-12 lg:p-8 ${
              imageLeft ? "lg:flex-row" : "lg:flex-row-reverse"
            } ${
              index !== differentiators.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <div className="w-full lg:w-auto lg:shrink-0">
              <div
                className={`h-[290px] w-full max-w-[380px] overflow-hidden bg-slate-950 lg:w-[380px] ${
                  imageLeft ? "mr-auto" : "ml-auto"
                }`}
              >
                <img
                  src={image}
                  alt={title}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>

            <div
              className={`flex flex-1 items-center ${
                imageLeft ? "justify-end" : "justify-start"
              }`}
            >
              <SectionReveal
                className={`max-w-[560px] text-left ${
                  imageLeft ? "ml-auto" : "mr-auto"
                }`}
              >
                <p className="text-[2rem] font-black tracking-tight text-violet-500">
                  {number}
                </p>
                <h3 className="mt-4 font-serif text-[2.05rem] font-black leading-[1.08] tracking-tight text-slate-950">
                  {title}
                </h3>
                <p className="mt-5 max-w-[27rem] text-[1.02rem] leading-9 text-slate-600">
                  {desc}
                </p>
              </SectionReveal>
            </div>
          </article>
        ))}
      </div>

    </section>
  );
};

export default EnterpriseDifferentiators;
