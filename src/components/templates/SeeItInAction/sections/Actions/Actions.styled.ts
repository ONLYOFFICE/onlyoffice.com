import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";

const StyledActionsSection = styled(Section)`
  border-bottom: 1px solid #C4C4C4;
`

const StyledActionsContainer = styled(Container)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 50px;
`;

const StyledActionsButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

const StyledActionsButton = styled(Button)`
  width: 56px;
  height: 36px;
  background-image: url("/images/templates/see-it-in-action/actions/close-tag.svg");
  background-repeat: no-repeat;
  background-position: center;
  padding: 0;
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
  background-color: ${(props) => (props.$isActive ? "#fff" : "#f5f5f5")};
  transition: background-color 0.2s;
  border: none;
  padding: 24px 16px;
  flex-grow: 1;
  border-top-left-radius: 3px;
  border-top-right-radius: 3px;
  box-shadow: ${(props) => (props.$isActive ? "0px 7px 15px 0px rgba(85, 85, 85, 0.1)" : "none")};

  &:hover {
    background-color: #ebebeb;
  }
`;

const StyledActionsTabHeading = styled(Heading)<{
  $isActive: boolean;
}>`
  color: ${(props) => (props.$isActive ? "#ff6f3d" : "#333333")};
  font-weight: 600;
  text-transform: none;
  padding: 0;

  @media ${device.tablet} {
    font-size: 14px;
    white-space: nowrap;
  }
`;

export {
  StyledActionsSection,
  StyledActionsContainer,
  StyledActionsButtonWrapper,
  StyledActionsButton,
  StyledActionsTabList,
  StyledActionsTabButton,
  StyledActionsTabHeading,
};
