import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledJoinIcon = styled.div`
  background-image: url(${getAssetUrl('/images/templates/find-partners/join/join-icon.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  width: 75px;
  height: 75px;
  margin: 0 auto 20px;

  @media ${device.mobile} {
    width: 48px;
    height: 48px;
  }
`;

const StyledJoinHeading = styled(Heading)`
  margin-bottom: 40px;

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledJoinButton = styled.div`
  width: fit-content;
  margin: 0 auto;
`;

export { StyledJoinIcon, StyledJoinHeading, StyledJoinButton };