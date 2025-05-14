import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import { StyledHeroHeading, StyledHeroText } from "./Hero.styled";

const Hero = () => {
  return (
    <Section background="#F5F5F5">
      <Container>
        <StyledHeroHeading
          level={1}
          size={1}
          label="See it in action"
          textAlign="center"
        />
        <StyledHeroText
          size={1}
          textAlign="center"
          label="Curious to know what the interface looks like and try the main functionality without registration?"
        />
      </Container>
    </Section>
  );
};

export { Hero };
