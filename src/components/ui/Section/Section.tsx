import { StyledSection } from "./Section.styled";
import { ISection } from "./Section.types";

const Section = ({
  id,
  className,
  children,
  as,
  background,
  desktopSpacing = ["112px", "112px"],
  tabletSpacing = ["88px", "88px"],
  tabletSmallSpacing = ["80px", "80px"],
  mobileSpacing = ["48px", "48px"],
  borderTop = false,
  borderTopColor = "#E2E2E2",
}: ISection) => {
  return (
    <StyledSection
      id={id}
      className={className}
      as={as}
      $background={background}
      $desktopSpacing={desktopSpacing}
      $tabletSpacing={tabletSpacing}
      $tabletSmallSpacing={tabletSmallSpacing}
      $mobileSpacing={mobileSpacing}
      $borderTop={borderTop}
      $borderTopColor={borderTopColor}
    >
      {children}
    </StyledSection>
  );
};

export { Section };
