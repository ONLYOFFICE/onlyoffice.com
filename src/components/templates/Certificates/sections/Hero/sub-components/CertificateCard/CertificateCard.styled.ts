import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledCertificateCard = styled.div`
  display: grid;
  grid-template-columns: 250px auto;
  align-items: start;

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledCertificateCardImageWrapper = styled.div`
  border: 1px solid #e2e2e2;
  padding: 8px;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.1);
  position: relative;
  transition: visibility 0.2s;

  &:hover,
  &:focus-within {
    > div {
      visibility: visible;
    }
  }

  @media ${device.mobile} {
    max-width: 234px;
    width: 100%;
    margin: 0 auto;
    padding: 0;
    border: none;
  }
`;

const StyledCertificateCardImage = styled.div<{
  $imgUrl: string;
  $imgHeight: number;
}>`
  background-image: url(${({ $imgUrl }) => $imgUrl});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;
  padding-bottom: ${({ $imgHeight }) =>
    `${((234 * $imgHeight) / 570).toFixed(0)}px`};

  @media ${device.mobile} {
    height: ${({ $imgHeight }) => `${((234 * $imgHeight) / 570).toFixed(0)}px`};
  }
`;

const StyledCertificateCardImageIconWrapper = styled.div`
  visibility: hidden;
  position: absolute;
  bottom: 21px;
  left: 50%;
  transform: translateX(-50%);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  justify-content: center;

  @media ${device.mobile} {
    visibility: visible;
    grid-template-columns: 1fr;
    bottom: 30px;
    gap: 0;
  }
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

  &.view {
    background-image: url("/images/icons/eye-white.svg");

    @media ${device.mobile} {
      display: none;
    }
  }

  &.download {
    background-image: url("/images/icons/download-white.svg");
  }

  @media ${device.mobile} {
    width: 32px;
    height: 32px;
  }
`;

const StyledCertificateCardContent = styled.div`
  padding: 24px;

  @media ${device.mobile} {
    padding: 24px 16px 16px;
  }
`;

const StyledCertificateCardDate = styled.span`
  display: inline-block;
  font-size: 13px;
  line-height: 20px;
  color: #666666;
  margin-bottom: 8px;
  letter-spacing: -0.01em;
`;

const StyledCertificateCardHeading = styled(Heading)`
  font-size: 18px;
  margin-bottom: 32px;

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledCertificateCardLearnMore = styled(Link)`
  font-size: 14px;
  line-height: 18px;
  font-weight: 400;
`;

const StyledCertificateCardProduct = styled.span`
  display: block;
  font-size: 13px;
  font-weight: 600;
  line-height: 18px;
  color: #aaa;
  margin-bottom: 8px;

  @media ${device.tabletS} {
    font-size: 13px;
  }
`;

const StyledCertificateCardProductLink = styled(Link)`
  font-size: 14px;
  line-height: 23px;

  @media ${device.tabletS} {
    line-height: 21px;
  }
`;

export {
  StyledCertificateCard,
  StyledCertificateCardImageWrapper,
  StyledCertificateCardImageIconWrapper,
  StyledCertificateCardImageIcon,
  StyledCertificateCardImage,
  StyledCertificateCardContent,
  StyledCertificateCardDate,
  StyledCertificateCardHeading,
  StyledCertificateCardLearnMore,
  StyledCertificateCardProduct,
  StyledCertificateCardProductLink,
};
