import { styled, css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background: url(/images/templates/office-for-trello/hero/bg.svg) no-repeat,
    linear-gradient(to left, #00b8d9, #0065ff);
  background-position: 0 -215px, center;
  background-size: 2213px 1579px, cover;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    background-position: calc(50% + 137px) -150px, center;
    background-size: 1495px 1195px, cover;
    margin-top: -48px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 30px) -80px, center;
    background-size: 1007px 805px, cover;
  }
`;

const StyledHeroWrapper = styled.div`
  color: #ffffff;
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 64px;
  max-width: 928px;
  text-align: center;

  @media ${device.tabletS} {
    margin: 0 auto 32px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 48px;
  height: 48px;
  background-image: url("/images/templates/office-for-trello/hero/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
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
