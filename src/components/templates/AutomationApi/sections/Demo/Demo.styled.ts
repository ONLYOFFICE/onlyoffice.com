import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";

const StyledActionsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyledHeading = styled(Heading)`
  padding: 80px 0 32px;
`;

const StyledActionsTabList = styled.ul`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  padding: 0;
  list-style: none;

  @media ${device.tabletS} {
    overflow-x: scroll;
    justify-content: flex-start;
  }
`;

const StyledActionsTabButton = styled(Button)<{
  $isActive: boolean;
}>`
  color: ${(props) => (props.$isActive ? "#fff" : "#333333")};
  transition: background-color 0.2s;
  border: none;
  padding: 24px 16px;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  flex-direction: column;
  gap: 12px;
`;

const StyledActionsTabHeading = styled(Heading)<{
  $isActive: boolean;
}>`
  color: ${(props) => (props.$isActive ? "#ff6f3d" : "#333333")};
  border-bottom: ${(props) => (props.$isActive ? "1px solid #ff6f3d" : "1px solid #f9f9f9")};
  font-size: 12px;
  text-transform: uppercase;
  font-weight: 600;
  letter-spacing: 0.08em;
  padding: 0;

  @media ${device.tablet} {
    font-size: 14px;
    white-space: nowrap;
  }
`;

export {
  StyledActionsContainer,
  StyledActionsTabList,
  StyledActionsTabButton,
  StyledActionsTabHeading,
  StyledHeading
};
