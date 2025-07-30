import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledImproveHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledImproveItems = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 40px 32px;
  margin-bottom: 56px;

  @media ${device.tabletS} {
    gap: 56px 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    gap: 24px;
    margin-bottom: 48px;
  }
`;

const StyledImproveText = styled(Text)`
  margin-bottom: 16px;

  @media ${device.tabletS} {
    margin-bottom: 24px;
  }

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledImproveSocialIcons = styled.div`
  .social-icons-list {
    gap: 24px;

    @media ${device.mobile} {
      gap: 16px 24px;
    }
  }
`;

export {
  StyledImproveHeading,
  StyledImproveItems,
  StyledImproveText,
  StyledImproveSocialIcons,
};
