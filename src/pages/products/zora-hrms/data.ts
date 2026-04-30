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
    "A smart HRMS that digitalizes and simplifies HR processes. Manage your workforce efficiently while saving time and boosting overall productivity.",
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
      "Automate repetitive HR tasks such as attendance, payroll, and leave management to significantly reduce manual effort. Streamlined workflows enable HR teams to focus more on strategic activities rather than routine operations.",
    icon: Sparkles,
  },
  {
    title: "Enhanced Data Accuracy",
    description:
      "Maintain consistent, error-free employee records with automated data capture and updates. A centralized system ensures all information is always accurate, up-to-date, and easily accessible.",
    icon: Database,
  },
  {
    title: "Time Savings",
    description:
      "Reduce time spent on manual processes through automation and employee self-service portals. Faster approvals and streamlined workflows improve overall operational speed and efficiency.",
    icon: CheckCheck,
  },
  {
    title: "Better Decision-Making",
    description:
      "Leverage real-time analytics and detailed reports to gain actionable workforce insights. Make informed HR and business decisions backed by accurate and reliable data.",
    icon: LineChart,
  },
  {
    title: "Compliance & Security",
    description:
      "Ensure data protection and stay compliant with labor laws and organizational policies. Role-based access and secure systems safeguard sensitive employee information at all times.",
    icon: ShieldCheck,
  },
  {
    title: "Higher Productivity",
    description:
      "Empower HR teams and employees with efficient tools and simplified workflows. Increased operational clarity and reduced workload lead to better performance and overall productivity.",
    icon: BarChart3,
  },
];
