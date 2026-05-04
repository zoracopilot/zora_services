import type { ServiceLandingContent } from "../../_shared/types";

export const mobileApplicationDevelopmentContent: ServiceLandingContent = {
  slug: "mobile-application-development",
  kind: "it",
  title: "Mobile Application Development",
  eyebrow: "IT Services",
  description:
    "We build mobile applications that balance performance, usability and maintainability across Android, iOS and cross-platform ecosystems for products, internal tools and customer experiences.",
  overviewTitle: "Mobile delivery built around product goals",
  overviewDescription:
    "This service brings together native Android, native iOS and cross-platform mobile delivery in one focused page so visitors can understand the complete mobile capability without navigating fragmented sub-services.",
  capabilities: [
    {
      title: "Android App Development",
      description: "Native Android applications built for stability, device compatibility and scalable product growth.",
      highlights: ["Kotlin", "Android UI", "API integration", "Play Store delivery"],
    },
    {
      title: "iOS App Development",
      description: "High-quality iOS experiences tailored for Apple devices, performance expectations and platform standards.",
      highlights: ["Swift", "Apple ecosystem", "Secure architecture", "App Store release"],
    },
    {
      title: "Cross-Platform App Development",
      description: "Shared-codebase applications that accelerate delivery while preserving strong user experience across platforms.",
      highlights: ["Flutter", "React Native", "Reusable components", "Faster release cycles"],
    },
  ],
  process: [
    { title: "Plan", description: "We define user flows, platform priorities, feature scope and rollout milestones." },
    { title: "Design", description: "We shape intuitive mobile journeys, screen systems and interaction patterns." },
    { title: "Build", description: "We implement scalable app logic, integrations, testing and release readiness." },
    { title: "Support", description: "We monitor launches, updates and post-release improvements." },
  ],
  technologies: ["Kotlin", "Swift", "Flutter", "React Native", "Firebase", "Node.js", "REST APIs", "PostgreSQL", "AWS", "Figma"],
  outcomes: [
    "One clear mobile service page instead of separate fragmented entries",
    "Platform-specific and cross-platform delivery under one team",
    "Better communication of full mobile capability for clients",
  ],
  ctaTitle: "Launch mobile experiences with the right platform strategy",
  ctaDescription:
    "From MVP apps to production mobile platforms, we help teams choose and build the right mobile architecture for their goals.",
};
