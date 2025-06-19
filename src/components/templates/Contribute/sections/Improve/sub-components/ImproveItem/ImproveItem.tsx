import {
  StyledImproveContent,
  StyledImproveItem,
  StyledImproveLink,
} from "./ImproveItem.styled";
import { IImproveItem } from "./ImproveItem.types";
import { Text } from "@src/components/ui/Text";

const ImproveItem = ({ icon, text, link }: IImproveItem) => {
  return (
    <StyledImproveItem
      $icon={icon.url}
      $positionX={icon.positionX}
      $mobilePositionX={icon.mobilePositionX}
    >
      <StyledImproveContent>
        <Text size={2}>{text}</Text>

        <StyledImproveLink
          href={link.href}
          label={link.label}
          target="_blank"
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledImproveContent>
    </StyledImproveItem>
  );
};

export { ImproveItem };
