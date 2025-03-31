import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #F4F8FD;
  background-image: url("/images/templates/office-for-redmine/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: top;
  background-size: 2444px 1260px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: calc(50% - 46px) -162px;
    background-size: 1450px auto;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% + 84px) -86px;
    background-size: 907px auto;
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
  width: 48px;
  height: 48px;
  background: url("/images/templates/office-for-redmine/hero/logo.svg") no-repeat center;
  background-size: contain;

  @media ${device.tablet} {
    width: 40px;
    height: 40px;
    margin-bottom: 20px;
  }
`;

export const StyledHeroHeader = styled.div`
  max-width: 800px;

  h1 {
    margin-bottom: 16px;
  }
`;
