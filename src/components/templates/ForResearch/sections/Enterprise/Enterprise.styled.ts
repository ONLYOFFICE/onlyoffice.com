import styled from "styled-components";
import { device } from "@src/utils/device";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledEnterpriseWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;

  img {
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;
  }
`;

const StyledEnterpriseContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;
  position: relative;

  h2 {
    color: #808080;
    font-size: 50px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    z-index: 0;
    left: -15px;
    opacity: 0.2;
    top: -16px;
  }

  h3 {
    z-index: 1;
    padding: 0 0 56px;
  }

  p {
    color: #ffffff;
    font-size: 14px;
    padding: 0 0 32px;
    line-height: 1.6em;
    text-align: left;
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
  }

  @media ${device.tablet} {
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.tabletS} {
    grid-template-columns: 1fr;
  }
`;

const StyledEnterpriseImage = styled.div`
  background-image: url(${getAssetUrl('/images/templates/for-research/enterprise/enterprise.svg')});
  background-repeat: no-repeat;
  background-size: contain;
  height: 356px;
  max-width: 612px;
  width: 100%;
`;

const StyledEnterpriseList = styled.ul`
  color: #ffffff;

  li {
    position: relative;
    padding: 0 0 12px 30px;
    font-size: 14px;
    line-height: 1.6em;

    &::before {
      content: "";
      position: absolute;
      top: 9px;
      left: 8px;
      width: 6px;
      height: 6px;
      transform: rotate(45deg);
      background: #ff6f3d;
    }

    &:not(:last-child) {
      margin-bottom: 12px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 24px;
    }
  }
`;

const StyledQuoteWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-top: 112px;

  p, a {
    position: relative;
    z-index: 1;
  }

  a {
    font-size: 14px;
    line-height: 1.6em;
    padding-top: 24px;
    text-align: center;
  }

  img {
    width: 90px;
    padding: 0 0 24px;
    margin: auto;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
  }
`;

const StyledQuoteText = styled.i`
  position: relative;
  display: block;
  font-size: 18px;
  line-height: 1.6em;
  text-align: center;
  z-index: 1;
  color: #cccccc;
  max-width: 550px;
  padding: 0 0 24px;
  margin: auto;

  &::after {
    content: "";
    display: inline-flex;
    position: absolute;
    top: 0;
    left: 50%;
    width: 196px;
    height: 160px;
    background-image: url(${getAssetUrl('/images/templates/for-research/enterprise/dark_quotes.svg')});
    background-repeat: no-repeat;
    background-size: contain;
    transform: translateX(-50%);
    z-index: -1;

    @media ${device.mobile} {
      width: 135px;
      height: 110px;
    }
  }

  @media ${device.mobile} {
    padding-top: 32px;
    font-size: 16px;
    line-height: 25px;
  }
`;



export {
  StyledEnterpriseWrapper,
  StyledEnterpriseContent,
  StyledEnterpriseImage,
  StyledEnterpriseList,
  StyledQuoteWrapper,
  StyledQuoteText
};
