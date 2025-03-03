import styled from "styled-components";
import ArrowNext from "@public/images/icons/arrow-next.svg";
import ArrowPrev from "@public/images/icons/arrow-prev.svg";
import { IArrowButtonProps, IPageButtonProps } from "./Pagination.types";

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

export const PaginationList = styled.div`
  display: flex;
  gap: 6px;
`;

export const PageButton = styled.button<IPageButtonProps>`
  ${buttonBaseStyles}
  border: 1px solid #E2E2E2;
  background-color: ${({ active }) => (active ? "#333" : "white")};
  color: ${({ active }) => (active ? "white" : "#333")};

  &:hover {
    border-color: ${({ active }) => (active ? "none" : "#FF6F3D")};
    color: ${({ active }) => (active ? "white" : "#FF6F3D")};
    font-weight: ${({ active }) => (active ? "400" : "600")};
  }
`;

export const ArrowButton = styled.button<IArrowButtonProps>`
  ${buttonBaseStyles}
  border: none;
  background-color: transparent;
  background-repeat: no-repeat;
  background-position: center;
  background-size: contain;
  background-image: ${({ arrow }) => `url(${arrow === "prev" ? ArrowPrev.src : ArrowNext.src})`};
  background-size: 24px;

  &:hover {
    filter: brightness(0) saturate(100%) invert(47%) sepia(82%) saturate(536%) hue-rotate(339deg) brightness(100%) contrast(103%);
  }
`;
