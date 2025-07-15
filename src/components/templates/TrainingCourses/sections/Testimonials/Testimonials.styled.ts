import styled from "styled-components";
import { ITestimonialsItem } from "../../TrainingCourses.types";
import { Text } from "@src/components/ui/Text";

const StyledTestimonialsSlideWrapper = styled.div`
  position: relative;
`;

const StyledTestimonialsSlideQuotes = styled.div`
  width: 196px;
  height: 160px;
  background-image: url("/images/templates/trainingCourses/testimonials/quotes.svg");
  background-repeat: no-repeat;
  background-position: center top;
  position: absolute;
  top: 0;
  left: 50%;
  z-index: -1;
  transform: translateX(-50%);
`;

const StyledTestimonialsSlideLogo = styled.div<{
  $logoUrl: ITestimonialsItem["logo_url"];
}>`
  width: 200px;
  height: 50px;
  background-image: ${({ $logoUrl }) => `url("${$logoUrl}")`};
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
`;

const StyledTestimonialsSlideText = styled(Text)``;

const StyledTestimonialsSlideAuthor = styled(Text)``;

const StyledTestimonialsSlideCompany = styled(Text)``;

const StyledTestimonialsSlideCountry = styled(Text)``;

export {
  StyledTestimonialsSlideWrapper,
  StyledTestimonialsSlideQuotes,
  StyledTestimonialsSlideLogo,
  StyledTestimonialsSlideText,
  StyledTestimonialsSlideAuthor,
  StyledTestimonialsSlideCompany,
  StyledTestimonialsSlideCountry,
}