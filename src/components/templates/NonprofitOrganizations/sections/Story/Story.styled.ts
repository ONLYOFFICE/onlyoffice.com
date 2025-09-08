import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledStoryList = styled.ul`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
  gap: 32px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(2, 1fr);
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledStoryItem = styled.li``;

export {
  StyledStoryList,
  StyledStoryItem
};
