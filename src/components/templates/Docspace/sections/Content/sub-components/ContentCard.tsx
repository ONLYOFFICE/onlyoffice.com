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
}

const ContentCard = ({ imgUrl, heading, href }: IContentCard) => {
  const Content = (
    <StyledCardBody>
      <StyledCardImage src={imgUrl} alt={heading} />
      <StyledCardHeading>{heading}</StyledCardHeading>
    </StyledCardBody>
  );

  return (
    <StyledCard>
      {href ? <Link href={href}>{Content}</Link> : <div>{Content}</div>}
    </StyledCard>
  );
};

export { ContentCard };
