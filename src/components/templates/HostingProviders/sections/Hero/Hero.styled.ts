import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroWrapper = styled.div`
  max-width: 723px;
  margin: 0 auto;
  text-align: center;
  display: grid;
  gap: 24px;

  @media ${device.tabletS} {
    max-width: 100%;
  }

  @media ${device.mobile} {
    gap: 16px;
  }
`;

const StyledHeroHeading = styled(Heading)`
  padding-top: 98px;
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 280px;
    height: 74px;
    background-image: url(${getAssetUrl('/images/templates/hosting-providers/hero/hero-icon.svg')});
    background-repeat: no-repeat;
  }

  @media ${device.mobile} {
    padding-top: 90px;
  }
`;

export { StyledHeroWrapper, StyledHeroHeading };
