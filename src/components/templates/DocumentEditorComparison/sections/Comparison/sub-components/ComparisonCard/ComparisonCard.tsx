import {
  StyledComparisonCard,
  StyledComparisonCardLogo,
  StyledComparisonCardLogoWrapper,
  StyledComparisonCardText,
} from "./ComparisonCard.styled";
import { IComparisonCard } from "./ComparisonCard.types";

const ComparisonCard = ({ logo, text, link }: IComparisonCard) => {
  return (
    <StyledComparisonCard href={link}>
      <StyledComparisonCardLogoWrapper>
        <StyledComparisonCardLogo
          src={logo.src}
          $width={logo.width}
          $height={logo.height}
          $mobileWidth={logo.mobileWidth}
          $mobileHeight={logo.mobileHeight}
          alt={logo.alt}
        />
      </StyledComparisonCardLogoWrapper>
      <StyledComparisonCardText>{text}</StyledComparisonCardText>
    </StyledComparisonCard>
  );
};

export { ComparisonCard };
