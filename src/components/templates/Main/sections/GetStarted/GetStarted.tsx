import { useTranslation, Trans } from "next-i18next";
import { ChooseSolution } from "@src/components/modules/ChooseSolution";
import { Link } from "@src/components/ui/Link";
import { items } from "./data/items";

const GetStarted = () => {
  const { t } = useTranslation("main");

  return (
    <ChooseSolution
      tabletSpacing={["88px", "80px"]}
      heading={t("GetStartedAndChooseWhereToWork")}
      items={items[0].items.map(({ imgUrl, heading, text, links }) => ({
        imgUrl,
        heading: t(heading),
        text:
          typeof text === "string" ? (
            t(text)
          ) : (
            <Trans
              t={t}
              i18nKey={text.label}
              components={text.links.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
              ))}
            />
          ),
        links: links.map(({ id, name, url }) => ({
          id,
          name: t(name),
          url,
        })),
      }))}
      largeItems={items[0].largeItems.map(
        ({ imgUrl, heading, text, links }) => ({
          imgUrl,
          heading: t(heading),
          text: t(text),
          links: links.map(({ id, name, url }) => ({
            id,
            name: t(name),
            url,
          })),
        }),
      )}
    />
  );
};

export { GetStarted };
