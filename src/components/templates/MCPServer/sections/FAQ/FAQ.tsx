import { Trans, useTranslation } from "next-i18next";
import { items } from "./data/items";
import { Link } from "@src/components/ui/Link";
import { StyledFaqCollapse } from "./FAQ.styled";

const FAQ = () => {
  const { t } = useTranslation("mcp-server");

  return (
    <StyledFaqCollapse
      items={items.map(({ label, children, links }) => ({
        label: t(label),
        content: links ? (
          <Trans
            t={t}
            i18nKey={String(children)}
            components={links?.map(({ href, isExternal }, index) => (
              <Link
                href={href}
                key={index}
                target={isExternal ? "_blank" : undefined}
              />
            ))}
          />
        ) : (
          <Trans t={t} i18nKey={String(children)} components={{ br: <br /> }} />
        ),
      }))}
    />
  );
};

export { FAQ };
