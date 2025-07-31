import {
  StyledCard,
  StyledCardHeading,
  StyledCardLink,
  StyledCardText,
  StyledCardBody,
} from "./DocspaceCards.styled";
import { IDocSpaceCard } from "./DocSpaceCards.types";
import { Link } from "@src/components/ui/Link";

const DocSpaceCard = ({
  heading,
  text,
  image,
  color,
  bgColor,
  borderColor,
  linkLabel,
  linkHref,
}: IDocSpaceCard) => {

  const Content = (
    <StyledCardBody>
      <StyledCardHeading $image={image} $color={color} level={3} label={heading} />
      <StyledCardText $color={color} label={text} />
      {linkHref && linkLabel && <StyledCardLink $color={color}>{linkLabel}</StyledCardLink>}
    </StyledCardBody>
  );

  return <StyledCard $bgColor={bgColor} $borderColor={borderColor}>{linkHref ? <Link href={linkHref}>{Content}</Link> : Content}</StyledCard>;
};

export { DocSpaceCard };
