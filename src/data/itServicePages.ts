export const IT_SERVICE_PAGE_LOADERS = {
  "website-web-application-services/website-design-development": () =>
    import("../pages/services/website-web-application-services/WebsiteDesignDevelopment"),
  "website-web-application-services/web-application-development": () =>
    import("../pages/services/website-web-application-services/WebApplicationDevelopment"),
  "website-web-application-services/ecommerce-platform-development": () =>
    import("../pages/services/website-web-application-services/EcommercePlatformDevelopment"),
  "website-web-application-services/saas-application-development": () =>
    import("../pages/services/website-web-application-services/SaasApplicationDevelopment"),
  "mobile-application-development/android-app-development": () =>
    import("../pages/services/mobile-application-development/AndroidAppDevelopment"),
  "mobile-application-development/ios-app-development": () =>
    import("../pages/services/mobile-application-development/IosAppDevelopment"),
  "mobile-application-development/cross-platform-app-development": () =>
    import("../pages/services/mobile-application-development/CrossPlatformAppDevelopment"),
  "ai-automation-solutions/chatbot-development": () =>
    import("../pages/services/ai-automation-solutions/ChatbotDevelopment"),
  "ai-automation-solutions/workflow-automation-rpa": () =>
    import("../pages/services/ai-automation-solutions/WorkflowAutomationRpa"),
  "ai-automation-solutions/recommendation-engine-development": () =>
    import("../pages/services/ai-automation-solutions/RecommendationEngineDevelopment"),
  "ai-automation-solutions/machine-learning-solutions": () =>
    import("../pages/services/ai-automation-solutions/MachineLearningSolutions"),
  "ai-automation-solutions/computer-vision-solutions": () =>
    import("../pages/services/ai-automation-solutions/ComputerVisionSolutions"),
  "ai-automation-solutions/aiot-solutions": () =>
    import("../pages/services/ai-automation-solutions/AiotSolutions"),
  "custom-enterprise-software/custom-enterprise-software-development": () =>
    import("../pages/services/custom-enterprise-software/CustomEnterpriseSoftwareDevelopment"),
  "custom-enterprise-software/crm-services": () =>
    import("../pages/services/custom-enterprise-software/CrmServices"),
  "custom-enterprise-software/it-staff-augmentation": () =>
    import("../pages/services/custom-enterprise-software/ItStaffAugmentation"),
  "cloud-infrastructure-services/cloud-migration-services": () =>
    import("../pages/services/cloud-infrastructure-services/CloudMigrationServices"),
  "cloud-infrastructure-services/application-integrations": () =>
    import("../pages/services/cloud-infrastructure-services/ApplicationIntegrations"),
  "cybersecurity-solutions/security-audits": () =>
    import("../pages/services/cybersecurity-solutions/SecurityAudits"),
  "cybersecurity-solutions/vulnerability-assessment": () =>
    import("../pages/services/cybersecurity-solutions/VulnerabilityAssessment"),
  "cybersecurity-solutions/threat-monitoring": () =>
    import("../pages/services/cybersecurity-solutions/ThreatMonitoring"),
  "cybersecurity-solutions/data-protection-compliance": () =>
    import("../pages/services/cybersecurity-solutions/DataProtectionCompliance"),
} as const;

export type ITServicePageKey = keyof typeof IT_SERVICE_PAGE_LOADERS;
export type ITServicePageLoader = (typeof IT_SERVICE_PAGE_LOADERS)[ITServicePageKey];

