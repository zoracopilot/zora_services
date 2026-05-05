import { useEffect, useState } from "react";
import {
  BriefcaseBusiness,
  Building2,
  ChevronLeft,
  ChevronRight,
  ShieldCheck,
  Sparkles,
  Star,
  UserRound,
} from "lucide-react";

const testimonials = [
  {
    name: "Arun Prakash",
    role: "Founder, Nexora Labs",
    icon: Sparkles,
    quote:
      "Zora helped us turn a complex idea into a polished product with speed, clarity, and strong technical execution.",
  },
  {
    name: "Meera S",
    role: "Director, Elevate Retail",
    icon: Building2,
    quote:
      "Their team understood our workflows quickly and delivered automation that saved hours of manual effort every week.",
  },
  {
    name: "Rahul Menon",
    role: "CEO, FinEdge Systems",
    icon: BriefcaseBusiness,
    quote:
      "From planning to launch, the collaboration felt smooth and structured. The final platform was stable and scalable.",
  },
  {
    name: "Divya K",
    role: "Operations Lead, CoreVista",
    icon: ShieldCheck,
    quote:
      "We needed dependable delivery and thoughtful execution. Zora gave us both while keeping communication transparent.",
  },
  {
    name: "Karthik Raman",
    role: "Product Head, OrbitOne",
    icon: UserRound,
    quote:
      "The UI quality, responsiveness, and business understanding stood out. They built exactly what our users needed.",
  },
] as const;

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [itemsPerView, setItemsPerView] = useState(3);

  useEffect(() => {
    const updateItemsPerView = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(3);
        return;
      }

      if (window.innerWidth >= 768) {
        setItemsPerView(2);
        return;
      }

      setItemsPerView(1);
    };

    updateItemsPerView();
    window.addEventListener("resize", updateItemsPerView);

    return () => window.removeEventListener("resize", updateItemsPerView);
  }, []);

  useEffect(() => {
    const intervalId = window.setInterval(() => {
      setActiveIndex((current) => (current + 1) % testimonials.length);
    }, 3500);

    return () => window.clearInterval(intervalId);
  }, []);

  const goPrevious = () => {
    setActiveIndex((current) => (current - 1 + testimonials.length) % testimonials.length);
  };

  const goNext = () => {
    setActiveIndex((current) => (current + 1) % testimonials.length);
  };

  const visibleTestimonials = Array.from({ length: itemsPerView }, (_, offset) => {
    const index = (activeIndex + offset) % testimonials.length;
    return testimonials[index];
  });

  return (
    <section className="relative overflow-hidden bg-[linear-gradient(135deg,#4c0fb8_0%,#6d28d9_35%,#7c3aed_62%,#5313c6_100%)] px-4 py-10 sm:px-6 sm:py-12 lg:px-8">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.18),transparent_34%),linear-gradient(120deg,transparent_28%,rgba(255,255,255,0.07)_46%,transparent_68%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto max-w-5xl text-center text-white">
          <p className="text-sm font-bold uppercase tracking-[0.26em] text-violet-100/85">
            Customer Reviews
          </p>
          <h2 className="mt-6 font-serif text-3xl font-black tracking-tight text-white sm:text-[3rem] lg:text-[2.8rem]">
            Trusted by Teams That Value Results
          </h2>
          <p className="mx-auto mt-4 max-w-3xl text-[1.05rem] leading-9 text-violet-100/90">
            Real feedback from businesses that partnered with Zora to build, scale,
            and streamline their digital solutions.
          </p>
        </div>

        <div className="mt-10 flex items-center gap-3 lg:gap-5">
          <button
            type="button"
            onClick={goPrevious}
            className="hidden h-12 w-12 flex-none items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/16 lg:inline-flex"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={24} />
          </button>

          <div className="min-w-0 flex-1 overflow-hidden">
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3 lg:gap-4">
              {visibleTestimonials.map((item) => {
                const Icon = item.icon;

                return (
                  <article key={`${item.name}-${activeIndex}`} className="mt-8 flex h-full flex-col bg-white px-5 pb-6 pt-0 text-center shadow-[0_18px_36px_rgba(23,10,73,0.16)]">
                    <div className="mx-auto -mt-8 flex h-16 w-16 items-center justify-center rounded-full border-4 border-white bg-[linear-gradient(135deg,#efe8ff_0%,#f8f4ff_100%)] text-violet-700 shadow-[0_14px_24px_rgba(91,33,182,0.16)]">
                      <Icon size={26} strokeWidth={2.1} />
                    </div>

                    <h3 className="mt-4 text-[1.35rem] font-semibold tracking-[-0.03em] text-slate-950">
                      {item.name}
                    </h3>
                    <p className="mt-1 text-sm font-medium text-slate-500">{item.role}</p>

                    <div className="mt-3 flex justify-center gap-1 text-amber-400">
                      {Array.from({ length: 5 }).map((_, index) => (
                        <Star key={index} size={17} fill="currentColor" strokeWidth={1.8} />
                      ))}
                    </div>

                    <p className="mt-4 text-[0.98rem] leading-7 text-slate-700">
                      {item.quote}
                    </p>
                  </article>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={goNext}
            className="hidden h-12 w-12 flex-none items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/16 lg:inline-flex"
            aria-label="Next testimonial"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="mt-7 flex items-center justify-center gap-2.5">
          {testimonials.map((item, index) => (
            <button
              key={item.name}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`rounded-full transition-all duration-300 ${
                index === activeIndex
                  ? "h-4 w-4 bg-white"
                  : "h-3 w-3 bg-white/45 hover:bg-white/70"
              }`}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>

        <div className="mt-6 flex items-center justify-center gap-3 lg:hidden">
          <button
            type="button"
            onClick={goPrevious}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/16"
            aria-label="Previous testimonial"
          >
            <ChevronLeft size={22} />
          </button>
          <button
            type="button"
            onClick={goNext}
            className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/16"
            aria-label="Next testimonial"
          >
            <ChevronRight size={22} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
