import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeature = styled.section`
  width: 100%;
  height: fit-content;

  .container {
    max-width: 928px;
    padding: 0;
    text-align: center;
    padding-top: 40px;

    @media ${device.tabletS} {
      width: 90vw;
    }

    &__title {
      font-size: 40px;
      font-weight: 700;
      letter-spacing: -0.02em;
      line-height: 1.33em;
      padding: 0 40px;

      @media ${device.tabletS} {
        font-size: 30px;
        letter-spacing: -0.01em;
      }

      @media ${device.mobile} {
        font-size: 20px;
      }
    }

    &__subtitle {
      font-size: 18px;
      font-weight: normal;
      line-height: 160%;
      padding: 24px 0 0;

      @media ${device.tabletS} {
        font-size: 16px;
      }

      @media ${device.mobile} {
        font-size: 14px;
        padding: 16px 0 0;
      }
    }
  }
`;

const StyledFeaturesList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1120px;
  margin: 0 auto;
  row-gap: 48px;
  column-gap: 32px;
  padding: 48px 0;

  @media ${device.mobile} {
    padding: 24px 0;
    flex-direction: column;
    flex-wrap: nowrap;
    align-items: center;
  }

  .item {
    max-width: 352px;

    & > div:first-child {
      width: 96px;
      height: 96px;
    }

    @media ${device.tabletS} {
      &:nth-child(n + 3) {
        max-width: 328px;

        @media ${device.mobile} {
          & {
            max-width: 288px;
          }
        }
      }
    }

    @media screen and (max-width: 1070px) {
      &:nth-child(-n + 3) {
        max-width: 208px;

        @media ${device.mobile} {
          & {
            max-width: 288px;
          }
        }
      }
    }

    &::before {
      width: 96px;
      height: 96px;
    }

    p {
      width: 100%;
      font-size: 18px;
      color: #333333;
      line-height: 150%;

      @media ${device.mobile} {
        font-size: 16px;
      }
    }
  }
`;

const StyledFeatureLink = styled.div`
  text-align: center;
  padding-bottom: 112px;
  font-size: 16px;
  line-height: 150%;

  @media ${device.mobile} {
    padding-bottom: 48px;
    font-size: 14px;
  }
`;

export { StyledFeature, StyledFeaturesList, StyledFeatureLink };
