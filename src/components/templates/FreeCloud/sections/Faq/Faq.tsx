import { Trans, useTranslation } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

import { StyledFaqCollapse } from "./Faq.styled";

const Faq = () => {
  const { t } = useTranslation("free-cloud");

  return (
    <StyledFaqCollapse
      items={items.map((item) => ({
        label: t(item.label),
        content:
          <Trans
            t={t}
            i18nKey={item.content}
            components={[
              <Link
                key="0"
                color="#FF6F3D"
                textUnderline={true}
                hover="underline-none"
                href="/legalterms"
              />,
              <Link
                key="1"
                color="#FF6F3D"
                textUnderline={true}
                hover="underline-none"
                href="https://helpcenter.onlyoffice.com/faq/faq.aspx"
                target="_blank"
              />,
              <Link
                key="2"
                color="#FF6F3D"
                textUnderline={true}
                hover="underline-none"
                href="mailto:non-profit@onlyoffice.com"
              />,
            ]}
          />,
      }))}
    />
  );
};

export { Faq };