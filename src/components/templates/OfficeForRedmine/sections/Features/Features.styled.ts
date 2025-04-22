import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 56px;

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledFeaturesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;

  > div {
    max-width: 256px;
    width: 100%;

    @media ${device.tabletS} {
      max-width: calc(50% - 16px);
      padding: 0 0 0 88px;

      &:before {
        left: 32px;
      }

      > p {
        font-size: 14px;
        padding: 8px 0px;
        text-align: left;
      }
    }

    @media ${device.mobile} {
      max-width: unset;
      padding: 64px 0 0;
      gap: 8px;
      text-align: center;
      width: 100%;

      &:before {
        left: 50%;
      }

      > p {
        padding: 8px 0px 0px;
        text-align: center;
      }
    }
  }

  @media ${device.mobile} {
    gap: 32px;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export { StyledFeaturesWrapper, StyledFeaturesItems, StyledHeaderWrapper };
