import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";
import { TStep, IResultData } from "../../../Hero.types";

export interface IConvertFile {
  theme?: keyof IThemeColors;
  selectedFile: File | null;
  setIsOpenCancelConvertModal: React.Dispatch<React.SetStateAction<boolean>>;
  setIsOpenDeleteFileModal: React.Dispatch<React.SetStateAction<boolean>>;
  step: TStep;
  setStep: React.Dispatch<React.SetStateAction<TStep>>;
  setResultData: React.Dispatch<React.SetStateAction<IResultData | null>>;
  setOutputFileType: React.Dispatch<React.SetStateAction<string>>;
  currentUUIDRef: React.MutableRefObject<string | null>;
}
