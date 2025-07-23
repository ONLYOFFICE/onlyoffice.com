import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledQuestionsContainer = styled(Container)`
  position: relative;
  z-index: 0;

  &::after {
    content: "";
    position: absolute;
    bottom: -150px;
    right: 39px;
    width: 246px;
    height: 215px;
    background-image: url("/images/templates/for-research/questions/mail.svg");
    background-repeat: no-repeat;

    @media ${device.tablet} {
      bottom: -88px;
      right: 18px;
    }

    @media ${device.mobile} {
      display: none;
    }
  }

  @media ${device.mobile} {
    text-align: center;
  }
`;

const StyledQuestionsWrapper = styled.div`
  padding-left: 80px;
  position: relative;
  z-index: 1;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 64px;
    height: 64px;
    background-image: url("/images/templates/for-research/questions/contact_us.svg");
    background-repeat: no-repeat;
    
    @media ${device.mobile} {
      width: 100%;    
      background-position-x: 50%;
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
  margin-bottom: 32px;
  font-size: 16px;
  line-height: 24px;
  max-width: 750px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledQuestionsContainer,
  StyledQuestionsWrapper,
  StyledQuestionsTitle,
  StyledQuestionsText,
};
