import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledHeroDescription = styled.div`
  margin-bottom: 56px;
  text-align: center;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledHeroText = styled(Text)`
  color: #666666;
  font-size: 18px;
  line-height: 1.6em;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 1.5em;
  }
`;

export {
  StyledHeroDescription,
  StyledHeroHeading,
  StyledHeroText,
};
