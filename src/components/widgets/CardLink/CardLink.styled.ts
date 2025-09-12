import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import type { ICardLink } from "./CardLink.types";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCardLink = styled(Link)<{
  $widthDesktop: ICardLink["widthDesktop"];
  $widthDesktopSmall: ICardLink["widthDesktopSmall"];
  $widthTablet: ICardLink["widthTablet"];
  $widthTabletSmall: ICardLink["widthTabletSmall"];
  $widthMobile: ICardLink["widthMobile"];
  $widthMobileSmall: ICardLink["widthMobileSmall"];
  $textAlign: ICardLink["textAlign"];
}>`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  position: relative;
  text-decoration: none;
  width: ${(props) => props.$widthDesktop};
  transition: box-shadow 0.3s;
  flex-shrink: 0;

  @media ${device.desktop} {
    width: ${(props) => props.$widthDesktopSmall};
  }

  @media ${device.tablet} {
    width: ${(props) => props.$widthTablet};
  }

  @media ${device.tabletS} {
    width: ${(props) => props.$widthTabletSmall};
  }

  @media ${device.mobile} {
    width: ${(props) => props.$widthMobile};
  }

  @media ${device.mobileS} {
    width: ${(props) => props.$widthMobileSmall};
  }

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

    & > div:last-child > p::after {
      transform: ${(props) =>
        props.$textAlign === "right"
          ? "translate(-8px, -50%)"
          : "translate(8px, -50%)"};
      opacity: 1;
    }
  }
`;

const StyledCardLinkTop = styled.div<{
  $iconUrl: ICardLink["icon"]["iconUrl"];
  $iconBlockHeightDesktop: ICardLink["icon"]["iconBlockHeightDesktop"];
  $iconBlockHeightTablet: ICardLink["icon"]["iconBlockHeightTablet"];
  $iconBlockHeightTabletSmall: ICardLink["icon"]["iconBlockHeightTabletSmall"];
  $iconBlockHeightMobile: ICardLink["icon"]["iconBlockHeightMobile"];
  $iconBlockHeightMobileSmall: ICardLink["icon"]["iconBlockHeightMobileSmall"];
  $iconWidthDesktop: ICardLink["icon"]["iconWidthDesktop"];
  $iconHeightDesktop: ICardLink["icon"]["iconHeightDesktop"];
  $iconWidthTablet: ICardLink["icon"]["iconWidthTablet"];
  $iconHeightTablet: ICardLink["icon"]["iconHeightTablet"];
  $iconWidthTabletSmall: ICardLink["icon"]["iconWidthTabletSmall"];
  $iconHeightTabletSmall: ICardLink["icon"]["iconHeightTabletSmall"];
  $iconWidthMobile: ICardLink["icon"]["iconWidthMobile"];
  $iconHeightMobile: ICardLink["icon"]["iconHeightMobile"];
  $iconWidthMobileSmall: ICardLink["icon"]["iconWidthMobileSmall"];
  $iconHeightMobileSmall: ICardLink["icon"]["iconHeightMobileSmall"];
}>`
  background: #f5f5f5;
  border-radius: 5px;
  height: ${(props) => props.$iconBlockHeightDesktop};

  @media ${device.tablet} {
    height: ${(props) => props.$iconBlockHeightTablet};
  }

  @media ${device.tabletS} {
    height: ${(props) => props.$iconBlockHeightTabletSmall};
  }

  @media ${device.mobile} {
    height: ${(props) => props.$iconBlockHeightMobile};
  }

  @media ${device.mobileS} {
    height: ${(props) => props.$iconBlockHeightMobileSmall};
  }

  &::after {
    content: "";
    width: ${(props) => props.$iconWidthDesktop};
    height: ${(props) => props.$iconHeightDesktop};
    display: block;
    background-image: ${(props) => `url(${props.$iconUrl})`};
    background-position: 0 0;
    background-size: contain;
    background-position-x: 50%;
    background-repeat: no-repeat;
    margin: 0 auto;
    position: relative;
    top: 50%;
    transform: translateY(-50%);

    @media ${device.tablet} {
      width: ${(props) => props.$iconWidthTablet};
      height: ${(props) => props.$iconHeightTablet};
    }

    @media ${device.tabletS} {
      width: ${(props) => props.$iconWidthTabletSmall};
      height: ${(props) => props.$iconHeightTabletSmall};
    }

    @media ${device.mobile} {
      width: ${(props) => props.$iconWidthMobile};
      height: ${(props) => props.$iconHeightMobile};
    }

    @media ${device.mobileS} {
      width: ${(props) => props.$iconWidthMobileSmall};
      height: ${(props) => props.$iconHeightMobileSmall};
    }
  }
`;

const StyledCardLinkContent = styled.div<{
  $iconBlockHeightDesktop: ICardLink["icon"]["iconBlockHeightDesktop"];
  $iconBlockHeightTabletSmall: ICardLink["icon"]["iconBlockHeightTabletSmall"];
}>`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: ${(props) => `calc(100% - ${props.$iconBlockHeightDesktop})`};

  @media ${device.tabletS} {
    height: ${(props) => `calc(100% - ${props.$iconBlockHeightTabletSmall})`};
  }
`;

const StyledCardLinkHeading = styled(Heading)`
  padding: 32px 32px 16px;

  @media ${device.tabletS} {
    padding: 16px 16px 12px;
    font-size: 18px;
    line-height: 133%;
  }
`;

const StyledCardLinkText = styled(Text)`
  padding: 0 32px 16px;

  @media ${device.tabletS} {
    padding: 0 16px 12px;
    font-size: 13px;
    line-height: 150%;
  }
`;

const StyledCardLinkSubtitle = styled(Text)<{
  $textAlign: ICardLink["textAlign"];
}>`
  position: relative;
  width: fit-content;
  margin: ${(props) =>
    props.$textAlign === "left"
      ? "0 auto 32px 32px"
      : props.$textAlign === "right"
      ? "0 32px 32px auto"
      : "0 auto 32px"};

  @media ${device.tabletS} {
    margin: ${(props) =>
      props.$textAlign === "left"
        ? "0 auto 16px 16px"
        : props.$textAlign === "right"
        ? "0 16px 16px auto"
        : "0 auto 16px"};
  }

  @media ${device.tabletS} {
    font-size: 13px;
    line-height: 160%;
  }

  &::after {
    content: "";
    width: 21px;
    height: 20px;
    position: absolute;
    top: 50%;
    ${(props) =>
      props.$textAlign === "right"
        ? css`
            left: -21px;
          `
        : css`
            right: -21px;
          `}
    transform: translate(0, -50%);
    background-image: url(${getAssetUrl('/images/icons/arrow-in-circle.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transition-duration: 0.3s;
    opacity: 0;
  }
`;

export {
  StyledCardLink,
  StyledCardLinkTop,
  StyledCardLinkHeading,
  StyledCardLinkText,
  StyledCardLinkSubtitle,
  StyledCardLinkContent,
};
