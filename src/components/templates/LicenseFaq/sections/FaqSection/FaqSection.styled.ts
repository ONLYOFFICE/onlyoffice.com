import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledSection = styled(Section)`
  width: 970px;
  margin: auto;

  @media ${device.tablet} {
    width: calc(100% - 96px);
  }

  @media ${device.tabletS} {
    width: calc(100% - 32px);
  }
`;

const StyledQuestion = styled(Heading)`
  font-size: 36px;
  line-height: 1.2em;

  @media ${device.tablet} {
    font-size: 30px;
  }

  @media ${device.tabletS} {
    font-size: 26px;
  }

  @media ${device.mobile} {
    font-size: 22px;
  }
`;

const StyledAnswer = styled.p`
  font-size: 13px;
  line-height: 1.5em;

  @media ${device.tablet} {
    font-size: 14px;
  }

  @media ${device.tabletS} {
    font-size: 14px;
  }

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

const StyledFaq = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 0 24px;
`;

export { StyledSection, StyledFaq, StyledQuestion, StyledAnswer };