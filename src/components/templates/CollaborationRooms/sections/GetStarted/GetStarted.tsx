import { useTranslation } from "next-i18next";
import { StyledGetStartedHeading } from "./GetStarted.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { ChooseSolution } from "@src/components/widgets/ChooseSolution";
import { items } from "./data/items";

const GetStarted = () => {
  const main = useTranslation("main");
  const collaboration = useTranslation("collaboration-rooms");

  return (
    <Section
      tabletSmallSpacing={["72px", "72px"]}
      bg="linear-gradient(#F8F9F9,#F8F9F900)"
    >
      <Container>
        <StyledGetStartedHeading
          level={2}
          size={2}
          textAlign="center"
          label={main.t("GetStartedAndChooseWhereToWork")}
        />

        <ChooseSolution
          items={items[0].items.map(({ imgUrl, heading, text, links }) => ({
            imgUrl,
            heading: collaboration.t(heading),
            text: collaboration.t(text),
            links: links.map(({ id, name, url }) => ({
              id,
              name: collaboration.t(name),
              url,
            })),
          }))}
          largeItems={items[0].largeItems.map(
            ({ imgUrl, heading, text, links }) => ({
              imgUrl,
              heading: main.t(heading),
              text: main.t(text),
              links: links.map(({ id, name, url }) => ({
                id,
                name: main.t(name),
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
