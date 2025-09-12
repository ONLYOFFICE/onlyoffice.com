import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

import { getAssetUrl } from "@utils/getAssetUrl";
const Compatibility = () => {
  const { t } = useTranslation("best-zoho-docs-alternative");

  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "Docs",
        logo: {
          src: getAssetUrl("/images/templates/best-zoho-docs-alternative/compatibility/logo_zoho.svg"),
          width: "64px",
        },
      }}
      items={items}
      details={
        <Trans
          t={t}
          i18nKey="WhatWentWrong"
          components={[
            <Link
              href="/images/templates/best-zoho-docs-alternative/compatibility/pdf/zoho.pdf"
              download
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
