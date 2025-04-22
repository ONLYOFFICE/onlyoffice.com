import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 56px;

  @media ${device.mobile} {
    row-gap: 24px;

    > h2 {
      text-align: left;
    }
  }
`;

const StyledFeaturesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  > div {
    max-width: 280px;
    > p {
      font-weight: 600;
    }
    @media ${device.desktop} {
      width: calc(33.333% - 24px);
      max-width: 100%;
    }

    @media ${device.mobile} {
      padding: 0 0 0 80px;
      text-align: left;
      width: 100%;
      &:before {
        left: 32px;
      }
      > p {
        height: 64px;
        padding: 11px 0px;
      }
    }
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

export { StyledFeaturesWrapper, StyledFeaturesItems };
