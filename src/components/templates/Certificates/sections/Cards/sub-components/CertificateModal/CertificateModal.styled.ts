import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledCertificateModal = styled.div`
  display: flex;
  align-items: start;
`;

const StyledCertificateModalWrapper = styled.div`
  position: relative;
  margin-right: 10px;

  img {
    max-width: 100%;
  }
`;

const StyledCertificateCardDownloadBtn = styled.a`
  position: absolute;
  bottom: 70px;
  height: 48px;
  left: 50%;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-image: url(${getAssetUrl('/images/icons/download-white.svg')});
  background-color: rgba(51, 51, 51, 0.6);
  background-repeat: no-repeat;
  background-position: center;
  transform: translateX(-50%);
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledCertificateCardCloseBtn = styled.button`
  border: none;
  border-radius: 50%;
  width: 48px;
  height: 48px;
  background-color: rgba(51, 51, 51, 0.6);
  background-image: url(${getAssetUrl('/images/icons/cross-white.svg')});
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
  }
`;

export {
  StyledCertificateModal,
  StyledCertificateModalWrapper,
  StyledCertificateCardDownloadBtn,
  StyledCertificateCardCloseBtn,
};
