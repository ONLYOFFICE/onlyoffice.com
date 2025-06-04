import styled from "styled-components";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledAwardFooter = styled.div``;

const StyledAwardFooterImgLink = styled(Link)`
  display: block;
  width: 172px;
  height: 172px;
  margin: 0 auto;
  background-image: url("/images/templates/office-for-android/award/award.webp");
  background-repeat: no-repeat;
  background-size: contain;
`;

const StyledAwardFooterHeading = styled(Heading)`
  margin-top: 30px;

  @media ${device.tabletS} {
    font-size: 32px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledAwardFooterText = styled(Text)`
  margin-top: 20px;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export {
  StyledAwardFooter,
  StyledAwardFooterImgLink,
  StyledAwardFooterHeading,
  StyledAwardFooterText,
};
