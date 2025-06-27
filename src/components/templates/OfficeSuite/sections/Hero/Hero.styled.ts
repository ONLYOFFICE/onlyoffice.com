import { styled, css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #F9F9F9;
  background-image: url(/images/templates/office-suite/cloud-bg.svg);
  background-position: 555px 81%;
  background-repeat: no-repeat;

  @media (max-width: 2144px) {
  }

  @media ${device.tablet} {
    margin-top: -64px;
    background-position: center -477px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: -30px 150%;
  }
  
  @media ${device.mobile} {
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  justify-items: center;
  margin: 0 auto 64px;
  max-width: 1120px;
  text-align: center;

  @media ${device.tabletS} {
    margin: 0 auto 32px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;


const StyledHeroHeader = styled.div`
  h1 {    
   max-width: 998px;
  }

  p {
    padding: 40px 0;
  }
`;

const StyledHeroVideo = styled.div`
  position: relative;
  padding-bottom: 56.25%;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);

  iframe {
    position: absolute;
    top: 0;
    left: 0;
    border: none;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const StyledHeroHeaderBtns = styled.div`
  display: flex;

  button {
    margin-right: 16px;

    @media ${device.mobile} {
      margin-right: 0;
      margin-bottom: 16px;
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
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
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
  StyledHeroImg,
};
