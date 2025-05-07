import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentation } from "@src/components/modules/best-alternative/BestAlternativePresentation";

const Presentation = () => {
  const { t } = useTranslation("best-microsoft-office-alternative");

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
        href: "https://help.onlyoffice.co/products/files/doceditor.aspx?fileid=4476630&doc=ZEFoK2lNMW1ZQjhRNjNyY2JnWk5MaVAvTUU4dmdhV3ZHWGtOL01GUStydz0_IjQ0NzY2MzAi0",
        ariaLabel: "Presentation ONLYOFFICE vs Microsoft Office Online",
      }}
      image={{
        src: "/images/templates/best-microsoft-office-alternative/presentation/presentation.jpg",
        alt: "ONLYOFFICE vs Microsoft Office Online",
      }}
    />
  );
};

export { Presentation };
