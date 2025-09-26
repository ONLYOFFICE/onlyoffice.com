import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { getAssetUrl } from "@src/utils/getAssetUrl";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl("/images/templates/mcp-server/background.svg")});
  background-position: calc(50% + 220px) 0;
  background-repeat: no-repeat;
  background-size: auto 748px;

  @media ${device.tablet} {
    margin-top: -48px;
  }

  @media ${device.tabletS} {
    background-position: 55% -40%;
  }

  @media ${device.mobile} {
    background-position: 40% 0;
    background-size: cover;
  }
`;

const StyledHeroContent = styled(Container)`
  margin: 0 auto;
  display: grid;
  grid-template-columns: 480px auto;
  gap: 28px;
  text-align: left;
  align-items: center;
  justify-content: start;

  @media ${device.tablet} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 100%;
  }
`;

const StyledHeroImage = styled.div<{ $src: string;}>`
  aspect-ratio: 0.99;
  background-image: url(${props => props.$src});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 548px;

  @media ${device.tablet} {
    margin: 0 auto;
    min-width: 422px;
  }

  @media ${device.mobile} {
    min-width: 100%;
  }
`;

const StyledLeftHeroArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  gap: 24px;
  text-align: left;
  width: 100%;

  @media ${device.mobile} {
    text-align: center;
  }
`;

const StyledButtonsArea = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;
  padding-top: 24px;

  @media ${device.tablet} {
    gap: 10px;
    justify-content: center;
    width: 100%;
  }

  @media ${device.mobile} {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

`;

export {
  StyledHeroSection,
  StyledButtonsArea,
  StyledHeroContent,
  StyledHeroImage,
  StyledLeftHeroArea,
};