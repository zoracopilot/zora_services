import React, { useEffect, useState } from "react";
import { Navigate, useParams } from "react-router-dom";
import PageSEO from "../../components/PageSEO";
import BreadcrumbSchema from "../../components/BreadcrumbSchema";
import { SERVICE_PAGE_LOADERS, type ServicePageKey } from "../../data/servicePages";
import { findServiceCategory } from "../../data/serviceCategories";

const ServiceItemPage: React.FC = () => {
  const { categorySlug, itemSlug } = useParams();
  const key = `${categorySlug}/${itemSlug}`;
  const loader = SERVICE_PAGE_LOADERS[key as ServicePageKey];
  const [Page, setPage] = useState<React.ComponentType | null>(null);

  useEffect(() => {
    let cancelled = false;

    if (!loader) {
      setPage(null);
      return;
    }

    setPage(null);
    loader().then((module) => {
      if (!cancelled) {
        setPage(() => module.default);
      }
    });

    return () => {
      cancelled = true;
    };
  }, [loader, key]);

  if (!loader) {
    return <Navigate to="/services/website-web-application-services" replace />;
  }

  if (!Page) {
    return null;
  }

  const category = findServiceCategory(categorySlug);
  const item = category?.items.find((serviceItem) => serviceItem.slug === itemSlug);
  const itemDescription =
    item && "description" in item ? item.description : item?.shortDesc;
  const seoTitle = item ? `${item.title} | Zora Global AI` : "Services | Zora Global AI";
  const seoDescription = itemDescription ?? "Professional services delivered by Zora Global AI.";
  const seoCanonical = `/services/${categorySlug}/${itemSlug}`;
  const fullCanonical = `https://www.zoraglobalai.com${seoCanonical}`;

  return (
    <>
      <PageSEO
        title={seoTitle}
        description={seoDescription}
        canonical={seoCanonical}
        serviceSchema={item ? { name: item.title, description: seoDescription, url: fullCanonical } : undefined}
      />
      <BreadcrumbSchema
        crumbs={[
          { name: "Home", path: "/" },
          { name: "Services", path: "/services" },
          ...(category ? [{ name: category.title, path: `/services/${category.slug}` }] : []),
          ...(item ? [{ name: item.title, path: `/services/${categorySlug}/${itemSlug}` }] : []),
        ]}
      />
      <Page />
    </>
  );
};

export default ServiceItemPage;
