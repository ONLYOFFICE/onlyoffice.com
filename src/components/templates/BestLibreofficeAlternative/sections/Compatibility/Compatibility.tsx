import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

const Compatibility = () => {
  const { t } = useTranslation("best-libreoffice-alternative");

  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "LibreOffice",
        logo: {
          src: "/images/templates/best-libreOffice-alternative/compatibility/logo_libreOffice.svg",
        },
      }}
      items={items}
      details={
        <Trans
          t={t}
          i18nKey="WhatWentWrong"
          components={[
            <Link
              href="/images/templates/best-libreoffice-alternative/compatibility/pdf/libreoffice.pdf"
              color="main"
              target="_blank"
              textUnderline
              hover="underline-none"
              key="0"
            />,
          ]}
        />
      }
    />
  );
};

export { Compatibility };
