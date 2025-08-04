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
  padding: 88px 0 40px;

  @media ${device.tabletS} {
    grid-template-columns: repeat(1, 1fr);
    padding: 64px 0 40px;
  }

  @media ${device.mobile} {
    row-gap: 32px;
    padding: 32px 0;
  }
`;

export { StyledSuccessStoriesItems, StyledContainer };
