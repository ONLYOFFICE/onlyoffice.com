import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { SolutionCard } from "@src/components/widgets/SolutionCard";
import { smallItems, largeItems } from "./data/items";

import {
  StyledGetStartedHeading,
  StyledGetStartedSmallItems,
  StyledGetStartedLargeItems,
} from "./GetStarted.styled";

const GetStarted = () => {
  return (
    <Section
      background="linear-gradient(180deg,#F8F9F9 43.75%,rgba(248,249,249,0) 100%),#FFFFFF"
      tabletSmallSpacing={["48px", "48px"]}
    >
      <Container>
        <StyledGetStartedHeading
          label="Get started and choose where to work"
          size={2}
          level={2}
          textAlign="center"
        />
        <StyledGetStartedSmallItems>
          {smallItems.map((item) => (
            <SolutionCard
              key={item.heading}
              imgUrl={item.imgUrl}
              heading={item.heading}
              text={item.text}
              links={[
                {
                  name: item.linkName,
                  url: item.linkUrl,
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
              heading={item.heading}
              text={item.text}
              links={[
                {
                  name: item.linkName,
                  url: item.linkUrl,
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
