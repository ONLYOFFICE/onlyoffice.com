import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledAmbassadorWrapper = styled.div`
  display: grid;
  justify-items: center;
`;

const StyledAmbassadorText = styled(Text)`
  max-width: 928px;
  margin: 24px auto 32px;

  @media ${device.tabletS} {
    margin: 32px 0;
  }
`;

const StyledAmbassadorImage = styled.div`
  max-width: 860px;
  width: 100%;
  height: 400px;
  margin: 56px 0 160px;
  background-image: url(${getAssetUrl('/images/templates/influencer-program/ambassador/ambassador.svg')});
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;

  @media ${device.tablet} {
    max-width: 645px;
    height: 300px;
    margin-bottom: 88px;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 134px;
    margin: 40px 0 48px;
  }
`;

const StyledAmbassadorReview = styled.div`
  background-color: #ffffff;
  width: 100%;
  display: grid;
  justify-items: center;
  padding: 80px;

  @media ${device.mobile} {
    padding: 48px 16px;
  }
`;

const StyledAmbassadorReviewText = styled(Text)`
  margin: 24px 0 80px;

  @media ${device.tabletS} {
    margin: 16px 0 56px;
  }

  @media ${device.mobile} {
    margin: 24px 0 32px;
  }
`;

const StyledAmbassadorReviewLogos = styled.ul`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr;
  column-gap: 80px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
  }

  li {
    padding: 31px 0 32px;

    &:not(:first-child, :nth-of-type(2)) {
      border-top: 1px solid #efefef;
    }

    &:first-child,
    &:nth-of-type(2) {
      padding-top: 0;
    }

    &:last-child {
      padding-bottom: 0;
    }

    &:nth-of-type(2) {
      @media ${device.tablet} {
        border-top: 1px solid #efefef;
        padding-top: 31px;
      }

      @media ${device.tabletS} {
        padding-top: 16px;
      }
    }

    @media ${device.mobile} {
      padding: 16px 0 15px;

      > div {
        grid-template-columns: 116px auto 44px;
        gap: 0;
      }
    }
  }
`;

export {
  StyledAmbassadorWrapper,
  StyledAmbassadorText,
  StyledAmbassadorImage,
  StyledAmbassadorReview,
  StyledAmbassadorReviewText,
  StyledAmbassadorReviewLogos,
};
