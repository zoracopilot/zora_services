import React, { useMemo, useRef, useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";

const CoreServices: React.FC = () => {
  const [activeId, setActiveId] = useState<number | null>(null);
  const [isInView, setIsInView] = useState(false);

  const sectionRef = useRef<HTMLElement | null>(null);
  const scrollRef = useRef<HTMLDivElement>(null);
  const services = useMemo(
    () => [
      {
        id: 1,
        title: "Web & Web Applications",
        description:
          "High-performance, scalable web solutions engineered for enterprise-grade performance and security.",
        slug: "website-web-application-services",
        image: "/home-services/webandwebapplications.webp",
      },
      {
        id: 2,
        title: "Mobile Development",
        description:
          "Native and cross-platform mobile applications delivering seamless user experiences across all devices.",
        slug: "mobile-application-development",
        image: "/home-services/mobileapplication.webp",
      },
      {
        id: 3,
        title: "AI & Automation",
        description:
          "Intelligent automation solutions leveraging AI and machine learning to optimize business operations.",
        slug: "ai-automation-solutions",
        image: "/home-services/aiandautomation.webp",
      },
      {
        id: 4,
        title: "Enterprise Software",
        description:
          "Custom-built enterprise platforms designed for scalability, security and long-term business value.",
        slug: "custom-enterprise-software",
        image: "/home-services/enterprisesoftware.webp",
      },
      {
        id: 5,
        title: "Cloud & Infrastructure",
        description:
          "Modern cloud-native solutions enabling global collaboration, flexibility and digital expansion.",
        slug: "cloud-infrastructure-services",
        image: "/home-services/cloudandinfrastructure.webp",
      },
    ],
    []
  );

  const focusCard = useCallback((id: number) => {
    const container = scrollRef.current;
    if (!container) return;

    const el = container.querySelector<HTMLElement>(`[data-id="${id}"]`);
    if (!el) return;

    const containerRect = container.getBoundingClientRect();
    const elRect = el.getBoundingClientRect();
    const elCenter = elRect.left + elRect.width / 2;
    const containerCenter = containerRect.left + containerRect.width / 2;
    const delta = elCenter - containerCenter;

    container.scrollTo({
      left: container.scrollLeft + delta,
      behavior: "auto",
    });
  }, []);

  const handleClick = (id: number) => {
    setActiveId((prev) => {
      const next = prev === id ? null : id;

      if (next !== null && isInView) {
        setTimeout(() => focusCard(next), 60);
      }

      return next;
    });
  };

  const scrollOneCard = (direction: "left" | "right") => {
    const currentIndex =
      activeId == null ? -1 : services.findIndex((s) => s.id === activeId);

    const nextIndex =
      direction === "right"
        ? (currentIndex + 1) % services.length
        : (currentIndex - 1 + services.length) % services.length;

    const nextId = services[nextIndex].id;
    setActiveId(nextId);

    if (isInView) focusCard(nextId);
  };

  useEffect(() => {
    const node = sectionRef.current;
    if (!node) return;

    const obs = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        setIsInView(entry.isIntersecting);
      },
      { threshold: 0.35 }
    );

    obs.observe(node);
    return () => obs.disconnect();
  }, []);

  useEffect(() => {
    if (services.length) setActiveId(services[0].id);
  }, [services]);

  useEffect(() => {
    if (!isInView || activeId == null) return;

    const t = setTimeout(() => focusCard(activeId), 80);
    return () => clearTimeout(t);
  }, [isInView, activeId, focusCard]);

  return (
    <section
      ref={(el) => {
        sectionRef.current = el;
      }}
      className="relative w-full overflow-hidden bg-transparent py-16 text-slate-900 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-[92rem] px-4 sm:px-6 lg:px-8">
        <div className="mb-8 sm:mb-12">
          <h2 className="text-center font-serif text-3xl font-black text-slate-950 sm:text-4xl lg:text-5xl">
            IT Services &amp; Solutions
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scrollOneCard("left")}
            className="absolute left-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#c4b5fd] text-[#2f1f52] shadow-lg hover:bg-[#b8a6fc] sm:left-1 sm:h-12 sm:w-12 md:left-2"
            aria-label="Scroll left"
          >
            &#8249;
          </button>

          <button
            onClick={() => scrollOneCard("right")}
            className="absolute right-0 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-[#c4b5fd] text-[#2f1f52] shadow-lg hover:bg-[#b8a6fc] sm:right-1 sm:h-12 sm:w-12 md:right-2"
            aria-label="Scroll right"
          >
            &#8250;
          </button>

          <div className="relative overflow-hidden">
            <div
              ref={scrollRef}
              className="flex gap-4 overflow-x-auto pl-2 pr-2 scroll-px-4 no-scrollbar sm:gap-6 sm:pl-8 sm:pr-8 sm:scroll-px-8 md:pl-10 md:pr-10"
            >
              {services.map((service) => {
                const isActive = activeId === service.id;

                return (
                  <div
                    key={service.id}
                    data-id={service.id}
                    onClick={() => handleClick(service.id)}
                    className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-[30px] ${
                      isActive
                        ? "w-[280px] sm:w-[380px] lg:w-[420px]"
                        : "w-[220px] sm:w-[240px] lg:w-[260px]"
                    }`}
                  >
                    <div className="absolute -inset-1 rounded-[30px] bg-gradient-to-r from-violet-300 to-fuchsia-200 opacity-60 blur-2xl" />

                    <div className="relative h-full overflow-hidden rounded-[30px] border border-violet-100 bg-white/92 shadow-[0_18px_50px_rgba(31,41,55,0.08)]">
                      <div className="h-36 overflow-hidden sm:h-44 lg:h-48">
                        <img
                          src={service.image}
                          alt={service.title}
                          className="h-full w-full object-cover"
                          loading="lazy"
                          draggable={false}
                        />
                      </div>

                      <div className="p-4 sm:p-5 lg:p-6">
                        <h3 className="text-base font-bold text-violet-700 sm:text-lg lg:text-xl">
                          {service.title}
                        </h3>

                        {isActive && (
                          <div className="mt-3 sm:mt-4">
                            <p className="text-xs leading-6 text-slate-600 sm:text-sm">
                              {service.description}
                            </p>

                            <Link
                              to={`/services/it/${service.slug}`}
                              onClick={(e) => e.stopPropagation()}
                              className="mt-4 inline-flex items-center gap-2 rounded-lg bg-[#c4b5fd] px-4 py-2 text-xs font-semibold text-[#2f1f52] sm:mt-5 sm:px-5 sm:text-sm"
                            >
                              View Service -&gt;
                            </Link>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .no-scrollbar::-webkit-scrollbar { display: none; }
        .no-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>
    </section>
  );
};

export default CoreServices;
