import styled from "styled-components";

export const StyledAlphabetContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const StyledLetterButton = styled.button<{ $selected?: boolean }>`
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: 1px solid #e2e2e2;
  border-color: ${({ $selected }) => $selected && "#333333"};
  background: ${({ $selected }) => ($selected ? "#333333" : "#ffffff")};
  color: ${({ $selected }) => ($selected ? "#ffffff" : "#333")};
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    border-color: ${({ $selected }) => !$selected && "#FF6F3D"};
    color: ${({ $selected }) => ($selected ? "#ffffff" : "#FF6F3D")};
  }

  &:first-child {
    width: auto;
    height: auto;
    padding: 8px 11.5px;
  }
`;
