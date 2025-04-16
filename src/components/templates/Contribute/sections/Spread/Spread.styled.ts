import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSpreadContent = styled.div`
  max-width: 666px;
  margin: 0 auto 64px;
  display: grid;
  gap: 32px;
  text-align: center;

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledSpreadText = styled(Text)`
  font-size: 18px;
  line-height: 27px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledSpreadLink = styled(Link)`
  font-size: 14px;
  line-height: 22px;
`;

export { StyledSpreadContent, StyledSpreadText, StyledSpreadLink };
