export interface IDocSpaceDeveloperPricesFormData {
  development: boolean;
  devServersNumber: string;
  production: boolean;
  prodServerNumber: string;
  connectionsNumber: string;
  supportLevel: "Basic" | "Plus" | "Premium";
  branding: "Standard branding" | "White Label";
  multiTenancy: boolean;
  disasterRecovery: boolean;
  multiServerDeployment: boolean;
  nativeMobileApps: boolean;
  desktopApps: boolean;
  trainingCourses: boolean;
}
