import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledTrustedHeading = styled(Heading)`
  margin-bottom: 56px;
`;

const StyledTrustedTabList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: clamp(16px, 2vw, 32px);
  border-bottom: 1px solid #e2e2e2;
  margin-bottom: 56px;
`;

const StyledTrustedTabItem = styled.span<{
  $isActive: boolean;
}>`
  position: relative;
  white-space: nowrap;
  cursor: pointer;

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.$isActive ? "#ff6f3d" : "#e2e2e2")};
    transition-duration: 300ms;
  }
`;

export { StyledTrustedHeading, StyledTrustedTabList, StyledTrustedTabItem };