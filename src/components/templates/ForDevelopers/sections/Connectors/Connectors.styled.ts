import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledConnectors = styled.div`
  text-align: center;

  @media ${device.tablet} {
    margin-bottom: 56px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledConnectorsItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  justify-content: space-between;

  li {
    filter: grayscale(100%);
    transition: filter 0.5s;

      &:hover {
        filter: grayscale(0);
      }
  }

  > div {
    @media ${device.desktop} {
      width: calc(33.333% - 24px);
      max-width: 100%;
    }

    @media ${device.tablet} {
      width: calc(50% - 16px);
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;

export {
  StyledConnectors,
  StyledConnectorsItems
};
