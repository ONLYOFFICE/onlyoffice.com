import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledDocSpaceRegistrationProxyImage = styled.div`
  margin: 0 auto 40px;
  width: 100%;
  max-width: 610px;
  height: 430px;
  background-image: url(${getAssetUrl('/images/templates/docspace-registration-proxy/proxy-error.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  @media ${device.tabletS} {
    max-width: 430px;
    height: 300px;
  }

  @media ${device.mobile} {
    margin: 0 auto 32px;
    padding-bottom: 53.704%;
    max-width: 330px;
    height: 100%;
  }
`;

const StyledDocSpaceRegistrationProxyWrapper = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  text-align: center;

  @media ${device.tabletS} {
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;
  }
`;

const StyledDocSpaceRegistrationProxyText = styled.div`
  font-size: 16px;
  line-height: 22px;
  color: #333333;

  br {
    @media ${device.mobile} {
      display: none;
    }
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 21px;
  }
`;

const StyledDocSpaceRegistrationProxyError = styled.div`
  display: none;
`;

export {
  StyledDocSpaceRegistrationProxyImage,
  StyledDocSpaceRegistrationProxyWrapper,
  StyledDocSpaceRegistrationProxyText,
  StyledDocSpaceRegistrationProxyError,
};
