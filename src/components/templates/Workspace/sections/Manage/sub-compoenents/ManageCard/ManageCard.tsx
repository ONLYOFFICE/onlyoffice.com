import { Heading } from "@src/components/ui/Heading";
import {
  StyledManageCard,
  StyledManageCardContent,
  StyledManageCardImage,
  StyledManageCardTextList,
  StyledManageCardTextListItem,
} from "./ManageCard.styled";
import { Text } from "@src/components/ui/Text";

interface IManageCard {
  title: string;
  text: React.ReactNode;
  textList: string[];
  image: {
    url: string;
    url2x: string;
    hight: number;
  };
  isActive: boolean;
}

const ManageCard = ({
  title,
  text,
  textList,
  image,
  isActive,
}: IManageCard) => {
  return (
    <StyledManageCard $isActive={isActive}>
      <StyledManageCardContent>
        <Heading level={4} size={5} label={title} />
        <Text size={3}>{text}</Text>
        <StyledManageCardTextList>
          {textList.map((item, index) => (
            <StyledManageCardTextListItem key={index}>
              <Text size={3}>{item}</Text>
            </StyledManageCardTextListItem>
          ))}
        </StyledManageCardTextList>
      </StyledManageCardContent>
      <StyledManageCardImage
        $height={image.hight}
        $imgUrl={image.url}
        $imgUrl2x={image.url2x}
      />
    </StyledManageCard>
  );
};

export { ManageCard };
