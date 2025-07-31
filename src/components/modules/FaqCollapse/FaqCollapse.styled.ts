import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledFaqCollapseHeader = styled.div<{ $text: boolean }>`
  margin-bottom: ${(props) => (props.$text ? "48px" : "56px")};

  @media ${device.mobile} {
    margin-bottom: ${(props) => (props.$text ? "24px" : "32px")};
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

export { StyledFaqCollapseHeader, StyledFaqCollapseHeading };
