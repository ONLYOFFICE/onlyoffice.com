import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-color: #efefef;
  background-image: url(${getAssetUrl('/images/templates/document-editor-comparison/hero/bg.svg')});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center top;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  gap: 40px;
  justify-items: center;
  text-align: center;

  @media ${device.tabletS} {
    gap: 35px;
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledHeroContent = styled.div`
  display: grid;
  gap: 24px;
  max-width: 752px;
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  gap: 16px;

  @media ${device.mobile} {
    display: grid;
    width: 100%;
  }
`;

const StyledHeroVideoWrapper = styled.div`
  max-width: 650px;
  width: 100%;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  padding: 16px 14px 36px;
  transition: box-shadow 0.2s;
  display: grid;
  gap: 30px;

  &:hover {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  @media ${device.mobile} {
    gap: 24px;
  }
`;

const StyledHeroVideo = styled.iframe`
  width: 100%;
  height: 352px;
  border: none;

  @media ${device.tabletS} {
    height: 46vw;
  }
`;

const StyledHeroVideoText = styled(Text)`
  max-width: 440px;
  margin: 0 auto;
  color: #666666;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroButtonsWrapper,
  StyledHeroVideoWrapper,
  StyledHeroVideo,
  StyledHeroVideoText,
};
