import styled, { css } from "styled-components";
import { ICollapse } from "./Collapse";

const StyledCollapseGroup = styled.div<{
  $divider: ICollapse["divider"];
}>`
  ${(props) =>
    props.$divider &&
    css`
      border-top: 1px solid #e5e5e5;
    `}
`;

export { StyledCollapseGroup };
