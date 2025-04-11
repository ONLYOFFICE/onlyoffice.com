import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledPortfolio = styled.div`
  background-color: #f9f9f9;
  padding: 32px 0 0 56px;
  display: grid;
  grid-template-columns: 332px auto;
  align-items: center;
  gap: 32px;

  @media ${device.tablet} {
    grid-template-columns: 280px auto;
    padding: 24px 0 0 48px;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
    padding: 0;
  }
`;

const StyledPortfolioContent = styled.div`
  display: grid;
  gap: 24px;
  padding: 20px 0 32px;

  @media ${device.tabletS} {
    padding: 56px 32px 0;
  }

  @media ${device.mobile} {
    gap: 16px;
    padding: 48px 16px 0;
  }
`;

const StyledPortfolioHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const StyledPortfolioText = styled(Text)`
  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledPortfolioLink = styled(Link)`
  font-size: 14px;
  line-height: 22px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
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

export {
  StyledPortfolio,
  StyledPortfolioContent,
  StyledPortfolioHeading,
  StyledPortfolioText,
  StyledPortfolioLink,
  StyledPortfolioImage,
};
