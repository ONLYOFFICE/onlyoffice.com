import { TStatus } from "../../../Hero.types";

export interface IRestorePassword {
  setStatus: (status: TStatus) => void;
}
