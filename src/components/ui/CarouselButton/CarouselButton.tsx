import { StyledCarouselButton } from "./CarouselButton.styled";
import { ICarouselButton } from "./CarouselButton.types";
import { ChevronLeftIcon, ChevronRightIcon } from "@src/components/icons";

const CarouselButton = ({
  id,
  className,
  direction = "left",
  theme = "light",
}: ICarouselButton) => {
  return (
    <StyledCarouselButton id={id} className={className} $theme={theme}>
      {direction === "left" ? <ChevronLeftIcon /> : <ChevronRightIcon />}
    </StyledCarouselButton>
  );
};

export { CarouselButton };
