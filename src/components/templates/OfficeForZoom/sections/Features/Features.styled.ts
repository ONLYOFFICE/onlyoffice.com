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

const StyledFeaturesBtn = styled.div`
  a {
    margin-right: 16px;
    background: #0E71EB;
    border-radius: 30px;
    padding: 7px 24px;
    font-weight: 700;

    &:hover {
      background: linear-gradient(0deg, rgba(0, 0, 0, 0.2) 0%, rgba(0, 0, 0, 0.2) 100%), #0E71EB;
    }

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
      width: auto;
    }
  }
`;

export { StyledFeaturesWrapper, StyledFeaturesItems, StyledFeaturesBtn };
