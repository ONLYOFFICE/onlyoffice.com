import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
  margin-top: -72px;
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;
`;

const StyledHeroSubHeading = styled(Heading)`
  font-weight: normal;
  margin-bottom: 40px;
`;

const StyledHeroButtonWrapper = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroSubHeading,
  StyledHeroButtonWrapper
};
