import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const StyledActionsTabList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const StyledActionsTabButton = styled(Button)<{
  $isActive: boolean;
}>``;

const StyledActionsTabHeading = styled(Heading)<{
  $isActive: boolean;
}>`
  color: ${(props) => (props.$isActive ? "#ff6f3d" : "#333333")};
`;

export {
  StyledActionsTabList,
  StyledActionsTabButton,
  StyledActionsTabHeading,
};
