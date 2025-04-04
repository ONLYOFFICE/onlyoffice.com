import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledPortfolioWrapper = styled.div`
  width: 100%;
  background-color: #f9f9f9;
  padding: 32px 0 0 56px;
  display: grid;
  grid-template-columns: 332px auto;
  align-items: center;
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 280px auto;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    padding: 56px 32px 0 32px;
  }

  @media ${device.mobile} {
    padding: 48px 0 0;
  }
`;

const StyledPortfolioContent = styled.div`
  padding: 20px 0 32px;
  display: grid;
  gap: 24px;

  h4 {
    line-height: 133%;
    letter-spacing: -0.01em;

    @media ${device.tabletS} {
      font-size: 22px;
    }

    @media ${device.mobile} {
      font-size: 16px;
    }
  }

  p {
    line-height: 150%;

    @media ${device.mobile} {
      font-size: 13px;
    }
  }

  a {
    font-size: 14px;
    line-height: 160%;

    @media ${device.mobile} {
      font-size: 13px;
    }
  }

  @media ${device.tabletS} {
    padding: 0 16px;
    gap: 16px;
  }
`;

const StyledPortfolioImage = styled.div<{
  $imgUrl: string;
  $imgUrl2x: string;
  $imgWidth: number;
  $imgHeight: number;
}>`
  padding-bottom: ${({ $imgHeight, $imgWidth }) =>
    $imgHeight && $imgWidth
      ? (($imgHeight / $imgWidth) * 100).toFixed(4) + "%"
      : "0%"};
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  align-self: end;

  @media ${device.retina} {
    background-image: ${({ $imgUrl, $imgUrl2x }) =>
      `url(${$imgUrl2x || $imgUrl})`};
  }
`;

export { StyledPortfolioWrapper, StyledPortfolioContent, StyledPortfolioImage };
