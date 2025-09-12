import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledQuestionsContainer = styled(Container)`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -137px;
    right: 39px;
    width: 246px;
    height: 246px;
    background-image: url(${getAssetUrl('/images/templates/conversion-api/questions/letter.svg')});
    background-repeat: no-repeat;

    @media ${device.tabletS} {
      bottom: -130px;
      right: 18px;
    }

    @media ${device.mobile} {
      display: none;
    }
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
    width: 48px;
    height: 48px;
    background-image: url(${getAssetUrl('/images/templates/conversion-api/questions/question.svg')});
    background-repeat: no-repeat;
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
