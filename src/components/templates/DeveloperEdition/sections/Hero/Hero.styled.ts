import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSection = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/developer-edition/hero/bg.svg')});
  background-color: #333333;
  background-position: 50% 0;
  background-repeat: no-repeat;
  background-size: contain;
  margin-top: -72px;
  position: relative;
  text-align: center;
  
  @media (max-width: 1680px) {
    background-size: auto;
  }

  @media ${device.tablet} {
    margin-top: -48px;
  }
`;

const StyledDescription = styled(Text)`
  font-size: 22px;
  line-height: 1.5em;
  color: #ffffff;
  margin: 40px auto;

  @media ${device.tabletS} {
    font-size: 20px;
    margin: 24px auto 40px;
  }
  
  @media ${device.mobile} {
    font-size: 16px;
  }
`;

const ButtonsContainer = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-bottom: 0;

  @media ${device.mobile} {
    flex-direction: column;
    align-items: center;
    margin: 24px 20px;
  }
`;


const StyledHeroVideo = styled.div`
  margin: 64px auto 0;
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tabletS} {
    margin: 56px auto 0;
  }
`;

export { StyledHeroVideo, ButtonsContainer, StyledSection, StyledDescription }; 