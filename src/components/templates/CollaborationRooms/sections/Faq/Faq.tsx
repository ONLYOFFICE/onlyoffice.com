import { useTranslation, Trans } from "next-i18next";
import { FaqCollapse } from "@src/components/modules/FaqCollapse";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const Faq = () => {
  const main = useTranslation("main");
  const collaboration = useTranslation("collaboration-rooms");

  return (
    <FaqCollapse
      desktopSpacing={["112px", "112px"]}
      tabletSpacing={["72px", "112px"]}
      mobileSpacing={["48px", "64px"]}
      text={main.t("GetAnswersToTheMostPopularQuestions")}
      items={items.map(({ label, text, links }) => ({
        label: collaboration.t(label),
        content: links ? (
          <Trans
            t={collaboration.t}
            i18nKey={text}
            components={links?.map(({ href }, index) => (
              <Link href={href} key={index} target="_blank" />
            ))}
          />
        ) : (
          <Trans
            t={collaboration.t}
            i18nKey={text}
            components={{ br: <br /> }}
          />
        ),
      }))}
    />
  );
};

export { Faq };
