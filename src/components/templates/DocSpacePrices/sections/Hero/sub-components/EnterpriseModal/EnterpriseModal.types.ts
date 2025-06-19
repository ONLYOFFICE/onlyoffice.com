import { IAffiliate } from "../../Hero.types";

export interface IEnterpriseModal {
  isOpen: boolean;
  onClose: () => void;
  affiliate: IAffiliate;
}

export interface IEnterpriseModalFormData {
  usersNumber: "100" | "250" | "500" | "1000" | "more";
  licenseDuration: "1 Year" | "Lifetime";
  supportAndUpdates: "1 Year" | "3 Years";
  supportLevel: "Basic" | "Plus" | "Premium";
  multiServerDeployment: boolean;
  trainingCourses: boolean;
}
