import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const RoomsFaq = () => {
  const { t } = useTranslation("RoomsFaq");

  return (
    <FaqCollapse
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["72px", "112px"]}
      mobileSpacing={["48px", "64px"]}
      text={t("GetAnswersToTheMostPopularQuestions")}
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

export { RoomsFaq };
