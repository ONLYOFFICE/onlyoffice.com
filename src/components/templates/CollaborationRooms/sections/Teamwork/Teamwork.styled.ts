import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledTeamworkText = styled(Text)`
  padding: 24px 0 56px;

  @media ${device.tabletS} {
    font-size: 16px;
    padding-bottom: 32px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    padding-top: 16px;
  }
`;

const StyledTeamworkItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  row-gap: 32px;

  @media ${device.mobile} {
    flex-direction: column;
    row-gap: 24px;
  }
`;

export { StyledTeamworkText, StyledTeamworkItems };
