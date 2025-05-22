import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Link } from "@src/components/ui/Link";
import { SolutionCard } from "@src/components/widgets/SolutionCard";
import { smallItems, largeItems } from "./data/items";

import {
  StyledGetStartedHeading,
  StyledGetStartedSmallItems,
  StyledGetStartedLargeItems,
} from "./GetStarted.styled";

const GetStarted = () => {
  const { t } = useTranslation("see-it-in-action");

  return (
    <Section
      background="linear-gradient(180deg,#F8F9F9 43.75%,rgba(248,249,249,0) 100%),#FFFFFF"
      tabletSmallSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledGetStartedHeading
          label={t("GetStartedHeading")}
          size={2}
          level={2}
          textAlign="center"
        />
        <StyledGetStartedSmallItems>
          {smallItems.map((item) => (
            <SolutionCard
              key={item.heading}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              text={[
                <Trans
                  key={item.linkName}
                  t={t}
                  i18nKey={item.text}
                  components={[
                    <Link
                      key={0}
                      href={"/all-connectors"}
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />,
                  ]}
                />,
              ]}
              links={[
                {
                  name: t(item.linkName),
                  url: t(item.linkUrl),
                },
              ]}
            />
          ))}
        </StyledGetStartedSmallItems>
        <StyledGetStartedLargeItems>
          {largeItems.map((item) => (
            <SolutionCard
              key={item.heading}
              imgUrl={item.imgUrl}
              heading={t(item.heading)}
              text={t(item.text)}
              links={[
                {
                  name: t(item.linkName),
                  url: t(item.linkUrl),
                },
              ]}
              large={true}
            />
          ))}
        </StyledGetStartedLargeItems>
      </Container>
    </Section>
  );
};

export { GetStarted };
