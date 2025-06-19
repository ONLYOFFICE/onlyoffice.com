import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSelectorItemWrapper = styled.div`
  padding: 16px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid #e2e2e2;

      @media ${device.mobile} {
        left: 50%;
        width: calc(100% - 32px);
        transform: translateX(-50%);
      }
    }
  }
`;

export { StyledSelectorItemWrapper };
