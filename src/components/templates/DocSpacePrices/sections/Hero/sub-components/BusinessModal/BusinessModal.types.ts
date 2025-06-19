import { IAffiliate } from "../../Hero.types";

export interface IBusinessModal {
  isOpen: boolean;
  onClose: () => void;
  affiliate: IAffiliate;
}
