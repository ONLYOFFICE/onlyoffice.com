import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledFeaturesHeader = styled.div`
  display: flex;
  position: relative;
  align-items: flex-end;
  justify-content: center;
  width: max-content;
  margin: auto;
  padding: 80px 0 32px;

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
  }

  @media ${device.mobile} {
    row-gap: 24px;
  }
`;

const StyledFeaturesItems = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 32px;
  padding: 32px 0 0;

  @media ${device.mobile} {
    padding: 24px 0 0;
  }

  a {
    color: #FF6F3D;
    text-decoration: underline;
    font-size: 14px;
  }

  p {
    color: #666666;
    line-height: 1.6em;
  }

  h5 {
    line-height: 1.33em;
    font-size: 16px;
  }

  > div {
   backgrounf-size: 840px;

    @media ${device.desktop} {
      width: calc(33.333% - 24px);
      max-width: 100%;
    }

    @media ${device.tablet} {
      width: calc(50% - 16px);
    }

    @media ${device.mobile} {
      width: 100%;
    }
  }
`;


const StyledReasonsWrapper = styled.div`
  display: grid;
  align-items: center;
  grid-template-columns: 1fr 1fr;
  column-gap: 32px;
  max-width: 750px;
  margin: auto;

  > div p {
    font-size: 18px;
    padding: 36px 0;
    line-height: 1.6em;
    color: #666666;
  }

  img {
    background-size: contain;
    max-width: 736px;
  }

  @media ${device.tabletS} {
    > div p {
      font-size: 14px;
    }
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    column-gap: initial;
    row-gap: 32px;

    > div {
      padding: 0;

      p {
        padding: 0;
        text-align: center;
        width: 100%;
      }
    }

    img {
      width: 209px;
      display: table;
      margin: auto;
    }
  }
`;

const StyledReasonsContent = styled.div`
  grid-template-columns: 545px auto;
  gap: 32px;
  align-items: center;
  position: relative;

  .mobile {
    display: none;
  }

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
  grid-template-columns: 1fr 1fr;
}

@media ${device.tabletS} {
  grid-template-columns: 1fr;
}

@media ${device.mobile} {
  .mobile {
    display: block;
  }
}
`;


const StyledReasonsList = styled.ul`
  li {
    position: relative;
    padding: 0 0 8px 30px;
    font-size: 16px;
    line-height: 1.6em;
    color: #666666;

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
      font-size: 12px;
      padding: 0 0 0 30px;
    }
  }
`;

const StyledFeaturesText = styled(Text)`
  padding: 24px 0;
  font-size: 18px;

  @media ${device.mobile} {
    font-size: 14px;
    padding: 0;

    &.desktop {
      display: none;
    }

    &.mobile {
      font-color: #333333;
      font-size: 14px;
      padding: 0 0 16px;
    }
  }
`;

export { StyledFeaturesHeader, StyledFeaturesItems, StyledReasonsWrapper, StyledReasonsContent,  StyledReasonsList, StyledFeaturesText };
