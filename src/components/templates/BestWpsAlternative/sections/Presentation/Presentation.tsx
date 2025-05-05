import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentation } from "@src/components/modules/best-alternative/BestAlternativePresentation";

const Presentation = () => {
  const { t } = useTranslation("best-wps-alternative");

  return (
    <BestAlternativePresentation
      heading={
        <Trans
          t={t}
          i18nKey="PresentationTitle"
          components={[<Text as="span" color="#FF6F3D" key="0" />]}
        />
      }
      link={{
        href: "https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8096736&doc=VUV1NGlMT0ZKUzVPWStOSFVuWTNIRXpSajFFQjQxTG12bVlHRWRGRmhQVT0_IjgwOTY3MzYi0",
        ariaLabel: "Presentation ONLYOFFICE vs Hancom Office",
      }}
      image={{
        src: "/images/templates/best-hancom-alternative/presentation/presentation.jpg",
        alt: "ONLYOFFICE vs Hancom Office",
      }}
    />
  );
};

export { Presentation };
