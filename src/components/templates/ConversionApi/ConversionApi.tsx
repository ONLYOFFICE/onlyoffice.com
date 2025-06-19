import { StyledConversionApi } from "./ConversionApi.styled";
import { Conversion } from "./sections/Conversion";
import { Examples } from "./sections/Examples";
import { Features } from "./sections/Features";
import { Hero } from "./sections/Hero";
import { Questions } from "./sections/Questions";

const ConversionApiTemplate = () => {
  return (
    <StyledConversionApi>
      <Hero />
      <Examples />
      <Features />
      <Conversion />
      <Questions />
    </StyledConversionApi>
  );
};

export { ConversionApiTemplate };
