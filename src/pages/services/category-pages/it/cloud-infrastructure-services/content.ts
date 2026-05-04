import type { ServiceLandingContent } from "../../_shared/types";

export const cloudInfrastructureServicesContent: ServiceLandingContent = {
  slug: "cloud-infrastructure-services",
  kind: "it",
  title: "Cloud & Infrastructure Services",
  eyebrow: "IT Services",
  description:
    "We support cloud adoption, application connectivity and infrastructure decisions that improve scalability, reliability and operational efficiency across modern digital systems.",
  overviewTitle: "Cloud readiness and integration in one service flow",
  overviewDescription:
    "This page combines the key cloud and infrastructure offerings into one destination so businesses can understand migration strategy and integration capability without switching across multiple child pages.",
  capabilities: [
    {
      title: "Cloud Migration Services",
      description: "Structured migration planning and execution for applications, data and environments moving to modern cloud platforms.",
      highlights: ["Migration planning", "Cloud readiness", "Performance tuning", "Cost optimization"],
    },
    {
      title: "Application Integrations",
      description: "Reliable integration of platforms, APIs and business systems to improve data flow and automation.",
      highlights: ["API integration", "System connectivity", "Workflow automation", "Secure data exchange"],
    },
  ],
  process: [
    { title: "Evaluate", description: "We assess current systems, dependencies, risks and modernization priorities." },
    { title: "Design", description: "We define migration or integration architecture with security and reliability in mind." },
    { title: "Execute", description: "We implement transitions and integrations with controlled rollout and validation." },
    { title: "Optimize", description: "We improve performance, cost efficiency and operational visibility after launch." },
  ],
  technologies: ["AWS", "Azure", "GCP", "Docker", "Kubernetes", "Node.js", "REST APIs", "Message queues", "Terraform", "Monitoring tools"],
  outcomes: [
    "Cloud and integration services presented as one infrastructure capability",
    "Clearer positioning from migration strategy to system connectivity",
    "Reduced confusion for clients comparing infrastructure needs",
  ],
  ctaTitle: "Modernize infrastructure without losing delivery control",
  ctaDescription:
    "We help teams move, connect and optimize systems in ways that support both technical reliability and business continuity.",
};
