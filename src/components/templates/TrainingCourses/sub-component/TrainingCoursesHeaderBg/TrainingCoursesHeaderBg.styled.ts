import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledTrainingCoursesHeaderBg = styled.div`
  height: 72px;
  margin-top: -72px;
  background-color: #F5F5F5;

  @media ${device.tablet} {
    height: 48px;
    margin-top: -48px;
  }
`;

export { StyledTrainingCoursesHeaderBg };
