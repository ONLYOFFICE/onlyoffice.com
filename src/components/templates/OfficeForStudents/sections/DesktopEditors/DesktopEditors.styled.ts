import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledDesktopEditorsHeading = styled(Heading)`
  max-width: 790px;
  margin: 0 auto;
  text-align: center;
  margin-bottom: 24px;
  line-height: 133%;

  @media ${device.tabletS} {
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledDesktopEditorsText = styled(Text)`
  max-width: 736px;
  margin: 0 auto;
  text-align: center;
  font-size: 18px;
  line-height: 150%;

  @media ${device.tabletS} {
    text-align: start;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledDesktopEditorsFeatures = styled.div`
  margin: 72px 0;
  display: grid;
  gap: 72px;
  justify-content: center;

  @media ${device.mobile} {
    margin: 56px 0;
    gap: 56px;
  }
`;

const StyledButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;

export {
  StyledDesktopEditorsHeading,
  StyledDesktopEditorsText,
  StyledDesktopEditorsFeatures,
  StyledButtonWrapper,
};
