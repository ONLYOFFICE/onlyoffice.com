import styled from "styled-components";
import { device } from "@src/utils/device";
import { IRadioButton } from "./RadioButton.types";

const StyledHeroRadioInput = styled.input`
  display: none;
`;

const StyledHeroRadioLabel = styled.label<{
  $status: IRadioButton["status"];
  $checked: IRadioButton["checked"];
}>`
  display: flex;
  align-items: center;
  height: fit-content;
  padding-left: 38px;
  position: relative;
  cursor: pointer;

  @media ${device.mobile} {
    font-size: 14px;
  }

  &::before {
    content: "";
    position: absolute;;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
    width: 24px;
    height: 24px;
    border-radius: 50%;
    border: ${({ $status, $checked }) => {
      if ($status === "error") return "1px solid #cb0000";
      if ($checked) return "1px solid #8BB825";
      return "1px solid #AAAAAA";
    }};
    background: ${({ $checked }) => $checked ? "#f9feef" : "#f9f9f9"};
    transition: all 0.2s ease;
  }

  &:hover {
    &::before {
      border: ${({ $checked }) => $checked ? "1px solid #8BB825" : "1px solid #444444"};
    }

    ${StyledHeroRadioInput}:disabled + & {
      &::before {
        border-color: #AAAAAA;
      }
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: 50%;
    left: 9px;
    transform: ${({ $checked }) => $checked
      ? "translateY(-50%) scale(1)"
      : "translateY(-50%) scale(0)"
    };
    width: 8px;
    height: 8px;
    background: #8BB825;
    border-radius: 50%;
    transition: all 0.2s ease;
  }

  ${StyledHeroRadioInput}:disabled + & {
    opacity: 0.5;
    cursor: default;
  }
`;

export {
  StyledHeroRadioInput,
  StyledHeroRadioLabel
}