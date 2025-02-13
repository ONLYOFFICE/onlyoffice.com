import { StyledSection } from "./Section.styled";
import { ISection } from "./Section.types";

const Section = ({
  id,
  className,
  children,
  as,
  bgColor,
  desktopSpacing = ["112px", "112px"],
  tabletSpacing = ["88px", "88px"],
  tabletSmallSpacing,
  mobileSpacing = ["48px", "48px"],
}: ISection) => {
  return (
    <StyledSection
      id={id}
      className={className}
      as={as}
      $bgColor={bgColor}
      $desktopSpacing={desktopSpacing}
      $tabletSpacing={tabletSpacing}
      $tabletSmallSpacing={tabletSmallSpacing}
      $mobileSpacing={mobileSpacing}
    >
      {children}
    </StyledSection>
  );
};

export { Section };
