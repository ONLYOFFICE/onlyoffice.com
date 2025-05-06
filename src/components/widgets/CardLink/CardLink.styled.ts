import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledCardLink = styled(Link)`
  background: #ffffff;
  border-radius: 5px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  position: relative;
  text-decoration: none;
  width: 352px;
  transition: box-shadow 0.3s;
  flex-shrink: 0;

  @media ${device.tablet} {
    width: 284px;
  }

  @media ${device.tabletS} {
    width: 208px;
  }

  @media ${device.mobile} {
    width: 238px;
  }

  &:hover {
    box-shadow: 0px 20px 40px rgba(0, 0, 0, 0.1);

    & > div:last-child > p::after {
      transform: translate(8px, -50%);
      opacity: 1;
    }
  }
`;

const StyledCardLinkTop = styled.div<{ $bgUrl: string }>`
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
    background-image: ${(props) => `url(${props.$bgUrl})`};
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

const StyledCardLinkContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: calc(100% - 160px);

  @media ${device.tabletS} {
    height: calc(100% - 98px);
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

const StyledCardLinkSubtitle = styled(Text)`
  position: relative;
  width: fit-content;
  margin: 0 auto 32px;

  @media ${device.tablet} {
    margin: 0 auto 16px;
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
    right: -21px;
    transform: translate(0, -50%);
    background-image: url("/images/icons/arrow-in-circle.svg");
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
