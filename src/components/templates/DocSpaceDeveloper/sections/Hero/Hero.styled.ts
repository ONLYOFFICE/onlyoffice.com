import { Section } from "@src/components/ui/Section";
import styled from "styled-components";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url("/images/templates/docspace-developer/hero/background.svg");
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto;
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 56px;
`;

export {
  StyledHeroSection,
  StyledHeroButtonsWrapper,
};