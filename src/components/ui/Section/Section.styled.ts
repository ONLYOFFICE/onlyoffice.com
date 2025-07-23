import styled from "styled-components";
import { ISection } from "./Section.types";
import { device } from "@src/utils/device";

const StyledSection = styled.section<{
  $background: ISection["background"];
  $desktopSpacing: ISection["desktopSpacing"];
  $tabletSpacing: ISection["tabletSpacing"];
  $tabletSmallSpacing: ISection["tabletSmallSpacing"];
  $mobileSpacing: ISection["mobileSpacing"];
  $borderTop?: boolean;
}>`
  padding: ${(props) =>
    props.$desktopSpacing &&
    (props.$desktopSpacing[0] === props.$desktopSpacing[1]
      ? `${props.$desktopSpacing[0]} 0`
      : `${props.$desktopSpacing[0]} 0 ${props.$desktopSpacing[1]}`)};
  background: ${(props) => props.$background};

  @media ${device.tablet} {
    padding: ${(props) =>
      props.$tabletSpacing &&
      (props.$tabletSpacing[0] === props.$tabletSpacing[1]
        ? `${props.$tabletSpacing[0]} 0`
        : `${props.$tabletSpacing[0]} 0 ${props.$tabletSpacing[1]}`)};
  }

  @media ${device.tabletS} {
    padding: ${(props) =>
      props.$tabletSmallSpacing &&
      (props.$tabletSmallSpacing[0] === props.$tabletSmallSpacing[1]
        ? `${props.$tabletSmallSpacing[0]} 0`
        : `${props.$tabletSmallSpacing[0]} 0 ${props.$tabletSmallSpacing[1]}`)};
  }

  @media ${device.mobile} {
    padding: ${(props) =>
      props.$mobileSpacing &&
      (props.$mobileSpacing[0] === props.$mobileSpacing[1]
        ? `${props.$mobileSpacing[0]} 0`
        : `${props.$mobileSpacing[0]} 0 ${props.$mobileSpacing[1]}`)};
  }

  
  ${({ $borderTop }) =>
    $borderTop &&
    `
      border-top: 1px solid #E2E2E2;
    `}
`;

export { StyledSection };
