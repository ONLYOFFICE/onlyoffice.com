import styled, { css, createGlobalStyle } from "styled-components";
import { device } from "@src/utils/device";
import Link from "next/link";

const GlobalStyle = createGlobalStyle<{ $isOpenMenuMobile?: boolean }>`
  .oo-advent-announce,
  #hamburger-button,
  #header-logo,
  #language-selector,
  #phone-menu,
  #search-input {
    ${(props) =>
      props.$isOpenMenuMobile &&
      css`
        @media ${device.tablet} {
          transform: translate3d(429px, 0, 0);
          transition: transform 0.2s cubic-bezier(0.16, 0.68, 0.43, 0.99);
        }

        @media ${device.mobile} {
          transform: translate3d(calc(-64px + 100vw), 0, 0);
        }

        @media ${device.mobileS} {
          transform: translate3d(calc(-32px + 100vw), 0, 0);
        }
      `}
  }
`;

const StyledHeader = styled.div`
  display: flex;
  align-items: center;

  .oo-hm {
    margin-right: 16px;
  }

  .oo-hm-item-box {
    box-sizing: content-box;
  }
`;

const StyledHeaderWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const StyledHumburgerButton = styled.button`
  display: none;
  border: none;
  margin-right: 24px;
  width: 20px;
  height: 14px;
  background-image: url("/images/icons/humburger.svg");
  background-color: transparent;

  @media ${device.tablet} {
    display: inline-flex;
  }
`;

const StyledHeaderLogo = styled(Link)`
  display: inline-flex;
  margin-right: 8px;

  @media ${device.desktopL} {
    width: 30px;
    overflow: hidden;
  }

  @media ${device.tablet} {
    width: auto;
  }
`;

const StyledHeaderBox = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  align-items: center;
  column-gap: 16px;

  @media ${device.tablet} {
    grid-template-columns: repeat(2, auto);
    margin-left: auto;
  }
`;

export {
  GlobalStyle,
  StyledHeader,
  StyledHeaderWrapper,
  StyledHeaderLogo,
  StyledHumburgerButton,
  StyledHeaderBox,
};
