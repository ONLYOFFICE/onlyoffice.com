import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledToggleButtons = styled.div`
  display: flex;
  align-items: center;
  border-radius: 3px;
  overflow: hidden;
  background-color: #f9f9f9;
`;

const StyledToggleButton = styled.button<{ $selected: boolean }>`
  border: 1px solid ${(props) => (props.$selected ? "#ff6f3d" : "#aaaaaa")};
  padding: 10px 12px;
  font-size: 14px;
  font-weight: 600;
  line-height: 20px;
  color: ${(props) => (props.$selected ? "#ff6f3d" : "#444444")};
  width: 100%;
  text-align: center;
  text-transform: capitalize;
  background-color: transparent;
  transition: border-color 0.2s, color 0.2s, background-color 0.2s;
  cursor: pointer;

  &:first-child {
    border-radius: 3px 0 0 3px;
  }

  &:last-child {
    border-radius: 0 3px 3px 0;
  }

  &:not(:first-child:last-child):first-child {
    border-right: none;
  }

  &:not(:first-child:last-child):last-child {
    border-left: none;
  }

  &:first-child:last-child {
    border-radius: 3px;
  }

  &:not(:first-child) {
    border-left: none;
  }

  &:not(:last-child) {
    position: relative;
    border-right: none;

    &::after {
      content: "";
      position: absolute;
      top: 0;
      right: 0;
      border-right: 1px solid #ff6f3d;
      height: 100%;
    }
  }

  &:hover {
    background-color: ${(props) =>
      props.$selected ? "transparent" : "#ebebeb"};
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 18px;
  }
`;

export { StyledToggleButtons, StyledToggleButton };
