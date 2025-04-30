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
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;

const StyledHeaderWrapper = styled.div`
  display: grid;
  gap: 24px;
  max-width: 750px;
`;

export { StyledFeaturesWrapper, StyledFeaturesItems, StyledHeaderWrapper };
