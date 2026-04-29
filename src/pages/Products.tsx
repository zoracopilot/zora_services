import { Link } from "react-router-dom";
import {
  Blocks,
  Briefcase,
  Building2,
  ClipboardList,
  CreditCard,
  HeartPulse,
  Layers3,
  ShieldCheck,
  Sparkles,
  Users,
  Zap,
} from "lucide-react";
import PageSEO from "../components/PageSEO";

const products = [
  {
    id: "zora-hrms",
    title: "ZORA HRMS",
    subtitle: "Human Resource Management System",
    description:
      "Streamline HR operations from recruitment to retirement.",
    bullets: [
      "Employee Lifecycle",
      "Payroll & Benefits",
      "Attendance & Leave",
      "Performance",
    ],
    accent: "violet",
    icon: Users,
  },
  {
    id: "zora-crm",
    title: "ZORA CRM",
    subtitle: "Customer Relationship Management System",
    description:
      "Build stronger relationships and deliver exceptional customer experiences.",
    bullets: [
      "Lead Management",
      "Customer 360 View",
      "Sales Automation",
      "Reports & Analytics",
    ],
    accent: "blue",
    icon: Briefcase,
  },
  {
    id: "careloop",
    title: "CARELOOP",
    subtitle: "Healthcare Management System",
    description:
      "Manage patient care seamlessly and improve healthcare outcomes.",
    bullets: [
      "Patient Management",
      "Appointments",
      "Billing & Invoicing",
      "Medical Records",
    ],
    accent: "rose",
    icon: HeartPulse,
  },
  {
    id: "groomvy",
    title: "GROOMVY",
    subtitle: "Salon & Spa Management System",
    description:
      "Manage appointments, staff, inventory, and customer loyalty.",
    bullets: [
      "Appointment Management",
      "Staff & Services",
      "Inventory Management",
      "Loyalty & Promotions",
    ],
    accent: "teal",
    icon: Sparkles,
  },
  {
    id: "erp",
    title: "ERP",
    subtitle: "Enterprise Resource Planning",
    description:
      "Integrate and manage core business processes across departments.",
    bullets: [
      "Finance & Accounting",
      "Inventory & Supply Chain",
      "Procurement",
      "Business Intelligence",
    ],
    accent: "amber",
    icon: Building2,
  },
  {
    id: "more-products",
    title: "More Products",
    subtitle: "Innovation is Ongoing",
    description:
      "We're continuously building innovative solutions to solve real-world challenges.",
    bullets: [
      "AI-Powered Solutions",
      "Industry-Specific Platforms",
      "Automation Tools",
      "And Much More...",
    ],
    accent: "indigo",
    icon: Blocks,
  },
];

const reasons = [
  {
    title: "Enterprise Security",
    description: "Your data is protected with best-in-class security.",
    icon: ShieldCheck,
  },
  {
    title: "Proven Technology",
    description: "Reliable, scalable, and built for performance.",
    icon: Layers3,
  },
  {
    title: "Customer-Centric",
    description: "Designed to enhance experiences that matter.",
    icon: Users,
  },
  {
    title: "Dedicated Support",
    description: "Here to help you succeed, every step of the way.",
    icon: ClipboardList,
  },
];

const accentClasses: Record<string, string> = {
  violet:
    "border-violet-100 bg-violet-50 text-violet-700 shadow-[0_18px_38px_rgba(124,58,237,0.08)]",
  blue:
    "border-sky-100 bg-sky-50 text-sky-700 shadow-[0_18px_38px_rgba(59,130,246,0.08)]",
  rose:
    "border-rose-100 bg-rose-50 text-rose-600 shadow-[0_18px_38px_rgba(244,63,94,0.08)]",
  teal:
    "border-teal-100 bg-teal-50 text-teal-700 shadow-[0_18px_38px_rgba(20,184,166,0.08)]",
  amber:
    "border-amber-100 bg-amber-50 text-amber-700 shadow-[0_18px_38px_rgba(245,158,11,0.08)]",
  indigo:
    "border-indigo-100 bg-indigo-50 text-indigo-700 shadow-[0_18px_38px_rgba(99,102,241,0.08)]",
};

