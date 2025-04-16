import { device } from "@src/utils/device";
import styled from "styled-components";

const CertificateCardsWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 32px;

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    gap: 32px;
  }

  @media ${device.mobile} {
    gap: 48px;
  }
`;

export { CertificateCardsWrapper };
