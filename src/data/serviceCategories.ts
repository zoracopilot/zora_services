import { IT_SERVICE_CATEGORIES } from "./itServicesData";
import { NON_IT_SERVICE_CATEGORIES } from "./nonItServicesData";

export type ServiceKind = "it" | "non-it";

export type UnifiedServiceCategory =
  | (typeof IT_SERVICE_CATEGORIES)[number]
  | (typeof NON_IT_SERVICE_CATEGORIES)[number];

export const SERVICE_CATEGORIES = [
  ...IT_SERVICE_CATEGORIES,
  ...NON_IT_SERVICE_CATEGORIES,
] as const;

export const SERVICE_CATEGORY_KIND: Record<string, ServiceKind> = Object.fromEntries([
  ...IT_SERVICE_CATEGORIES.map((category) => [category.slug, "it"] as const),
  ...NON_IT_SERVICE_CATEGORIES.map((category) => [category.slug, "non-it"] as const),
]);

export const findServiceCategory = (categorySlug?: string) =>
  SERVICE_CATEGORIES.find((category) => category.slug === categorySlug);
