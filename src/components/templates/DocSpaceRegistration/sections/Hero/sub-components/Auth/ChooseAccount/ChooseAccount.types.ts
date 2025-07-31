import { TStatus } from "../../../Hero.types";

export interface IChooseAccount {
  existTenants: {
    domain: string;
    path: string;
  }[];
  setExistTenants: (tenants: { domain: string; path: string }[]) => void;
  status: TStatus;
  createNewAccountQuery: string;
}
