import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { Container } from "@src/components/ui/Container";
import { Section } from "@src/components/ui/Section";

import { getAssetUrl } from "@utils/getAssetUrl";
import { CodeButton } from "@src/components/ui/CodeButton";
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

const StyledActionsButton = styled(CodeButton)`
  width: 56px;
  height: 36px;
  background-image: url(${getAssetUrl('/images/templates/see-it-in-action/actions/close-tag.svg')});
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

  @media ${device.tablet} {
    overflow-x: scroll;
    overflow-y: hidden;
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
  box-shadow: ${(props) => (props.$isActive ? "0 20px 50px rgba(85,85,85,0.15)" : "none")};
  position: relative;

  &:hover {
    background-color: ${(props) => (props.$isActive ? "#fff" : "#ebebeb")};
  }

  &::after {
    content: "";
    position: absolute;
    bottom: -1px;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: ${(props) => (props.$isActive ? "#fff" : "#C4C4C4")};
    transition: background-color 0.2s;
  }

  &::before {
    content: "";
    position: absolute;
    left: 50%;
    bottom: -101%;
    width: 150%;
    height: 100%;
    pointer-events: none;
    background: #fff;
    transform: translateX(-50%);

    @media ${device.tablet} {
      display: none;
    }
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
