import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  > div:first-child h2 {
    padding: 0 0 72px;

    @media ${device.tabletS} {
      padding: 0 0 48px;
    }
    @media ${device.mobile} {
      padding: 0 0 24px;
    }
  }

  h2 {
    max-width: 740px;
    margin: auto;
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

  li {
    line-height: 26px;

    img {
      filter: grayscale(1);
    }
  }

  > div {
    padding: 112px 0 48px;

    @media ${device.mobile} {
      padding: 48px 0;
    }

    &:first-child {
      padding-top: 0;
    }

    &:last-child {
      border: none;
      padding-bottom: 0;
    }

    @media ${device.tablet} {
      text-align: left;

      .featureList {
        padding-left: 32px;

        &::before {
          content: "";
          width: 6px;
          height: 6px;
          left: 0;
          margin-right: 20px;
          position: absolute;
          background: #ff6f3d;
          transform: rotate(45deg) translateY(-50%);
        }
      }
    }
  }

  .featureList::before {
    top: 12px;
  }

  .buttons > *:first-child {
    width: 100%;
    text-align: left;
  }

  .buttons {
    flex-wrap: wrap;
    gap: 16px;
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;

    p {
      font-size: 14px;
    }

    .item {
      flex-direction: column-reverse !important;

      > div {
        flex: 0;
      }
    }
  }

  @media ${device.mobile} {
    div {
      font-size: 14px;
    }

    .buttons {
      flex-direction: column !important;
    }
  }
`;

export { StyledFeaturesContent };
