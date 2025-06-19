import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSpreadContent = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin: 0 auto 56px;
  max-width: 666px;
  text-align: center;

  @media ${device.tabletS} {
    justify-items: initial;
  }

  @media ${device.mobile} {
    row-gap: 16px;
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

export { StyledSpreadContent, StyledSpreadText };
