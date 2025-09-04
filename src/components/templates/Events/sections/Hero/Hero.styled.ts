import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  display: flex;
  align-items: center;
  min-height: 728px;
  background-image: url("/images/templates/events/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: center 72px;
  background-size: 1040px 628px;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
    min-height: initial;
    background-position: center 85%;
    background-size: contain;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 450px auto;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: initial;
    text-align: center;
  }
`;

const StyledHeroImg = styled.div`
  margin-top: 64px;
  padding-bottom: 53.934%;
  background-image: url("/images/templates/events/hero/hero.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tablet} {
    margin: 123px auto 0;
    padding-bottom: 36.628%;
    width: 66.667vw;
  }

  @media ${device.mobile} {
    margin-top: 40px;
    padding-bottom: 36.112%;
    width: 65.625vw;
  }
`;

export { StyledHero, StyledHeroWrapper, StyledHeroImg };
