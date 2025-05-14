import styled, { css } from "styled-components";
import { ICounterSelector } from "./CounterSelector.types";
import { device } from "@src/utils/device";
import { Input } from "@src/components/ui/Input";

export const getValueSizeStyles = (
  $valueSize: ICounterSelector<string>["valueSize"],
) => {
  return css`
    text-align: center;
    font-weight: 700;
    color: #333333;

    ${$valueSize === "small"
      ? css`
          font-size: 16px;
          line-height: 24px;

          @media ${device.mobile} {
            font-size: 14px;
            line-height: 21px;
          }
        `
      : $valueSize === "medium"
      ? css`
          font-size: 18px;
          line-height: 28px;

          @media ${device.mobile} {
            font-size: 16px;
            line-height: 26px;
          }
        `
      : null}
  `;
};

const StyledCounterSelector = styled.div<{
  $label: ICounterSelector<string>["label"];
  $bgColor: ICounterSelector<string>["bgColor"];
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.$bgColor};

  ${(props) =>
    props.$label &&
    css`
      padding: 16px 0;

      @media ${device.mobile} {
        padding: 8px 0;
      }
    `}
`;

const StyledCounterSelectorBtn = styled.button<{
  $buttonSize: ICounterSelector<string>["buttonSize"];
}>`
  display: inline-flex;
  justify-content: center;
  align-items: center;
  border: none;
  width: 40px;
  min-width: 40px;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

  ${(props) =>
    props.$buttonSize === "small"
      ? css`
          height: 40px;
        `
      : props.$buttonSize === "medium"
      ? css`
          height: 48px;
        `
      : props.$buttonSize === "large"
      ? css`
          height: 56px;
        `
      : null}

  svg {
    width: 24px;
    height: 24px;

    path {
      transition: fill 0.2s;
    }
  }

  &:not(:disabled):hover {
    background-color: #efefef;

    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }

  &:disabled {
    opacity: 0.3;
    cursor: initial;
  }
`;

const StyledCounterSelectorInput = styled(Input)<{
  $valueSize: ICounterSelector<string>["valueSize"];
}>`
  height: 40px;

  input {
    padding: 6px;
    ${(props) => getValueSizeStyles(props.$valueSize)}
  }
`;

const StyledCounterSelectorLabel = styled.div`
  font-size: 13px;
  line-height: 20px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

const StyledCounterSelectorValue = styled.div<{
  $valueSize: ICounterSelector<string>["valueSize"];
}>`
  ${(props) => getValueSizeStyles(props.$valueSize)}
`;

export {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorInput,
  StyledCounterSelectorLabel,
  StyledCounterSelectorValue,
};
