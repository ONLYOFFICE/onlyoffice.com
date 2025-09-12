import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledSupport = styled(Section)`
  background: linear-gradient(136deg, #ffc671 0%, #ff7541 59.38%, #ff6f3d 100%);
`;

const StyledSupportBg = styled.div`
  background-image: url("/images/templates/workspace-enterprise/support/bg.png");
  background-repeat: no-repeat;
  background-size: 2210px auto;
  background-position: 50% 70%;
`;

const StyledSupportContainer = styled(Container)`
  max-width: 736px;
  padding: 112px 40px;

  @media ${device.mobile} {
    padding: 56px 16px 64px;
  }
`;

const StyledSupportHeading = styled(Heading)`
  &::before {
    content: "";
    background-image: url("/images/templates/workspace-enterprise/support/support.svg");
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto 24px;
    text-align: center;
    width: 68px;
    height: 64px;
  }
`;

const StyledSupportText = styled(Text)`
  font-size: 18px;
  line-height: 1.6em;
  margin: 24px 0 0;

  @media ${device.tabletS} {
    font-size: 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;


export {
  StyledSupport,
  StyledSupportBg,
  StyledSupportContainer,
  StyledSupportHeading,
  StyledSupportText,
};
