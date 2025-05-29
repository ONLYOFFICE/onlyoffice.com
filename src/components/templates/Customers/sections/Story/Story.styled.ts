import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledStoryContainer = styled(Container)`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 40px;

  @media ${device.mobileS} {
    flex-direction: column;
    gap: 11px;
  }
`;

export { StyledStoryContainer };