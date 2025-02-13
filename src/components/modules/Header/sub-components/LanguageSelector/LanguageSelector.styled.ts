import styled, { css, keyframes } from "styled-components";
import { device } from "@src/utils/device";

const menuLineLeft = keyframes`
  0% {
    width: 0;
    left: 50%;
  }

  100% {
    width: 50%;
    left: 0;
  }
`;

const menuLineRight = keyframes`
  0% {
    width: 0;
  }

  100% {
    width: 50%;
  }
`;

const StyledLanguageSelector = styled.div`
  position: relative;
  display: inline-flex;
  width: 37px;
`;

const StyledLanguageSelectorButton = styled.button<{ $isOpen: boolean }>`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border: none;
  padding: 24px 0;
  width: 100%;
  background-color: transparent;
  cursor: pointer;

  .flag-icon {
    circle,
    path {
      transition: stroke 0.2s, fill 0.2s;
    }
  }

  .arrow-down-icon {
    path {
      transition: fill 0.2s;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      .flag-icon {
        circle {
          stroke: #ff6f3d;
        }

        path {
          &:nth-child(2),
          &:nth-child(3) {
            stroke: #ff6f3d;
          }

          &:nth-child(4),
          &:nth-child(5) {
            fill: #ff6f3d;
          }
        }
      }

      .arrow-down-icon {
        transform: rotate(180deg);

        path {
          fill: #ff6f3d;
        }
      }
    `}

  @media ${device.tablet} {
    padding: 20px 0;
  }

  @media ${device.tabletS} {
    padding: 12px 0;
  }
`;

const StyledLanguageSelectorList = styled.ul<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  right: -32px;
  border-radius: 0 0 9px 9px;
  padding: 16px 0;
  background-color: #ffffff;
  box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);

  &:before {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: #ff642e;
    transition: width 0.2s ease-in-out;
  }

  &:after {
    content: "";
    display: block;
    position: absolute;
    top: -1px;
    left: 50%;
    width: 0;
    height: 1px;
    background-color: #ff642e;
    transition: width 0.2s ease-in-out;
  }

  a {
    display: flex;
    padding: 8px 24px;
    color: #666666;
    transition: background-color 0.2s;

    span {
      margin-right: 8px;
      font-weight: 700;
      color: #444444;
      min-width: 21px;
      text-transform: uppercase;
    }

    &:hover {
      background-color: #f5f5f5;
    }

    &.active {
      font-weight: 600;
      color: #ff6f3d;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      &:before {
        animation: ${menuLineLeft} 0.3s forwards ease-in-out;
      }

      &:after {
        animation: ${menuLineRight} 0.3s forwards ease-in-out;
      }
    `}

  @media ${device.tablet} {
    right: 0;
  }
`;

export {
  StyledLanguageSelector,
  StyledLanguageSelectorButton,
  StyledLanguageSelectorList,
};
