import { createGlobalStyle } from "styled-components";
import { device } from "@src/utils/device";

const GlobalStyle = createGlobalStyle`
  .layout {
    background-image: url("/images/templates/main/main-bg.svg");
    background-repeat: no-repeat;
    background-position: 58% -1216px;

    @media ${device.tablet} {
      background-position: 47% -1216px;
    }

    @media ${device.tabletS} {
      background-position: 44% -1216px;
    }

    @media ${device.mobile} {
      background-position: 49% -1540px;
    }
  }
`;

export { GlobalStyle };
