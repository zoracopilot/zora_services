import type { ServiceLandingContent } from "../../_shared/types";

export const aiAutomationSolutionsContent: ServiceLandingContent = {
  slug: "ai-automation-solutions",
  kind: "it",
  title: "AI & Automation Solutions",
  eyebrow: "IT Services",
  description:
    "We design AI and automation systems that improve decision-making, reduce manual work and create scalable intelligent workflows across customer, operational and product environments.",
  overviewTitle: "Applied AI capabilities under one service line",
  overviewDescription:
    "This page brings together conversational AI, machine learning, computer vision, recommendation systems, AIoT and workflow automation under one clear service experience.",
  capabilities: [
    {
      title: "Chatbot Development",
      description: "Conversational systems for customer support, lead capture and workflow assistance.",
      highlights: ["NLP", "Multichannel flows", "CRM integration", "Custom training"],
    },
    {
      title: "Workflow Automation & RPA",
      description: "Automated processes that reduce repetitive work and improve operational consistency.",
      highlights: ["Automation design", "Bot workflows", "Integrations", "Monitoring"],
    },
    {
      title: "Recommendation & ML Systems",
      description: "Predictive intelligence and recommendation engines tailored for personalization and optimization.",
      highlights: ["Predictive models", "Behavior analysis", "Real-time logic", "Optimization"],
    },
    {
      title: "Computer Vision & AIoT",
      description: "Visual intelligence and connected systems for monitoring, detection and smart operations.",
      highlights: ["Image analysis", "Object detection", "IoT integration", "Edge intelligence"],
    },
  ],
  process: [
    { title: "Assess", description: "We identify automation opportunities, data readiness and expected business impact." },
    { title: "Model", description: "We shape logic, training flows, orchestration and integration architecture." },
    { title: "Deploy", description: "We implement production-ready AI workflows with monitoring and governance." },
    { title: "Improve", description: "We refine models and automation performance based on usage and outcomes." },
  ],
  technologies: ["Python", "TensorFlow", "PyTorch", "OpenAI APIs", "LangChain", "Node.js", "Redis", "MongoDB", "AWS", "Docker"],
  outcomes: [
    "Full AI capability presented in one understandable service page",
    "Better positioning from use case to deployment workflow",
    "Clearer connection between automation goals and technical delivery",
  ],
  ctaTitle: "Turn AI ideas into practical systems that deliver value",
  ctaDescription:
    "We help businesses move from experimentation to structured AI delivery with clear use cases, integrations and measurable outcomes.",
};
