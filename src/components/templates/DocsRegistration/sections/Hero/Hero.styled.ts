import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  .layout {
    display: flex;
    flex-direction: column;
    min-height: 100%;
  }

  main {
    display: flex;
    flex-direction: column;
    flex: 1 1 auto;
  }
`;

const StyledHero = styled.section`
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  overflow: hidden;
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  flex: 1 1 auto;

  @media ${device.tabletS} {
    display: block;
    grid-template-columns: initial;
  }
`;

const StyledHeroItem = styled.div<{ $info?: boolean; $auth?: boolean }>`
  position: relative;
  display: flex;
  flex-direction: column;

  ${(props) =>
    props.$info
      ? css`
          padding: 40px 88px 64px 40px;
          background-color: #d9f4ff;

          @media ${device.tablet} {
            padding: 40px 32px 88px 48px;
          }

          @media ${device.tabletS} {
            padding: 40px 40px 64px;
          }

          @media ${device.mobile} {
            padding: 18px 16px 48px;
          }
        `
      : props.$auth
        ? css`
            padding: 40px 40px 88px 88px;
            background-color: #ffffff;
            box-shadow: 0 7px 25px 0px rgba(85, 85, 85, 0.15);

            @media ${device.tablet} {
              padding: 40px 48px 88px 32px;
            }

            @media ${device.tabletS} {
              padding: 64px 40px 80px;
            }

            @media ${device.mobile} {
              padding: 48px 16px 48px;
            }
          `
        : null}
`;

export { GlobalStyle, StyledHero, StyledHeroWrapper, StyledHeroItem };
