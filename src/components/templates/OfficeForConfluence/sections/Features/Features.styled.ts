import styled from "styled-components";
import { device } from "@src/utils/device";
import { StyledFeatureItem } from "@src/components/widgets/FeatureItem";

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

  > ${StyledFeatureItem} {
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

export { StyledFeaturesWrapper, StyledFeaturesItems };
