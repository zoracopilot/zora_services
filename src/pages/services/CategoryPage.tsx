import React from "react";
import { Navigate, useParams } from "react-router-dom";
import MasterDetailServicePage from "../../components/MasterDetailServicePage";
import NonITServiceCategoryPage from "./NonITCategoryPage";
import PageSEO from "../../components/PageSEO";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { SERVICE_CATEGORY_KIND, findServiceCategory } from "../../data/serviceCategories";
import { IT_SERVICE_CATEGORIES } from "../../data/itServicesData";

const ServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const category = findServiceCategory(categorySlug);

  if (!category) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  const categoryKind = SERVICE_CATEGORY_KIND[category.slug];

  if (categoryKind === "non-it") {
    return <NonITServiceCategoryPage />;
  }

  const itCategory = IT_SERVICE_CATEGORIES.find((serviceCategory) => serviceCategory.slug === category.slug);

  if (!itCategory) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  return (
    <>
      <PageSEO
        title={`${itCategory.title} | Zora Global AI`}
        description={itCategory.desc}
        canonical={`/services/${itCategory.slug}`}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          { name: itCategory.title, path: `/services/${itCategory.slug}` },
        ]}
      />
      <MasterDetailServicePage category={itCategory} backTo="/services" />
    </>
  );
};

export default ServiceCategoryPage;
