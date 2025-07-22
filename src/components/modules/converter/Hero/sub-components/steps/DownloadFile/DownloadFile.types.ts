import { IThemeColors } from "@src/components/modules/converter/Hero/config/theme";
import { IResultData } from "../../../Hero.types";
import { IRating } from "./sub-components/Rating";

export interface IDownloadFile {
  theme?: keyof IThemeColors;
  selectedFile?: File | null;
  resultData: IResultData | null;
  setIsOpenCancelConvertModal: React.Dispatch<React.SetStateAction<boolean>>;
  outputFileType: string;
  ratingData: IRating;
}
