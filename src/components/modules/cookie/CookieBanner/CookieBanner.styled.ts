import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCookieBannerHeading = styled(Heading)`
  display: flex;
  align-items: center;
  gap: 16px;
  &:before {
    content: "";
    display: block;
    width: 24px;
    height: 24px;
    background-image: url(${getAssetUrl("/images/icons/cookie.svg")});
    background-position-x: 50%;
    background-repeat: no-repeat;
  }
`;

const StyledCookieBannerHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const StyledCookieFab = styled.div`
  background-color: #ffffff;
  background-image: url(${getAssetUrl("/images/icons/cookie.svg")});
  background-position: center;
  background-repeat: no-repeat;
  background-size: 24px auto;
  border: 1px solid #cccccc;
  border-radius: 45px;
  bottom: 13px;
  box-shadow: 0px 7px 15px 0px #5555551a;
  cursor: pointer;
  height: 48px;
  position: fixed;
  right: 130px;
  width: 48px;
  z-index: 1000;

  @media ${device.mobile} {
    right: 78px;
  }
`;

const StyledCookieBanner = styled.div`
  background-color: #ffffff;
  border: 1px solid #cccccc;
  border-radius: 5px;
  box-shadow: 0px 7px 15px 0px #5555551a;
  display: flex;
  flex-direction: column;
  gap: 24px;
  padding: 32px;
  text-align: left;
  position: fixed;
  max-width: 1000px;
  width: 100%;
  z-index: 1000;
  margin: auto;
  left: 0;
  right: 0;
  bottom: 36px;
  box-sizing: border-box;

  @media ${device.tablet} {
    max-width: calc(100% - 80px);
  }

  @media ${device.mobile} {
    bottom: 0px;
    max-width: 100%;
    padding: 16px;
    gap: 16px;

    > p {
      font-size: 13px;
    }
  }
`;

const ButtonsArea = styled.div`
  display: flex;
  gap: 8px;

  > button {
    min-width: 128px;
  }

  @media ${device.mobile} {
    flex-wrap: wrap;
    #accept-all {
      order: 2;
      flex: 1 1 100%;
    }
    #decline-all,
    #settings {
      order: 1;
      flex: 1 1 10%;
    }
  }
`;

const StyledCross = styled.div`
  cursor: pointer;
  content: "";
  width: 24px;
  height: 24px;
  background-image: url(${getAssetUrl("/images/icons/cross.svg")});
  background-position: center;
  background-repeat: no-repeat;
`;

export {
  StyledCookieFab,
  StyledCookieBannerHeading,
  StyledCookieBanner,
  ButtonsArea,
  StyledCookieBannerHeader,
  StyledCross,
};
