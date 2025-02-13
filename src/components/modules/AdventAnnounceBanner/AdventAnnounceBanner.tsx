import { useRouter } from "next/router";
import { AdventAnnounce } from "onlyoffice-react-ui-kit/advent-announce";
import "onlyoffice-react-ui-kit/advent-announce/css";

interface IAdventAnnounceBanner {
  locale?: string;
}

const AdventAnnounceBanner = ({ locale }: IAdventAnnounceBanner) => {
  const router = useRouter();

  return <AdventAnnounce locale={locale ?? router.locale} />;
};

export { AdventAnnounceBanner };
