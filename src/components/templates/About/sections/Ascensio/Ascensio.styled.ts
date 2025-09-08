import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledAscensioHeading = styled(Heading)`
  margin-bottom: 40px;

  @media ${device.tabletS} {
    font-size: 24px;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 24px;
  }
`;

const StyledAscensioText = styled(Text)`
  &:not(:last-child) {
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export { StyledAscensioHeading, StyledAscensioText };