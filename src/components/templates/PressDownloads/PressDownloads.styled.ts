import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const PressDownloadsTemplateStyled = styled.div`
  background-image: url(${getAssetUrl('/images/templates/press-downloads/bg.svg')});
  background-repeat: no-repeat;
  background-position: 50% 0;
  background-color: #f9f9f9;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

export { PressDownloadsTemplateStyled };
