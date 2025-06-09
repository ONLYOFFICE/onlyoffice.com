import { Text } from "@src/components/ui/Text";
import { ICardItemProps } from "../Webinars.types";

import {
  StyledCardItem,
  StyledCardItemBottom,
  StyledCardItemContent,
  StyledCardItemHeading,
  StyledCardItemImg,
  StyledCardItemLink,
  StyledCardItemSubtitle,
  StyledCardItemTop,
} from "./CardItem.styled";

const CardItem = ({
  date,
  language,
  title,
  description,
  playText,
  speaker,
  image,
  isUpcomingWebinar
 }: ICardItemProps) => {
  return (
    <StyledCardItem>
      <StyledCardItemTop>
        <Text
          size={1}
          label={date}
        />
        <Text
          size={1}
          label={language}
        />
      </StyledCardItemTop>
      <StyledCardItemContent>
        <StyledCardItemHeading
          level={4}
          size={4}
          label={title}
        />
        <Text
          size={2}
          label={description}
        />
      </StyledCardItemContent>
      <StyledCardItemBottom>
        {!isUpcomingWebinar && (
          <StyledCardItemLink
            fontSize="14px"
            label={playText}
            color="main"
          />
        )}
        <StyledCardItemImg $image={image} />
        <StyledCardItemSubtitle
          label={speaker}
          level={5}
          size={5}
        />
      </StyledCardItemBottom>
    </StyledCardItem>
  );
};

export { CardItem };