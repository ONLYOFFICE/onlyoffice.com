import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { BestAlternativePresentation } from "@src/components/modules/best-alternative/BestAlternativePresentation";

const Presentation = () => {
  const { t } = useTranslation("best-google-docs-alternative");

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
        href: "https://help.onlyoffice.co/Products/Files/DocEditor.aspx?fileid=7720629&doc=WU8vNFJFVU5WWmlEZExXU0RVank0SWJRbTNKbVVqQUZod0x2ZjMwOTlQaz0_Ijc3MjA2Mjki0",
        ariaLabel: "Presentation ONLYOFFICE vs Google Docs",
      }}
      image={{
        src: "/images/templates/best-google-docs-alternative/presentation/presentation.jpg",
        alt: "ONLYOFFICE Docs vs Google Docs",
      }}
    />
  );
};

export { Presentation };
