import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledTeamworkText = styled(Text)`
  margin: 24px 0 56px;
  font-size: 18px;
  line-height: 27px;

  @media ${device.tabletS} {
    margin-bottom: 32px;
    font-size: 16px;
    line-height: 24px;
  }

  @media ${device.mobile} {
    margin-top: 16px;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledTeamworkItems = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tabletS} {
    row-gap: 24px;
  }
`;

const StyledTeamworkItem = styled.div`
  &:nth-child(even) {
    display: grid;
    grid-template-columns: minmax(296px, 448px) minmax(360px, 640px);
    column-gap: 32px;

    @media ${device.tabletS} {
      grid-template-columns: initial;
      row-gap: 24px;
    }
  }

  &:nth-child(odd) {
    display: grid;
    grid-template-columns: minmax(360px, 640px) minmax(296px, 448px);
    column-gap: 32px;

    @media ${device.tabletS} {
      display: flex;
      flex-direction: column-reverse;
      grid-template-columns: initial;
      row-gap: 24px;
    }
  }
`;

export { StyledTeamworkText, StyledTeamworkItems, StyledTeamworkItem };
