import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledReasonsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  max-width: 1120px;
  padding-top: 112px;

  img {
    background-size: contain;
    max-width: 736px;
    width: 100%;
  }

  @media ${device.tablet} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 56px;
  }

  @media ${device.mobile} {
    padding-top: 48px;
  }
`;

const StyledReasonsContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;
  position: relative;
  max-width: 448px;

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

  @media ${device.tablet} {
    grid-template-columns: 1fr;
    max-width: 100%;
  }
`;

const StyledImageContent = styled.div`
  display: grid;
  grid-template-columns: 3fr 3fr 3fr;
  max-width: 600px;
  gap: 24px 80px;

  a {
    background-repeat: no-repeat;
    display: block;
    height: 56px;
    margin: 0 auto;
    filter: grayscale(1);

    &:hover {
      filter: grayscale(0);
      transition: filter 0.3s ease;
    }
  }

  @media ${device.tablet} {
    max-width: 100%;
  }

  @media ${device.tabletS} {
    gap: 24px 24px;
    margin: auto;
    grid-template-columns: 1fr 1fr;
  }

  @media ${device.mobile} {
    gap: 24px 24px;
    margin: auto;
    grid-template-columns: 1fr;
  }
`;

const StyledReasonsButtons = styled.div`
  align-items: center;
  display: flex;
  gap: 32px;
  padding-top: 32px;

  @media ${device.mobile} {
    flex-direction: column;
  }
`;

const StyledHeadingText = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  margin: auto;
  padding-top: 64px;

  @media ${device.mobile} {
    width: 100%;
  }

  h2 {
    color: #808080;
    font-size: 50px;
    font-weight: 700;
    line-height: 1;
    position: absolute;
    z-index: 0;
    left: -15px;
    opacity: 0.2;
  }

  h3 {
    z-index: 1;
    text-align: center;
  }
`;

const StyledReasonsList = styled.ul`
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

  @media ${device.mobile} {
    padding-top: 72px;
  }

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
    width: 113px;
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
  max-width: 650px;
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
    background-image: url("/images/templates/for-research/reasons/quotes_white.svg");
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
    padding-top: 55px;
    font-size: 16px;
    line-height: 25px;
  }
`;

export {
  StyledReasonsWrapper,
  StyledReasonsContent,
  StyledHeadingText,
  StyledReasonsList,
  StyledReasonsButtons,
  StyledImageContent,
  StyledQuoteWrapper,
  StyledQuoteText
};
