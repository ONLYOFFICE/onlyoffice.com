import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentation } from "@src/components/modules/best-alternative/BestAlternativePresentation";

const Presentation = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

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
        href: "https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8116264&doc=NUxoK0F3MVFoZjlQZ3o2Q1VTNmtiUm1SWE5zR0o4a2svYVI0RmFvYUJoQT0_IjgxMTYyNjQi0",
        ariaLabel: "Presentation ONLYOFFICE vs LibreOffice",
      }}
      image={{
        src: "/images/templates/best-libreoffice-alternative/presentation/presentation.jpg",
        alt: "ONLYOFFICE Docs vs LibreOffice",
      }}
    />
  );
};

export { Presentation };
