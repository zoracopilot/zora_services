import { Link } from "react-router-dom";
import { accentClasses, accentDotClasses, products } from "./data";

const ProductGrid: React.FC = () => {
  return (
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
        {products.map(
          ({ id, title, subtitle, description, bullets, accent, icon: Icon }) => (
            <Link
              key={title}
              to={`/products/${id}`}
              className="group block"
            >
              <article
                id={id}
                className="rounded-[28px] border border-slate-200 bg-white p-6 shadow-[0_18px_40px_rgba(148,163,184,0.08)] transition-all duration-300 group-hover:-translate-y-1 group-hover:shadow-[0_24px_50px_rgba(148,163,184,0.14)]"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`flex h-12 w-12 items-center justify-center rounded-2xl border ${accentClasses[accent]}`}
                  >
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
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-slate-600"
                    >
                      <span
                        className={`inline-block h-2.5 w-2.5 rounded-full ${accentDotClasses[accent]}`}
                      />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </Link>
          ),
        )}
      </div>
    </section>
  );
};

export default ProductGrid;
