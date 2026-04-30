import {
  BarChart3,
  BriefcaseBusiness,
  Building2,
  CheckCheck,
  ClipboardCheck,
  Database,
  FileSpreadsheet,
  Globe,
  LayoutDashboard,
  LineChart,
  Lock,
  ShieldCheck,
  Sparkles,
  Target,
  UserCog,
  UserRound,
  Users,
  type LucideIcon,
} from "lucide-react";

export type HrmsFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrmsStep = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrmsAudience = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type HrmsBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const hrmsHero = {
  title: "Empowering People. Driving Performance.",
  subtitle: "Smart HR, Stronger Workplace",
  description:
    "HRMS is a comprehensive Human Resource Management System designed to simplify, automate, and digitalize HR operations. Manage your workforce efficiently and focus on what matters most: your people.",
  primaryCta: "Get Started Now",
  secondaryCta: "Book a Demo",
};

export const hrmsHighlights = [
  "Centralized Data",
  "Automated Workflows",
  "Real-time Insights",
  "Secure & Compliant",
];

export const hrmsFeatures: HrmsFeature[] = [
  {
    title: "Employee Management",
    description:
      "Maintain complete employee profiles, documents, and organizational details in one place.",
    icon: UserRound,
  },
  {
    title: "Attendance Tracking",
    description:
      "Real-time attendance monitoring with biometric, geo-location, and shift management.",
    icon: ClipboardCheck,
  },
  {
    title: "Payroll Processing",
    description:
      "Automated payroll calculations, salary slips, tax management, and statutory compliance.",
    icon: FileSpreadsheet,
  },
  {
    title: "Leave Management",
    description:
      "Easy leave applications, approvals, balance tracking, and holiday calendar management.",
    icon: BriefcaseBusiness,
  },
  {
    title: "Recruitment Management",
    description:
      "Manage job postings, applicant tracking, interview scheduling, and offer letter generation seamlessly.",
    icon: Users,
  },
  {
    title: "Performance Evaluation",
    description:
      "Set goals, track performance, conduct reviews, and manage appraisals effectively.",
    icon: Target,
  },
  {
    title: "HR Analytics & Reports",
    description:
      "Powerful reports and dashboards for data-driven decision-making and workforce insights.",
    icon: BarChart3,
  },
  {
    title: "Role-Based Access",
    description:
      "Secure role-based access control to protect data and ensure the right access for the right people.",
    icon: Lock,
  },
];

export const hrmsSteps: HrmsStep[] = [
  {
    title: "Centralized Data",
    description:
      "All employee information is stored securely in a centralized database.",
    icon: Database,
  },
  {
    title: "Automated Processes",
    description:
      "Attendance, payroll, leave, recruitment, and other HR tasks are automated.",
    icon: Sparkles,
  },
  {
    title: "Approvals & Workflows",
    description:
      "Requests and approvals flow through customizable workflows.",
    icon: CheckCheck,
  },
  {
    title: "Insights & Reports",
    description:
      "Real-time dashboards and analytics provide actionable insights.",
    icon: LineChart,
  },
  {
    title: "Better Decisions",
    description:
      "Accurate data and insights help HR and management make better decisions.",
    icon: LayoutDashboard,
  },
];

export const hrmsUseCases: HrmsAudience[] = [
  {
    title: "HR Departments",
    description:
      "Streamline HR tasks and manage the entire employee lifecycle.",
    icon: Users,
  },
  {
    title: "Managers",
    description:
      "Monitor team attendance, performance, and productivity.",
    icon: UserCog,
  },
  {
    title: "Administrators",
    description:
      "Manage system settings, users, roles, and organizational policies.",
    icon: ShieldCheck,
  },
  {
    title: "Small & Medium Businesses",
    description:
      "Affordable and scalable solution to manage growing teams.",
    icon: Building2,
  },
  {
    title: "Large Enterprises",
    description:
      "Handle complex HR operations across multiple departments and locations.",
    icon: Globe,
  },
  {
    title: "Remote & Hybrid Teams",
    description:
      "Access HRMS anytime, anywhere and stay connected.",
    icon: BriefcaseBusiness,
  },
];

export const hrmsBenefits: HrmsBenefit[] = [
  {
    title: "Improved Efficiency",
    description:
      "Automate repetitive HR tasks and reduce manual effort significantly.",
    icon: Sparkles,
  },
  {
    title: "Enhanced Data Accuracy",
    description:
      "Minimize errors and maintain accurate, up-to-date employee information.",
    icon: Database,
  },
  {
    title: "Time Savings",
    description:
      "Save valuable time with automated workflows and self-service portals.",
    icon: CheckCheck,
  },
  {
    title: "Better Decision-Making",
    description:
      "Use real-time data and analytics to make informed HR and business decisions.",
    icon: LineChart,
  },
  {
    title: "Compliance & Security",
    description:
      "Ensure data security and stay compliant with labor laws and company policies.",
    icon: ShieldCheck,
  },
  {
    title: "Higher Productivity",
    description:
      "Empower employees and HR teams to focus on strategic initiatives and growth.",
    icon: BarChart3,
  },
];
