import {
  StyledStoryCard,
  StyledStoryCardLink,
  StyledStoryCardImg,
} from "./StoryCard.styled";
import { IStoryCard } from "./StoryCard.types";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StoryCard = ({ id, className, linkUrl, imgUrl, heading }: IStoryCard) => {
  return (
    <StyledStoryCard id={id} className={className}>
      <StyledStoryCardLink href={linkUrl} tabIndex={-1} target="_blank">
        <StyledStoryCardImg $imgUrl={imgUrl} />
      </StyledStoryCardLink>

      <Heading level={4}>
        <Link href={linkUrl} target="_blank" hover="color">
          {heading}
        </Link>
      </Heading>
    </StyledStoryCard>
  );
};

export { StoryCard };
