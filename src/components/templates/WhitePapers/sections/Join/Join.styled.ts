import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledJoinSection = styled(Section)`
  background-image: url(${getAssetUrl('/images/templates/whitepapers/join/leaf-bg.svg')}),linear-gradient(135deg,#FFC671 0%,#FF7541 64.06%,#FF6F3D 100%);
  background-position: 50% 40%;
  background-repeat: no-repeat;
`;

const StyledJoinIcon = styled.div`
  width: 64px;
  height: 53px;
  background-image: url(${getAssetUrl('/images/icons/world.svg')});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  margin: 0 auto;
`;

const StyledJoinHeading = styled(Heading)`
  margin: 48px auto;
  max-width: 458px;

  @media ${device.mobile} {
    font-size: 16px;
    margin: 32px auto;
  }
`;

const StyledTextNoWrap = styled(Text)`
  white-space: nowrap;
`;

const StyledJoinButton = styled(Button)`
  display: block;
  width: fit-content;
  background-color: transparent;
  border: 1px solid #FFFFFF;
  color: #fff;
  margin: 0 auto;
  padding: 21px 26px;
  transition-duration: 300ms;
  text-transform: uppercase;
  font-size: 13px;
  font-weight: 600;

  &:hover {
    background-color: #fff;
    color: #000;
  }

  @media ${device.mobile} {
    width: 100%;
    font-size: 12px;
    text-align: center;
  }
`;

export {
  StyledJoinSection,
  StyledJoinIcon,
  StyledJoinHeading,
  StyledTextNoWrap,
  StyledJoinButton,
};