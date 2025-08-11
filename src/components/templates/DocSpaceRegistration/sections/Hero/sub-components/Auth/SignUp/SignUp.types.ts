import { TStatus } from "../../../Hero.types";

export interface ISignUp {
  setEmail: (email: string) => void;
  setStatus: (status: TStatus) => void;
  setExistTenants: (tenants: { domain: string; path: string }[]) => void;
  setCreateNewAccountQuery: (query: string) => void;
}

declare global {
  interface Window {
    SignInByGoogle: (data: string) => void;
  }
}
