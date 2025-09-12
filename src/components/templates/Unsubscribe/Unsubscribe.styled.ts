import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledUnsubscribe = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -48px;
  }
`;

const StyledUnsubscribeWrapper = styled.div`
  margin-bottom: 56px;
  text-align: center;
`;

const StyledUnsubscribeBody = styled.div`
  display: grid;
  row-gap: 24px;
  margin-bottom: 32px;
`;

const StyledUnsubscribeImage = styled.div<{
  $unsubscribe?: boolean;
  $resubscribe?: boolean;
}>`
  margin: 0 auto;
  width: 640px;
  height: 353px;
  background-image: ${(props) =>
    props.$unsubscribe
      ? `url(${getAssetUrl('/images/templates/unsubscribe/mascot-unsub.svg')})`
      : `url(${getAssetUrl('/images/templates/unsubscribe/mascot-sub.svg')})`};
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    width: 480px;
    height: 270px;
  }

  @media ${device.mobile} {
    width: 280px;
    height: 156px;
  }
`;

const StyledUnsubscribeUpdates = styled.div`
  border: 1px solid #e6e6e6;
  border-radius: 5px;
  padding: 72px 128px;

  @media ${device.tablet} {
    padding: 72px 56px;
  }

  @media ${device.tabletS} {
    padding: 72px 32px;
  }

  @media ${device.mobile} {
    padding: 72px 16px;
  }
`;

const StyledUnsubscribeUpdatesHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledUnsubscribeUpdatesText = styled(Text)`
  margin-bottom: 32px;
`;

const StyledUnsubscribeSuccessLogo = styled.div`
  margin: 38px auto 0;
  width: 40px;
  height: 40px;
  background-image: url(${getAssetUrl('/images/templates/unsubscribe/success-logo.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.mobile} {
    margin: 12px auto 0;
  }
`;

const StyledUnsubscribeBanner = styled.div`
  border: 1px solid #e6e6e6;
  padding: 25px 80px;
  text-align: center;

  @media ${device.mobile} {
    padding: 25px;
  }
`;

const StyledUnsubscribeBannerBtn = styled.button`
  border: none;
  padding: 0;
  color: #ff6f3d;
  background-color: transparent;
  text-decoration: underline;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }
`;

export {
  StyledUnsubscribe,
  StyledUnsubscribeWrapper,
  StyledUnsubscribeBody,
  StyledUnsubscribeImage,
  StyledUnsubscribeUpdates,
  StyledUnsubscribeUpdatesHeading,
  StyledUnsubscribeUpdatesText,
  StyledUnsubscribeSuccessLogo,
  StyledUnsubscribeBanner,
  StyledUnsubscribeBannerBtn,
};
