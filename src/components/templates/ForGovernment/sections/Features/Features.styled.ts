import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  h2 {
    max-width: 900px;
    margin: auto;
    line-height: 1.33em;

    @media ${device.mobile} {
      font-size: 20px;
    }
  }

  h3 {
    line-height: 1.5em;
    font-size: 18px;
    padding: 0 0 16px;

    @media ${device.mobile} {
      font-size: 16px;
    }
  }

  p {
    padding: 0;
    margin: 24px auto;
    font-size: 16px;
    line-height: 26px;
    color: #808080;
    max-width: 740px;
    text-align: center;
  }

  .featureList {
    line-height: 1.6em;
    color: #666666;
    font-size: 14px;

    &:before {
      content: "";
      position: absolute;
      top: 8px;
      left: 8px;
      width: 6px;
      height: 6px;
      background: #ff6f3d;
      transform: rotate(45deg);
    }
  }

  @media ${device.tablet} {
    text-align: left;

    .featureList {
      padding-left: 16px;

      &::before {
        content: "";
        width: 6px;
        height: 6px;
        top: 10px;
        left: 0;
        margin-right: 24px;
        position: absolute;
        background: #ff6f3d;
        transform: rotate(45deg) translateY(-50%);
      }
    }
  }

  > div {
    padding: 112px 0;

    @media ${device.tabletS} {
      padding: 48px 0 0;
    }

    > div {
      gap: 32px;
      padding-top: 32px;

      @media ${device.tabletS} {
        flex-direction: row-reverse;

        > div > div > div > div {
          a {
            font-size: 14px;
          }
        }
      }

      @media ${device.mobile} {
        flex-direction: column-reverse;
      }

      > div {
        flex: 0 1 544px;
        margin-right: 0;
        position: relative;

        @media ${device.mobile} {
          flex: 0;
        }

        > div {
          height: 100%;
          background-position-y: 50%;
        }
      }
    }
  }

  &:first-child {
    padding-top: 0;
  }

  &:last-child {
    border: none;
    padding-bottom: 0;
  }

  .buttons {
    gap: 32px;
    flex-wrap: nowrap;

    a:nth-child(2) {
      font-size: 14px;
      text-align: left;
    }
  }

  @media ${device.mobile} {
    text-align: left;
    padding: 48px 0;

    .buttons {
      align-items: flex-start !important;
    }

    .featureList {
      padding-left: 16px;
    }
  }
`;

export { StyledFeaturesContent };
