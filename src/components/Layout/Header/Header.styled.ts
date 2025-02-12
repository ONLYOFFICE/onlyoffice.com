import styled, { css } from "styled-components";
import { device } from "@src/utils/device";

const StyledHeader = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0px;
  left: 0;
  border-bottom: 1px solid transparent;
  width: 100%;
  height: 72px;
  z-index: 100;

  ${(props) =>
    props.$scrolled &&
    css`
      border-color: #cccccc;
      background-color: #ffffff;
    `}

  @media ${device.tablet} {
    height: 64px;
  }

  @media ${device.tabletS} {
    height: 48px;
  }
`;

export { StyledHeader };
