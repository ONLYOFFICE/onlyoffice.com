import styled, { css } from "styled-components";
import { IRoomsHero } from "./RoomsHero.types";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledRoomsHero = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/modules/rooms/rooms-hero/bg.svg')});
  background-position: 37% -630px;
  background-repeat: no-repeat;
  background-color: #f9f9f9;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    background-position: 26% -564px;
  }

  @media ${device.mobile} {
    background-position: 24% -690px;
  }
`;

const StyledRoomsHeroWrapper = styled.div`
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

const StyledRoomsHeroContent = styled.div`
  display: flex;
  align-items: start;
  flex-direction: column;
  gap: 24px;

  a {
    margin-top: 12px;

    @media ${device.tabletS} {
      margin: 0;
    }
  }

  @media ${device.tabletS} {
    align-items: center;
  }

  @media ${device.mobile} {
    align-items: start;
    gap: 16px;
  }
`;

const StyledRoomsHeroList = styled.ul`
  display: grid;
  align-items: start;
  row-gap: 16px;
  font-size: 16px;
  line-height: 24px;
  color: #444444;
  text-align: initial;
  width: 100%;

  @media ${device.tabletS} {
    grid-template-columns: 1fr 1fr;
    column-gap: 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 8px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledRoomsHeroListItem = styled.li`
  position: relative;
  padding-left: 32px;

  &::before {
    content: "";
    position: absolute;
    top: 9px;
    left: 8px;
    width: 6px;
    height: 6px;
    background: #ff6f3d;
    transform: rotate(45deg);

    @media ${device.mobile} {
      top: 8px;
    }
  }
`;

const StyledRoomsHeroImage = styled.div<{
  $imgUrl: IRoomsHero["image"]["url"];
  $imgUrl2x: IRoomsHero["image"]["url2x"];
}>`
  padding-bottom: 108.632%;
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

  @media ${device.tabletS} {
    margin: 0 auto;
    padding-bottom: 0;
    width: 420px;
    height: 456px;
  }

  @media ${device.mobile} {
    width: 262px;
    height: 282px;
  }
`;

export {
  StyledRoomsHero,
  StyledRoomsHeroWrapper,
  StyledRoomsHeroContent,
  StyledRoomsHeroImage,
  StyledRoomsHeroList,
  StyledRoomsHeroListItem,
};
