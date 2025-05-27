import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  height: 100vh;
  background-image: url("/images/templates/customers/hero/map.svg");
  background-size: 100vw 100vh;
  background-position: top;
  background-repeat: no-repeat;
  margin-top: -72px;
`;

const StyledHeroHeading = styled(Heading)`
  max-width: 994px;
  margin: 172px auto 40px;
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 16px;
`;

export { StyledHeroSection, StyledHeroHeading, StyledHeroButtonsWrapper }