export type ServiceLandingContent = {
  slug: string;
  kind: "it" | "non-it";
  title: string;
  eyebrow: string;
  description: string;
  overviewTitle: string;
  overviewDescription: string;
  capabilities: Array<{
    title: string;
    description: string;
    highlights: string[];
  }>;
  process: Array<{
    title: string;
    description: string;
  }>;
  technologies: string[];
  outcomes: string[];
  ctaTitle: string;
  ctaDescription: string;
};
