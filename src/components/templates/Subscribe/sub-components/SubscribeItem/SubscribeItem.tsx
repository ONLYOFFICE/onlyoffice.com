import {
  StyledSubscribeItem,
  StyledSubscribeItemIcon,
  StyledSubscribeItemHeading,
} from "./SubscribeItem.styled";
import { ISubscribeItem } from "./SubscribeItem.types";
import { Text } from "@src/components/ui/Text";

const SubscribeItem = ({
  icon,
  heading,
  text,
  variant = "primary",
}: ISubscribeItem) => {
  return (
    <StyledSubscribeItem>
      <StyledSubscribeItemIcon
        $iconUrl={icon.url}
        $positionX={icon.positionX}
      />
      <StyledSubscribeItemHeading
        level={3}
        size={5}
        label={heading}
        $variant={variant}
      />
      <Text
        size={2}
        label={text}
        color={variant === "secondary" ? "#666666" : undefined}
      />
    </StyledSubscribeItem>
  );
};

export { SubscribeItem };
