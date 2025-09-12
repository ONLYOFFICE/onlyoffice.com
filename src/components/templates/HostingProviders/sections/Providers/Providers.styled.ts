import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledProvidersWrapper = styled.div`
  display: grid;
  gap: 32px;
  margin-bottom: 56px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }

  @media (max-width: 374px) {
    margin: 0 -16px 24px;
  }
`;

const StyledAboutWrapper = styled.div`
  width: 100%;
  display: inline-flex;
  justify-content: center;
  gap: 70px;

  @media (max-width: 1120px) {
    width: 90vw;
    margin: 0px auto;
    gap: 5px;
  }

  @media (max-width: 920px) {
    display: grid;
    justify-items: center;
    gap: 24px;
  }
`;

const StyledAbout = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 16px;
  font-weight: 700;
  line-height: 1.5em;
  gap: 8px;
  position: relative;

  &::before {
    content: "";
    display: inline-block;
    width: 62px;
    height: 62px;
    background-image: url(${getAssetUrl('/images/templates/hosting-providers/providers/about_icons.svg')});
    background-repeat: no-repeat;
    background-position-x: 0;

    @media (max-width: 920px) {
      display: block;
      margin: 0px auto;
    }
  }

  &:last-child {
    &::before {
      background-position-x: -64px;
    }
  }

  @media (max-width: 920px) {
    display: block;
    text-align: center;
  }

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export { StyledProvidersWrapper, StyledAboutWrapper, StyledAbout };
