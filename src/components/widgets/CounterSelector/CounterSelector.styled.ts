import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCounterSelector = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #f5f5f5;
`;

const StyledCounterSelectorBtn = styled.button`
  display: inline-flex;
  border: none;
  padding: 16px 8px;
  background-color: transparent;
  transition: background-color 0.2s;
  cursor: pointer;

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

  @media ${device.mobile} {
    padding: 12px 8px;
  }
`;

const StyledCounterSelectorValue = styled.span`
  padding: 0 8px;
  font-size: 16px;
  font-weight: 700;
  line-height: 26px;
  text-align: center;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 20px;
  }
`;

export {
  StyledCounterSelector,
  StyledCounterSelectorBtn,
  StyledCounterSelectorValue,
};
