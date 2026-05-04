import React from "react";
import { Navigate, useParams } from "react-router-dom";

const ServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();

  if (!categorySlug || !itemSlug) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  return <Navigate to={`/services/${categorySlug}`} replace />;
};

export default ServiceItemPage;
