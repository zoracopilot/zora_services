import type { ServiceLandingContent } from "../../_shared/types";

export const cybersecuritySolutionsContent: ServiceLandingContent = {
  slug: "cybersecurity-solutions",
  kind: "it",
  title: "Cybersecurity Solutions",
  eyebrow: "IT Services",
  description:
    "We help businesses assess risk, monitor threats, strengthen defenses and improve compliance through practical cybersecurity services built around real operational exposure.",
  overviewTitle: "Security services organized around protection and assurance",
  overviewDescription:
    "This page combines audit, assessment, monitoring and compliance capabilities into one clear cybersecurity service so visitors can evaluate end-to-end risk coverage more easily.",
  capabilities: [
    {
      title: "Security Audits",
      description: "Structured reviews of systems, configurations and controls to identify exposure and improvement areas.",
      highlights: ["Security review", "Compliance check", "Risk reporting", "Recommendations"],
    },
    {
      title: "Vulnerability Assessment",
      description: "Identification and prioritization of weaknesses across applications, infrastructure and access flows.",
      highlights: ["Scanning", "Pen testing", "Validation", "Mitigation planning"],
    },
    {
      title: "Threat Monitoring",
      description: "Continuous visibility into suspicious events, operational anomalies and incident response readiness.",
      highlights: ["Detection", "Log analysis", "Incident response", "Threat intelligence"],
    },
    {
      title: "Data Protection & Compliance",
      description: "Controls and governance measures that support data security and regulatory readiness.",
      highlights: ["Encryption", "Access control", "Compliance", "Audit support"],
    },
  ],
  process: [
    { title: "Review", description: "We assess the threat surface, business risks and security priorities." },
    { title: "Test", description: "We validate controls, detect weaknesses and analyze likely impact." },
    { title: "Protect", description: "We improve defenses, monitoring and compliance alignment." },
    { title: "Respond", description: "We support operational resilience and ongoing security maturity." },
  ],
  technologies: ["OWASP practices", "Burp Suite", "Nmap", "SIEM tooling", "Cloud security controls", "Identity management", "Encryption", "Monitoring dashboards", "AWS", "Azure"],
  outcomes: [
    "Security capabilities framed as one complete protection service",
    "Better clarity from audit to ongoing monitoring",
    "Stronger client understanding of practical cybersecurity coverage",
  ],
  ctaTitle: "Improve security posture with practical, business-aware controls",
  ctaDescription:
    "We help organizations reduce exposure, strengthen trust and build a more resilient security foundation over time.",
};
