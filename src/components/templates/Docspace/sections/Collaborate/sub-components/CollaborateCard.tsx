import { Link } from "@src/components/ui/Link";
import {
  StyledCollaborateCard,
  StyledCollaborateCardDescription,
  StyledCollaborateCardImage,
  StyledCollaborateCardTitle,
  StyledContentWrapper,
} from "./CollaborateCard.styled";
import { useTranslation } from "next-i18next";

interface CollaborateCardProps {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    url2x: string;
  };
  linkLabel: string;
  href: string;
  isActive: boolean;
}

const CollaborateCard = ({
  id,
  title,
  description,
  image,
  linkLabel,
  href,
  isActive,
}: CollaborateCardProps) => {
  const { t } = useTranslation("docspace");
  return (
    <StyledCollaborateCard $isActive={isActive}>
      <StyledContentWrapper>
        <StyledCollaborateCardTitle $id={id} $soon={t("soon")}>
          {title}
        </StyledCollaborateCardTitle>
        <StyledCollaborateCardDescription>
          {description}
        </StyledCollaborateCardDescription>
        <Link label={linkLabel} href={href} textUnderline color="#ff6f3d" />
      </StyledContentWrapper>
      <StyledCollaborateCardImage $imgUrl={t(image.url)} $imgUrl2x={t(image.url2x)} />
    </StyledCollaborateCard>
  );
};

export { CollaborateCard };
