import React from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import PageSEO from "../../components/PageSEO";
import {
  accentClasses,
  accentDotClasses,
  type ProductItem,
} from "../../components/products/data";

type ProductPageTemplateProps = {
  product: ProductItem;
};

const ProductPageTemplate: React.FC<ProductPageTemplateProps> = ({ product }) => {
  const { title, subtitle, description, bullets, accent, icon: Icon, id } = product;
  const canonical = `/products/${id}`;

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#fcfbff] text-slate-900">
      <PageSEO
        title={`${title} Product`}
        description={description}
        canonical={canonical}
        serviceSchema={{
          name: title,
          description,
          url: `https://www.zoraglobalai.com${canonical}`,
        }}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Products", path: "/products" },
          { name: title, path: canonical },
        ]}
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

      <section className="mx-auto max-w-7xl px-6 pb-10 pt-32 lg:pb-16">
        <Link
          to="/products"
          className="inline-flex items-center gap-2 text-sm font-semibold text-violet-700 transition-colors hover:text-violet-800"
        >
          <ArrowLeft size={16} />
          Back to Products
        </Link>

        <div className="mt-8 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="rounded-[32px] border border-slate-200 bg-white p-8 shadow-[0_24px_50px_rgba(148,163,184,0.12)]">
            <div
              className={`flex h-16 w-16 items-center justify-center rounded-[20px] border ${accentClasses[accent]}`}
            >
              <Icon size={28} />
            </div>

            <p className="mt-6 text-xs font-semibold uppercase tracking-[0.18em] text-slate-400">
              {subtitle}
            </p>
            <h1 className="mt-3 font-serif text-4xl font-black tracking-tight text-slate-950 md:text-5xl">
              {title}
            </h1>
            <p className="mt-6 max-w-2xl text-base leading-8 text-slate-600">
              {description}
            </p>

            <div className="mt-8 rounded-[24px] border border-dashed border-violet-200 bg-violet-50/60 p-6">
              <p className="text-sm font-semibold uppercase tracking-[0.16em] text-violet-700">
                Product Details Coming Soon
              </p>
              <p className="mt-3 max-w-xl text-sm leading-7 text-slate-600">
                This page is now ready for dedicated content. We can add product
                overview, modules, screenshots, pricing, FAQs and call-to-action
                sections here next.
              </p>
            </div>
          </div>

          <div className="rounded-[32px] border border-slate-200 bg-white/88 p-8 shadow-[0_20px_44px_rgba(148,163,184,0.10)]">
            <h2 className="font-serif text-2xl font-black tracking-tight text-slate-950">
              Core Capabilities
            </h2>

            <ul className="mt-6 space-y-4">
              {bullets.map((item) => (
                <li key={item} className="flex items-center gap-3 text-sm text-slate-700">
                  <span
                    className={`inline-block h-2.5 w-2.5 rounded-full ${accentDotClasses[accent]}`}
                  />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-10 rounded-[24px] bg-slate-950 p-6 text-white">
              <h3 className="text-lg font-semibold">Want to launch this product page next?</h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                We can now build out each product page with full details whenever
                you're ready.
              </p>
              <div className="mt-6 flex flex-wrap gap-3">
                <Link
                  to="/book-appointment"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-5 py-3 text-sm font-semibold text-slate-950 transition-colors hover:bg-slate-100"
                >
                  Book a Demo
                  <ArrowRight size={16} />
                </Link>
                <Link
                  to="/products"
                  className="inline-flex items-center rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-white/10"
                >
                  View All Products
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ProductPageTemplate;
