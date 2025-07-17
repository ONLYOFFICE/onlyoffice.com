import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledHero = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledSubtitle = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  padding: 32px 0;
  margin: 0 auto;
  width: 60%;

  @media ${device.tabletS} {
    width: 100%;
  }
`;

const StyledHeroVideo = styled.div`
  margin: 80px auto 0;
  position: relative;
  padding-bottom: 56.25%;

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  @media ${device.tabletS} {
    margin: 64px auto 0;
  }
`;

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledAwards = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 96px;
  padding: 124px 0 0;

  @media ${device.tablet} {
    justify-content: space-evenly;
    gap: unset;
  }

  @media ${device.mobile} {
    padding: 64px 0 0;
  }
`;

const StyledAward = styled(Link)<{ $positionX?: string; $width: number, $imgUrl?: string }>`
  background-image: url(${(props) => props.$imgUrl ? props.$imgUrl : "/images/templates/desktop/awards/awards.png"});
  background-repeat: no-repeat;
  background-position-y: center;
  background-position-x: ${(props) => props.$positionX ? props.$positionX : "0"};
  height: 150px;
  width: ${(props) => props.$width}px;

  @media ${device.tablet} {
    transform: scale(0.8);
  }
`;

export {
  StyledContainer,
  StyledHeroVideo,
  StyledSubtitle,
  StyledAwards,
  StyledAward,
  StyledHero,
};
