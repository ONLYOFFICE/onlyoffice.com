import { StyledContainer } from "./Container.styled";
import { IContainer } from "./Container.types";

const Container = ({
  id,
  className,
  children,
  maxWidth = "1200px",
  desktopSpacing = "48px",
  tabletSpacing = "40px",
  mobileSpacing = "16px",
}: IContainer) => {
  return (
    <StyledContainer
      id={id}
      className={className}
      $maxWidth={maxWidth}
      $desktopSpacing={desktopSpacing}
      $tabletSpacing={tabletSpacing}
      $mobileSpacing={mobileSpacing}
    >
      {children}
    </StyledContainer>
  );
};

export { Container };
