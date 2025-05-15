import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";

const StyledFeatures = styled(Section)<{
  $image: string;
  $image2x: string;
}>`
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-position: calc(50% + 699px) -8px;
  background-size: 1426px 1023px;

  @media ${device.retina} {
    background-image: url(${({ $image, $image2x }) => $image2x || $image});
  }

  @media ${device.tablet} {
    background-position: -120px calc(100% + 177px);
  }

  @media ${device.mobile} {
    background-size: 150%;
    background-position: 43% bottom;
  }
`;

const StyledFeaturesItems = styled.div`
  display: grid;
  row-gap: 73px;
  max-width: 700px;

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.tabletS} {
    row-gap: 64px;
  }

  @media ${device.mobile} {
    row-gap: 48px;
  }
`;

export { StyledFeatures, StyledFeaturesItems };
