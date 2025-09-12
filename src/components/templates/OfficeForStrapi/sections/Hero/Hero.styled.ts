import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";

export const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #edf4ff;
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
  width: 64px;
  height: 64px;
  background: url("/images/templates/office-for-strapi/hero/logo.svg") no-repeat
    center;
  background-size: contain;

  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

export const StyledHeroHeader = styled.div<{ $locale?: string }>`
  max-width: ${({ $locale }) => ($locale === "fr" ? "928px" : "800px")};

  h1 {
    margin-bottom: 16px;
  }
`;
