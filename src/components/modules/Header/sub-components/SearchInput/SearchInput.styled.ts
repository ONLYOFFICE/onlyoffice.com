import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSearchInput = styled.div`
  display: inline-flex;
`;

const StyledSearchButton = styled.button`
  display: inline-flex;
  border: none;
  padding: 24px 0;
  width: 24px;
  background-color: transparent;
  cursor: pointer;

  svg {
    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    svg {
      path {
        fill: #ff6f3d;
      }
    }
  }

  @media ${device.tablet} {
    padding: 20px 0;
  }

  @media ${device.tabletS} {
    padding: 12px 0;
  }
`;

export { StyledSearchInput, StyledSearchButton };
