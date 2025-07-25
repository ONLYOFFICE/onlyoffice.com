import { IThemeColors } from "./config/theme";
import { ILearnMore } from "./sub-components/LearnMore";
import { IRating } from "./sub-components/steps/DownloadFile/sub-components/Rating";

export interface IHero {
  theme?: keyof IThemeColors;
  heading: React.ReactNode;
  subHeading: string;
  learnMore?: ILearnMore;
  ratingData: IRating;
}

export interface IResultData {
  status: string;
  fileUrl: string;
  thumbnail: string;
}

export type TStep = "select" | "convert" | "loading" | "download";
