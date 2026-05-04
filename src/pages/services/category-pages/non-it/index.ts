import type { ComponentType } from "react";
import AccountingFinancialOperationsPage from "./accounting-financial-operations";
import BrandingCreativeServicesPage from "./branding-creative-services";
import BusinessStrategyConsultingPage from "./business-strategy-consulting";
import DigitalMarketingServicesPage from "./digital-marketing-services";
import StaffAugmentationWorkforceSolutionsPage from "./staff-augmentation-workforce-solutions";

export const NON_IT_SERVICE_CATEGORY_PAGES: Record<string, ComponentType> = {
  "accounting-financial-operations": AccountingFinancialOperationsPage,
  "branding-creative-services": BrandingCreativeServicesPage,
  "business-strategy-consulting": BusinessStrategyConsultingPage,
  "digital-marketing-services": DigitalMarketingServicesPage,
  "staff-augmentation-workforce-solutions": StaffAugmentationWorkforceSolutionsPage,
};
