import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { ISelect } from "./Select.types";
import { ChevronDownIcon } from "@src/components/icons";

const StyledSelect = styled.div<{ $maxWidth: ISelect["maxWidth"] }>`
  position: relative;
  width: 100%;
  max-width: ${(props) => props.$maxWidth};
`;

const StyledSelectInput = styled.button<{
  $isOpen: boolean;
  $placeholder: boolean;
  $status: ISelect["status"];
  $labelVariant: ISelect["labelVariant"];
}>`
  position: relative;
  display: flex;
  align-items: center;
  border: 1px solid
    ${(props) =>
      props.$isOpen
        ? "#444444"
        : props.$status === "error"
          ? "#cb0000"
          : props.$status === "success"
            ? "#8bb825"
            : "#aaaaaa"};
  border-radius: 6px;
  padding: ${(props) =>
    props.$labelVariant === "primary"
      ? "24px 48px 12px 16px"
      : "16px 48px 16px 16px"};
  font-size: 16px;
  line-height: 20px;
  width: 100%;
  height: 56px;
  color: ${(props) => (props.$placeholder ? "#cccccc" : "#333333")};
  background-color: ${(props) =>
    props.$isOpen
      ? "#ffffff"
      : props.$status === "error"
        ? "#fff7f7"
        : props.$status === "success"
          ? "#f9feef"
          : "#f9f9f9"};
  transition:
    border-color 0.2s,
    background-color 0.2s;
  cursor: pointer;

  ${(props) =>
    props.$status === "default" &&
    css`
      &:hover {
        border-color: #666666;
      }
    `}

  &:disabled {
    opacity: 0.4;
    pointer-events: none;
    cursor: initial;
  }

  @media ${device.mobile} {
    padding: ${(props) =>
      props.$labelVariant === "primary"
        ? "24px 48px 8px 12px"
        : "12px 48px 12px 12px"};
    font-size: 14px;
    line-height: 16px;
    height: 48px;
  }
`;

const StyledSelectInputValue = styled.div`
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
`;

const StyledSelectInputCount = styled.span`
  margin-left: 4px;
`;

const StyledSelectLabel = styled.div<{
  $isOpen: boolean;
  $selected: boolean;
  $status: ISelect["status"];
  $labelVariant: ISelect["labelVariant"];
}>`
  ${(props) =>
    props.$labelVariant === "primary"
      ? css`
          position: absolute;
          top: ${props.$isOpen || props.$selected ? "8px" : "16px"};
          left: 16px;
          font-size: ${props.$isOpen || props.$selected ? "12px" : "16px"};
          line-height: ${props.$isOpen || props.$selected ? "12px" : "24px"};
          color: ${props.$isOpen || props.$selected
            ? "#666666"
            : props.$status === "error"
              ? "#ea9494"
              : "#aaaaaa"};
          transition:
            top 0.2s,
            font-size 0.2s,
            color 0.2s;

          @media ${device.mobile} {
            top: ${props.$isOpen || props.$selected ? "8px" : "11px"};
            left: 12px;
            font-size: ${props.$isOpen || props.$selected ? "11px" : "14px"};
          }
        `
      : props.$labelVariant === "secondary"
        ? css`
            display: ${props.$selected && "none"};
            font-size: 16px;
            line-height: 24px;
            color: #333333;
          `
        : ""}
`;

const StyledSelectInputIcon = styled(ChevronDownIcon)<{
  $isOpen: boolean;
  $selected: boolean;
  $status: ISelect["status"];
}>`
  position: absolute;
  top: 50%;
  right: 12px;
  transform: ${(props) =>
    props.$isOpen ? "translateY(-50%) rotate(180deg)" : "translateY(-50%)"};

  path {
    fill: ${(props) =>
      props.$isOpen || props.$selected
        ? "#666666"
        : props.$status === "error"
          ? "#cb0000"
          : "#aaaaaa"};
  }
`;

const StyledSelectCaption = styled.div`
  margin-top: 8px;
  font-size: 13px;
  line-height: 20px;
  color: #cb0000;
`;

const StyledSelectOptions = styled.div`
  position: absolute;
  top: 60px;
  left: 0;
  border: 1px solid #666666;
  border-radius: 6px;
  padding: 8px 0;
  width: 100%;
  max-height: 200px;
  background-color: #ffffff;
  overflow: hidden;
  overflow-y: auto;
  z-index: 3;

  @media ${device.mobile} {
    top: 52px;
  }
`;

const StyledSelectOption = styled.button<{
  $isReset?: boolean;
  $isSelected?: boolean;
  $withSelectedIcon?: boolean;
}>`
  position: relative;
  display: block;
  border: none;
  padding: ${(props) =>
    props.$withSelectedIcon ? "8px 16px 8px 50px" : "8px 16px"};
  font-size: 16px;
  font-weight: ${(props) => props.$isSelected && 600};
  line-height: 24px;
  color: ${(props) => (props.$isSelected ? "#ff6f3d" : "#444444")};
  width: 100%;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  ${(props) =>
    props.$withSelectedIcon &&
    (props.$isReset || props.$isSelected) &&
    css`
      &::before {
        content: "";
        position: absolute;
        top: 9px;
        left: 16px;
        width: 24px;
        height: 24px;
        background-image: ${props.$isReset
          ? `url("/images/icons/cross.svg")`
          : props.$isSelected
            ? `url("/images/icons/check-large.svg")`
            : ""};
        background-repeat: no-repeat;
        background-size: contain;
        background-position: center;
      }
    `}

  &:hover {
    background-color: #f5f5f5;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledSelect,
  StyledSelectInput,
  StyledSelectInputValue,
  StyledSelectInputCount,
  StyledSelectInputIcon,
  StyledSelectCaption,
  StyledSelectLabel,
  StyledSelectOptions,
  StyledSelectOption,
};
