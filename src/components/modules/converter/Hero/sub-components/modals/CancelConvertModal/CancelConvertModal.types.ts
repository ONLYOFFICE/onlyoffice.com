import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";
import { TStep } from "@src/components/modules/converter/Hero";

export interface ICancelConvertModal {
  isOpen: boolean;
  setIsOpenCancelConvertModal: React.Dispatch<React.SetStateAction<boolean>>;
  setSelectedFile: React.Dispatch<React.SetStateAction<File | null>>;
  step: TStep;
  setStep: React.Dispatch<React.SetStateAction<TStep>>;
  theme?: keyof IThemeColors;
  currentUUIDRef: React.MutableRefObject<string | null>;
}
