import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const { t } = useTranslation("main");

  return (
    <FaqCollapse
      desktopSpacing={["112px", "111px"]}
      text={t("GetAnswersToTheMostPopularQuestions")}
      items={items.map(({ label, text, links }) => ({
        label: t(label),
        content: links ? (
          <Trans
            t={t}
            i18nKey={text}
            components={links?.map(({ href, isExternal }, index) => (
              <Link
                href={href}
                key={index}
                target={isExternal ? "_blank" : undefined}
              />
            ))}
          />
        ) : (
          t(text)
        ),
      }))}
    />
  );
};

export { Faq };
