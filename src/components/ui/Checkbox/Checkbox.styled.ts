import styled from "styled-components";

export const InputWrapper = styled.div`
  align-items: center;
  display: flex;
  margin: 0 0 24px;
  position: relative;
  gap: 8px;
`;

export const InputLabel = styled.label`
  color: #666666;
  font-size: 16px;
  line-height: 1.6em;
  background: transparent;
  pointer-events: none;
  @media screen and (max-width: 592px) {
    font-size: 14px;
  }
`;

export const StyledCheckbox = styled.span<{ checked: boolean }>`
  -webkit-appearance: none;
  width: 24px;
  height: 24px;
  border: 1px solid;
  border-radius: 3px;
  outline: none;
  margin: 8px 0;
  box-sizing: border-box;
  display: inline-block;
  cursor: pointer;
  border-color: ${(props) => {
    if (props.checked) return "#8BB825";
    return "#aaaaaa";
  }};
  background-color: ${(props) => {
    if (props.checked) return "#f9feef";
    return "#f9f9f9";
  }};

  &:before {
    content: ${(props) => (props.checked ? '""' : "none")};
    display: ${(props) => (props.checked ? "block" : "none")};
    width: 6px;
    height: 13px;
    border: 0 solid #8bb825;
    border-width: 0 2px 2px 0;
    -webkit-transform: rotateZ(45deg);
    transform: rotateZ(45deg);
    margin: 2px 7px;
    pointer-events: none;
  }

  &:hover {
    border-color: ${(props) => (props.checked ? "#8bb825" : "#666666")};
  }
`;
