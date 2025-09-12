import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/academy/hero/clouds.svg')});
  background-repeat: no-repeat;
  background-size: 1051px auto;
  background-position: calc(50% + 286px) 101px;
  margin-top: -72px;

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const HeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px 1fr;
  justify-content: space-between;
  align-items: center;
  gap: 32px;

  @media ${device.desktop} {
    grid-template-columns: 30vw 1fr;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    align-items: flex-start;
    margin: 0 auto;
  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 24px;

  > button {
    margin-top: 8px;
  }
`;

const VideoWrapper = styled.div`
  position: relative;
  text-align: center;

  iframe {
    aspect-ratio: 1.5422;
    margin: 0 auto;
    position: relative;
    width: 640px;

    @media ${device.desktop} {
      width: 100%;
    }
  }
`;

export { StyledHero, HeroWrapper, Content, VideoWrapper };
