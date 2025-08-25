import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledFreeCloudWrapper = styled.div`
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  box-shadow: 0 7px 15px 0 rgba(85,85,85,0.1);
  padding: 64px 16px 80px;

  @media ${device.tabletS} {
    padding: 56px 16px 64px;
  }

  @media ${device.mobile} {
    padding: 32px 16px 56px;
  }
`;

const StyledFreeCloudLogo = styled.div`
  width: 150px;
  height: 72px;
  background-image: url("/images/templates/nonprofit-organizations/free-cloud/free-cloud-logo.svg");
  background-repeat: no-repeat;
  background-size: contain;
  margin: 0 auto 16px;
`;

const StyledFreeCloudHeading = styled(Heading)`
  margin-bottom: 16px;
`;

const StyledFreeCloudText = styled(Text)`
  margin-bottom: 16px;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFreeCloudLink = styled(Link)`
  display: block;
  width: fit-content;
  margin: 0 auto 16px;
`;

const StyledFreeCloudImage = styled.div<{
  $url: string;
  $url2x: string;
}>`
  width: 100%;
  height: 504px;
  background-image: url(${({ $url }) => $url});
  background-size: 640px 504px;
  background-repeat: no-repeat;
  background-position: center;
  margin: 0 auto;

  @media ${device.retina} {
    background-image: url(${({ $url2x }) => $url2x});
  }

  @media ${device.tabletS} {
    height: 65vw;
    background-size: 100% auto;
  }
`;

export {
  StyledFreeCloudWrapper,
  StyledFreeCloudLogo,
  StyledFreeCloudHeading,
  StyledFreeCloudText,
  StyledFreeCloudLink,
  StyledFreeCloudImage
};
