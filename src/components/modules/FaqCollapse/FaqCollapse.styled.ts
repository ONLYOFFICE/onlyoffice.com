import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledFaqCollapseHeader = styled.div`
  margin-bottom: 48px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledFaqCollapseHeading = styled(Heading)`
  &:not(:last-child) {
    margin-bottom: 24px;

    @media ${device.tabletS} {
      margin-bottom: 16px;
    }
  }

  @media ${device.tabletS} {
    font-size: 24px;
    line-height: 32px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    line-height: 27px;
  }
`;

const StyledFaqCollapseText = styled(Text)`
  font-size: 18px;
  line-height: 27px;
  color: #333333;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

export {
  StyledFaqCollapseHeader,
  StyledFaqCollapseHeading,
  StyledFaqCollapseText,
};
