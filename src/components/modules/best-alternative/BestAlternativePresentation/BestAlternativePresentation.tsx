import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";
import {
  StyledPresentationHeading,
  StyledPresentationLink,
} from "./BestAlternativePresentation.styled";
import { IBestAlternativePresentation } from "./BestAlternativePresentation.types";

const BestAlternativePresentation = ({
  heading,
  link,
  image,
}: IBestAlternativePresentation) => {
  return (
    <Section background="#F9F9F9" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledPresentationHeading level={3} size={4} textAlign="center">
          {heading}
        </StyledPresentationHeading>
        <StyledPresentationLink
          href={link.href}
          aria-label={link.ariaLabel}
          target="_blank"
        >
          <img width="100%" height="100%" src={image.src} alt={image.alt} />
        </StyledPresentationLink>
      </Container>
    </Section>
  );
};

export { BestAlternativePresentation };
