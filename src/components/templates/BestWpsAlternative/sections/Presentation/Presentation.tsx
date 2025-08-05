import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentationSlide } from "@src/components/modules/best-alternative/BestAlternativePresentationSlide";

const Presentation = () => {
  const { t } = useTranslation("best-adobe-alternative");

  return (
    <BestAlternativePresentationSlide
      heading={
        <Trans
          t={t}
          i18nKey="PresentationTitle"
          components={[<Text as="span" color="#FF6F3D" key="0" />]}
        />
      }
      title="ONLYOFFICE vs WPS"
      url="https://static.onlyoffice.com/assets/docs/samples/oo-wps-international.ppsx"
    />
  );
};

export { Presentation };
