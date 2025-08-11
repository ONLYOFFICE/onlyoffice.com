import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { IComparisonCard } from "./ComparisonCard.types";

const StyledComparisonCard = styled(Link)`
  display: grid;
  gap: 32px;
  width: 100%;

  &:hover div {
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
  }

  &:hover span {
    color: #ff6f3d;
  }

  &:last-child {
    grid-column: 2;

    @media ${device.tabletS} {
      grid-column: span 2;
      max-width: 329px;
      margin: 0 auto;
    }

    @media ${device.mobile} {
      grid-column: 1;
      max-width: 100%;
    }
  }

  @media ${device.tabletS} {
    max-width: 329px;
  }
`;

const StyledComparisonCardLogoWrapper = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid rgba(204, 204, 204, 0.5);
  border-radius: 5px;
  box-shadow: 0 7px 25px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.2s;
`;

const StyledComparisonCardLogo = styled.img<{
  $width: IComparisonCard["logo"]["width"];
  $height: IComparisonCard["logo"]["height"];
  $mobileWidth: IComparisonCard["logo"]["mobileWidth"];
  $mobileHeight: IComparisonCard["logo"]["mobileHeight"];
}>`
  width: ${({ $width }) => $width};
  height: ${({ $height }) => $height};

  @media ${device.mobile} {
    width: ${({ $width, $mobileWidth }) => $mobileWidth || $width};
    height: ${({ $height, $mobileHeight }) => $mobileHeight || $height};
  }
`;

const StyledComparisonCardText = styled.span`
  text-align: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 19px;
  transition: color 0.2s;
`;

export {
  StyledComparisonCard,
  StyledComparisonCardLogoWrapper,
  StyledComparisonCardLogo,
  StyledComparisonCardText,
};
