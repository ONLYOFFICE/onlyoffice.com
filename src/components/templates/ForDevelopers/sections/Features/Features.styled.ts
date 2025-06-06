import styled from "styled-components";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  > div {
    border-bottom: 1px solid #E2E2E2;
    padding: 112px 0;

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border: none;
      padding-bottom: 0;
    }

    &:nth-child(2n) {
      text-align: right;

      .featureList {
      padding-right: 40px;

        &::before {
          content: "";
          width: 6px;
          height: 6px;
          right: 0;
          margin-right: 20px;
          left: auto;
          position: absolute;
          background: #ff6f3d;
          transform: rotate(45deg) translateY(-50%);

        @media ${device.mobile} {
          top: 8px;
        }
      }
    }

      @media ${device.tabletS} {
        text-align: left;
      }
    }
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledFeaturesListItem = styled(Text)`
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFeaturesListDescription = styled.div`
  background-image: url("/images/templates/conversion-api/conversion/conversion.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: 70.6%;

  @media ${device.tabletS} {
    max-width: 544px;
    width: 100%;
    margin: 0 auto;
    padding-bottom: 55.815%;
  }

  @media ${device.mobile} {
    padding-bottom: 70.6%;
  }
`;

export {
  StyledFeaturesContent,
  StyledFeaturesListItem,
  StyledFeaturesListDescription
};
