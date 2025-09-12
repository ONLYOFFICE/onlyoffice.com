import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroImage = styled.div`
  width: 640px;
  height: 354px;
  margin: 0 auto 32px;
  background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/hero/hero_image.svg')});
  background-repeat: no-repeat;
  background-size: contain;

  @media screen and (max-width: 719px) {
    width: 288px;
    height: 158px;
    margin-bottom: 16px;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 736px;
  margin: 0 auto 112px;
  display: grid;
  gap: 24px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 72px;
  }

  @media ${device.mobile} {
    gap: 16px;
    margin-bottom: 48px;
  }
`;

const StyledHeroFeaturesWrapper = styled.div`
  display: grid;
  gap: 32px;
  justify-items: center;
  text-align: center;
`;

const StyledHeroFeaturesTitle = styled(Heading)`
  max-width: 736px;
`;

const StyledHeroFeatures = styled.div`
  display: flex;
  gap: 24px 32px;
  flex-wrap: wrap;
  justify-content: center;
`;

const StyledHeroFeatureItem = styled(Text)<{ iconPositionX: string }>`
  position: relative;
  max-width: 352px;
  padding-top: 80px;

  @media ${device.tabletS} {
    max-width: 328px;
  }

  @media ${device.mobile} {
    max-width: 288px;
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 64px;
    height: 64px;
    background-image: url(${getAssetUrl('/images/templates/installation-success-desktop/hero/icons.svg')});
    background-repeat: no-repeat;
    background-position: ${(props) => props.iconPositionX} center;
  }
`;

export {
  StyledHeroContent,
  StyledHeroImage,
  StyledHeroFeaturesWrapper,
  StyledHeroFeaturesTitle,
  StyledHeroFeatures,
  StyledHeroFeatureItem,
};
