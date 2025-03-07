import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #00679e;
  background-image: url("/images/templates/office-for-nextcloud/hero/bg.svg");
  background-repeat: no-repeat;
  background-position: top center;

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
  row-gap: 32px;
  margin: 0 auto 48px;
  max-width: 768px;
  color: #ffffff;
  text-align: center;

  @media ${device.tablet} {
    margin: 0 auto 32px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    margin: 0 auto 24px;
  }
`;

const StyledHeroLogo = styled.div`
  margin: 0 auto;
  width: 107px;
  height: 48px;
  background-image: url("/images/templates/office-for-nextcloud/hero/logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledHeroHeader = styled.div`
  h1 {
    margin-bottom: 16px;
  }

  p {
    max-width: 590px;
  }
`;

const StyledHeroHeaderBtns = styled.div`
  display: flex;

  a {
    &:not(:last-child) {
      margin-right: 10px;

      @media ${device.mobile} {
        margin-right: 0;
        margin-bottom: 16px;
      }
    }
  }

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  padding-bottom: 53.572%;
  background-image: url(${(props) => props.$imgUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}

  @media ${device.tabletS} {
    padding-bottom: 55.234%;
  }

  @media ${device.mobile} {
    padding-bottom: 53.576%;
  }
`;

export {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroImg,
};
