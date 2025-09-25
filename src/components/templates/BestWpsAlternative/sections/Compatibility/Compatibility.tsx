import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

import { getAssetUrl } from "@utils/getAssetUrl";
const Compatibility = () => {
  const { t } = useTranslation("best-wps-alternative");

  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "WPS",
        logo: {
          src: getAssetUrl("/images/templates/best-wps-alternative/compatibility/logo_wps.svg"),
        },
      }}
      items={items}
      details={
        <Trans
          t={t}
          i18nKey="WhatWentWrong"
          components={[
            <Link
              href="/images/templates/best-wps-alternative/compatibility/pdf/wps.pdf"
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
