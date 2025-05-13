import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const StyledGetMoreHeading = styled(Heading)`
  margin-bottom: 20px;
`;

const StyledGetMoreText = styled(Text)`
  max-width: 830px;
  margin: 0 auto 44px;
`;

const StyledGetMoreImage = styled.div`
  width: 994px;
  aspect-ratio: 1.64;
  background-image: url("/images/templates/office-for-ios/getMore/image.webp");
  background-size: contain;
  background-repeat: no-repeat;
  margin: 0 auto;

  @media ${device.desktop} {
    width: 90vw;
  }
`;

export { StyledGetMoreHeading, StyledGetMoreText, StyledGetMoreImage };
