import styled, { css } from "styled-components";
import { IFeatureLinkItem } from "./FeatureLinkItem.types";
import { device } from "@src/utils/device";
import Link from "next/link";
import { Text } from "@src/components/ui/Text";
import { StyledRoomHeroList } from "@src/components/modules/room/RoomHero/RoomHero.styled";
import { Heading } from "@src/components/ui/Heading";

const StyledHeading = styled(Heading)`
  padding-bottom: 16px;
`;

const StyledLinkText = styled(Link)`
  color: #ff6f3d;
  font-size: 14px;
  text-decoration: underline;

  &:hover {
    text-decoration: none;
  }

  @media ${device.tabletS} {
    padding-top: 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFeatureLinkItem = styled.div<{
  $variant: IFeatureLinkItem["variant"];
  $icon: IFeatureLinkItem["icon"]["url"];
  $iconPositionX: IFeatureLinkItem["icon"]["positionX"];
  $mobileIconPositionX: IFeatureLinkItem["icon"]["mobilePositionX"];
  $iconPositionY: IFeatureLinkItem["icon"]["positionY"];
  $customPadding: IFeatureLinkItem["customPadding"];
}>`
  position: relative;
  display: grid;
  align-content: start;
  width: 100%;
  ${(props) =>
    props.$variant === "horizontal"
      ? css`
          padding: ${props.$customPadding || "0 0 0 88px"};
        `
      : css`
          padding-top: 80px;
          max-width: 352px;
          text-align: center;
        `}
  &::before {
    content: "";
    position: absolute;
    top: 0;
    width: 64px;
    height: 64px;
    background-image: url(${({ $icon }) => $icon});
    background-repeat: no-repeat;
    background-position: ${({
      $iconPositionX = "0px",
      $iconPositionY = "center",
    }) => `${$iconPositionX} ${$iconPositionY}`};

    ${(props) =>
      props.$variant === "horizontal"
        ? css`
            left: 0;
          `
        : css`
            left: 50%;
            transform: translateX(-50%);
          `}

    @media ${device.mobile} {
      height: 48px;
      width: 48px;
      background-size: cover;
      background-position-x: ${(props) => props.$mobileIconPositionX || props.$iconPositionX || "0"};
    }
  }

  @media ${device.mobile} {
    padding: 66px 0 0 0;
  }
`;

const StyledRoomHeroListNew = styled(StyledRoomHeroList)`
  font-size: 14px;
  padding-bottom: 16px;
  
  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    padding-top: 16px;
    padding-bottom: 0;
  }
`;

const StyledText = styled(Text)`
      line-height: 1.6em;
      font-size: 14px;

      @media ${device.mobile} {
        font-size: 13px;
      }
`;

const StyledTextListItem = styled.span`
  display: block;
  padding-bottom: 16px;

  @media ${device.tabletS} {
    &:last-child {
      padding-bottom: 0;
    }
  }
`;

export { 
  StyledFeatureLinkItem, 
  StyledLinkText, 
  StyledText, 
  StyledTextListItem,
  StyledRoomHeroListNew,
  StyledHeading
};
