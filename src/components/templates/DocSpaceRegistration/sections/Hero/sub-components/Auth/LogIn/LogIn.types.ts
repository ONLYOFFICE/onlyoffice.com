import { TStatus } from "../../../Hero.types";

export interface ILogIn {
  setExistTenants: (tenants: { domain: string; path: string }[]) => void;
  setStatus: (status: TStatus) => void;
}

declare global {
  interface Window {
    SigninBySocial: (data: string) => void;
  }
}
