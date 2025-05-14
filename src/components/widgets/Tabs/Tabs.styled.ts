import styled, { css } from "styled-components";
import { ITabs } from "./Tabs.types";
import { device } from "@src/utils/device";

const StyledTabs = styled.div<{
  $bgColor: ITabs<string>["bgColor"];
}>`
  padding: 24px;

  ${(props) => css`
    background-color: ${props.$bgColor};
  `}
`;

const StyledTabsList = styled.div`
  display: flex;
  align-items: center;
`;

const StyledTabsItem = styled.button<{ $active: boolean }>`
  display: inline-flex;
  justify-content: center;
  border: none;
  border-bottom: 1px solid transparent;
  padding: 0 0 3px;
  font-size: 13px;
  font-weight: 600;
  line-height: 24px;
  letter-spacing: 0.04em;
  color: ${(props) => (props.$active ? "#ff6f3d" : "#333333")};
  width: 100%;
  text-transform: uppercase;
  background-color: transparent;
  transition:
    border-color 0.2s,
    color 0.2s;
  cursor: pointer;

  ${(props) => css`
    ${props.$active &&
    css`
      border-color: #ff6f3d;
    `}
  `}

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledTabsPanel = styled.div<{ $hidden: boolean }>`
  display: ${(props) => (props.$hidden ? "none" : "block")};
  padding-top: 16px;
`;

const StyledTabsCollapsibleBtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 8px;
  margin-bottom: -16px;
`;

const StyledTabsCollapsibleBtn = styled.button<{
  $collapsible: ITabs<string>["collapsible"];
}>`
  border: none;
  width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;

  svg {
    path {
      fill: #666666;
    }
  }

  ${(props) =>
    props.$collapsible &&
    css`
      svg {
        transform: rotate(180deg);
      }
    `}
`;

export {
  StyledTabs,
  StyledTabsList,
  StyledTabsItem,
  StyledTabsPanel,
  StyledTabsCollapsibleBtnWrapper,
  StyledTabsCollapsibleBtn,
};
