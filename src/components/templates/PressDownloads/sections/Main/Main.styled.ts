import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledMainWrapper = styled.div`
  display: grid;
  grid-template-columns: 288px auto;

  @media (max-width: 1023px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const StyledSelect = styled.div<{ $isSelect?: boolean }>`
  display: none;

  > div {
    > button > div {
      color: ${({ $isSelect }) => ($isSelect ? "#333333" : "#aaaaaa")};
    }

    > div {
      max-height: none;
    }
  }

  @media (max-width: 1023px) {
    display: block;
  }
`;

const StyledMainLeft = styled.div`
  height: 100%;
  position: relative;

  @media (max-width: 1023px) {
    display: none;
  }
`;

const StyledMainLeftInner = styled.ul`
  display: grid;
  gap: 16px;
  padding-right: 73px;
  position: sticky;
  top: 150px;
  align-self: start;

  @media (max-width: 1023px) {
    position: static;
  }
`;

const StyledMainLeftItem = styled.li<{ $isActive?: boolean }>`
  font-size: 16px;
  line-height: 26px;
  list-style-type: none;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #ff6f3d;
  }

  ${({ $isActive }) =>
    $isActive &&
    `
    color: #ff6f3d;
  `};
`;

const StyledMainRight = styled.div`
  display: grid;
  gap: 112px;
  height: 100%;

  @media ${device.mobile} {
    gap: 48px;
  }
`;

export {
  StyledMainWrapper,
  StyledSelect,
  StyledMainLeft,
  StyledMainLeftInner,
  StyledMainLeftItem,
  StyledMainRight,
};
