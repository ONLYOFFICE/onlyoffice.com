import { AdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";
import { ILocale } from "@src/types/locale";

const AdventAnnounceBanner = ({ locale }: ILocale) => {
  return <AdventAnnounce locale={locale} />;
};

export { AdventAnnounceBanner };
