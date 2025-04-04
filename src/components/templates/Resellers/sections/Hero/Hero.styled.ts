import styled from "styled-components";
import { device } from "@src/utils/device";
import { IHero } from "./Hero.types";
import { Section } from "@src/components/ui/Section";

const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 525px auto;
  align-items: center;

  @media ${device.desktop} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    row-gap: 64px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

const StyledHeroContent = styled.div`
  max-width: 608px;
  margin: 0 auto;
  text-align: start;

  h1 {
    margin-bottom: 24px;

    @media ${device.mobile} {
      margin-bottom: 16px;
    }
  }

  p {
    font-size: 18px;
    line-height: 150%;
    margin-bottom: 30px;

    @media ${device.tabletS} {
      margin-bottom: 40px;
    }

    @media ${device.mobile} {
      font-size: 16px;
      margin-bottom: 24px;
    }
  }

  @media ${device.tabletS} {
    text-align: center;
  }
`;

const StyledHeroImage = styled.div<{
  $imgUrl: IHero["imgUrl"];
  $imgWidth: IHero["imgWidth"];
  $imgHeight: IHero["imgHeight"];
}>`
  padding-bottom: ${({ $imgHeight, $imgWidth }) =>
    $imgHeight && $imgWidth
      ? (($imgHeight / $imgWidth) * 100).toFixed(4) + "%"
      : "0%"};
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.tabletS} {
    width: 480px;
    height: 348px;
    margin: 0 auto;
    padding-bottom: 0;
  }

  @media ${device.mobile} {
    width: 288px;
    height: 209px;
  }
`;

export { StyledHero, StyledHeroWrapper, StyledHeroContent, StyledHeroImage };
