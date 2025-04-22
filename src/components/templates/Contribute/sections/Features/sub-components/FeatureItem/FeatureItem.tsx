import {
  StyledFeatureItem,
  StyledFeatureItemIcon,
  StyledFeatureItemWrapper,
  StyledFeatureItemText,
  StyledFeatureItemLink,
} from "./FeatureItem.styled";
import { IFeatureItem } from "./FeatureItem.types";
import { Heading } from "@src/components/ui/Heading";

const FeatureItem = ({ icon, heading, text, link }: IFeatureItem) => {
  return (
    <StyledFeatureItem>
      <StyledFeatureItemIcon
        $iconUrl={icon.url}
        $iconPositionX={icon.positionX}
        $iconMobilePositionX={icon.mobilePositionX}
      />

      <StyledFeatureItemWrapper>
        <Heading level={3}>{heading}</Heading>
        <StyledFeatureItemText forwardedAs="div" size={2}>
          {text}
        </StyledFeatureItemText>
        <StyledFeatureItemLink
          href={link.href}
          label={link.label}
          color="main"
          textUnderline
          hover="underline-none"
        />
      </StyledFeatureItemWrapper>
    </StyledFeatureItem>
  );
};

export { FeatureItem };
