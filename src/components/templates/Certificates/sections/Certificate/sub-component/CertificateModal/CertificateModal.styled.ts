import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCertificateModal = styled.div`
  display: grid;
  grid-template-columns: 570px 48px;
  gap: 10px;
  align-items: start;
`;

const StyledCertificateModalImageWrapper = styled.div`
  position: relative;
  transition: visibility 0.2s;

  &:hover {
    .image-icon {
      visibility: visible;
    }
  }
`;

const StyledCertificateModalIconWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 70px;
  height: 48px;
  left: 50%;
  transform: translateX(-50%);
`;

const StyledCertificateCardImageIcon = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #333;
  opacity: 0.6;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;

  &.download {
    background-image: url("/images/icons/download-white.svg");

    @media ${device.mobile} {
      display: none;
    }
  }

  &.close {
    background-image: url("/images/icons/cross-white.svg");
  }
`;

const StyledCertificateModalImage = styled.div<{
  $imgUrl: string;
  $imgHeight: number;
}>`
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  height: ${({ $imgHeight }) => `${$imgHeight}px`};
`;

export {
  StyledCertificateModal,
  StyledCertificateModalImageWrapper,
  StyledCertificateModalImage,
  StyledCertificateCardImageIcon,
  StyledCertificateModalIconWrapper,
};
