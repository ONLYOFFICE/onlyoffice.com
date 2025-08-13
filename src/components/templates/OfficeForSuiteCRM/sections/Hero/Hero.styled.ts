import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #efefef;
  background-image: url("/images/templates/office-for-suitecrm/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: cover;

  @media (max-width: 1680px) {
    background-size: 1680px 1360px;
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
  position: relative;
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 48px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 32px;
    row-gap: 21px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 264px;
  height: 60px;
  background: url("/images/templates/office-for-suitecrm/hero/logo.svg")
    no-repeat center;
  background-size: contain;

  @media ${device.mobile} {
    width: 140px;
    height: 32px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 880px;

  h1 {
    margin-bottom: 16px;
  }
`;
