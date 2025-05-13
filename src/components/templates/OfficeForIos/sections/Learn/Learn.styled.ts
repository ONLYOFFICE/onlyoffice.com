import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledLearnList = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  padding: 56px 0;

  @media ${device.mobile} {
    justify-content: flex-start;
    overflow-x: auto;
    padding: 32px 16px;
    gap: 24px;
  }
`;

export { StyledLearnList };
