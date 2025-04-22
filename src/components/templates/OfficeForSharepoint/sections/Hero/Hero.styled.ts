import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #FFFFFF;
  background-image: url("/images/templates/office-for-sharepoint/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media (max-width: 1680px) {
    background-size: 1680px 1257px;
    background-position: center top;
  }

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  row-gap: 24px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 16px;
  position: relative;
  z-index: 1;

  @media ${device.mobile} {
    padding-bottom: 0px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 72px;
  height: 72px;
  background: url("/images/templates/office-for-sharepoint/hero/logo.svg") no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
