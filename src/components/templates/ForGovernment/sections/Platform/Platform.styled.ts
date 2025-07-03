import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  max-width: 1120px;
  padding-top: 112px;

  img {
    background-size: contain;
    max-width: 736px;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
  }
`;

const StyledWrapperDark = styled.div`
  max-width: 1120px;
  height: 390px;
  background-color: #F5F5F5;

  img {
    background-size: contain;
    max-width: 736px;
    display: inline-block;
    height: 470px;
    position: relative;
    top: -40px;
    width: 470px;
  }

  > div {
    display: inline-block;
    padding: 67px 0;
    vertical-align: top;
    width: 600px;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
  }
`;

const StyledContent = styled.div`
  grid-template-columns: auto 600px;
  gap: 32px;
  align-items: center;
  position: relative;
  max-width: 600px;

  h3 {
    padding: 0 0 32px;
  }

  p {
    font-size: 14px;
    padding: 0 0 16px;
    line-height: 1.6em;
    text-align: left;
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

const StyledPlatformWrapper= styled.div`
  padding: 200px 0 112px;

  h2 {
    padding-bottom: 56px;
  }

  p {
    color: #666666;
    font-size: 18px;
    max-width: 800px;
    margin: auto;
    padding: 0 0 24px;
  }

  img {
    max-width: 1120px;
  }
`

const StyledButtons= styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
  padding: 0 0 80px;
`

export {
  StyledPlatformWrapper,
  StyledWrapperDark,
  StyledWrapper,
  StyledContent,
  StyledButtons
};
