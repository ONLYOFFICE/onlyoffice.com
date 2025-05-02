import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import type { IStyledGettingItemTopProps } from "@src/components/templates/DocSpaceEnterprise/DocSpaceEnterprise.types";

const getBgUrl = (props: IStyledGettingItemTopProps) => `url(${props.$bgUrl})`;

const StyledGettingText = styled(Text)`
  margin-top: 24px;

  @media ${device.mobile} {
    width: 90vw;
    margin: 16px auto 0;
  }
`;

const StyledGettingList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 32px;
  padding: 56px 0;

  @media ${device.tablet} {
    gap: 3vw;
  }

  @media ${device.mobile} {
    gap: 32px;
  }

  @media ${device.mobile} {
    justify-content: flex-start;
    overflow-x: auto;
    scrollbar-width: none;
    padding: 32px 16px;
  }
`;

const StyledGettingItemLink = styled(Link)`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  position: relative;
  text-decoration: none;
  width: 352px;
  transition: box-shadow 0.3s;
  flex-shrink: 0;

  @media screen and (max-width: 1200px) {
    width: 28vw;
  }

  @media ${device.tablet} {
    height: 376px;
  }

  @media ${device.tabletS} {
    height: 264px;
  }

  @media ${device.mobile} {
    width: 237px;
    height: 263px;
  }

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

    & > p::after {
      transform: translate(8px, -50%);
      opacity: 1;
    }
  }
`;

const StyledGettingItemHeading = styled(Heading)`
  padding: 32px 32px 16px;

  @media ${device.tabletS} {
    padding: 16px 16px 12px;
  }
`;

const StyledGettingItemText = styled(Text)`
  padding: 0 32px 64px;

  @media ${device.tabletS} {
    padding: 0 16px 56px;
  }
`;

const StyledGettingItemSubtitle = styled(Text)`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  bottom: 32px;

  @media ${device.tabletS} {
    bottom: 20px;
  }

  &::after {
    content: "";
    width: 21px;
    height: 20px;
    position: absolute;
    top: 50%;
    right: -21px;
    transform: translate(0, -50%);
    background-image: url("/images/icons/arrow-in-circle.svg");
    background-repeat: no-repeat;
    background-size: contain;
    transition-duration: 0.3s;
    opacity: 0;
  }
`;

const StyledGettingItemTop = styled.div<IStyledGettingItemTopProps>`
  background: #f5f5f5;
  border-radius: 5px;
  height: 160px;

  @media ${device.tabletS} {
    height: 98px;
  }

  &::after {
    content: "";
    width: 72px;
    height: 72px;
    display: block;
    background-image: ${getBgUrl};
    background-position: 0 0;
    background-size: contain;
    background-position-x: 50%;
    background-repeat: no-repeat;
    margin: 0 auto;
    position: relative;
    top: 48px;

    @media ${device.tabletS} {
      width: 43px;
      height: 40px;
      top: 30px;
    }
  }
`;

const StyledGettingFooter = styled.div`
  padding: 24px 16px;
  border: 1px solid #e2e2e2;
  border-radius: 3px;

  @media ${device.mobile} {
    width: calc(100vw - 33px);
    margin: 0 auto;
    font-size: 13px;
    padding: 16px;
  }
`;

export {
  StyledGettingText,
  StyledGettingList,
  StyledGettingItemLink,
  StyledGettingItemHeading,
  StyledGettingItemText,
  StyledGettingItemSubtitle,
  StyledGettingItemTop,
  StyledGettingFooter,
};
