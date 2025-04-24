export interface IPricingPlan {
  active?: boolean;
  heading: string;
  price: string;
  numberOfUsers: string;
  setNumberOfUsers: (value: string) => void;
  availableList: string[];
  firstResponseTime: string;
  supportList: string[];
  casesList: string[];
  caption?: string;
}
