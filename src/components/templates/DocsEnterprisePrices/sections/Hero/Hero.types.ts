export interface IDocsEnterprisePricesFormData {
  hosting: "Cloud" | "On-premises";
  connectionsNumber: "50" | "100" | "200" | "more";
  licenseDuration: "1-year" | "Lifetime";
  supportUpdates: "1-year" | "3-year";
  cloudType: "Business" | "VIP";
  supportLevel: "Basic" | "Plus" | "Premium";
  trainingCourses: boolean;
  disasterRecovery: boolean;
  multiTenancy: boolean;
}
