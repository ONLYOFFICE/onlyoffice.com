import { useTranslation, Trans } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { ChooseSolution } from "@src/components/modules/ChooseSolution";
import { Link } from "@src/components/ui/Link";
import { getStartedItems } from "./data/getStartedItems";

const GetStarted = () => {
  const { t } = useTranslation("main");

  return (
    <Section tabletSpacing={["88px", "80px"]}>
      <ChooseSolution
        heading={t("GetStartedAndChooseWhereToWork")}
        items={getStartedItems[0].items.map(
          ({ imgUrl, heading, text, links }) => ({
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
                      color="main-color"
                      textUnderline
                      hover="text-underline-none"
                    />
                  ))}
                />
              ),
            links: links.map(({ id, name, url }) => ({
              id,
              name: t(name),
              url,
            })),
          }),
        )}
        largeItems={getStartedItems[0].largeItems.map(
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
    </Section>
  );
};

export { GetStarted };
