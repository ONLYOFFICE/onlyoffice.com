import styled from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";

const StyledContainer = styled(Container)`
  text-align: center;
`;

const StyledSuccessStoriesItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  text-align: left;
  padding: 56px 0 0;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
  }

  @media ${device.mobile} {
    display: flex;
    overflow-x: auto;
    row-gap: 32px;
    margin-bottom: 32px;
  }
`;

export { StyledSuccessStoriesItems, StyledContainer };