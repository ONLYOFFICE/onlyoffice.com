import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

const StyledPresentationHeading = styled(Heading)`
  max-width: 544px;
  margin: 0 auto 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledPresentationLink = styled.a`
  display: block;
  max-width: 650px;
  height: auto;
  margin: 0 auto;
  position: relative;

  &::before {
    content: "";
    display: block;
    width: 94px;
    height: 94px;
    background-color: rgba(0, 0, 0, 0.7);
    border-radius: 50%;
    position: absolute;
    top: calc(50% - 47px);
    left: calc(50% - 47px);
    transition: width 0.2s, height 0.2s, top 0.2s, left 0.2s;
    z-index: 1;

    @media ${device.mobile} {
      width: 64px;
      height: 64px;
      top: calc(50% - 32px);
      left: calc(50% - 32px);
    }
  }

  &::after {
    content: "";
    display: block;
    width: 0;
    height: 0;
    border-style: solid;
    border-width: 17px 0 17px 28px;
    border-color: transparent transparent transparent #fff;
    position: absolute;
    top: calc(50% - 17px);
    left: calc(50% - 8px);
    z-index: 2;

    @media ${device.mobile} {
      border-width: 12px 0 12px 20px;
      top: calc(50% - 12px);
      left: calc(50% - 6px);
    }
  }

  &:hover::before {
    width: 120px;
    height: 120px;
    top: calc(50% - 60px);
    left: calc(50% - 60px);

    @media ${device.mobile} {
      width: 80px;
      height: 80px;
      top: calc(50% - 40px);
      left: calc(50% - 40px);
    }
  }
`;

export { StyledPresentationHeading, StyledPresentationLink };
