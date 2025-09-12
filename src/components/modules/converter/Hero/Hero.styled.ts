import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/modules/converter/hero/bg.svg')});
  background-position: top;
  background-repeat: no-repeat;
  overflow: hidden;

  @media ${device.tablet} {
    margin-top: -48px;
  }
`;

const StyledHeroWrapper = styled.div`
  margin: 0 auto;
  max-width: 736px;
`;

const StyledHeroBody = styled.div`
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: -11px;
    right: calc(100% + 16px);
    width: 332px;
    height: 460px;
    background-image: url(${getAssetUrl('/images/modules/converter/hero/decor-left.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tablet} {
      content: none;
    }
  }

  &::after {
    content: "";
    position: absolute;
    top: -11px;
    left: calc(100% + 78px);
    width: 304px;
    height: 480px;
    background-image: url(${getAssetUrl('/images/modules/converter/hero/decor-right.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    pointer-events: none;

    @media ${device.tablet} {
      content: none;
    }
  }
`;

const StyledHeroHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

export { StyledHero, StyledHeroWrapper, StyledHeroBody, StyledHeroHeading };
