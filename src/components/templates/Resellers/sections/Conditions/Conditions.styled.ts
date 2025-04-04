import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledConditions = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  padding-top: 56px;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
    padding-top: 32px;
  }
`;

export { StyledConditions };
