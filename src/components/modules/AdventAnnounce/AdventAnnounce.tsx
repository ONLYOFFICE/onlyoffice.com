import { OOAdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";
import { ILocale } from "@src/types/locale";

const AdventAnnounce = ({ locale }: ILocale) => {
  return <OOAdventAnnounce locale={locale} />;
};

export { AdventAnnounce };
