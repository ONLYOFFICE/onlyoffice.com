import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";

export interface IFileErrorModal {
  children: React.ReactNode;
  isOpen: boolean;
  setIsOpenFileErrorModal: React.Dispatch<React.SetStateAction<boolean>>;
  theme?: keyof IThemeColors;
}
