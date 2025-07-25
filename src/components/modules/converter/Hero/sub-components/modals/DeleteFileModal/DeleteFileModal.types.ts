import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";
import { TStep } from "../../../Hero.types";

export interface IDeleteFileModal {
  isOpen: boolean;
  setIsOpenDeleteFileModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  setStep: React.Dispatch<React.SetStateAction<TStep>>;
  theme?: keyof IThemeColors;
}
