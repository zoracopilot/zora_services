import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Navigate, Routes, Route, useLocation } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import CookieNotice from "./components/CookieNotice";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AiAutomationSolutionsPage from "./pages/services/ai-automation-solutions";
import CloudInfrastructureServicesPage from "./pages/services/cloud-infrastructure-services";
import CustomEnterpriseSoftwarePage from "./pages/services/custom-enterprise-software";
import MobileApplicationDevelopmentPage from "./pages/services/mobile-application-development";
import WebsiteWebApplicationServicesPage from "./pages/services/website-web-application-services";

/* ================= MAIN PAGES ================= */
const About = lazy(() => import("./pages/About"));
const ContactPage = lazy(() => import("./pages/ContactPage"));
const BookAppointment = lazy(() => import("./pages/BookAppointment"));
const ProductDetail = lazy(() => import("./pages/products/ItemPage"));

/* ================= BLOG ================= */
const Blog = lazy(() => import("./pages/Blog"));
const BlogPost = lazy(() => import("./pages/BlogPost"));

const RouteFallback: React.FC = () => (
  <div className="min-h-[85vh] bg-gradient-to-b from-[#0b0318] via-[#120424] to-[#16062d]" />
);

const AppShell: React.FC = () => {
  const location = useLocation();
  const isServicesRoute = location.pathname.startsWith("/services");

  return (
    <>
      <ScrollToTop />

      <div className={`${isServicesRoute ? "services-theme bg-white text-slate-900" : "bg-[#0b0618] text-white"} min-h-screen flex flex-col`}>

        {/* NAVBAR */}
        <Navbar />

        {/* MAIN CONTENT */}
        <main className="flex-grow">
          <Suspense fallback={<RouteFallback />}>
          <Routes>

            {/* ---------- MAIN PAGES ---------- */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route
              path="/services"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/website-web-application-services"
              element={<WebsiteWebApplicationServicesPage />}
            />
            <Route
              path="/services/mobile-application-development"
              element={<MobileApplicationDevelopmentPage />}
            />
            <Route
              path="/services/ai-automation-solutions"
              element={<AiAutomationSolutionsPage />}
            />
            <Route
              path="/services/custom-enterprise-software"
              element={<CustomEnterpriseSoftwarePage />}
            />
            <Route
              path="/services/cloud-infrastructure-services"
              element={<CloudInfrastructureServicesPage />}
            />
            <Route
              path="/services/it/website-web-application-services"
              element={<WebsiteWebApplicationServicesPage />}
            />
            <Route
              path="/services/it/mobile-application-development"
              element={<MobileApplicationDevelopmentPage />}
            />
            <Route
              path="/services/it/ai-automation-solutions"
              element={<AiAutomationSolutionsPage />}
            />
            <Route
              path="/services/it/custom-enterprise-software"
              element={<CustomEnterpriseSoftwarePage />}
            />
            <Route
              path="/services/it/cloud-infrastructure-services"
              element={<CloudInfrastructureServicesPage />}
            />
            <Route path="/products" element={<Navigate to="/" replace />} />
            <Route path="/products/:productSlug" element={<ProductDetail />} />
            <Route path="/contact" element={<ContactPage />} />

            {/* ---------- BLOG ---------- */}
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />

            <Route
              path="/services/it"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/non-it"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/website-web-application-services/:itemSlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/mobile-application-development/:itemSlug"
              element={<Navigate to="/services/mobile-application-development" replace />}
            />
            <Route
              path="/services/ai-automation-solutions/:itemSlug"
              element={<Navigate to="/services/ai-automation-solutions" replace />}
            />
            <Route
              path="/services/custom-enterprise-software/:itemSlug"
              element={<Navigate to="/services/custom-enterprise-software" replace />}
            />
            <Route
              path="/services/cloud-infrastructure-services/:itemSlug"
              element={<Navigate to="/services/cloud-infrastructure-services" replace />}
            />
            <Route
              path="/services/it/website-web-application-services/:itemSlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/it/mobile-application-development/:itemSlug"
              element={<Navigate to="/services/mobile-application-development" replace />}
            />
            <Route
              path="/services/it/ai-automation-solutions/:itemSlug"
              element={<Navigate to="/services/ai-automation-solutions" replace />}
            />
            <Route
              path="/services/it/custom-enterprise-software/:itemSlug"
              element={<Navigate to="/services/custom-enterprise-software" replace />}
            />
            <Route
              path="/services/it/cloud-infrastructure-services/:itemSlug"
              element={<Navigate to="/services/cloud-infrastructure-services" replace />}
            />
            <Route
              path="/services/:categorySlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/:categorySlug/:itemSlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/it/:categorySlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/non-it/:categorySlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/it/:categorySlug/:itemSlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />
            <Route
              path="/services/non-it/:categorySlug/:itemSlug"
              element={<Navigate to="/services/website-web-application-services" replace />}
            />

            {/* ---------- OTHER ---------- */}
            <Route path="/book-appointment" element={<BookAppointment />} />

          </Routes>
          </Suspense>
        </main>

        {/* FOOTER + GLOBAL COMPONENTS */}
        <Footer />
        <CookieNotice />

      </div>
    </>
  );
};

const App: React.FC = () => {
  return (
    <Router>
      <AppShell />
    </Router>
  );
};

export default App;

