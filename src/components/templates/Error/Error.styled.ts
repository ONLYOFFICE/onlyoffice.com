import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledError = styled(Section)`
  display: flex;
  align-items: center;
  min-height: 100vh;
`;

const StyledErrorWrapper = styled.div`
  margin: 0 auto;
  max-width: 530px;
  text-align: center;
`;

const StyledErrorImg = styled.div`
  margin-bottom: 40px;
  padding-bottom: 66.8%;
  width: 100%;
  max-width: 518px;
  background-image: url(${getAssetUrl('/images/templates/error/not-found.svg')});
  background-position: center;
  background-repeat: no-repeat;
  background-size: contain;

  @media ${device.mobile} {
    margin-bottom: 8px;
  }
`;

const StyledErrorHeading = styled(Heading)`
  margin-bottom: 24px;

  @media ${device.mobile} {
    margin-bottom: 16px;
  }
`;

const StyledErrorDescription = styled(Text)`
  margin-bottom: 24px;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

export {
  StyledError,
  StyledErrorWrapper,
  StyledErrorImg,
  StyledErrorHeading,
  StyledErrorDescription,
};
