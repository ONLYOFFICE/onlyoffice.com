import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/collaboration-rooms/hero/bg.svg");
  background-position: calc(50% - 70px) -564px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 43% -564px;
  }

  @media ${device.mobile} {
    background-position: calc(50% - 266px) -564px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: flex;
  align-items: center;

  @media ${device.tabletS} {
    flex-direction: column;
    gap: 56px;
    text-align: center;
  }

  @media ${device.mobile} {
    gap: 48px;
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 448px;
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  .header-button {
    margin-top: 12px;
  }

  @media ${device.tabletS} {
    max-width: 100%;
    gap: 32px;
    align-items: center;

    .header-list {
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
    }

    .header-button {
      margin: 0;
    }
  }

  @media ${device.mobile} {
    gap: 16px;
    align-items: start;

    .header-list {
      grid-template-columns: 1fr;
      gap: 8px 0;
    }
  }
`;

const StyledHeroImage = styled.div<{
  $imgUrl: string;
  $imgUrl2x: string;
}>`
  height: 730px;
  width: 674px;
  background-size: 672px 730px;
  background-repeat: no-repeat;
  background-position: 100% 0;
  background-image: url(${(props) => props.$imgUrl});

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}

  @media ${device.desktop} {
    background-size: contain;
    background-position-y: 50%;
  }

  @media ${device.tablet} {
    height: 545px;
  }

  @media ${device.tabletS} {
    height: 420px;
    width: 100%;
    background-position: 50%;
  }

  @media ${device.mobile} {
    height: 282px;
    background-position: 50%;
  }
`;

export { StyledHero, StyledHeroWrapper, StyledHeroContent, StyledHeroImage };
