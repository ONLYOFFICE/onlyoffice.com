import { TStatus } from "../../../Hero.types";

export interface ISignUp {
  setEmail: (email: string) => void;
  setStatus: (status: TStatus) => void;
}

declare global {
  interface Window {
    SignInByGoogle: (data: string) => void;
  }
}
