import React from "react";
import {
  ArrowRight,
  ChevronRight,
  Cloud,
  Code2,
  Cpu,
  Database,
  Globe,
  Layers3,
  LifeBuoy,
  MonitorSmartphone,
  PencilRuler,
  Rocket,
  Search,
  ShieldCheck,
  ShoppingCart,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import type { ServiceCategory } from "../../../data/itServicesData";

type Props = {
  category: ServiceCategory;
};

const serviceIcons = [
  Globe,
  MonitorSmartphone,
  ShoppingCart,
  Layers3,
] as const;

const processSteps = [
  {
    title: "Discover",
    description: "We understand your goals, audience and product direction.",
    icon: Search,
  },
  {
    title: "Plan",
    description: "We define the roadmap, scope and delivery milestones.",
    icon: Users,
  },
  {
    title: "Design",
    description: "We create user-focused UI/UX flows and interface systems.",
    icon: PencilRuler,
  },
  {
    title: "Develop",
    description: "We build secure, scalable and performance-driven solutions.",
    icon: Code2,
  },
  {
    title: "Test",
    description: "We validate quality, responsiveness and stability.",
    icon: ShieldCheck,
  },
  {
    title: "Deploy & Support",
    description: "We launch, monitor and continuously improve your platform.",
    icon: Rocket,
  },
];

const technologies = [
  { label: "React", icon: Code2 },
  { label: "Next.js", icon: Globe },
  { label: "Node.js", icon: Cpu },
  { label: "Laravel", icon: Layers3 },
  { label: "Python", icon: Code2 },
  { label: "MongoDB", icon: Database },
  { label: "MySQL", icon: Database },
  { label: "AWS", icon: Cloud },
  { label: "Docker", icon: Layers3 },
];

const differentiators = [
  {
    title: "Startup-Focused",
    description: "Practical solutions built around speed, value and momentum.",
    icon: Rocket,
  },
  {
    title: "Agile & Transparent",
    description: "Clear communication, quick iterations and visible progress.",
    icon: Users,
  },
  {
    title: "Scalable Solutions",
    description: "Architecture that grows with your users, features and traffic.",
    icon: Layers3,
  },
  {
    title: "Dedicated Support",
    description: "Launch-to-growth support from a team that stays involved.",
    icon: LifeBuoy,
  },
];

const timelineLabels = [
  "2-4 Weeks",
  "4-8 Weeks",
  "6-10 Weeks",
  "8-16 Weeks",
];

const heroImage = "/it-hero/website.webp";

const CategoryLandingPage: React.FC<Props> = ({ category }) => {
  const scrollTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  };

  return (
    <section className="bg-[linear-gradient(180deg,#fbfcff_0%,#f7f9ff_45%,#ffffff_100%)] px-4 pb-20 pt-24 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="overflow-hidden rounded-[32px] border border-[#1f2458] bg-[#090d2e] shadow-[0_40px_120px_rgba(20,24,74,0.32)]">
          <div className="relative">
            <img
              src={heroImage}
              alt={category.title}
              className="absolute inset-0 h-full w-full object-cover opacity-50"
            />
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(8,11,33,0.96)_0%,rgba(8,11,33,0.92)_35%,rgba(19,18,68,0.78)_62%,rgba(46,14,110,0.64)_100%)]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_72%_18%,rgba(0,212,255,0.32),transparent_20%),radial-gradient(circle_at_76%_58%,rgba(153,69,255,0.38),transparent_18%),radial-gradient(circle_at_92%_20%,rgba(89,120,255,0.3),transparent_15%)]" />

            <div className="relative grid gap-12 px-8 py-12 lg:grid-cols-[minmax(0,1.05fr)_minmax(360px,0.95fr)] lg:px-12 lg:py-16 xl:px-16">
              <div className="max-w-[540px]">
                <div className="mb-10 flex flex-wrap items-center gap-2 text-sm font-medium text-white/72">
                  <Link to="/" className="transition hover:text-white" onClick={scrollTop}>
                    Home
                  </Link>
                  <ChevronRight size={14} />
                  <Link to="/services" className="transition hover:text-white" onClick={scrollTop}>
                    Services
                  </Link>
                  <ChevronRight size={14} />
                  <span className="text-white">{category.title}</span>
                </div>

                <h1 className="max-w-[480px] text-4xl font-semibold leading-[1.05] tracking-[-0.04em] text-white md:text-5xl lg:text-[4rem]">
                  Website & Web
                  <span className="mt-3 block">Application Services</span>
                </h1>

                <p className="mt-6 max-w-[460px] text-lg leading-8 text-white/78 md:text-[1.25rem]">
                  Scalable, secure and future-ready web solutions that drive real business impact.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    to={`/services/${category.slug}/${category.items[0]?.slug ?? ""}`}
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-6 py-3.5 text-sm font-semibold text-white shadow-[0_18px_40px_rgba(124,58,237,0.28)] transition hover:bg-violet-500"
                  >
                    Let's Build Together
                    <ArrowRight size={16} />
                  </Link>
                  <Link
                    to={`/services/${category.slug}/${category.items[1]?.slug ?? category.items[0]?.slug ?? ""}`}
                    onClick={scrollTop}
                    className="inline-flex items-center gap-2 rounded-xl border border-white/18 bg-white/6 px-6 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition hover:bg-white/12"
                  >
                    View Our Work
                  </Link>
                </div>

                <div className="mt-10 flex flex-wrap gap-x-8 gap-y-3 text-sm text-white/82">
                  {["User-Centric Design", "Scalable Architecture", "Performance Driven"].map((item) => (
                    <div key={item} className="inline-flex items-center gap-2">
                      <span className="h-2 w-2 rounded-full bg-violet-400" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative hidden min-h-[360px] lg:block">
                <div className="absolute left-[10%] top-[14%] h-10 w-10 rounded-2xl bg-white/10 backdrop-blur-md shadow-[0_18px_32px_rgba(8,11,33,0.24)]" />
                <div className="absolute left-[4%] top-[58%] h-16 w-16 rounded-[20px] bg-violet-500/24 backdrop-blur-md shadow-[0_20px_36px_rgba(92,44,201,0.3)]" />
                <div className="absolute right-[0%] top-[4%] h-16 w-16 rounded-[20px] bg-sky-400/18 backdrop-blur-md shadow-[0_20px_36px_rgba(35,165,255,0.25)]" />
                <div className="absolute right-[10%] top-[18%] h-[260px] w-[170px] rounded-[24px] border border-white/10 bg-[linear-gradient(180deg,rgba(20,31,86,0.9),rgba(10,13,42,0.95))] p-4 shadow-[0_28px_70px_rgba(8,11,33,0.4)] backdrop-blur-xl">
                  <div className="mb-4 h-7 w-24 rounded-full bg-violet-400/18" />
                  <div className="mb-3 h-16 rounded-2xl bg-sky-400/10" />
                  <div className="space-y-3">
                    <div className="h-2 rounded-full bg-white/20" />
                    <div className="h-2 w-4/5 rounded-full bg-white/15" />
                    <div className="h-2 w-3/5 rounded-full bg-white/10" />
                  </div>
                  <div className="mt-6 h-24 rounded-2xl bg-violet-500/14" />
                </div>
                <div className="absolute left-[18%] top-[12%] h-[320px] w-[76%] rounded-[28px] border border-white/10 bg-[linear-gradient(180deg,rgba(16,24,73,0.96),rgba(9,12,42,0.98))] p-5 shadow-[0_34px_80px_rgba(9,12,42,0.5)] backdrop-blur-xl">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-2.5 w-2.5 rounded-full bg-rose-400/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-amber-300/70" />
                    <span className="h-2.5 w-2.5 rounded-full bg-emerald-400/70" />
                  </div>
                  <div className="grid h-[calc(100%-1.5rem)] grid-cols-[1.1fr_0.9fr] gap-4">
                    <div className="space-y-4">
                      <div className="grid grid-cols-3 gap-3">
                        {[1, 2, 3].map((item) => (
                          <div key={item} className="h-20 rounded-2xl bg-white/6" />
                        ))}
                      </div>
                      <div className="rounded-[24px] bg-white/6 p-4">
                        <div className="mb-4 h-3 w-36 rounded-full bg-white/18" />
                        <div className="relative h-32 overflow-hidden rounded-2xl bg-[linear-gradient(180deg,rgba(30,38,112,0.85),rgba(20,24,73,0.92))]">
                          <div className="absolute inset-x-4 bottom-8 h-[2px] bg-white/10" />
                          <div className="absolute inset-y-4 left-10 w-[2px] bg-white/10" />
                          <div className="absolute left-10 top-16 h-[2px] w-[74%] origin-left rotate-[8deg] rounded-full bg-gradient-to-r from-sky-400 via-violet-400 to-indigo-300 shadow-[0_0_20px_rgba(96,165,250,0.45)]" />
                          <div className="absolute left-[42%] top-[44%] h-3 w-3 rounded-full bg-sky-300 shadow-[0_0_14px_rgba(125,211,252,0.8)]" />
                          <div className="absolute left-[70%] top-[34%] h-3 w-3 rounded-full bg-violet-300 shadow-[0_0_14px_rgba(196,181,253,0.85)]" />
                        </div>
                      </div>
                    </div>
                    <div className="space-y-4">
                      <div className="rounded-[22px] bg-white/6 p-4">
                        <div className="mb-3 h-3 w-24 rounded-full bg-white/18" />
                        <div className="space-y-2">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-10 rounded-xl bg-white/8" />
                          ))}
                        </div>
                      </div>
                      <div className="rounded-[22px] bg-white/6 p-4">
                        <div className="mb-3 h-3 w-24 rounded-full bg-white/18" />
                        <div className="grid grid-cols-2 gap-3">
                          {[1, 2, 3, 4].map((item) => (
                            <div key={item} className="h-20 rounded-2xl bg-white/8" />
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="px-2 pt-14 lg:px-4">
          <div className="grid gap-10 lg:grid-cols-[minmax(0,0.86fr)_minmax(0,1fr)] lg:items-start">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
                Service Overview
              </p>
              <h2 className="mt-4 max-w-[420px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.55rem]">
                End-to-End Web Solutions Built for Growth
              </h2>
            </div>
            <p className="max-w-[620px] text-base leading-8 text-slate-600">
              As a startup, we help businesses establish a powerful digital presence with custom
              websites and web applications that are fast, secure and scalable. From idea to
              launch and beyond, we build solutions that grow with your business.
            </p>
          </div>

          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {category.items.map((item, index) => {
              const Icon = serviceIcons[index] ?? Globe;

              return (
                <div
                  key={item.slug}
                  className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-6 text-2xl font-semibold leading-tight tracking-[-0.02em] text-slate-950">
                    {item.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-slate-600">{item.description}</p>
                  <Link
                    to={`/services/${category.slug}/${item.slug}`}
                    onClick={scrollTop}
                    className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
                  >
                    Learn More
                    <ArrowRight size={16} />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-6 px-2 pt-16 lg:grid-cols-[minmax(250px,0.7fr)_minmax(0,1.3fr)] lg:px-4">
          <div className="rounded-[28px] border border-slate-200/80 bg-white p-8 shadow-[0_16px_48px_rgba(15,23,42,0.06)]">
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
              Project Duration
            </p>
            <h2 className="mt-4 max-w-[280px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950">
              Timelines That Fit Your Goals
            </h2>
            <p className="mt-4 text-sm leading-7 text-slate-600">
              Every project is unique. Our agile approach ensures transparency and delivery on
              time, every time.
            </p>
            <Link
              to="/book-appointment"
              onClick={scrollTop}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-violet-500"
            >
              Discuss Your Project
            </Link>
          </div>

          <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {category.items.map((item, index) => (
              <div
                key={item.slug}
                className="rounded-[28px] border border-slate-200/80 bg-white p-7 shadow-[0_16px_48px_rgba(15,23,42,0.06)]"
              >
                <div className="text-[1.7rem] font-semibold tracking-[-0.03em] text-violet-600">
                  {timelineLabels[index] ?? "Custom"}
                </div>
                <h3 className="mt-5 text-xl font-semibold leading-tight text-slate-950">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-7 text-slate-600">
                  {index === 0 && "Ideal for business websites, landing pages and portfolio sites."}
                  {index === 1 && "Custom web apps with advanced features and integrations."}
                  {index === 2 && "Full-featured online stores with payment, inventory and order flows."}
                  {index === 3 && "Scalable SaaS products with multi-tenant workflows and user management."}
                </p>
                <div className="mt-8 inline-flex h-11 w-11 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                  <Rocket size={18} />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="px-2 pt-16 lg:px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
            How We Deliver
          </p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-slate-950 md:text-[2.45rem]">
            Our Proven Delivery Process
          </h2>
          <p className="mt-4 max-w-[520px] text-sm leading-7 text-slate-600">
            We follow a collaborative and agile process to deliver high-quality solutions.
          </p>

          <div className="mt-10 grid gap-5 sm:grid-cols-2 xl:grid-cols-6">
            {processSteps.map((step, index) => {
              const Icon = step.icon;

              return (
                <div
                  key={step.title}
                  className="relative rounded-[26px] border border-slate-200/80 bg-white px-5 py-7 text-center shadow-[0_16px_48px_rgba(15,23,42,0.05)]"
                >
                  <div className="mx-auto inline-flex h-16 w-16 items-center justify-center rounded-full border border-violet-200 bg-violet-50 text-violet-600">
                    <Icon size={24} />
                  </div>
                  <h3 className="mt-5 text-lg font-semibold text-slate-950">{step.title}</h3>
                  <p className="mt-3 text-sm leading-6 text-slate-600">{step.description}</p>
                  {index < processSteps.length - 1 ? (
                    <div className="absolute right-[-14px] top-1/2 hidden h-px w-7 -translate-y-1/2 bg-violet-200 xl:block" />
                  ) : null}
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-8 px-2 pt-16 lg:grid-cols-[minmax(260px,0.72fr)_minmax(0,1.28fr)] lg:px-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
              Technologies We Use
            </p>
            <h2 className="mt-4 max-w-[360px] text-3xl font-semibold leading-tight tracking-[-0.03em] text-slate-950 md:text-[2.45rem]">
              Modern Technologies for Modern Solutions
            </h2>
            <p className="mt-4 max-w-[360px] text-sm leading-7 text-slate-600">
              We leverage the latest technologies and frameworks to build fast, secure and
              future-ready applications.
            </p>
          </div>

          <div>
            <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
              {technologies.map((technology) => {
                const Icon = technology.icon;

                return (
                  <div
                    key={technology.label}
                    className="flex items-center gap-4 rounded-[22px] border border-slate-200/80 bg-white px-5 py-4 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                  >
                    <div className="inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-violet-50 text-violet-600">
                      <Icon size={20} />
                    </div>
                    <span className="text-base font-semibold text-slate-900">{technology.label}</span>
                  </div>
                );
              })}
            </div>

            <Link
              to={`/services/${category.slug}/${category.items[0]?.slug ?? ""}`}
              onClick={scrollTop}
              className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-violet-600 transition hover:text-violet-700"
            >
              View All Technologies
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>

        <div className="px-2 pt-16 lg:px-4">
          <p className="text-xs font-semibold uppercase tracking-[0.22em] text-violet-500">
            Why Choose Us
          </p>
          <div className="mt-8 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {differentiators.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.title}
                  className="rounded-[26px] border border-slate-200/80 bg-white p-6 shadow-[0_14px_40px_rgba(15,23,42,0.05)]"
                >
                  <div className="inline-flex h-14 w-14 items-center justify-center rounded-full bg-violet-50 text-violet-600">
                    <Icon size={22} />
                  </div>
                  <h3 className="mt-5 text-xl font-semibold text-slate-950">{item.title}</h3>
                  <p className="mt-3 text-sm leading-7 text-slate-600">{item.description}</p>
                </div>
              );
            })}
          </div>
        </div>

        <div className="px-2 pt-16 lg:px-4">
          <div className="overflow-hidden rounded-[30px] bg-[linear-gradient(90deg,#120e42_0%,#171357_48%,#27108f_100%)] px-8 py-10 text-white shadow-[0_28px_90px_rgba(33,16,110,0.3)] lg:flex lg:items-center lg:justify-between lg:px-12">
            <div className="max-w-[580px]">
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/64">
                Ready To Build Your Next Big Thing?
              </p>
              <h2 className="mt-4 text-3xl font-semibold tracking-[-0.03em] text-white md:text-[2.45rem]">
                Let's build something amazing together.
              </h2>
              <p className="mt-4 text-base leading-8 text-white/76">
                Whether you're a startup or an enterprise, we're here to turn your ideas into
                powerful digital solutions.
              </p>
            </div>

            <Link
              to="/book-appointment"
              onClick={scrollTop}
              className="mt-8 inline-flex items-center gap-2 rounded-xl bg-violet-500 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-violet-400 lg:mt-0"
            >
              Start Your Project
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategoryLandingPage;
