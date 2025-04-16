import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledCounterSelectorWrapper = styled.div`
  display: grid;
  grid-template-columns: auto 140px;
  align-items: center;
  column-gap: 8px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 8px;
    text-align: center;
  }
`;

const StyledCounterSelectorHeading = styled.div`
  display: flex;
`;

const StyledCounterSelectorHeadingText = styled(Text)`
  margin-right: 8px;
`;

export {
  StyledCounterSelectorWrapper,
  StyledCounterSelectorHeading,
  StyledCounterSelectorHeadingText,
};
