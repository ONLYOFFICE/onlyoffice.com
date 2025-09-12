import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledContactSection = styled(Section)`
  padding: 0;
`;

const StyledContactContainer = styled(Container)`
  padding: 112px 40px;
  background-image: url(${getAssetUrl('/images/templates/education/contact/mail.svg')});
  background-repeat: no-repeat;
  background-position: right center;

  @media ${device.tabletS} {
    padding: 88px 40px;
  }

  @media ${device.mobile} {
    padding: 48px 16px;
    background-image: none;
  }
`;

const StyledContactContect = styled.div`
  display: grid;
  max-width: 100%;
  gap: 16px;
  padding-left: 96px;
  background-image: url(${getAssetUrl('/images/templates/education/contact/icon-mail.svg')});
  background-repeat: no-repeat;

  @media ${device.mobile} {
    padding: 88px 0 0;
    justify-items: center;
    text-align: center;
    background-position: center top;
  }
`;

const StyledContactHeading = styled(Heading)`
  color: #fff;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 21px;
  }
`;

const StyledContactText = styled(Text)`
  color: #fff;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

export {
  StyledContactSection,
  StyledContactContainer,
  StyledContactContect,
  StyledContactHeading,
  StyledContactText,
};
