import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSupport = styled(Section)`
  background: url(${getAssetUrl('/images/templates/docspace-enterprise/support/bg.svg')}), linear-gradient(136.1deg, #FFC671 -1.99%, #FF7541 58.57%, #FF6F3D 100%);;
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: 1396px auto, cover;

  @media ${device.mobile} {
    background-size: 640px auto, cover;
  }
`;


const StyledSupportHeading = styled(Heading)`
  &::before {
    content: "";
    background-image: url(${getAssetUrl('/images/templates/docspace-enterprise/support/logo.svg')});
    background-repeat: no-repeat;
    display: block;
    margin: 0 auto 24px;
    text-align: center;
    width: 68px;
    height: 64px;
  }
`;

const StyledSupportText = styled(Text)`
  font-size: 22px;
  line-height: 160%;
  margin: 24px 0 56px;

  @media ${device.tablet} {
    font-size: 18px;
    line-height: 27px;
    margin: 12px 0 56px;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
    margin: 16px 0 28px;
  }
`;

const StyledSupportList = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  justify-content: center;
  column-gap: 32px;
  row-gap: 40px;

  .item__btn {
    border: 1px solid #ffffff;
    color: #fff;
  }

  @media ${device.mobile} {
    grid-template-columns: repeat(1, 1fr);
    row-gap: 20px;
  }
`;

const StyledSupportItemIcon = styled.div<{ $iconUrl: string }>`
  width: 64px;
  height: 64px;
  margin: 0 auto 12px;
  background-image: ${(props) => `url(${props.$iconUrl})`};
  background-size: contain;
  background-repeat: no-repeat;
`;

export {
  StyledSupport,
  StyledSupportItemIcon,
  StyledSupportHeading,
  StyledSupportText,
  StyledSupportList,
};
