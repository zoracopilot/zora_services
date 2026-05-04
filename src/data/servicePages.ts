import { IT_SERVICE_PAGE_LOADERS } from "./itServicePages";
import { NON_IT_SERVICE_PAGE_LOADERS } from "./nonItServicePages";

export const SERVICE_PAGE_LOADERS = {
  ...IT_SERVICE_PAGE_LOADERS,
  ...NON_IT_SERVICE_PAGE_LOADERS,
} as const;

export type ServicePageKey = keyof typeof SERVICE_PAGE_LOADERS;
export type ServicePageLoader = (typeof SERVICE_PAGE_LOADERS)[ServicePageKey];
