import { useTranslation } from "next-i18next";
import { StyledGetStartedHeading } from "./GetStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
import { items } from "./data/items";

const GetStarted = () => {
  const { t } = useTranslation("collaboration-rooms");

  return (
    <Section
      tabletSmallSpacing={["72px", "72px"]}
      background="linear-gradient(#F8F9F9,#F8F9F900)"
    >
      <Container>
        <StyledGetStartedHeading
          level={2}
          size={2}
          textAlign="center"
          label={t("GetStartedAndChooseWhereToWork")}
        />

        <ChooseSolution
          items={items.items.map(({ imgUrl, heading, text, links }) => ({
            imgUrl,
            heading: t(heading),
            text: t(text),
            links: links.map(({ id, name, url }) => ({
              id,
              name: t(name),
              url,
            })),
          }))}
          largeItems={items.largeItems.map(
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
      </Container>
    </Section>
  );
};

export { GetStarted };
