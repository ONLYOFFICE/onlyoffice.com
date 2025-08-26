import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

export const StyledSection = styled(Section)`
  background-color: #f6f6f6;
`;

export const StyledContainer = styled(Container)`
  max-width: 970px;
  padding: 0;
  text-align: left;

  @media ${device.tablet} {
    padding: 0 16px;
  }
`;