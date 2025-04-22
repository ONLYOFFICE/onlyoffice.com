import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #F9F9F9;
  background-image: url("/images/templates/office-for-mattermost/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: calc(50% - 115px) -374px;
  background-size: 2652px 2084px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: calc(50% - 130px) -394px;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 94px) -183px;
    background-size: 1353px 1063px;
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
  padding-bottom: 80px;

  @media ${device.tabletS} {
    padding-bottom: 12px;
  }
  @media ${device.mobile} {
    padding-bottom: 16px;
    row-gap: 24px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 48px;
  height: 48px;
  background: url("/images/templates/office-for-mattermost/hero/logo.svg") no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
