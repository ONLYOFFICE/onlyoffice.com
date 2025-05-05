import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentation } from "@src/components/modules/best-alternative/BestAlternativePresentation";

const Presentation = () => {
  const { t } = useTranslation("best-zoho-docs-alternative");

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
        href: "https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=8072133&doc=bWllWkVsNzErbllaTEVIczdVcWQrL0Y0bm1takxDRWNESkgyanNGTytrOD0_IjgwNzIxMzMi0",
        ariaLabel: "Presentation ONLYOFFICE Docs vs Zoho Docs",
      }}
      image={{
        src: "/images/templates/best-zoho-docs-alternative/presentation/presentation.png",
        alt: "ONLYOFFICE Docs vs Zoho Docs",
      }}
    />
  );
};

export { Presentation };
