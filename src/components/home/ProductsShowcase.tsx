import { ArrowRight } from "lucide-react";

const products = [
  {
    title: "Careloop",
    description:
      "Smart healthcare management for clinics and care teams with patient records, scheduling, and follow-up visibility.",
    image: "/hero/careloop.webp",
    href: "https://www.zoraai.us/",
    accent: "Healthcare Platform",
  },
  {
    title: "CRM Platform",
    description:
      "Powerful CRM to manage leads, customers, and sales pipelines with clearer reporting and team coordination.",
    image: "/hero/crm.webp",
    href: "https://www.zoraai.us/products/crms",
    accent: "Sales Operations",
  },
  {
    title: "HRMS",
    description:
      "Centralize attendance, payroll, employee records, and workforce workflows in one operational dashboard.",
    image: "/hero/hrms.webp",
    href: "https://www.zoraai.us/products/hrms",
    accent: "People Operations",
  },
  {
    title: "Saloon Desk",
    description:
      "Manage appointments, walk-ins, staff schedules, and customer histories for modern salon and spa teams.",
    image: "/hero/salondesk.webp",
    href: "https://www.zoraai.us/",
    accent: "Service Management",
  },
];

const ProductsShowcase: React.FC = () => {
  return (
    <section className="relative overflow-hidden bg-[#faf8ff] px-4 py-16 sm:px-6 sm:py-20 lg:px-8 lg:py-24">
      <div className="absolute inset-0 pointer-events-none bg-[radial-gradient(circle_at_top_left,rgba(99,102,241,0.10),transparent_30%),radial-gradient(circle_at_85%_30%,rgba(168,85,247,0.10),transparent_26%)]" />

      <div className="relative mx-auto max-w-7xl rounded-[32px] border border-violet-100 bg-white/95 p-5 shadow-[0_24px_70px_rgba(76,29,149,0.08)] sm:p-8 lg:p-10">
        <div className="grid gap-8 xl:grid-cols-[320px_minmax(0,1fr)] xl:gap-10">
          <div className="flex flex-col justify-between xl:sticky xl:top-24 xl:self-start">
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-violet-500">
                Our Products
              </p>
              <h2 className="mt-4 max-w-[12ch] text-3xl font-semibold leading-tight text-slate-950 sm:text-4xl lg:text-5xl">
                Innovative Products Built for Tomorrow
              </h2>
              <p className="mt-5 max-w-sm text-sm leading-7 text-slate-600 sm:text-[15px]">
                Our in-house products are designed to simplify operations,
                enhance engagement and accelerate business growth.
              </p>
            </div>

            <a
              href="https://www.zoraai.us/"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 inline-flex w-fit items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)] transition-colors hover:bg-violet-700"
            >
              Explore Products
              <ArrowRight size={16} />
            </a>
          </div>

          <div className="grid gap-5 lg:grid-cols-2">
            {products.map((product) => (
              <a
                key={product.title}
                href={product.href}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex h-full flex-col rounded-[26px] border border-slate-200 bg-white p-4 shadow-[0_12px_35px_rgba(15,23,42,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-violet-200 hover:bg-[#f8f4ff] hover:shadow-[0_20px_48px_rgba(91,33,182,0.14)] active:border-violet-300 active:bg-[#f3edff] sm:p-5"
              >
                <div className="overflow-hidden rounded-[20px] border border-violet-100 bg-white p-0.5 shadow-[inset_0_1px_0_rgba(255,255,255,0.7)]">
                  <img
                    src={product.image}
                    alt={product.title}
                    className="aspect-[16/8.4] w-full rounded-[18px] object-contain bg-white transition-transform duration-300 group-hover:scale-[1.01]"
                    loading="lazy"
                    draggable={false}
                  />
                </div>

                <div className="flex flex-1 flex-col px-1 pt-5">
                  <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-violet-500">
                    {product.accent}
                  </p>
                  <h3 className="mt-3 text-2xl font-semibold text-slate-900">
                    {product.title}
                  </h3>
                  <p className="mt-4 flex-1 text-sm leading-7 text-slate-600 sm:text-base">
                    {product.description}
                  </p>
                  <span className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-violet-700">
                    Learn More
                    <ArrowRight size={16} />
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsShowcase;
