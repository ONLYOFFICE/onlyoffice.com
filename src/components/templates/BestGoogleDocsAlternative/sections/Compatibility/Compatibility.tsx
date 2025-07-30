import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

const Compatibility = () => {
  const { t } = useTranslation("best-google-docs-alternative");

  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "Google Docs",
        logo: {
          src: "/images/templates/best-google-docs-alternative/compatibility/logo_google_docs.svg",
        },
      }}
      items={items}
      details={
        <Trans
          t={t}
          i18nKey="WhatWentWrong"
          components={[
            <Link
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/images/templates/best-google-docs-alternative/compatibility/pdf/google.pdf`}
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
