import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledSection = styled(Section)`
  width: 928px;
  margin: auto;

  @media ${device.tablet} {
    width: calc(100% - 96px);
  }

  @media ${device.tabletS} {
    width: calc(100% - 32px);
  }
`;

const StyledQuestion = styled(Heading)`
  line-height: 1.2em;
`;

const StyledAnswer = styled(Text)`
  line-height: 1.5em;
`;

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 56px;
`;

export { StyledSection, StyledFaq, StyledQuestion, StyledAnswer };
