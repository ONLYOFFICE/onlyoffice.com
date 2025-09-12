import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHowToStart = styled(Section)`
  border-top: 1px solid #e2e2e2;
  scroll-margin-top: 72px;

  h2 {
    margin-bottom: 72px;

    @media ${device.tablet} {
      margin-bottom: 56px;
    }

    @media ${device.mobile} {
      margin-bottom: 32px;
    }
  }

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;

const StyledHowToStartInfo = styled.div`
  margin: 72px auto 0;
  text-align: center;

  @media ${device.tabletS} {
    margin: 56px auto 0;
  }

  @media ${device.mobile} {
    margin: 32px auto 0;
  }
`;

const StyledHowToStartText = styled(Text)`
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 12px;
    width: 20px;
    height: 20px;
    vertical-align: middle;
    background-image: url(${getAssetUrl('/images/templates/office-for-wordpress/how-to-start/github.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
  }
`;

export { StyledHowToStart, StyledHowToStartInfo, StyledHowToStartText };
