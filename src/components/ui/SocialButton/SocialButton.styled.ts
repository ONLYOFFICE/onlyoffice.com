import Link from "next/link";
import styled from "styled-components";
import { ISocialButton } from "./SocialButton.type";

const socialStyles: Record<
  ISocialButton["type"],
  { icon: string; border: string }
> = {
  google: { icon: "/images/icons/google.svg", border: "#1877F2" },
  zoom: { icon: "/images/icons/zoom.svg", border: "#2196f3" },
  twitter: { icon: "/images/icons/twitter.svg", border: "#000000" },
  linkedin: { icon: "/images/icons/linkedin.svg", border: "#0084B1" },
  facebook: { icon: "/images/icons/facebook.svg", border: "#000000" },
};

export const StyledButtonIcon = styled(Link)<{ $type: ISocialButton["type"] }>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 7px;
  min-width: 40px;
  height: 40px;
  border: 1px solid transparent;
  border-radius: 3px;
  background: ${({ $type }) =>
    `url(${socialStyles[$type].icon}) no-repeat 7px center / 24px 24px`};
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.2);
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.25);
  }

  &:active {
    border-color: ${({ $type }) => socialStyles[$type].border};
    box-shadow: none;
  }
`;

export const StyledButtonLabel = styled.span`
  font-family: "Roboto", sans-serif;
  font-size: 14px;
  font-weight: 700;
  line-height: 16.41px;
  color: #666;
  padding-left: 49px;
  transition: color 0.3s;
`;
