import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #F4F8FD;
  background-image: url("/images/templates/office-for-redmine/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: calc(50% - 96px) -380px;
  background-size: 2657px 2132px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: calc(50% - 130px) -360px;
    background-size: 2652px 2084px;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 93px) -505px;
    background-size: 2209px 2132px;
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  row-gap: 40px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  padding-bottom: 12px;
  z-index: 1;

  @media ${device.tabletS} {
    row-gap: 24px;
    padding-bottom: 5px;
  }

  @media ${device.mobile} {
    padding-bottom: 0px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 48px;
  height: 48px;
  background: url("/images/templates/office-for-redmine/hero/logo.svg") no-repeat center;
  background-size: contain;
  margin-bottom: 6px;

  @media ${device.tablet} {
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
