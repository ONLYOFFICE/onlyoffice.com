import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";

const StyledIntegrationSection = styled(Section)`
  background-color: #3A6870;
  background-image: url("images/templates/customers/integration/sciebo.svg");
  background-repeat: no-repeat;
  background-position: -8vw center;
  background-size: auto 51vw;
`;

const StyledIntegrationContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledIntegrationLeft = styled.div``;

const StyledIntegrationHeading = styled(Heading)`
  max-width: 500px;
  margin-bottom: 17px;
`;

const StyledIntegrationRight = styled.div`
  width: 296px;
  height: 266px;
  position: relative;
`;

const StyledIntegrationIcon = styled.div<{
  $iconUrl: string;
}>`
  width: 128px;
  height: 128px;
  border-radius: 50%;
  background-image: url(${(props) => props.$iconUrl});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 75px 75px;
  background-color: #43767E;
  position: absolute;

  &:nth-child(1) {
    top: 0;
    left: 50%;
    transform: translateX(-50%);
  }

  &:nth-child(2) {
    bottom: 0;
    left: 0;
  }

  &:nth-child(3) {
    bottom: 0;
    right: 0;
  }
`;


export { StyledIntegrationSection, StyledIntegrationContainer, StyledIntegrationLeft, StyledIntegrationHeading, StyledIntegrationRight, StyledIntegrationIcon };