import type { ComponentType } from "react";
import AiAutomationSolutionsPage from "./ai-automation-solutions";
import CloudInfrastructureServicesPage from "./cloud-infrastructure-services";
import CustomEnterpriseSoftwarePage from "./custom-enterprise-software";
import CybersecuritySolutionsPage from "./cybersecurity-solutions";
import MobileApplicationDevelopmentPage from "./mobile-application-development";
import WebsiteWebApplicationServicesPage from "./website-web-application-services";

export const IT_SERVICE_CATEGORY_PAGES: Record<string, ComponentType> = {
  "ai-automation-solutions": AiAutomationSolutionsPage,
  "cloud-infrastructure-services": CloudInfrastructureServicesPage,
  "custom-enterprise-software": CustomEnterpriseSoftwarePage,
  "cybersecurity-solutions": CybersecuritySolutionsPage,
  "mobile-application-development": MobileApplicationDevelopmentPage,
  "website-web-application-services": WebsiteWebApplicationServicesPage,
};
