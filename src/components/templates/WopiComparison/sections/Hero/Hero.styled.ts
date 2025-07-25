import styled from "styled-components";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledHeaderWrapper = styled(Section)`
  margin-top: -72px;
  text-align: center;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeaderSubheader = styled(Text)`
  font-size: 22px;
  line-height: 1.5em;
  max-width: 622px;
  margin: 32px auto 0;

  @media ${device.tabletS} {
    font-size: 18px;
    margin: 24px auto 0;
  }

  @media ${device.mobile} {
    font-size: 16px;
    margin: 16px auto 0;
  }
`;

const StyledHeaderParagraph = styled(Text)`
  max-width: 576px;
  line-height: 1.5em;
  margin: 32px auto 0;
  font-size: 16px;

  @media ${device.tabletS} {
    font-size: 14px;
    margin: 40px auto 0;
  }

  @media ${device.mobile} {
    font-size: 12px;
    margin: 32px auto 0;
  }
`;

export {
  StyledHeaderWrapper,
  StyledHeaderSubheader,
  StyledHeaderParagraph,
};
