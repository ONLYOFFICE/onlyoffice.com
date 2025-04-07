import styled, { css } from "styled-components";
import { ICollapse } from "./Collapse.types";
import { device } from "@src/utils/device";

const StyledCollapse = styled.div<{
  $divider: ICollapse["divider"];
}>`
  padding: 22px 0;

  ${(props) =>
    props.$divider &&
    css`
      border-bottom: 1px solid #e5e5e5;
    `}

  @media ${device.tabletS} {
    padding: 16px 0;
  }
`;

const StyledCollapseLabel = styled.button<{ $isOpen: ICollapse["isOpen"] }>`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  padding-left: 40px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: #333333;
  width: 100%;
  background-color: transparent;
  text-align: initial;
  cursor: pointer;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 24px;
    height: 24px;
    background-repeat: no-repeat;
    background-size: contain;

    ${(props) =>
      props.$isOpen
        ? css`
            background-image: url("/images/icons/dash.svg");
          `
        : css`
            background-image: url("/images/icons/plus.svg");
          `}
  }

  @media ${device.tabletS} {
    padding-left: 32px;
    font-size: 16px;
  }
`;

const StyledCollapseContent = styled.div<{ $isOpen: ICollapse["isOpen"] }>`
  box-sizing: content-box;
  padding-left: 40px;
  font-size: 14px;
  line-height: 19px;
  color: #666666;
  overflow: hidden;
  visibility: hidden;
  will-change: max-height;
  transition: max-height 0.2s, margin-top 0.2s, visibility 0.2s;

  ${(props) =>
    props.$isOpen &&
    css`
      margin-top: 16px;
      visibility: visible;

      @media ${device.tabletS} {
        margin-top: 12px;
      }
    `}

  a {
    color: #ff6f3d;
    text-decoration: underline;

    &:hover {
      text-decoration: none;
    }
  }

  @media ${device.tabletS} {
    padding-left: 32px;
  }
`;

export { StyledCollapse, StyledCollapseLabel, StyledCollapseContent };
