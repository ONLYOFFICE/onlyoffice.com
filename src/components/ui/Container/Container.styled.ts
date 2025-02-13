import styled from "styled-components";
import { IContainer } from "./Container.types";
import { device } from "@src/utils/device";

const StyledContainer = styled.div<{
  $maxWidth: IContainer["maxWidth"];
  $desktopSpacing: IContainer["desktopSpacing"];
  $tabletSpacing: IContainer["tabletSpacing"];
  $mobileSpacing: IContainer["mobileSpacing"];
}>`
  padding: 0 40px;
  margin: 0 auto;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};

  @media ${device.desktop} {
    padding: 0 ${(props) => props.$desktopSpacing};
  }

  @media ${device.tablet} {
    padding: 0 ${(props) => props.$tabletSpacing};
  }

  @media ${device.mobile} {
    padding: 0 ${(props) => props.$mobileSpacing};
  }
`;

export { StyledContainer };
