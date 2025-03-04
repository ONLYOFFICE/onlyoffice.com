import Link from "next/link";
import styled from "styled-components";
import { SocialType } from "./SocialButton.type";

// images for icons
const backgroundIcons: Record<SocialType, string> = {
  google: "images/icons/google.svg",
  zoom: "images/icons/zoom.svg",
  twitter: "images/icons/twitter.svg",
  linkedin: "images/icons/linkedin.svg",
  facebook: "images/icons/facebook.svg",
};

// colors for active border
const activeBorderColors: Record<SocialType, string> = {
  google: "#1877F2",
  zoom: "#2196f3",
  twitter: "#000000",
  linkedin: "#0084B1",
  facebook: "#000000",
};

export const StyledButtonIcon = styled(Link)<{ type: SocialType }>`
  display: inline-flex;
  align-items: center;
  padding: 7px;
  justify-content: center;
  min-width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: ${({ type }) =>
    `url(${backgroundIcons[type]}) no-repeat 7px center / 24px 24px`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:active {
    border-color: ${({ type }) => activeBorderColors[type] || "transparent"};
    box-shadow: none;

    span {
      color: ${({ type }) => type === "google" && `#1877F2;`};
    }
  }
`;

export const StyledButtonLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  letter-spacing: 0%;
  color: #666;
  padding-left: 48px;
  transition: color 0.3s;
`;
