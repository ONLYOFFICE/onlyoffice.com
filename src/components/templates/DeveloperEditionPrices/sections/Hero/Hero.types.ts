export interface IDeveloperEditionFormData {
  hosting: "Cloud" | "On-premises";
  development: boolean;
  devServersNumber: string;
  production: boolean;
  prodServerNumber: string;
  connectionsNumber: string;
  nonProduction: boolean;
  nonProdServerNumber: string;
  supportLevel: "Basic" | "Plus" | "Premium";
  branding: "Standard branding" | "White Label";
  multiTenancy: boolean;
  disasterRecovery: boolean;
  multiServerDeployment: boolean;
  accessToAPI: boolean;
  liveViewer: boolean;
  nativeMobileApps: boolean;
  desktopApps: boolean;
  trainingCourses: boolean;
}
