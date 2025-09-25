import { Heading } from "@src/components/ui/Heading";
import {
  StyledManageCard,
  StyledManageCardContent,
  StyledManageCardImage,
  StyledManageCardLinks,
  StyledManageCardTextList,
  StyledManageCardTextListItem,
} from "./ManageCard.styled";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

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
  links: { label: string; href: string; isVideo?: boolean }[];
}

const ManageCard = ({
  title,
  text,
  textList,
  image,
  links,
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
        <StyledManageCardLinks>
          {links.map((link, index) => (
            <Link
              key={index}
              fontSize="14px"
              lineHeight="19px"
              href={link.href}
              color="main"
              textUnderline
              hover="underline-none"
            >
              {link.label}
            </Link>
          ))}
        </StyledManageCardLinks>
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
