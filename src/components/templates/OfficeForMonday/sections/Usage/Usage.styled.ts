import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledUsageBlock = styled.div`
  max-width: 1120px;
  display: flex;
  margin: auto;
  align-items: center;
  margin-top: 32px;
  padding-bottom: 88px;

  h1 {
    padding-bottom: 24px;
    line-height: 1.22em;
  }

  @media ${device.tabletS} {
    flex-direction: column;
    padding: 0;
  }

  @media ${device.mobile} {
    padding-bottom: 48px;
  }
`;


const StyledUsageContent = styled.div`
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
      padding: 0;
  }
`;

const StyledUsageImage = styled.img`
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

const StyledUsageText = styled.div`
  i {
    font-weight: 700;
  }

  @media ${device.mobile} {
    p {
      padding: 4px 0;
      font-size: 16px;
    }
  }
`;

const StyledUsageContentWhite = styled.div`
  background: #FFFFFF;
  border-radius: 9px;
  padding: 32px;
  gap: 32px;
  display: flex;

  p {
    font-size: 16px;
    text-align: left;
    line-height: 1.5em;
    padding-top: 8px;
  }

  @media ${device.tabletS} {
    flex-direction: column;
    padding: 32px;
  }

  @media ${device.mobile} {
    padding: 24px;

    p {
      font-size: 14px;
    }
  }
`;

export { StyledUsageBlock, StyledUsageContent, StyledUsageImage, StyledUsageContentWhite, StyledUsageText };
