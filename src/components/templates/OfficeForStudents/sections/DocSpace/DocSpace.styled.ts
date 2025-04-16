import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledDesktopEditorsHeading = styled(Heading)`
  max-width: 928px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 24px;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledDesktopEditorsText = styled(Text)`
  max-width: 736px;
  margin: 0 auto 72px;
  text-align: center;
  font-size: 18px;
  line-height: 150%;

  @media ${device.tabletS} {
    text-align: initial;
  }

  @media ${device.mobile} {
    margin: 0 auto 56px;
    font-size: 14px;
  }
`;

const StyledDesktopEditorsFeatures = styled.div`
  display: grid;
  justify-content: center;
  row-gap: 72px;
  margin-bottom: 72px;

  @media ${device.mobile} {
    row-gap: 56px;
    margin-bottom: 56px;
  }
`;

const StyledButtonWrapper = styled.div`
  text-align: center;
`;

export {
  StyledDesktopEditorsHeading,
  StyledDesktopEditorsText,
  StyledDesktopEditorsFeatures,
  StyledButtonWrapper,
};
