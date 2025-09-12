import { Link } from "@src/components/ui/Link";
import {
  StyledCardBody,
  StyledCardImage,
  StyledCardHeading,
  StyledCard,
} from "./ContentCard.styled";

interface IContentCard {
  imgUrl: string;
  heading: string;
  href?: string;
  locale?: string;
}

const ContentCard = ({ imgUrl, heading, href, locale }: IContentCard) => {
  const Content = (
    <StyledCardBody $locale={locale}>
      <StyledCardImage src={imgUrl} alt={heading} />
      <StyledCardHeading>{heading}</StyledCardHeading>
    </StyledCardBody>
  );

  return (
    <StyledCard>
      {href ? (
        <Link href={href}>{Content}</Link>
      ) : (
        <div style={{ height: "100%" }}>{Content}</div>
      )}
    </StyledCard>
  );
};

export { ContentCard };
