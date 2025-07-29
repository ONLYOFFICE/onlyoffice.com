import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPresentationHeading,
  StyledPresentationSlide,
} from "./BestAlternativePresentationSlide.styled";
import { PresentationSlide } from "./sub-components/PresentationSlide";
import { IBestAlternativePresentationSlide } from "./BestAlternativePresentationSlide.types";

const BestAlternativePresentationSlide = ({
  heading,
  title,
  url
}: IBestAlternativePresentationSlide) => {
  return (
    <Section background="#F9F9F9" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledPresentationHeading level={3} size={4} textAlign="center">
          {heading}
        </StyledPresentationHeading>
        <StyledPresentationSlide>
          <PresentationSlide
            title={title}
            url={url}
          />
        </StyledPresentationSlide>
      </Container>
    </Section>
  );
};

export { BestAlternativePresentationSlide };
