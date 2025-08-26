import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledFormMessage = styled(Text)`
  margin-top: 56px;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-align: center;

  @media ${device.mobile} {
    margin-top: 48px;
  }
`;

export { StyledFormMessage };
