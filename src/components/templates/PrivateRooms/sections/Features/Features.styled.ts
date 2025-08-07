import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledHeading = styled.div`
    font-weight: bold;
    font-size: 32px;
    line-height: 1.33em;
    margin: 0 auto;
    padding: 0 0 80px;
    text-align: center;

  @media ${device.tabletS} {
    font-size: 30px;
    margin: 0 auto 56px;
    padding: 0;
  }

  @media ${device.mobile} {
    font-size: 20px;
    margin: 0 auto 32px;
  }
`;

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 56px 32px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    gap: 32px;
  }

  .feature-item {
    text-align: left;
    justify-items: flex-start;
    row-gap: 32px;

    @media ${device.mobile} {
      row-gap: 16px;
    }

    h5 {
      margin-bottom: 8px;

      @media ${device.mobile} {
        font-size: 16px;
      }
    }

    p {
      font-size: 14px;

      @media ${device.mobile} {
        font-size: 13px;
      }
    }

    div:first-of-type {
      background-size: cover;
      height: 72px;
      width: 72px;

      @media ${device.mobile} {
        height: 56px;
        width: 56px;
      }
    }

    &:nth-child(2) div {
        background-position-x: -236px;

        @media ${device.mobile} {
          background-position-x: -184px;
        }
      }

    &:nth-child(3) div {
        background-position-x: -119px;
        
        @media ${device.mobile} {
          background-position-x: -92px;
        }
      }

    &:nth-child(4) div {
        background-position-x: -357px;

        @media ${device.mobile} {
          background-position-x: -277px;
        }
      }
  }
`;

export {
    StyledHeading,
    StyledFeatures
}
