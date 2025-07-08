import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledQuestionsContainer = styled(Container)`
  position: relative;
  z-index: 0;
`;

const StyledQuestionsWrapper = styled.div`
  padding-left: 95px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    background-image: url("/images/templates/office-for-monday/support/support.svg");
    background-repeat: no-repeat;
    
    @media ${device.mobile} {
      width: 100%;
      background-size: 50px;
    }
  }

  @media ${device.mobile} {
    padding: 72px 0 0 0;
  }
`;

const StyledQuestionsTitle = styled(Heading)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    font-size: 22px;
    line-height: 29px;
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledQuestionsText = styled(Text)`
  font-size: 18px;
  line-height: 1.5em;
  max-width: 968px;

  @media ${device.mobile} {
    font-size: 16px;
  }
`;

export {
  StyledQuestionsContainer,
  StyledQuestionsWrapper,
  StyledQuestionsTitle,
  StyledQuestionsText
};
