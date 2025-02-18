import { AdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";

interface IAdventAnnounceBanner {
  locale?: string;
}

const AdventAnnounceBanner = ({ locale }: IAdventAnnounceBanner) => {
  return <AdventAnnounce locale={locale} />;
};

export { AdventAnnounceBanner };
