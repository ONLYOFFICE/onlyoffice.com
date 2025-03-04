import styled from "styled-components";

export const AlphabetContainer = styled.div`
  display: flex;
  gap: 8px;
  margin-top: 16px;
`;

export const LetterButton = styled.button<{ selected?: boolean }>`
  width: 36px;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  border: 1px solid #e2e2e2;
  background: ${({ selected }) => (selected ? "#333" : "white")};
  color: ${({ selected }) => (selected ? "white" : "#333")};
  cursor: pointer;
  transition: 0.2s;
  font-size: 16px;

  &:hover {
    border-color: ${({ selected }) => (selected ? "none" : "#FF6F3D")};
    color: ${({ selected }) => (selected ? "white" : "#FF6F3D")};
  }

  &:first-child {
    width: initial;
    height: initial;
    padding: 8px 11.5px;
  }
`;
