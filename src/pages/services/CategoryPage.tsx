import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { findServiceCategory } from "../../data/serviceCategories";
import { SERVICE_CATEGORY_PAGES } from "./category-pages";

const ServiceCategoryPage: React.FC = () => {
  const { categorySlug } = useParams();
  const category = findServiceCategory(categorySlug);

  if (!category) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  const DedicatedCategoryPage = SERVICE_CATEGORY_PAGES[category.slug];

  if (!DedicatedCategoryPage) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  return <DedicatedCategoryPage />;
};

export default ServiceCategoryPage;
