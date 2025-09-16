import styled from "styled-components";
import { IFeatureIconsItem } from "./FeatureIconsItem.types";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledFeatureIconsItemContent = styled.div<{
  $contentWidth?: IFeatureIconsItem["contentWidth"];
  $position?: IFeatureIconsItem["position"];
}>`
  display: grid;
  row-gap: 16px;

  .buttons {
    display: flex;
    justify-content: left;
    align-items: center;
  }

  @media ${device.mobile} {
    row-gap: 8px;

    .buttons {
      flex-direction: column-reverse;
      align-items: flex-start;
      margin-top: 0;

      > div a {
        font-size: 14px;
      }
    }
  }
`;

const StyledFeatureIconsText = styled.div`
  font-size: 16px;
  line-height: 24px;
  max-width: 736px;
  padding: 24px 40px 56px;
  text-align: center;
  margin: 0 auto;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
    padding: 24px 40px 16px;
  }
`;

const StyledFeatureIconsItemLink = styled(Link)`
  color: #ff6f3d;
  text-decoration: underline;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledFeatureItemsWrapper = styled.ul`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  gap: 32px;
  margin-bottom: 32px;
  padding: 0;
  list-style: none;
  justify-content: center;

  @media ${device.tablet} {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

const StyledFeatureItem = styled.li<{ $locale: string }>`
  display: flex;
  flex-direction: row;
  align-items: center;
  font-size: 14px;
  color: #333;
  gap: 8px;

  img {
    display: block;
  }

  span {
    text-align: left;
    font-size: 16px;
    line-height: 21px;
    white-space: ${({ $locale }) => ($locale === "en" ? "nowrap" : "normal")};
    font-weight: 700;

    @media ${device.desktop} {
      white-space: normal;
    }

    @media ${device.desktop} {
      white-space: nowrap;
      font-size: 14px;
    }
  }
`;

const StyledFeatureIconsItemText = styled.li`
  list-style-type: none;
  font-size: 16px;

  @media ${device.mobile} {
    font-size: 14px;
  }

  .featureList {
    position: relative;
    padding-left: 32px;

    &::before {
      content: "";
      position: absolute;
      top: 50%;
      left: 8px;
      width: 6px;
      height: 6px;
      background: #ff6f3d;
      transform: rotate(45deg) translateY(-50%);

      @media ${device.mobile} {
        top: 8px;
      }
    }
  }
`;

const StyledFeatureIconsButton = styled(Link)<{
  $isPrimary?: boolean;
  $isLink?: boolean;
  $isServer?: boolean;
}>`
  padding: ${({ $isLink }) => ($isLink ? "12px 0" : "12px 24px")};
  font-size: ${({ $isLink }) => ($isLink ? "16px" : "12px")};
  line-height: 26px;
  border-radius: 9px;
  text-align: center;
  text-decoration: ${({ $isLink }) => ($isLink ? "underline" : "none")};
  display: inline-block;
  transition: 0.2s ease;
  cursor: pointer;
  text-transform: ${({ $isLink }) => ($isLink ? "" : "capitalize")};
  letter-spacing: ${({ $isLink }) => ($isLink ? "0" : "0.08em")};
  font-weight: ${({ $isLink }) => ($isLink ? "400" : "600")};

  @media ${device.mobile} {
    display: block;
    width: 100%;
  }

  color: ${({ $isPrimary, $isLink, $isServer }) =>
    $isServer
      ? "#444444"
      : $isLink
        ? "#ff6f3d"
        : $isPrimary
          ? "#ffffff"
          : "#ffffff"};
  background-color: ${({ $isPrimary, $isLink, $isServer }) =>
    $isServer ? "#ffffff" : $isLink ? "" : $isPrimary ? "#ff6f3d" : "#444444"};
  border: ${({ $isServer }) =>
    $isServer ? "1px solid #AAAAAA" : "transparent"};

  &:hover {
    opacity: 0.9;
    text-decoration: none;

    border: ${({ $isServer }) =>
      $isServer ? "1px solid #ff6f3d" : "transparent"};
    color: ${({ $isServer }) => ($isServer ? "#ff6f3d" : "")};
  }
`;

const StyledQuoteText = styled.i`
  position: relative;
  display: block;
  margin-bottom: 16px;
  font-size: 22px;
  line-height: 33px;
  text-align: center;
  z-index: 1;

  &::after {
    position: absolute;
    content: "";
    display: inline-flex;
    top: 0;
    left: 50%;
    width: 196px;
    height: 160px;
    background-image: url(${getAssetUrl('/images/templates/for-small-business/features/quotes.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateX(-50%);
    z-index: -1;
    top: -80px;

    @media ${device.mobile} {
      width: 135px;
      height: 110px;
    }
  }

  @media ${device.mobile} {
    padding-top: 55px;
    font-size: 16px;
    line-height: 25px;
  }
`;

const StyledQuote = styled.div`
  padding-top: 112px;
  text-align: center;
  max-width: 768px;
  margin: auto;

  a,
  p,
  img {
    z-index: 2;
    position: relative;
  }

  p {
    margin: 8px 0 16px;
    max-width: 100%;
  }

  img {
    margin-top: 24px;
  }
`;

export {
  StyledFeatureIconsItemContent,
  StyledFeatureIconsItemText,
  StyledFeatureIconsText,
  StyledFeatureIconsItemLink,
  StyledFeatureItemsWrapper,
  StyledFeatureIconsButton,
  StyledFeatureItem,
  StyledQuoteText,
  StyledQuote,
};
