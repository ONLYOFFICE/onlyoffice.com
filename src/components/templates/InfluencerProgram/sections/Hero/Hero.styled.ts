import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/influencer-program/hero/hero_bg.svg");
  background-color: #eefaff;
  background-repeat: no-repeat;
  background-position: top center;
  background-size: cover;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  text-align: center;
`;

const StyledHeroText = styled(Text)`
  margin: 24px 0 32px;
`;

const StyledHeroImage = styled.img`
  width: 736px;
  height: 420px;
  margin-top: 56px;

  @media ${device.tabletS} {
    width: 552px;
    height: 315px;
    margin-top: 131px;
  }

  @media ${device.mobile} {
    width: 100%;
    height: auto;
    margin-top: 48px;
  }
`;

export { StyledHero, StyledHeroWrapper, StyledHeroText, StyledHeroImage };
