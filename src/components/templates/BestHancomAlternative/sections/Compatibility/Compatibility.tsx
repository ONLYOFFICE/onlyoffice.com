import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { BestAlternativeCompatibility } from "@src/components/modules/best-alternative/BestAlternativeCompatibility";

const Compatibility = () => {
  const { t } = useTranslation("best-hancom-alternative");

  return (
    <BestAlternativeCompatibility
      alternative={{
        label: "Hancom Office",
        logo: {
          src: "/images/templates/best-hancom-alternative/compatibility/logo_hancom.png",
        },
      }}
      items={items}
      details={
        <Trans
          t={t}
          i18nKey="WhatWentWrong"
          components={[
            <Link
              href={`${process.env.NEXT_PUBLIC_SITE_URL}/images/templates/best-hancom-alternative/compatibility/pdf/zoho.pdf`}
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
