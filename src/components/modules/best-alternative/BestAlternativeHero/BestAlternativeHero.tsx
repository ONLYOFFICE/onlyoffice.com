import {
  StyledHeroContainer,
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroComparison,
  StyledHeroComparisonItem,
  StyledHeroButtonsWrapper,
} from "./BestAlternativeHero.styled";
import { Button } from "@src/components/ui/Button";
import { IBestAlternativeHero } from "./BestAlternativeHero.types";

const BestAlternativeHero = ({
  heading,
  comparisonLogos,
  buttons,
  text,
}: IBestAlternativeHero) => {
  return (
    <StyledHeroSection
      background="#f6f6f6"
      desktopSpacing={["158px", "108px"]}
      tabletSpacing={["158px", "108px"]}
      tabletSmallSpacing={["158px", "140px"]}
      mobileSpacing={["93px", "67px"]}
    >
      <StyledHeroContainer>
        <StyledHeroHeading>{heading}</StyledHeroHeading>
        <StyledHeroComparison>
          {comparisonLogos.map(({ src, alt, type }, index) => (
            <StyledHeroComparisonItem
              key={index}
              src={src}
              alt={alt}
              $type={type}
            />
          ))}
        </StyledHeroComparison>
        <StyledHeroButtonsWrapper>
          {buttons.map((button, index) => (
            <Button
              key={index}
              as="a"
              href={button.href}
              label={button.label}
              variant={button.variant}
            />
          ))}
        </StyledHeroButtonsWrapper>
        <StyledHeroText>{text}</StyledHeroText>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { BestAlternativeHero };
