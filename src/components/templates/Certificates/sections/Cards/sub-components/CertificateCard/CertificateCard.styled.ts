import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCertificateCard = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  align-items: start;

  @media ${device.tablet} {
    padding: 16px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    padding: 8px;
  }
`;

const StyledCertificateCardIcons = styled.div<{ $isFocused: boolean }>`
  position: absolute;
  left: 50%;
  bottom: 21px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  column-gap: 12px;
  transform: translateX(-50%);
  opacity: ${(props) => (props.$isFocused ? 1 : 0)};
  transition: opacity 0.2s;

  @media ${device.mobile} {
    bottom: 27px;
    grid-template-columns: initial;
    opacity: 1;
  }
`;

const StyledCertificateCardImageWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  border: 1px solid #e2e2e2;
  padding: 7px;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

  img {
    max-width: 100%;
  }

  &:hover {
    ${StyledCertificateCardIcons} {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    margin: 0 auto;
    max-width: 234px;
  }
`;

const StyledCertificateCardViewBtn = styled.button`
  border: none;
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(51, 51, 51, 0.6);
  background-image: url("/images/icons/eye-white.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledCertificateCardDownloadBtn = styled.a`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: rgba(51, 51, 51, 0.6);
  background-image: url("/images/icons/download-white.svg");
  background-repeat: no-repeat;
  background-position: center;
  transition: background-color 0.2s;
  cursor: pointer;

  &:hover {
    background-color: rgba(51, 51, 51, 0.7);
  }

  @media ${device.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const StyledCertificateCardContent = styled.div`
  display: grid;
  row-gap: 32px;
  padding: 24px;

  @media ${device.mobile} {
    row-gap: 24px;
    padding: 24px 16px 16px;
  }
`;

const StyledCertificateCardItem = styled.div`
  display: grid;
  row-gap: 8px;
`;

export {
  StyledCertificateCard,
  StyledCertificateCardImageWrapper,
  StyledCertificateCardIcons,
  StyledCertificateCardViewBtn,
  StyledCertificateCardDownloadBtn,
  StyledCertificateCardContent,
  StyledCertificateCardItem,
};
