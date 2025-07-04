import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledConnectors = styled.div`
  text-align: center;
  max-width: 1120px;
  margin: auto;

    @media ${device.tablet} {
    overflow-x: scroll;
  }
`;

const StyledConnectorsItems = styled.ul`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;

  @media ${device.tablet} {
    margin: 0 40px;
    width: 1120px;
  }

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
