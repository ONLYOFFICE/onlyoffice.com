import styled, { css } from "styled-components";
import { ICounterSelector } from "./CounterSelector.types";
import { device } from "@src/utils/device";
import { Input } from "@src/components/ui/Input";

const StyledCounterSelector = styled.div<{
  $variant: ICounterSelector["variant"];
  $size: ICounterSelector["size"];
  $bgColor: ICounterSelector["bgColor"];
}>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.$bgColor};

  ${(props) =>
    props.$size === "small" &&
    css`
      max-width: 140px;

      @media ${device.mobile} {
        max-width: 100%;
      }
    `}
`;

const StyledCounterSelectorBtn = styled.button<{
  $size: ICounterSelector["size"];
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
    props.$size === "small"
      ? css`
          height: 40px;
        `
      : css`
          height: 56px;
        `}

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

const StyledCounterSelectorInputWrapper = styled.div`
  .input-wrapper {
    height: 40px;
  }
`;

const StyledCounterSelectorInput = styled(Input)`
  padding: 6px;
  font-size: 18px;
  font-weight: 700;
  line-height: 28px;
  text-align: center;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 26px;
  }
`;

const StyledCounterSelectorValue = styled.span`
  font-size: 18px;
  line-height: 28px;
  font-weight: 700;
  color: #333333;
  width: 100%;
  text-align: center;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 26px;
  }
`;

export {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorInputWrapper,
  StyledCounterSelectorInput,
  StyledCounterSelectorValue,
};
