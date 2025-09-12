import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledQuestionsWrapper = styled(Section)`
  text-align: center;
`;

const StyledQuestionsHeader = styled(Heading)`
  line-height: 1.33em;
  font-weight: 700;
  position: relative;
  padding: 68px 0 0;

  &:before {
    content: "";
    width: 40px;
    height: 40px;
    background-image: url(${getAssetUrl('/images/templates/wopi-comparison/questions/questions.svg')});
    background-repeat: no-repeat;
    background-position: center;
    background-size: 40px 40px;
    display: block;
    position: absolute;
    top: 0;
    left: calc(50% - 20px);
  }

  @media ${device.mobile} {
    padding: 48px 0 0;
  }
`;

const StyledQuestionsParagraph = styled(Text)`
  font-size: 16px;
  line-height: 1.6em;
  margin-top: 12px;
`;

export {
  StyledQuestionsWrapper,
  StyledQuestionsHeader,
  StyledQuestionsParagraph,
};
