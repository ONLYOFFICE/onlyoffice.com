import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

const StyledHowToStart = styled(Section)`
  border-top: 1px solid #e2e2e2;

  h2 {
    margin-bottom: 40px;

    @media ${device.tablet} {
      margin-bottom: 56px;
    }

    @media ${device.mobile} {
      margin-bottom: 32px;
    }
  }
`;

const StyledHowToStartInfo = styled.div`
  margin-top: 72px;
  text-align: center;

  @media ${device.tabletS} {
    margin-top: 48px;
  }

  @media ${device.mobile} {
    margin-top: 24px;
  }
`;

const StyledHowToStartText = styled(Text)`
  margin-bottom: 16px;
`;

export { StyledHowToStart, StyledHowToStartInfo, StyledHowToStartText };
