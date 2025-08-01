import { IDownloadDesktopTemplate } from "@src/components/templates/DownloadDesktop";
import { Hero } from "./sections/Hero";

const DownloadDesktopTemplate = ({
  locale,
  desktopProducts,
  mobileProducts,
}: IDownloadDesktopTemplate) => {
  return (
    <Hero
      locale={locale}
      desktopProducts={desktopProducts}
      mobileProducts={mobileProducts}
    />
  );
};

export { DownloadDesktopTemplate };
