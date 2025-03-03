import styled from "styled-components";

export const ButtonContainer = styled.div`
  display: flex;
  gap: 20px;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  background: rgba(255, 255, 255, 1);
  box-shadow: 0px 1px 1px 0px rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  border: 1px solid transparent;
  border-radius: 3px;
  padding: 7px;
  font-size: 14px;
  color: #666666;
  font-weight: 700;
  font-family: "Roboto", sans-serif;

  &:hover {
    box-shadow: 0px 2px 2px 0px rgba(0, 0, 0, 0.25);
  }

  &:active {
    border: 1px solid rgba(24, 119, 242, 1);
    background: white;
    box-shadow: none;
  }

  img {
    width: 24px;
    height: 24px;
  }
`;