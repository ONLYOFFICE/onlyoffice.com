import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledInfoCard = styled.div`
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  border-radius: 5px;
  width: 100%;
  transition: box-shadow 0.2s;

  &:hover {
    box-shadow: 0px 20px 50px 0px rgba(85, 85, 85, 0.15);
  }
`;

const StyledInfoCardImage = styled.div`
  position: relative;
  width: 100%;
  min-height: 144px;
  background-color: #f9f9f9;

  &:before {
    content: "";
    width: 96px;
    height: 96px;
    position: absolute;
    top: 50%;
    left: 50%;
    background-image: url(${getAssetUrl('/images/templates/affiliates/useful-info/icons.svg')});
    background-repeat: no-repeat;
    transform: translate(-50%, -50%);
  }

  &.marketing-kit:before {
    background-position-x: -140px;
  }

  &.affiliate-policy:before {
    background-position-x: -280px;
  }

  &.contact-us:before {
    background-position-x: -420px;
  }

  &.help-from-oomarketing:before {
    background-position-x: -560px;
  }
`;

const StyledInfoCardContent = styled.div`
  display: flex;
  flex-direction: column;
  padding: 31px;
  height: 100%;
  text-align: center;

  @media ${device.tablet} {
    padding: 23px;
  }

  @media ${device.mobile} {
    padding: 15px;
  }
`;

const StyledInfoCardHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledInfoCardText = styled(Text)`
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledInfoCardLink = styled(Link)`
  margin-top: auto;
  font-size: 16px;
  line-height: 24px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 22px;
  }
`;

export {
  StyledInfoCard,
  StyledInfoCardImage,
  StyledInfoCardContent,
  StyledInfoCardHeading,
  StyledInfoCardLink,
  StyledInfoCardText,
};
