import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFaqHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tabletS} {
    text-align: center;
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    margin-bottom: 32px;
  }
`;

const StyledFaqList = styled.ul`
  padding-bottom: 112px;

  @media ${device.tablet} {
    padding-bottom: 80px;
  }

  @media ${device.mobile} {
    padding-bottom: 48px;
  }
`;

const StyledFaqItem = styled.li`
  padding: 19px 0 19px 40px;
  border-top: 1px solid #e5e5e5;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
  overflow: hidden;
  cursor: pointer;

  @media ${device.mobile} {
    padding: 16px 0 16px 40px;
  }

  &:last-child {
    border-bottom: 1px solid #e5e5e5;
  }
`;

const StyledFaqItemHeading = styled(Heading)<{
  $isOpen: boolean;
}>`
  position: relative;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &::before {
    content: "";
    width: 24px;
    height: 24px;
    background-image: url("/images/icons/dash.svg");
    background-image: url(${({ $isOpen }) => ($isOpen ? "/images/icons/dash.svg" : "/images/icons/plus.svg")});
    background-size: contain;
    background-repeat: no-repeat;
    background-position: center;
    position: absolute;
    top: 0;
    left: -40px;
  }
`;

const StyledFaqItemTextWrapper = styled.div`
  overflow: hidden;
  max-height: 0;
  transition-duration: 300ms;
  transition-timing-function: ease-in-out;
`;

const StyledFaqItemText = styled.p`
  font-size: 14px;
  padding-top: 16px;

  @media ${device.mobile} {
    font-size: 13px;
    padding-top: 8px;
  }
`;

export {
  StyledFaqHeading,
  StyledFaqList,
  StyledFaqItem,
  StyledFaqItemHeading,
  StyledFaqItemTextWrapper,
  StyledFaqItemText
}