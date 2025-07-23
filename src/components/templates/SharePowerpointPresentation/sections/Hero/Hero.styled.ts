import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #9B4E4D;

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
  margin: 0 auto;
  max-width: 928px;
  color: #ffffff;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyledHeroImg = styled.div<{ $imgUrl: string; $imgUrl2x: string }>`
  margin: 0 auto;
  padding-bottom: 67.86%;
  max-width: 1120px;
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
`;
const StyledHeroButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;

  @media ${device.mobile} {
    flex-direction: column;
    width: 100%;

    a {
      font-size: 12px;
    }
  }
`;
export { StyledHero, StyledHeroWrapper, StyledHeroImg, StyledHeroButtons };
