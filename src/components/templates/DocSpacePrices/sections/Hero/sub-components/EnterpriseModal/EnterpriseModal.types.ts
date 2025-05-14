export interface IEnterpriseModal {
  isOpen: boolean;
  onClose: () => void;
}

export interface IEnterpriseModalFormData {
  fullname: string;
  email: string;
  phone: string;
  companyName: string;
  usersNumber: "100" | "250" | "500" | "1000" | "more";
  licenseDuration: "1 Year" | "Lifetime";
  supportAndUpdates: "1 Year" | "3 Years";
  supportLevel: "Standard" | "Plus" | "Premium";
  multiServerDeployment: boolean;
  trainingCourses: boolean;
}
