import styled from "styled-components";
import { IPageButton } from "./Pagination.types";
import Link from "next/link";

const buttonBaseStyles = `
  min-width: 36px;
  height: 40px;
  padding: 7.8px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 9px;
  cursor: pointer;
  transition: 0.3s;
  font-size: 16px;
`;

export const StyledPaginationList = styled.div`
  display: flex;
  gap: 6px;
`;

export const StyledPageButton = styled.button<IPageButton>`
  ${buttonBaseStyles}
  border: 1px solid #E2E2E2;
  border-color: ${({ active }) => active && "#333333"};
  background-color: ${({ active }) => (active ? "#333333" : "#ffffff")};
  color: ${({ active }) => (active ? "#ffffff" : "#333333")};

  &:hover {
    border-color: ${({ active }) => !active && "#FF6F3D"};
    color: ${({ active }) => (active ? "#ffffff" : "#FF6F3D")};
  }
`;

export const StyledArrowButton = styled(Link)`
  ${buttonBaseStyles}
  max-width: 36px;

  &:hover {
    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }
`;
