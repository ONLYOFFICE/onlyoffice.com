import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledFeaturesContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;

  h2 {
    max-width: 900px;
    margin: auto;
  }

  h3 {
    line-height: 1.5em;
    font-size: 18px;
    padding: 0 0 16px;
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

  .featureList{
    line-height: 1.6em;
    color: #666666;
    font-size: 14px;
    
    &:before {
      content: "";
      position: absolute;
      top: 10px;
      left: 8px;
      width: 6px;
      height: 6px;
      background: #ff6f3d;
      transform: rotate(45deg) translateY(-50%);
  }
}

  > div {
    padding: 112px 0;

    > div {
      gap: 32px; 
      padding-top: 32px;

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
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledFeatures = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 32px;
  margin-bottom: 72px;

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }

  @media ${device.mobile} {
    margin-bottom: 56px;
  }
`;

export {
  StyledFeaturesContent
};
