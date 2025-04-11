import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledImproveItem = styled.div<{
  $icon: string;
  $positionX?: string;
  $mobilePositionX?: string;
}>`
  display: grid;
  grid-template-columns: 130px 1fr;
  align-self: center;
  gap: 24px;

  &::before {
    content: "";
    display: block;
    width: 130px;
    height: 130px;
    background-image: ${({ $icon }) => `url(${$icon})`};
    background-repeat: no-repeat;
    background-size: auto 130px;
    background-position: ${({ $positionX }) => `${$positionX} center`};

    @media ${device.mobile} {
      width: 87px;
      height: 87px;
      background-size: auto 87px;
      background-position: ${({ $mobilePositionX }) => `${$mobilePositionX} center`};
    }
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: 8px;
  }

  @media ${device.mobile} {
    gap: 0px;
  }
`;

const StyledImproveContent = styled.div`
  display: grid;
  gap: 16px;
  align-self: center;

  a {
    line-height: 24px;

    @media ${device.mobile} {
      font-size: 13px;
    }
  }
`;

export { StyledImproveItem, StyledImproveContent };
