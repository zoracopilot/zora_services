import PageSEO from "../../components/PageSEO";
import { Cta, Hero, ProductGrid, WhyChoose } from "../../components/products";

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

      <div className="relative z-10 flex flex-col">
        <Hero />
        <ProductGrid />
        <WhyChoose />
        <Cta />
      </div>
    </main>
  );
}
