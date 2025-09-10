import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledFreeCloud = styled.div`
  background-color: #ffffff;
  padding: 64px;
  border: 1px solid #e2e2e2;
  border-radius: 12px;
  box-shadow: 0 7px 15px 0 rgba(85, 85, 85, 0.1);
  text-align: center;

  @media ${device.tablet} {
    padding: 56px 23px;
  }

  @media ${device.mobile} {
    padding: 32px 0;
  }
`;

const StyledFreeCloudWrapper = styled.div`
  display: grid;
  row-gap: 16px;
  margin: 0 auto 16px;
  width: 100%;
  max-width: 544px;

  @media ${device.mobile} {
    padding: 0 16px;
  }
`;

const StyledFreeCloudTitle = styled(Heading)`
  padding-top: 88px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 72px;
    background-image: url("/images/templates/office-for-educators/sprites/icons.svg");
    background-repeat: no-repeat;
    background-position: -754px center;
  }
`;

const StyledFreeCloudText = styled(Text)`
  font-size: 18px;
  line-height: 150%;
  color: #666;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledFreeCloudLink = styled(Link)`
  @media ${device.mobile} {
    font-size: 14px;
  }
`;

const StyledFreeCloudImage = styled.div<{
  $image: string;
  $image2x: string;
}>`
  margin: 0 auto;
  max-width: 640px;
  width: 100%;
  height: 504px;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    height: auto;
    padding-bottom: 78.75%;
  }

  @media ${device.retina} {
    background-image: ${({ $image, $image2x }) => `url(${$image2x || $image})`};
  }
`;

export {
  StyledFreeCloud,
  StyledFreeCloudWrapper,
  StyledFreeCloudTitle,
  StyledFreeCloudText,
  StyledFreeCloudLink,
  StyledFreeCloudImage,
};
