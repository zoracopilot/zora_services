import React, { useEffect, useMemo, useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import type { ServiceCategory, ServiceItem } from "../data/itServicesData";
import { IT_HERO_IMAGES } from "../data/itHeroImages";

type Props = {
  category: ServiceCategory;
  backTo: string;
};

const MasterDetailServicePage: React.FC<Props> = ({ category, backTo }) => {
  const navigate = useNavigate();
  const { itemSlug } = useParams();

  const initialItem: ServiceItem =
    category.items.find((item) => item.slug === itemSlug) ?? category.items[0];

  const [selectedSlug, setSelectedSlug] = useState(initialItem.slug);

  useEffect(() => {
    if (!itemSlug) return;
    setSelectedSlug(itemSlug);
  }, [itemSlug]);

  const selectedItem = useMemo(
    () => category.items.find((item) => item.slug === selectedSlug) ?? category.items[0],
    [category.items, selectedSlug]
  );

  const heroImage = IT_HERO_IMAGES[selectedItem.slug];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, left: 0, behavior: "auto" });
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    const container =
      document.querySelector<HTMLElement>("#app-scroll") ||
      document.querySelector<HTMLElement>("[data-scroll-container]");
    if (container) container.scrollTop = 0;
  };

  return (
    <section className="relative min-h-screen overflow-hidden bg-[linear-gradient(180deg,#ffffff_0%,#f8fbff_52%,#eef4ff_100%)] px-6 pb-16 pt-28 text-slate-900">
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-[-260px] top-[-260px] h-[900px] w-[900px] rounded-full bg-violet-200/45 blur-[180px]" />
        <div className="absolute bottom-[-280px] right-[-280px] h-[850px] w-[850px] rounded-full bg-sky-200/45 blur-[170px]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(148,163,184,0.08)_1px,transparent_1px),linear-gradient(to_bottom,rgba(148,163,184,0.08)_1px,transparent_1px)] bg-[size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl">
        <div className="mb-6 text-sm text-slate-500">
          <Link to="/services" className="hover:text-violet-600">
            Services
          </Link>
          <span className="mx-2">/</span>
          <span className="text-slate-900">{category.title}</span>
        </div>

        <div className="mb-14">
          <h1 className="text-4xl font-extrabold md:text-6xl">{category.title}</h1>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">
            {category.desc}
          </p>
          <div className="mt-6 h-[3px] w-24 rounded-full bg-gradient-to-r from-sky-500 to-violet-500" />
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          <aside className="lg:col-span-4">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/92 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="border-b border-slate-200 p-6">
                <p className="text-sm text-slate-500">Select a service to view details</p>
              </div>

              <div className="space-y-3 p-3">
                {category.items.map((item) => {
                  const active = item.slug === selectedSlug;

                  return (
                    <button
                      key={item.slug}
                      onClick={() => {
                        setSelectedSlug(item.slug);
                        requestAnimationFrame(() => {
                          scrollToTop();
                        });
                      }}
                      className={`w-full rounded-2xl border px-6 py-5 text-left transition ${
                        active
                          ? "border-violet-200 bg-gradient-to-r from-sky-50 to-violet-50 shadow-[0_12px_30px_rgba(99,102,241,0.12)]"
                          : "border-slate-200 bg-white hover:border-violet-200 hover:bg-slate-50"
                      }`}
                    >
                      <div className="text-lg font-semibold text-slate-900">{item.title}</div>
                      <div className="mt-1 text-sm text-slate-600">{item.description}</div>
                    </button>
                  );
                })}
              </div>

              <div className="border-t border-slate-200 p-6">
                <Link
                  to={backTo}
                  className="text-sm text-slate-500 hover:text-violet-600"
                  onClick={scrollToTop}
                >
                  Back to Services
                </Link>
              </div>
            </div>
          </aside>

          <main className="space-y-8 lg:col-span-8">
            <div className="overflow-hidden rounded-3xl border border-slate-200 bg-white/92 shadow-[0_24px_70px_rgba(15,23,42,0.08)] backdrop-blur-xl">
              <div className="relative w-full">
                {heroImage ? (
                  <img
                    src={heroImage}
                    alt={selectedItem.title}
                    className="h-auto w-full object-contain"
                  />
                ) : null}

                <div className="absolute inset-0 bg-gradient-to-b from-white/5 via-white/35 to-white/95" />
              </div>

              <div className="p-10">
                <p className="text-xs tracking-[0.25em] text-violet-500">ZORA GLOBAL AI</p>
                <h2 className="mt-3 text-3xl font-extrabold md:text-5xl">{selectedItem.title}</h2>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {selectedItem.description}
                </p>

                <div className="mt-7 flex flex-wrap gap-3">
                  {selectedItem.features?.map((feature, index) => (
                    <span
                      key={index}
                      className="rounded-full border border-slate-200 bg-slate-50 px-5 py-2 text-sm text-slate-700"
                    >
                      {feature}
                    </span>
                  ))}
                </div>

                <div className="mt-10 flex flex-wrap gap-4">
                  <Link
                    to={`/services/${category.slug}/${selectedItem.slug}`}
                    onClick={scrollToTop}
                    className="rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] px-10 py-4 font-semibold text-white hover:from-[#8b5cf6] hover:via-[#a78bfa] hover:to-[#c4b5fd]"
                  >
                    View Service
                  </Link>

                  <Link
                    to="/book-appointment"
                    onClick={scrollToTop}
                    className="rounded-2xl bg-gradient-to-r from-[#7c3aed] via-[#8b5cf6] to-[#a78bfa] px-10 py-4 font-semibold text-white hover:from-[#8b5cf6] hover:via-[#a78bfa] hover:to-[#c4b5fd]"
                  >
                    Book Appointment
                  </Link>

                  <button
                    onClick={() => {
                      scrollToTop();
                      navigate(-1);
                    }}
                    className="rounded-2xl border border-slate-200 bg-white px-10 py-4 text-slate-700 hover:bg-slate-50"
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </main>
        </div>
      </div>
    </section>
  );
};

export default MasterDetailServicePage;

