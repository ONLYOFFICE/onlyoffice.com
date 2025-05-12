import { StyledRoomHeroListItem } from "@src/components/modules/room/RoomHero/RoomHero.styled";
import { 
  StyledFeatureLinkItem, 
  StyledLinkText, 
  StyledText, 
  StyledTextListItem, 
  StyledRoomHeroListNew, 
  StyledHeading } from "./FeatureLinkItem.styled";
import { IFeatureLinkItem } from "./FeatureLinkItem.types";
import { Trans, useTranslation } from "next-i18next";

const FeatureLinkItem = ({
  variant = "vertical",
  customPadding,
  icon,
  items,
  heading,
  linkUrl = "#",
  linkText = "",
  target,
  textList
}: IFeatureLinkItem) => {
  const { t } = useTranslation("security");
  return (
    <StyledFeatureLinkItem
      $variant={variant}
      $customPadding={customPadding}
      $icon={icon.url}
      $iconPositionX={icon.positionX}
      $mobileIconPositionX={icon.mobilePositionX}
      $iconPositionY={icon.positionY}
    >
      {heading && (
        <StyledHeading level={5} size={5}>
          {heading}
        </StyledHeading>
      )}
      { textList && (
        <StyledText>
          {textList.map((item, idx) => (
              <StyledTextListItem as="span" key={idx}>{item}</StyledTextListItem>
          ))}
        </StyledText>
      )}
      {items && items.length > 0 && (
        <StyledRoomHeroListNew>
          {items.map((item, index) => (
            <StyledRoomHeroListItem key={index}>
              <Trans
                t={t}
                i18nKey={item.label}
                components={[<strong key="strong"/>]}
              />
            </StyledRoomHeroListItem>
          ))}
        </StyledRoomHeroListNew>
      )}
      <StyledLinkText href={linkUrl || "#"} target={target}>
        {linkText}
      </StyledLinkText>
    </StyledFeatureLinkItem>
  );
};

export { FeatureLinkItem };
