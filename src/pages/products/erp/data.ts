import {
  BarChart3,
  BellRing,
  Boxes,
  CreditCard,
  FileSpreadsheet,
  ReceiptIndianRupee,
  ShieldCheck,
  ShoppingCart,
  TrendingUp,
  UserCog,
  Wallet,
  type LucideIcon,
} from "lucide-react";

export type ErpFeature = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export type ErpStep = {
  title: string;
  description: string;
};

export type ErpAudience = {
  title: string;
  description: string;
  image: string;
  icon: LucideIcon;
};

export type ErpBenefit = {
  title: string;
  description: string;
  icon: LucideIcon;
};

export const erpHero = {
  badge: "All-in-One Billing Solution",
  title: "Simplify Billing. Grow Your Business.",
  subtitle: "Enterprise Resource Planning",
  description:
    "Zora ERP helps you create invoices, manage payments, track expenses, and automate operational workflows in one streamlined business platform.",
  primaryCta: "Book a Demo",
  secondaryCta: "Explore Features",
  heroImage: "/hero/billing.webp",
};

export const erpHighlights = [
  "Create Invoices In Seconds",
  "Automate Payments & Reminders",
  "Real-time Financial Insights",
];

export const erpFeatures: ErpFeature[] = [
  {
    title: "Invoice Management",
    description: "Create, send, and manage professional invoices with custom templates and status tracking.",
    icon: ReceiptIndianRupee,
  },
  {
    title: "Payment Tracking",
    description: "Track payments in real time and reconcile customer transactions with less manual follow-up.",
    icon: CreditCard,
  },
  {
    title: "Automated Reminders",
    description: "Reduce overdue payments with smart reminder flows and scheduled billing notifications.",
    icon: BellRing,
  },
  {
    title: "Expense Management",
    description: "Record, categorize, and monitor expenses to keep books organized and decisions clearer.",
    icon: Wallet,
  },
  {
    title: "Tax & Compliance",
    description: "Support tax-ready invoicing and better documentation for local compliance requirements.",
    icon: FileSpreadsheet,
  },
  {
    title: "Reports & Analytics",
    description: "Use dashboards and reports to understand cash flow, collections, and business performance.",
    icon: BarChart3,
  },
  {
    title: "Multi-User Access",
    description: "Allow teams to collaborate securely with role-based visibility across core business tasks.",
    icon: UserCog,
  },
  {
    title: "Secure & Reliable",
    description: "Protect sensitive business data with secure access, backup support, and dependable workflows.",
    icon: ShieldCheck,
  },
];

export const erpSteps: ErpStep[] = [
  {
    title: "Add Details",
    description: "Enter customer, service, inventory, or billing information in one organized workspace.",
  },
  {
    title: "Create Invoice",
    description: "Generate professional invoices automatically using structured business data and templates.",
  },
  {
    title: "Send & Track",
    description: "Share invoices and monitor customer activity, approvals, and payment status in real time.",
  },
  {
    title: "Receive Payments",
    description: "Track collections, confirm receipts, and manage outstanding balances with less friction.",
  },
  {
    title: "Analyze & Grow",
    description: "Review reports, optimize billing operations, and improve financial decision-making confidently.",
  },
];

export const erpAudiences: ErpAudience[] = [
  {
    title: "Retail Businesses",
    description: "Manage sales, invoices, and customer billing with better speed and visibility.",
    image: "/about/our_story.jpeg",
    icon: ShoppingCart,
  },
  {
    title: "Service Providers",
    description: "Bill clients accurately, track outstanding payments, and simplify recurring invoicing.",
    image: "/about/company.jpeg",
    icon: UserCog,
  },
  {
    title: "E-commerce Stores",
    description: "Coordinate invoices, orders, refunds, and inventory-linked business workflows in one place.",
    image: "/it-hero/erp.webp",
    icon: Boxes,
  },
  {
    title: "Freelancers & Consultants",
    description: "Create polished invoices, manage expenses, and monitor cash flow without heavy systems.",
    image: "/home-enterprise/strategy.webp",
    icon: ReceiptIndianRupee,
  },
];

export const erpBenefits: ErpBenefit[] = [
  {
    title: "Save Time",
    description: "Automate repetitive billing and finance tasks so teams can focus on more valuable work.",
    icon: Wallet,
  },
  {
    title: "Reduce Errors",
    description: "Minimize manual mistakes through structured invoicing, tracked updates, and cleaner records.",
    icon: ShieldCheck,
  },
  {
    title: "Improve Cash Flow",
    description: "Track payments, reminders, and outstanding invoices to improve collection consistency.",
    icon: TrendingUp,
  },
  {
    title: "Better Financial Control",
    description: "Gain clearer visibility into revenue, expenses, and payment activity across the business.",
    icon: BarChart3,
  },
  {
    title: "Increase Productivity",
    description: "Centralize billing, reporting, and coordination so teams spend less time switching tools.",
    icon: UserCog,
  },
  {
    title: "Happy Customers",
    description: "Deliver timely invoices, professional communication, and smoother payment experiences.",
    icon: CreditCard,
  },
];
