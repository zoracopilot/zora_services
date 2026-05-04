import React, { useEffect, useMemo, useState } from "react";
import { Link, Navigate, useNavigate, useParams } from "react-router-dom";
import { NON_IT_SERVICE_CATEGORIES } from "../../data/nonItServicesData";
import { NON_IT_HERO_IMAGES } from "../../data/nonItHeroImages";
import PageSEO from "../../components/PageSEO";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";

const NonITServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const navigate = useNavigate();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;
    if (document.scrollingElement) document.scrollingElement.scrollTop = 0;

    const container =
      document.querySelector<HTMLElement>("#app-scroll") ||
      document.querySelector<HTMLElement>("[data-scroll-container]");
    if (container) container.scrollTop = 0;
  };

  const category = useMemo(
    () => NON_IT_SERVICE_CATEGORIES.find((serviceCategory) => serviceCategory.slug === categorySlug),
    [categorySlug]
  );

  const heroDescription =
    category?.slug === "business-strategy-consulting"
      ? "Strategic advisory services designed to optimize business operations, improve efficiency and drive sustainable long-term growth. We help organizations align processes, technology and decision-making to achieve measurable performance improvements and scalable success."
      : category?.slug === "branding-creative-services"
        ? "Brand identity systems and creative solutions designed to strengthen market presence, improve brand recognition and ensure visual consistency. We help businesses build impactful brand identities through strategic design, creative execution and consistent messaging to drive engagement, trust and long-term growth."
        : category?.slug === "accounting-financial-operations"
          ? "Reliable financial operations support designed to improve accuracy, ensure regulatory compliance and enhance financial reporting. We help businesses streamline accounting processes, maintain data integrity and gain clear financial insights to support better decision-making and sustainable growth."
          : category?.slug === "digital-marketing-services"
            ? "Performance-driven marketing systems designed to accelerate business growth and deliver measurable ROI. We help businesses execute data-driven campaigns, optimize marketing channels and improve conversion performance to maximize visibility, engagement and long-term revenue growth."
            : category?.slug === "staff-augmentation-workforce-solutions"
              ? "Flexible staffing solutions designed to help businesses scale non-IT teams quickly with skilled and qualified professionals. We support efficient workforce expansion through reliable talent sourcing, seamless onboarding and scalable staffing models to improve productivity and meet evolving business demands."
              : category?.desc;

  const [activeSlug, setActiveSlug] = useState<string>("");

  useEffect(() => {
    setActiveSlug("");
    scrollToTop();
  }, [categorySlug]);

  const activeItem = useMemo(() => {
    if (!category) return null;
    const initial = category.items?.[0]?.slug ?? "";
    const slugToUse = activeSlug || initial;
    return category.items.find((item) => item.slug === slugToUse) ?? category.items[0] ?? null;
  }, [category, activeSlug]);

  if (!category) return <Navigate to="/services/business-strategy-consulting" replace />;

  const heroImage =
    (activeItem ? NON_IT_HERO_IMAGES[activeItem.slug] : undefined) ??
    "/non-it-hero/default.png";

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef4ff_100%)] text-slate-900">
      <PageSEO
        title={`${category.title} | Zora Global AI`}
        description={category.desc}
        canonical={`/services/${category.slug}`}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: category.title, path: `/services/${category.slug}` },
        ]}
      />

      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-280px] top-[-220px] h-[900px] w-[900px] rounded-full bg-sky-200/45 blur-[180px]" />
        <div className="absolute bottom-[-300px] right-[-260px] h-[900px] w-[900px] rounded-full bg-violet-200/40 blur-[180px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="border-b border-slate-200 px-6 pb-14 pt-28">
        <div className="mx-auto max-w-6xl">
          <div className="mb-6 text-sm text-slate-500">
            <Link to="/services" className="transition hover:text-violet-600" onClick={scrollToTop}>
              Services
            </Link>
            <span className="mx-2">/</span>
            <span className="text-slate-900">{category.title}</span>
          </div>

          <div className="overflow-hidden rounded-[28px] border border-slate-200 bg-white/92 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
            <div className="relative px-8 py-12 md:px-12 md:py-14">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_80%_70%,rgba(168,85,247,0.10),transparent_55%)]" />
              <div className="relative text-center">
                <h1 className="text-3xl font-extrabold tracking-tight md:text-5xl">
                  {category.title}
                </h1>
                <p className="mx-auto mt-4 max-w-4xl text-lg leading-relaxed text-slate-600">
                  {heroDescription}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="px-6 py-14">
        <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="rounded-3xl border border-slate-200 bg-white/92 p-6 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <h2 className="text-lg font-bold text-slate-900">Services</h2>

              <div className="mt-5 space-y-4">
                {category.items.map((item) => {
                  const isActive = item.slug === activeItem?.slug;
                  return (
                    <button
                      key={item.slug}
                      onClick={() => {
                        setActiveSlug(item.slug);
                        requestAnimationFrame(() => scrollToTop());
                      }}
                      className={[
                        "w-full rounded-2xl border px-5 py-4 text-left transition",
                        isActive
                          ? "border-violet-200 bg-gradient-to-r from-sky-50 to-violet-50 shadow-[0_12px_30px_rgba(99,102,241,0.12)]"
                          : "border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50",
                      ].join(" ")}
                    >
                      <div className="font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{item.shortDesc}</div>
                    </button>
                  );
                })}
              </div>
            </div>
          </aside>

          <main className="lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/92 shadow-[0_24px_70px_rgba(15,23,42,0.08)]">
              <div className="relative h-52 md:h-60">
                <img
                  src={heroImage}
                  alt={activeItem?.title ?? "Service"}
                  className="h-full w-full object-cover"
                  onError={(event) => {
                    event.currentTarget.src = "/non-it-hero/default.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/30 to-white/95" />
              </div>

              <div className="p-8 md:p-10">
                <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                  {activeItem?.title}
                </h2>
                <p className="mt-4 text-lg leading-relaxed text-slate-600">
                  {activeItem?.shortDesc}
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {(activeItem?.tags ?? []).map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm text-slate-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <button
                    onClick={() => {
                      if (!activeItem) return;
                      scrollToTop();
                      navigate(`/services/${category.slug}/${activeItem.slug}`);
                    }}
                    className="rounded-2xl bg-blue-600 px-8 py-4 font-semibold text-white transition hover:bg-blue-700 shadow-[0_12px_30px_rgba(37,99,235,0.22)]"
                  >
                    View Service
                  </button>

                  <Link
                    to="/book-appointment"
                    onClick={scrollToTop}
                    className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Book Appointment
                  </Link>

                  <Link
                    to="/services"
                    onClick={scrollToTop}
                    className="rounded-2xl border border-slate-200 bg-white px-8 py-4 font-semibold text-slate-700 transition hover:bg-slate-50"
                  >
                    Back to Services
                  </Link>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default NonITServiceCategoryPage;