export default function Products() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfbff] text-slate-900">
      <PageSEO
        title="Products - Business Software Solutions | Zora Global AI"
        description="Explore Zora Global AI products including HRMS, CRM, Careloop, Groomvy and ERP solutions built for modern business growth."
        canonical="/products"
      />

      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          backgroundImage: `
            radial-gradient(circle at 14% 14%, rgba(196,181,253,0.22), transparent 32%),
            radial-gradient(circle at 88% 18%, rgba(191,219,254,0.2), transparent 30%),
            radial-gradient(circle at 48% 86%, rgba(233,213,255,0.16), transparent 34%)
          `,
        }}
      />

      <section className="mx-auto max-w-7xl px-6 pb-12 pt-36 lg:pb-20">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <h1 className="max-w-2xl font-serif text-5xl font-black leading-[1.04] tracking-tight text-slate-950 md:text-6xl">
              Intelligent Products.
              <br />
              Real <span className="text-violet-600">Business Impact.</span>
            </h1>
            <p className="mt-6 max-w-xl text-lg leading-9 text-slate-600">
              Integrated solutions to automate operations, elevate customer
              experiences, and drive sustainable growth.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href="#our-products"
                className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-colors hover:bg-violet-700"
              >
                Explore Products
              </a>
              <Link
                to="/book-appointment"
                className="inline-flex items-center gap-2 rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 shadow-[0_14px_30px_rgba(148,163,184,0.08)] transition-colors hover:bg-slate-50"
              >
                Book a Demo
              </Link>
            </div>
          </div>

          <div className="relative">
            <div className="min-h-[420px] rounded-[32px] border border-dashed border-violet-200/90 bg-[linear-gradient(135deg,rgba(255,255,255,0.74),rgba(245,243,255,0.88))] shadow-[0_26px_60px_rgba(148,163,184,0.12)]" />
          </div>
        </div>
      </section>

      <section id="our-products" className="mx-auto max-w-7xl px-6 py-10">
        <div className="text-center">
          <h2 className="font-serif text-4xl font-black tracking-tight text-slate-950">
            Our Products
          </h2>
          <p className="mt-3 text-base text-slate-500">
            Powerful. Integrated. Built for growth.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {products.map(({ id, title, subtitle, description, bullets, accent, icon: Icon }) => (
            <article
              id={id}
              key={title}
              className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(148,163,184,0.08)]"
            >
              <div className="flex items-start gap-4">
                <div className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accentClasses[accent]}`}>
                  <Icon size={22} />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-slate-950">{title}</h3>
                  <p className="mt-1 text-xs font-medium uppercase tracking-[0.14em] text-slate-400">
                    {subtitle}
                  </p>
                </div>
              </div>

              <p className="mt-5 text-sm leading-7 text-slate-600">
                {description}
              </p>

              <ul className="mt-5 space-y-3">
                {bullets.map((item) => (
                  <li key={item} className="flex items-center gap-3 text-sm text-slate-600">
                    <span className={`inline-block h-2.5 w-2.5 rounded-full ${accent === "violet" ? "bg-violet-500" : accent === "blue" ? "bg-sky-500" : accent === "rose" ? "bg-rose-500" : accent === "teal" ? "bg-teal-500" : accent === "amber" ? "bg-amber-500" : "bg-indigo-500"}`} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </section>

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

      <section className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid gap-10 rounded-[32px] border border-violet-100 bg-[linear-gradient(135deg,#ffffff,#f5f1ff)] p-8 shadow-[0_22px_48px_rgba(148,163,184,0.1)] lg:grid-cols-[1fr_0.8fr] lg:items-center">
          <div>
            <h2 className="font-serif text-4xl font-black tracking-tight text-slate-950">
              Ready to Transform Your Business?
            </h2>
            <p className="mt-4 max-w-xl text-base leading-8 text-slate-600">
              Let&apos;s build the future of your business together with
              intelligent products designed for modern operations.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Link
                to="/book-appointment"
                className="inline-flex items-center rounded-xl bg-violet-600 px-6 py-3 text-sm font-semibold text-white shadow-[0_18px_38px_rgba(124,58,237,0.22)] transition-colors hover:bg-violet-700"
              >
                Book a Demo
              </Link>
              <a
                href="#our-products"
                className="inline-flex items-center rounded-xl border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-50"
              >
                Explore Products
              </a>
            </div>
          </div>

          <div className="flex min-h-[220px] items-center justify-center rounded-[28px] border border-dashed border-violet-200 bg-white/55">
            <CreditCard size={60} className="text-violet-200" />
          </div>
        </div>
      </section>
    </main>
  );
}
