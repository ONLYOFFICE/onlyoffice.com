import Link from "next/link";
import styled from "styled-components";
import { ISocialButton } from "./SocialButton.types";

const socialStyles = {
  google: { icon: "/images/ui/social-button/google.svg", border: "#1877F2" },
  zoom: { icon: "/images/ui/social-button/zoom.svg", border: "#2196f3" },
  x: { icon: "/images/ui/social-button/x.svg", border: "#000000" },
  linkedin: {
    icon: "/images/ui/social-button/linkedin.svg",
    border: "#0084B1",
  },
  facebook: {
    icon: "/images/ui/social-button/facebook.svg",
    border: "#000000",
  },
};

const StyledSocialButton = styled(Link)<{
  $platform: ISocialButton["platform"];
}>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: ${({ $platform }) =>
    `url(${socialStyles[$platform].icon}) no-repeat 7px center / 24px 24px`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition:
    box-shadow 0.2s,
    border 0.2s;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:active {
    border-color: ${({ $platform }) => socialStyles[$platform].border};
    box-shadow: none;
  }
`;

const StyledSocialButtonLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16px;
  color: #666;
  padding-left: 49px;
  transition: color 0.2s;
`;

export { StyledSocialButton, StyledSocialButtonLabel };
