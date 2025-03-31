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
    @media ${device.desktop} {
      display: grid;
      grid-template-columns: 64px auto;
      gap: 24px;
      text-align: left;
      width: calc(50% - 24px);
      max-width: 100%;

      > div {
        margin-bottom: 0;
      }

      > p {
        font-size: 14px;
      }
    }

    @media ${device.mobile} {
      display: flex;
      gap: 8px;
      text-align: center;
      width: 100%;
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
