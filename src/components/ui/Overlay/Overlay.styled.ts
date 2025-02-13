import styled from "styled-components";
import { IOverlay } from "./Overlay.types";

const StyledOverlay = styled.div<{
  $active: IOverlay["active"];
}>`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.3);
  z-index: 101;
  opacity: ${(props) => (props.$active ? 1 : 0)};
  visibility: ${(props) => (props.$active ? "visible" : "hidden")};
  transition: opacity 0.2s, visibility 0.2s;
`;

export { StyledOverlay };
