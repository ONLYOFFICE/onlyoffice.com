import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSortByNameFilter = styled.div`
  display: flex;
  align-items: center;
`;

const StyledSortByNameFilterText = styled.span`
  margin-right: 8px;
  font-size: 13px;
  line-height: 18px;
  font-weight: 600;
  text-transform: uppercase;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledSortByNameFilterButton = styled.button<{ $active: boolean }>`
  border: none;
  font-weight: 600;
  font-size: 14px;
  line-height: 23px;
  color: ${({ $active }) => ($active ? "#ff6f3d" : "#444444")};
  background-color: transparent;
  transition: color 0.2s;
  cursor: pointer;

  &:not(:last-child) {
    margin-right: 8px;
  }

  &:hover {
    color: #ff6f3d;
  }
`;

export {
  StyledSortByNameFilter,
  StyledSortByNameFilterText,
  StyledSortByNameFilterButton,
};
