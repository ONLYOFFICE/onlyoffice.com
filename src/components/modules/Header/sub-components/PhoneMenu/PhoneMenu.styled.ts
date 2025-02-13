import styled, { css, keyframes } from "styled-components";
import Link from "next/link";
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

const StyledPhoneMenu = styled.div`
  position: relative;
  display: inline-flex;

  @media ${device.tablet} {
    display: none;
  }
`;

const StyledPhoneDropdown = styled.div<{ $isOpen: boolean }>`
  position: absolute;
  top: 100%;
  left: 0;
  display: grid;
  row-gap: 16px;
  border-radius: 0 0 8px 8px;
  padding: 32px;
  width: max-content;
  min-width: 250px;
  max-width: 312px;
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
`;

const StyledPhoneButton = styled.button<{ $isOpen: boolean }>`
  display: inline-flex;
  border: none;
  padding: 24px 0;
  width: 24px;
  background-color: transparent;
  cursor: pointer;

  svg {
    path {
      transition: fill 0.2s;
    }
  }

  ${(props) =>
    props.$isOpen &&
    css`
      svg {
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

const StyledPhoneLabel = styled.div`
  padding: 4px 4px 0 0;
  font-size: 10px;
  font-weight: 600;
  line-height: 14px;
  letter-spacing: 0.3em;
  color: #666666;
  text-transform: uppercase;
`;

const StyledPhoneNumber = styled(Link)`
  font-size: 14px;
  font-weight: 700;
  line-height: 19px;
  letter-spacing: 0.02em;
  transition: color 0.2s;

  span {
    margin-right: 8px;
  }

  &:hover {
    color: #ff6f3d;
  }
`;

const StyledPhoneLink = styled(Link)`
  font-size: 14px;
  line-height: 19px;
  letter-spacing: 0.02em;
  text-decoration: underline;
  transition: color 0.2s;

  &:hover {
    color: #ff6f3d;
  }
`;

export {
  StyledPhoneMenu,
  StyledPhoneDropdown,
  StyledPhoneButton,
  StyledPhoneLabel,
  StyledPhoneNumber,
  StyledPhoneLink,
};
