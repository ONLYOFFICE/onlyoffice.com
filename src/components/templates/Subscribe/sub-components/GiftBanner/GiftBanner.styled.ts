import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledGiftBanner = styled.div`
  display: flex;
  align-items: center;
  border: 2px solid #ff6f3d;
  border-radius: 9px;
  padding: 40px;
  background-color: #ffffff;

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    padding: 16px;
  }
`;

const StyledGiftBannerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const StyledGiftBannerImage = styled.div`
  margin-right: 32px;
  width: 158px;
  min-width: 158px;
  height: 205px;
  background-image: url("/images/templates/subscribe/gift.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 140px;
    min-width: 140px;
    height: 181px;
  }

  @media ${device.mobile} {
    margin: 0 0 32px;
    width: 120px;
    min-width: 120px;
    height: 155px;
  }
`;

const StyledGiftBannerHeading = styled(Heading)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 30px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledGiftBannerText = styled(Text)`
  margin-bottom: 32px;

  @media ${device.tabletS} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledGiftBannerCode = styled(Text)`
  border-radius: 9px;
  padding: 16px 24px;
  background-color: #f5f5f5;

  .gift-banner-code {
    border-radius: 3px;
    padding: 4px 8px;
    font-size: 18px;
    font-weight: 700;
    line-height: 24px;
    letter-spacing: -0.02em;
    color: #ffffff;
    background-color: #ff6f3d;

    @media ${device.tabletS} {
      font-size: 16px;
      line-height: 21px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 19px;
    }
  }

  @media ${device.tabletS} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export {
  StyledGiftBanner,
  StyledGiftBannerWrapper,
  StyledGiftBannerImage,
  StyledGiftBannerHeading,
  StyledGiftBannerText,
  StyledGiftBannerCode,
};
