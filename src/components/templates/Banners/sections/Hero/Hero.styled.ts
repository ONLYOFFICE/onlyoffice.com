import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSection = styled(Section)`
`;

const StyledHeroHeading = styled(Heading)`
  letter-spacing: 0;
  padding-bottom: 20px;
  font-size: 36px;
  line-height: 1.2em;
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
};
