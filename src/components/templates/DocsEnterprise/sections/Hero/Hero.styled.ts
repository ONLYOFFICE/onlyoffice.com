import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";

const StyledDocsEnterpriseHero = styled(Section)`
  background-color: #f5f5f5;
  background-image: url(/images/templates/docs-enterprise/hero/city-bg-header.svg);
  background-position: 50% 100%;
  background-repeat: no-repeat;
  margin-top: -72px;
  overflow-x: hidden;

  @media ${device.tabletS} {
    background-position: 50% 100%;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: 0% 100%;
    background-size: 450px auto;
  }
`;

const StyledDocsEnterpriseHeroContent = styled(Container)`
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

const StyledDocsEnterpriseHeroImage = styled.div<{ $src: string; $src2x: string }>`
  aspect-ratio: 1.1143;
  background-image: url(${props => props.$src});
  background-position: 100%;
  background-repeat: no-repeat;
  background-size: contain;
  min-width: 780px;

  @media ${device.retina} {
    background-image: url(${props => props.$src2x});
  }

  @media ${device.tablet} {
    margin: 0 auto;
    min-width: 522px;
  }

  @media ${device.mobile} {
    min-width: 100%;
  }
`;

const StyledLeftHeroArea = styled.div`
  text-align: left;
  width: 100%;

  @media ${device.tablet} {
    text-align: center;
  }
`;

const StyledSubheaderText = styled(Text)`
  padding: 32px 0 40px;
  font-size: 22px;
  line-height: 1.5em;
  
  @media ${device.tabletS} {
    font-size: 18px;
    padding: 24px 0 48px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding: 16px 0;
  }

`;

const StyledButtonsArea = styled.div`
  display: flex;
  justify-content: start;
  gap: 16px;

  @media ${device.tablet} {
    gap: 10px;
    justify-content: center;
  }

  @media ${device.mobile} {
   
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

`;

export {
  StyledDocsEnterpriseHero,
  StyledDocsEnterpriseHeroContent,
  StyledDocsEnterpriseHeroImage,
  StyledLeftHeroArea,
  StyledSubheaderText,
  StyledButtonsArea,
};
