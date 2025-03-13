import styled, { css } from "styled-components";
import { ITextArea } from "./TextArea.types";

export const TextAreaWrapper = styled.div`
  margin: 0 0 32px;
  position: relative;
`;

export const TextAreaLabel = styled.label<{ isFloating: boolean, variant: string }>`
  position: absolute;
  line-height: 16px;
  left: 16px;
  color: ${props => {
    if (props.isFloating) return '#666666';
    if (props.variant === 'error') return '#EA9494';
    return '#AAAAAA';
  }};
  transition: all 0.2s ease-in-out;
  background: transparent;
  pointer-events: none;
  transform: ${props => props.isFloating ? 'translateX(0) translateY(-13px)' : 'translate(0, 0)'};
  font-size: ${props => props.isFloating ? '12px' : '16px'};
  top: 18px;
`;

export const StyledTextArea = styled.textarea.withConfig({
  shouldForwardProp: (prop) => !["variant", "size", "scale"].includes(prop),
})<ITextArea>`
  align-items: center;
  border: 1px solid;
  border-radius: 9px;
  background-color: #f9f9f9;
  color: #333333;
  display: inline-flex;
  font-size: 16px;
  font-weight: 400;
  letter-spacing: 0.04em;
  line-height: 32px;
  justify-content: center;
  padding: 27px 16px 8px 16px;
  resize: none;
  transition: all 0.2s ease-in-out;

  &:focus {
    border-color: #666666;
    background-color: #ffffff !important;
    outline: none;
  }
  &:hover {
    border-color: #666666;
  }

  ${({ variant }) => {
    switch (variant) {
      case "success":
        return css`
          border-color: #8bb825;
          background-color: #f9feef;
        `;
      default:
        return css`
          border-color: #aaaaaa;
          background-color: #f9f9f9;
          &:hover {
            border-color: #666666;
          }
        `;
    }
  }}

  @media screen and (max-width: 592px) {
    padding: 14px 12px;
    width: 100%;
  }
`;