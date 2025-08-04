import { TStatus } from "../../../Hero.types";

export interface ICheckEmail {
  email: string;
  setStatus: (status: TStatus) => void;
}
