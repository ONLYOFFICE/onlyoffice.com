import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHeroSection = styled(Section)`
  margin-top: -72px;
  background-image: url(${getAssetUrl('/images/templates/docspace-developer/hero/background.svg')});
  background-position: 100% 0;
  background-repeat: no-repeat;
  background-size: auto;

  @media ${device.tablet} {
    margin-top: -48px;
  }

  @media ${device.tabletS} {
    background-position: 55% -40%;
  }

  @media ${device.mobile} {
    background-position: 40% 0;
    background-size: cover;
  }
`;

const StyledHeroHeading = styled(Heading)`
  @media ${device.tabletS} {
    font-size: 44px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroSpan = styled(Text)`
  font-size: 40px;

  @media ${device.tabletS} {
    font-size: 36px;
  }

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledHeroButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  margin-top: 56px;

  @media ${device.tabletS} {
    margin-top: 44px;
  }

  @media ${device.mobile} {
    flex-direction: column;
    margin-top: 44px;
  }
`;

const StyledHeroVideoWrapper = styled.div`
  width: 100%;
  height: 522px;
  margin-top: 56px;

  @media ${device.tablet} {
    height: 46vw;
  }
`;

const StyledHeroVideoIframe = styled.iframe`
  width: 100%;
  height: 100%;
`;

export {
  StyledHeroSection,
  StyledHeroHeading,
  StyledHeroSpan,
  StyledHeroButtonsWrapper,
  StyledHeroVideoWrapper,
  StyledHeroVideoIframe,
};