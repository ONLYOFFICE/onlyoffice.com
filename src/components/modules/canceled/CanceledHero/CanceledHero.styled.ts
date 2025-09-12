import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCanceledSection = styled(Section)`
  position: relative;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledCanceledHeading = styled(Heading)`
  max-width: 480px;

  &.fr {
    @media ${device.mobile} {
      letter-spacing: -0.03em;
    }
  }

  @media ${device.tablet} {
    max-width: 636px;
    margin: 0 auto;
    text-align: center;
    font-size: 36px;
    line-height: 48px;
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledCanceledImage = styled.div`
  position: absolute;
  left: calc(50% - 100px);
  bottom: -25px;
  width: 608px;
  height: 431px;
  background-image: url(${getAssetUrl('/images/modules/canceled/mascot.svg')});
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: contain;
  z-index: 1;

  @media ${device.tablet} {
    left: 50%;
    bottom: -40px;
    width: 567px;
    height: 404px;
    transform: translateX(-50%);
  }

  @media ${device.mobile} {
    bottom: -19px;
    width: 286px;
    height: 200px;
  }
`;

export { StyledCanceledSection, StyledCanceledHeading, StyledCanceledImage };
