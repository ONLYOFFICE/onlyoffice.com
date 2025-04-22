import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #F5F5F5;
  background-image: url("/images/templates/office-for-nuxeo/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: top;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: calc(50% - 128px) top;
  }
    
  @media ${device.mobile} {
    background-position: calc(50% - 158px) top;
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  row-gap: 32px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  z-index: 1;
`;

export const StyledHeroLogo = styled.div`
  width: 162px;
  height: 30px;
  background: url("/images/templates/office-for-nuxeo/hero/logo.svg") no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    width: 108px;
    height: 20px;
    margin-bottom: -16px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
