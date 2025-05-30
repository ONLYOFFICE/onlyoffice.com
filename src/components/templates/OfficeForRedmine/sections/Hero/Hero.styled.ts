import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f4f8fd;
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
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: 40px;
  margin-bottom: 62px;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
    margin-bottom: 53px;
  }

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

export const StyledHeroLogo = styled.div`
  margin-bottom: 6px;
  width: 70px;
  height: 48px;
  background: url("/images/templates/office-for-redmine/hero/logo.svg")
    no-repeat center;
  background-size: contain;

  @media ${device.tabletS} {
    margin-bottom: 0;
    width: 48px;
    height: 32px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
