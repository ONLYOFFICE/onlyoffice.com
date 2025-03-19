import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IRoomsHero } from "./RoomsHero.types";

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 448px auto;
  align-items: center;

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 56px;
    text-align: center;
  }

  @media ${device.mobile} {
    row-gap: 48px;
    text-align: start;
  }
`;

const StyledHeroContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  a {
    margin-top: 12px;
  }

  @media ${device.tabletS} {
    max-width: 100%;
    gap: 32px;
    align-items: center;

    ul {
      grid-template-columns: 1fr 1fr;
      column-gap: 32px;
    }

    a {
      margin: 0;
    }
  }

  @media ${device.mobile} {
    gap: 16px;
    align-items: start;

    ul {
      grid-template-columns: 1fr;
      gap: 8px 0;
    }
  }
`;

const StyledHeroImage = styled.div<{
  $imgUrl: IRoomsHero["imgUrl"];
  $imgUrl2x: IRoomsHero["imgUrl2x"];
  $imgWidht: IRoomsHero["imgWidth"];
  $imgHeight: IRoomsHero["imgHeight"];
}>`
  padding-bottom: ${({ $imgHeight, $imgWidht }) =>
    $imgHeight && $imgWidht
      ? (($imgHeight / $imgWidht) * 100).toFixed(4) + "%"
      : "0%"};
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: cover;

  ${(props) =>
    props.$imgUrl2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$imgUrl2x});
      }
    `}
`;

export { StyledHeroWrapper, StyledHeroContent, StyledHeroImage };
