import { ILocale } from "@src/types/locale";
import { Hero } from "./sections/Hero";

const DownloadWorkspaceTemplate = ({ locale }: ILocale) => {
  return <Hero locale={locale} />;
};

export { DownloadWorkspaceTemplate };
