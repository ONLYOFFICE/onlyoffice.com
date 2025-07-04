import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

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
    padding: 112px 0;

    > div {
      gap: 32px; 

      > div {
        flex: 0 1 544px;
        margin-right: 0;
      }
    }

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
      align-items: flex-start !important;
    }
  }
`;


export {
  StyledFeaturesContent
};
