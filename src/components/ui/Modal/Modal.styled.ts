import styled, { css } from "styled-components";
import { IModal } from "./Modal.types";
import { device } from "@src/utils/device";

const StyledModal = styled.div<{
  $isOpen: IModal["isOpen"];
  $bgColor: IModal["bgColor"];
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: ${(props) => props.$bgColor};
  overflow-y: auto;
  z-index: 1001;
  opacity: ${(props) => (props.$isOpen ? 1 : 0)};
  visibility: ${(props) => (props.$isOpen ? "visible" : "hidden")};
  transition: opacity 0.2s, visibility 0.2s;
`;

const StyledModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 24px;
  min-height: 100%;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const StyledModalWrapper = styled.div<{ $maxWidth: IModal["maxWidth"] }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};
`;

const StyledModalCloseBtn = styled.button<{
  $positionCloseBtn: IModal["positionCloseBtn"];
}>`
  position: absolute;
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;

  ${(props) =>
    props.$positionCloseBtn === "inside"
      ? css`
          top: 24px;
          right: 24px;
          background-image: url("/images/icons/cross.svg");
        `
      : css`
          top: -24px;
          right: -24px;
          background-image: url("/images/icons/cross-white.svg");
        `}
`;

export {
  StyledModal,
  StyledModalContainer,
  StyledModalWrapper,
  StyledModalCloseBtn,
};
