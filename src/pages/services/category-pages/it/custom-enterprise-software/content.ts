import type { ServiceLandingContent } from "../../_shared/types";

export const customEnterpriseSoftwareContent: ServiceLandingContent = {
  slug: "custom-enterprise-software",
  kind: "it",
  title: "Custom Enterprise Software",
  eyebrow: "IT Services",
  description:
    "We build enterprise software that supports complex internal workflows, business operations, CRM processes and team scaling requirements through reliable custom systems.",
  overviewTitle: "Enterprise systems tailored to operational reality",
  overviewDescription:
    "This service consolidates core enterprise software delivery into one page so clients can evaluate custom application development, CRM services and IT staff augmentation as one strategic capability set.",
  capabilities: [
    {
      title: "Custom Enterprise Software Development",
      description: "Tailored systems for ERP, HRMS, internal workflows and business process control.",
      highlights: ["ERP", "HRMS", "Business apps", "Secure architecture"],
    },
    {
      title: "CRM Services",
      description: "Customer management systems aligned with sales, service and marketing operations.",
      highlights: ["Sales CRM", "Customization", "Automation", "Ongoing enhancement"],
    },
    {
      title: "IT Staff Augmentation",
      description: "Flexible access to engineering talent for delivery acceleration and specialized execution.",
      highlights: ["Developers", "Rapid onboarding", "Flexible models", "Delivery support"],
    },
  ],
  process: [
    { title: "Map", description: "We document workflows, teams, dependencies and system objectives in detail." },
    { title: "Architect", description: "We design modules, data flows, permissions and integration patterns." },
    { title: "Implement", description: "We develop stable enterprise systems with testing and rollout planning." },
    { title: "Scale", description: "We support adoption, maintenance and future capability expansion." },
  ],
  technologies: ["React", "Node.js", "Nest.js", "Python", "PostgreSQL", "MySQL", "Redis", "AWS", "Docker", "Role-based access control"],
  outcomes: [
    "Enterprise offerings grouped into one coherent business software page",
    "Stronger explanation of systems, CRM and team extension together",
    "Cleaner navigation for buyers evaluating enterprise delivery",
  ],
  ctaTitle: "Build enterprise-grade systems around your actual workflows",
  ctaDescription:
    "We help organizations replace rigid tools and disconnected processes with software that fits how their teams really operate.",
};
