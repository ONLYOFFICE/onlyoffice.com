import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import Link from "next/link";
import styled, { css } from "styled-components";

const StyledAcceptWrapper = styled.div`
  display: grid;
  justify-items: center;
  gap: 56px;

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledAcceptItems = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  justify-content: center;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledAcceptItem = styled.div<{ $positionX: string }>`
  padding-top: 96px;
  display: grid;
  justify-items: center;
  align-content: start;
  text-align: center;
  gap: 8px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
    background-image: url("/images/templates/influencer-program/accept/icons-accept.svg");
    background-repeat: no-repeat;
    background-position-x: ${({ $positionX }) => $positionX};
  }
`;

const StyledAcceptItemText = styled(Text)`
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledAcceptSocialIcons = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  margin: 0 auto;

  @media ${device.mobile} {
    gap: 20px 28px;
  }
`;

const StyledAcceptSocialIcon = styled.li`
  display: inline-flex;
`;

const BaseSocialIcon = css<{ $iconPosition: string }>`
  width: 24px;
  height: 24px;
  background-image: url("/images/templates/contribute/improve/social-icons.svg");
  background-repeat: no-repeat;
  background-position-x: ${(props) => props.$iconPosition};
  filter: grayscale(1);
  transition: filter 0.2s;

  &:hover {
    filter: grayscale(0);
  }
`;

const StyledAcceptSocialButton = styled.button<{ $iconPosition: string }>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  ${BaseSocialIcon};
`;

const StyledAcceptSocialIconLink = styled(Link)<{ $iconPosition: string }>`
  display: inline-block;
  ${BaseSocialIcon};
`;

export {
  StyledAcceptWrapper,
  StyledAcceptItems,
  StyledAcceptItem,
  StyledAcceptItemText,
  StyledAcceptSocialIcons,
  StyledAcceptSocialIcon,
  BaseSocialIcon,
  StyledAcceptSocialButton,
  StyledAcceptSocialIconLink,
};
