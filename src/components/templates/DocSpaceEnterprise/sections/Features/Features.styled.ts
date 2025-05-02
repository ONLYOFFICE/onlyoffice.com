import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

const StyledFeaturesHeading = styled(Heading)`
  letter-spacing: -0.02em;
  line-height: 1.33em;
  max-width: 778px;
  margin: 0 auto;

  @media ${device.tabletS} {
    letter-spacing: -0.01em;
  }
`;

const StyledFeaturesText = styled(Text)`
  line-height: 160%;
  padding: 24px 0 0;
  max-width: 778px;
  margin: 0 auto;

  @media ${device.mobile} {
    padding: 16px 0 0;
  }
`;

const StyledFeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1120px;
  margin: 0 auto;
  row-gap: 48px;
  column-gap: 32px;
  padding: 48px 0;

  @media ${device.mobile} {
    padding: 24px 0;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }
`;

const StyledFeaturesItem = styled(FeatureItem)`
  max-width: 352px;

  @media ${device.tabletS} {
    &:nth-child(n + 3) {
      max-width: 328px;

      @media ${device.mobile} {
        & {
          max-width: 288px;
        }
      }
    }
  }

  @media screen and (max-width: 1070px) {
    &:nth-child(-n + 3) {
      max-width: 208px;

      @media ${device.mobile} {
        & {
          max-width: 288px;
        }
      }
    }
  }

  p {
    width: 100%;
    font-size: 18px;
    color: #333333;
    line-height: 150%;

    @media ${device.mobile} {
      font-size: 16px;
    }
  }
`;

const StyledFeatureLink = styled.div`
  text-align: center;

  @media ${device.mobile} {
    font-size: 14px;
  }

  a {
    font-size: 16px;
    line-height: 150%;

    @media ${device.mobile} {
      font-size: 14px;
    }
  }
`;

export {
  StyledFeaturesHeading,
  StyledFeaturesText,
  StyledFeaturesList,
  StyledFeaturesItem,
  StyledFeatureLink,
};
