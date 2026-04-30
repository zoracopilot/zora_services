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
    "CareLoop helps clinics streamline appointments, patient records, prescriptions, subscriptions, communication, and operational reporting from one connected platform.",
  primaryCta: "Get Started Now",
  secondaryCta: "Book a Demo",
};

export const careloopHighlights = [
  "Patient Management",
  "Appointment Scheduling",
  "WhatsApp Automation",
  "Prescription & Reports",
  "Subscription Management",
  "Analytics & Insights",
];

export const careloopStats = [
  { value: "200+", label: "Clinics" },
  { value: "500+", label: "Doctors" },
  { value: "50K+", label: "Patients" },
  { value: "99.9%", label: "Uptime" },
  { value: "24/7", label: "Support" },
];

export const careloopFeatures: CareloopFeature[] = [
  {
    title: "Patient Management",
    description:
      "Store profiles, visit history, treatment notes, and communication records in one place.",
    icon: UserRound,
  },
  {
    title: "Appointment Scheduling",
    description:
      "Coordinate doctors, slots, follow-ups, and daily flow with a clear clinic calendar.",
    icon: CalendarCheck2,
  },
  {
    title: "WhatsApp Automation",
    description:
      "Send reminders, updates, and routine messages automatically to reduce missed visits.",
    icon: MessageCircleMore,
  },
  {
    title: "Prescription & Reports",
    description:
      "Generate digital prescriptions and share clean patient reports with minimal admin work.",
    icon: FileText,
  },
  {
    title: "Subscription Management",
    description:
      "Manage plan activation, billing cycles, renewals, and clinic access from one system.",
    icon: RefreshCw,
  },
  {
    title: "Analytics & Insights",
    description:
      "Track revenue, appointments, active subscriptions, and growth trends in real time.",
    icon: BarChart3,
  },
];

export const careloopRoles: CareloopRole[] = [
  {
    title: "Admin Dashboard",
    description:
      "A full operational view for subscriptions, revenue, clinic activity, and support visibility.",
    icon: LayoutDashboard,
    bullets: ["Subscription control", "Revenue tracking", "System oversight"],
  },
  {
    title: "Doctor Dashboard",
    description:
      "Focus on appointments, patient notes, prescriptions, and follow-ups without switching tools.",
    icon: Stethoscope,
    bullets: ["Patient timeline", "Digital prescriptions", "Visit workflow"],
  },
  {
    title: "Clinic Dashboard",
    description:
      "Keep front-desk operations smooth with appointments, staff workflows, and communication tools.",
    icon: ClipboardPlus,
    bullets: ["Front-desk coordination", "Schedule handling", "Clinic updates"],
  },
  {
    title: "Patient Experience",
    description:
      "Patients get timely reminders, updates, and a more organized care journey from start to finish.",
    icon: HeartHandshake,
    bullets: ["WhatsApp reminders", "Prescription access", "Better communication"],
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
    description: "The account is verified and approved for a secure launch.",
    icon: CheckCircle2,
  },
  {
    title: "Choose Plan",
    description: "Select the subscription that matches your clinic size and workflow.",
    icon: CircleDollarSign,
  },
  {
    title: "Set Up Clinic",
    description: "Add doctors, staff, timings, and key operating preferences.",
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
    description: "Automate repetitive admin tasks so staff can focus on care.",
    icon: BellRing,
  },
  {
    title: "Improve Communication",
    description: "Keep patients informed with reminders, updates, and better follow-ups.",
    icon: MessageCircleMore,
  },
  {
    title: "Better Data Management",
    description: "Maintain organized, secure, and accessible clinic records.",
    icon: ShieldCheck,
  },
  {
    title: "Enhance Patient Satisfaction",
    description: "Deliver a faster and more consistent patient experience.",
    icon: HeartHandshake,
  },
];

export const careloopTrustPoints = [
  "Secure & compliant workflows",
  "Role-based access control",
  "Cloud-based access anywhere",
  "24/7 support coverage",
];
