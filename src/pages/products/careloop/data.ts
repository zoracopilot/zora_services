import {
  Activity,
  BarChart3,
  BellRing,
  CalendarCheck2,
  CheckCircle2,
  CircleDollarSign,
  ClipboardPlus,
  FileText,
  HeartHandshake,
  LayoutDashboard,
  MessageCircleMore,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Stethoscope,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type CareloopFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CareloopRole = {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
};

export type CareloopStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type CareloopBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const careloopHero = {
  title: "Digitize. Automate. Care Better.",
  subtitle: "All-in-One Clinic Management Platform",
  description:
    "Care Loop helps clinics and doctors streamline operations, automate patient communication, manage appointments, and grow their practice with a powerful, easy-to-use platform.",
  primaryCta: "Get Started Now",
  secondaryCta: "Book a Demo",
};

export const careloopHighlights = [
  "Patient & Doctor Management",
  "Appointment Scheduling",
  "WhatsApp Automation",
  "Prescription & Reports",
  "Subscription Management",
  "Analytics & Insights",
  "Multi-Clinic Support",
  "Secure & Compliant",
];

export const careloopStats = [
  { value: "200+", label: "Clinics Onboarded" },
  { value: "500+", label: "Doctors Using" },
  { value: "50K+", label: "Patients Managed" },
  { value: "99.9%", label: "Uptime & Reliability" },
  { value: "24/7", label: "Support Available" },
];

export const careloopFeatures: CareloopFeature[] = [
  {
    title: "Patient Management",
    description:
      "Store and manage patient profiles, medical history, documents, and treatment records securely in one place.",
    icon: UserRound,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Book, manage, and track appointments with real-time availability and automated reminders.",
    icon: CalendarCheck2,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Automate patient communication including reminders, prescriptions, follow-ups, and updates via WhatsApp.",
    icon: MessageCircleMore,
  },
  {
    title: "Prescription & Reports",
    description:
      "Generate digital prescriptions and share reports instantly with patients while maintaining complete treatment records.",
    icon: FileText,
  },
  {
    title: "Subscription Management",
    description:
      "Create flexible plans, manage renewals, track payments, and handle expirations with ease.",
    icon: RefreshCw,
  },
  {
    title: "Analytics & Insights",
    description:
      "Get real-time insights on revenue, patient trends, appointments, and performance to grow your clinic.",
    icon: BarChart3,
  },
];

export const careloopRoles: CareloopRole[] = [
  {
    title: "Admin Dashboard",
    description:
      "Complete control over all clinics, subscriptions, revenue, users, and system activities.",
    icon: LayoutDashboard,
    bullets: [
      "Clinic & user management",
      "Subscription & billing control",
      "Revenue & analytics",
      "Support & system logs",
    ],
  },
  {
    title: "Doctor Dashboard",
    description:
      "Manage your patients, appointments, prescriptions, and follow-ups efficiently.",
    icon: Stethoscope,
    bullets: [
      "Patient list & history",
      "Appointment management",
      "Digital prescriptions",
      "Visit summaries",
    ],
  },
  {
    title: "Clinic Dashboard",
    description:
      "Operate your clinic smoothly with staff management, appointments, and communication tools.",
    icon: ClipboardPlus,
    bullets: [
      "Front desk management",
      "Schedule handling",
      "Patient communication",
      "Clinic updates",
    ],
  },
  {
    title: "Patient Experience",
    description:
      "Patients receive appointment reminders, prescriptions, updates, and follow-ups directly on their phone.",
    icon: HeartHandshake,
    bullets: [
      "WhatsApp notifications",
      "Prescription access",
      "Follow-up reminders",
      "Better communication",
    ],
  },
];

export const careloopSteps: CareloopStep[] = [
  {
    title: "Clinic Registration",
    description: "Sign up and create your clinic workspace in CareLoop.",
    icon: Users,
  },
  {
    title: "Admin Approval",
    description: "Our team reviews and approves your clinic for secure access.",
    icon: CheckCircle2,
  },
  {
    title: "Choose Plan",
    description: "Select the subscription plan that best matches your clinic's needs.",
    icon: CircleDollarSign,
  },
  {
    title: "Set Up Clinic",
    description: "Add doctors, staff, services, and clinic details. Start managing patients.",
    icon: Activity,
  },
  {
    title: "Start Using",
    description: "Manage patients, appointments, and communication from day one.",
    icon: Rocket,
  },
];

export const careloopBenefits: CareloopBenefit[] = [
  {
    title: "Reduce Manual Work",
    description:
      "Automate repetitive tasks like appointments, prescriptions, and follow-ups to save valuable time and effort.",
    icon: BellRing,
  },
  {
    title: "Improve Communication",
    description:
      "Keep patients informed with automated reminders, updates, and instant WhatsApp notifications.",
    icon: MessageCircleMore,
  },
  {
    title: "Better Data Management",
    description:
      "Maintain organized, secure, and accessible patient records, prescriptions, and reports.",
    icon: ShieldCheck,
  },
  {
    title: "Enhance Patient Satisfaction",
    description:
      "Deliver a faster, more convenient, and professional experience that builds trust and loyalty.",
    icon: HeartHandshake,
  },
];

export const careloopTrustPoints = [
  "Secure & Compliant Workflows",
  "Role-Based Access Control",
  "Cloud-Based Access Anywhere",
  "24/7 Support Coverage",
];
