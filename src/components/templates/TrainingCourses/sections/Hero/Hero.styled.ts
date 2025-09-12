import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-image: url(${getAssetUrl('/images/templates/training-courses/hero/cloud.svg')});
  background-size: 917px 294px;
  background-repeat: no-repeat;
  background-position: 200px 10px;
  padding: 112px 0;

  @media ${device.desktop} {
    gap: 20px;
  }

  @media ${device.tabletS} {
    flex-direction: column;
    gap: 40px;
    background-size: contain;
    background-position: 50% 300px;
    padding: 54px 0 80px;
  }
`;

const StyledHeroLeft = styled.div`
  width: 352px;

  @media ${device.tabletS} {
    width: 100%;
    text-align: center;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledHeroText = styled(Text)``;

const StyledHeroRight = styled.div`
  width: 736px;
  height: 414px;

  @media ${device.desktop} {
    width: 50vw;
    height: 33vw;
  }

  @media ${device.tabletS} {
    width: 100%;
    height: 46vw;
  }
`;

const StyledHeroVideo = styled.iframe`
  width: 100%;
  height: 100%;
`;

export {
  StyledHeroWrapper,
  StyledHeroLeft,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroRight,
  StyledHeroVideo
}