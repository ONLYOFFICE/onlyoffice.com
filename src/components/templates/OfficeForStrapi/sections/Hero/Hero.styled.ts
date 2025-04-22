import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #EDF4FF;
  background-image: url("/images/templates/office-for-strapi/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: calc(50% - 153px) -245px;
  background-size: 2644px 1352px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 253px) -315px;
  }
`;

export const StyledHeroWrapper = styled.div`
  display: flex;
  row-gap: 32px;
  flex-direction: column;
  align-items: center;
  text-align: center;
  padding-bottom: 62px;
  position: relative;
  z-index: 1;
  @media ${device.tabletS} {
    padding-bottom: 7px;
  }

  @media ${device.mobile} {
    row-gap: 21px;
    padding-bottom: 0px;
  }
`;

export const StyledHeroLogo = styled.div`
  width: 64px;
  height: 64px;
  background: url("/images/templates/office-for-strapi/hero/logo.svg") no-repeat center;
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
