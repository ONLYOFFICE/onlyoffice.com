import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f9f9f9;
  background-image: url("/images/templates/office-for-mattermost/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: calc(50% - 115px) -374px;
  background-size: 2652px 2084px;
  overflow: hidden;

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
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 48px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 32px;
    row-gap: 24px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 48px;
  height: 48px;
  background: url("/images/templates/office-for-mattermost/hero/logo.svg")
    no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    width: 40px;
    height: 40px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 716px;

  h1 {
    margin-bottom: 16px;
  }
`;
