import styled, { css } from "styled-components";
import Link from "next/link";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
interface StyledSocialIconsProps {
  $gap?: string;
  $justifyContent?: string;
  $margin?: string;
}

const StyledSocialIcons = styled.ul<StyledSocialIconsProps>`
  display: flex;
  flex-wrap: wrap;
  justify-content: ${(props) => props.$justifyContent || "center"};
  gap: ${(props) => props.$gap || "32px"};
  margin: ${(props) => props.$margin || "0 auto"};

  @media ${device.mobile} {
    gap: ${(props) => (props.$gap ? `calc(${props.$gap} * 0.7)` : "20px 28px")};
  }
`;

const StyledWeChatQRCode = styled.div`
  width: 200px;
  height: 258px;
  text-align: center;
  padding: 20px;
  position: absolute;
  top: -285px;
  left: -85px;
  background-color: #ffffff;
  background-image: url(${getAssetUrl('/images/modules/social-icons/qrcode_for_wechat.jpg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center bottom;
  box-shadow: 0 0 14px rgba(0, 0, 0, 0.2);
  opacity: 0;
  visibility: hidden;
  transition:
    0.55s opacity,
    0.55s visibility;

  @media screen and (max-width: 650px) {
    left: -130px;
  }

  @media screen and (max-width: 600px) {
    left: -150px;
  }

  @media screen and (max-width: 550px) {
    left: -170px;
  }

  @media screen and (max-width: 535px) {
    left: -20px;
  }

  @media screen and (max-width: 395px) {
    left: -85px;
  }

  @media screen and (max-width: 344px) {
    left: -115px;
  }

  span {
    color: #333;
    font-size: 13px;
    letter-spacing: -0.02em;
  }
`;

const StyledSocialIcon = styled.li<{ $isWeChat?: boolean }>`
  display: inline-flex;
  position: relative;
  outline: none;

  ${(props) =>
    props.$isWeChat &&
    css`
      &:hover ${StyledWeChatQRCode} {
        opacity: 1;
        visibility: visible;
      }
    `}
`;

const BaseSocialIcon = css<{ $iconPosition?: string; $iconUrl?: string }>`
  width: 24px;
  height: 24px;
  background-image: ${(props) =>
    props.$iconUrl
      ? `url("${props.$iconUrl}")`
      : `url(${getAssetUrl('/images/modules/social-icons/social-icons.svg')})`};
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.$iconPosition || "0"};
  background-position-y: center;
  background-size: ${(props) => (props.$iconUrl ? "contain" : "auto")};
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover {
    filter: grayscale(0);
  }
`;

const StyledSocialButton = styled.button<{
  $iconPosition?: string;
  $iconUrl?: string;
}>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${BaseSocialIcon};
`;

const StyledSocialIconLink = styled(Link)<{
  $iconPosition?: string;
  $iconUrl?: string;
}>`
  display: inline-block;
  ${BaseSocialIcon};
`;

export {
  StyledSocialIcons,
  StyledSocialIcon,
  BaseSocialIcon,
  StyledSocialButton,
  StyledSocialIconLink,
  StyledWeChatQRCode,
};
