import {
  StyledCard,
  StyledCardIcon,
  StyledCardTitle,
  StyledCardDescription,
  StyledWrapper,
} from "./Card.styled";
import { useTranslation } from "next-i18next";

const Card = ({
  title,
  description,
  image,
}: {
  title: string;
  description: string;
  image: string;
}) => {
  const { t } = useTranslation("docspace");
  return (
    <StyledCard>
      <StyledCardIcon $image={image} />
      <StyledWrapper>
        <StyledCardTitle>{t(title)}</StyledCardTitle>
        <StyledCardDescription>{t(description)}</StyledCardDescription>
      </StyledWrapper>
    </StyledCard>
  );
};

export { Card };
