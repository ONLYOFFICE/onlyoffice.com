import { styled, css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #1868db;
  background-image: url("/images/templates/office-for-jira/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: center -431px;

  @media (max-width: 1920px) {
    background-size: 2108px auto;
    background-position: calc(50% + 127px) -431px;
  }

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: 50% -306px;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% + 190px) -342px;
  }
`;

const StyledHeroWrapper = styled.div`
  color: #ffffff;
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 928px;
  text-align: center;

  @media ${device.mobile} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 80px;
  height: 80px;
  background-image: url("/images/templates/office-for-jira/hero/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    width: 56px;
    height: 56px;
  }
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  border-radius: 5px;
  padding-bottom: 53.572%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;
  box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroImg,
};
