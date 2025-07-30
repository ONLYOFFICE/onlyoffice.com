import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledInstallationBlock = styled.div`
  max-width: 1120px;
  display: flex;
  margin: auto;
  align-items: center;

  h2 {
    padding-bottom: 24px;
    line-height: 1.22em;
  }
    
  @media ${device.tabletS} {
    flex-direction: column;
    padding: 0;
  }
`;


const StyledInstallationContent = styled.div`
  max-width: 1120px;
  display: flex;
  margin: auto;
  align-items: center;
  padding: 0;

  p {
    font-size: 18px;
    line-height: 1.5em;
    padding: 8px 0;
  }

  span {
    color: #4781D1;
    font-weight: 700;
  }

  @media ${device.tabletS} {
    flex-direction: column;
  }
`;

const StyledInstallationImage = styled.img`
  max-width: 650px;
  max-height: 524px;
  width: 100%;

  @media ${device.desktop} {
    width: 50%;
  }

  @media ${device.tabletS} {
    width: 100%;
  }
`;

const StyledInstallationText = styled.div`
  @media ${device.mobile} {
    h2 {
      padding-bottom: 20px;
      font-size: 24px;
    }
    p {
      padding: 4px 0;
      font-size: 16px;
    }
  }
`;

export { StyledInstallationBlock, StyledInstallationContent, StyledInstallationText, StyledInstallationImage };
