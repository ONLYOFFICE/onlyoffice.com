import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";
import { TStep } from "../../../Hero.types";

export interface ISelectFile {
  theme?: keyof IThemeColors;
  heading: string;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  setStep: React.Dispatch<React.SetStateAction<TStep>>;
}
