import type { ComponentType } from "react";
import { IT_SERVICE_CATEGORY_PAGES } from "./it";
import { NON_IT_SERVICE_CATEGORY_PAGES } from "./non-it";

export const SERVICE_CATEGORY_PAGES: Record<string, ComponentType> = {
  ...IT_SERVICE_CATEGORY_PAGES,
  ...NON_IT_SERVICE_CATEGORY_PAGES,
};
