import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledGratitudionBanner = styled.div`
  display: flex;
  align-items: center;
  border-radius: 9px;
  padding: 40px;
  background-color: #ffffff;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);

  @media ${device.mobile} {
    flex-direction: column;
    padding: 16px;
  }
`;

const StyledGratitudionBannerImage = styled.div`
  margin-right: 32px;
  width: 160px;
  min-width: 160px;
  height: 198px;
  background-image: url("/images/templates/subscribe/gratitudion.svg");
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tablet} {
    width: 140px;
    min-width: 140px;
    height: 173px;
  }

  @media ${device.mobile} {
    margin: 0 0 32px;
  }
`;

const StyledGratitudionBannerHeading = styled(Heading)`
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

const StyledGratitudionBannerText = styled(Text)`
  margin-bottom: 40px;
  max-width: 512px;

  @media ${device.tabletS} {
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledGratitudionBannerUnsubscribe = styled(Text)`
  border-radius: 5px;
  padding: 16px;
  background-color: #f9f9f9;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledGratitudionBanner,
  StyledGratitudionBannerImage,
  StyledGratitudionBannerHeading,
  StyledGratitudionBannerText,
  StyledGratitudionBannerUnsubscribe,
};
