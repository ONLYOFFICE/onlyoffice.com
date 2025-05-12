import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { 
  StyledFeatureImageItemImgWrapper,
  StyledFeatureImageItemImg,
  StyleFeatureImageItemContent
 } from "@src/components/widgets/FeatureImageItem/FeatureImageItem.styled";

const StyledAuthenticationHeading = styled(Heading)`
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    margin: 0 auto;
    margin-bottom: 52px;
    text-align: center;

    @media ${device.desktop} {
        width: 90vw;
    }

    @media ${device.tabletS} {
        font-size: 30px;
        letter-spacing: -0.01em;
        margin-bottom: 22px;
    }

    @media ${device.mobile} {
        font-size: 20px;
    }
`;

const StyledAuthenticationFeatures = styled.div`
  display: grid;
  row-gap: 48px;

  @media ${device.tabletS} {
    row-gap: 23px;
  }

  @media ${device.mobile} {
    gap: 23px;
    padding-bottom: 48px;
  }

  .auth-item-1 ${StyledFeatureImageItemImgWrapper} {
    width: 282px;
  }
  .auth-item-1 ${StyledFeatureImageItemImg} {
    background-position: 0 12px;
    background-size: auto;
  }
  @media ${device.tabletS} {
    .auth-item-1 ${StyledFeatureImageItemImgWrapper} {
      width: 282px;
    }
    .auth-item-1 ${StyledFeatureImageItemImg} {
      background-position: 0 10px;
      background-size: inherit;
    }
  }
  @media ${device.mobile} {
    .auth-item-1 ${StyledFeatureImageItemImgWrapper} {
      width: 70%;
    }
    .auth-item-1 ${StyledFeatureImageItemImg} {
      background-position: 0px 10px;
      background-size: 188vw;
    }
  }

  .auth-item-2 ${StyledFeatureImageItemImgWrapper} {
    width: 337px;
  }
  .auth-item-2 ${StyledFeatureImageItemImg} {
    background-position: -476px 24px;
    background-size: auto;
  }

  @media ${device.tabletS} {
    .auth-item-2 ${StyledFeatureImageItemImgWrapper} {
      height: 168px;
      width: 44vw;
  }
  .auth-item-2 ${StyledFeatureImageItemImg} {
    background-position: -64vw -2.5vw;
    background-size: 111vw;
  }
  }

  @media ${device.mobile} {
    .auth-item-2 ${StyledFeatureImageItemImgWrapper} {
      height: 225px;
      width: 71.5vw;
  }
  .auth-item-2 ${StyledFeatureImageItemImg} {
    background-position: -112.5vw -3vw;
    background-size: 188vw;
  }
  }

  @media ${device.mobileS} {
    .auth-item-2 ${StyledFeatureImageItemImgWrapper} {
      height: 38vw;
  }
  }

  .auth-item-3 ${StyledFeatureImageItemImgWrapper} {
    width: 312px;
  }
  .auth-item-3 ${StyledFeatureImageItemImg} {
    background-position: -28px -400px;
    background-size: auto;
  }

  @media ${device.tabletS} {
    .auth-item-3 ${StyledFeatureImageItemImgWrapper} {
      height: 168px;
      width: 44vw;
  }
  .auth-item-3 ${StyledFeatureImageItemImg} {
    background-position: -2vw -56.5vw;
    background-size: 111vw;
  }
  }

  @media ${device.mobile} {
    .auth-item-3 ${StyledFeatureImageItemImgWrapper} {
      height: 225px;
      width: 71.5vw;
  }
  .auth-item-3 ${StyledFeatureImageItemImg} {
    background-position: -5.5vw -95vw;
    background-size: 188vw;
  }
  }

  @media ${device.mobileS} {
    .auth-item-3 ${StyledFeatureImageItemImgWrapper} {
      height: 38vw;
  }
  }

  .auth-item-4 ${StyledFeatureImageItemImgWrapper} {
    width: 339px;
  }
  .auth-item-4 ${StyledFeatureImageItemImg} {
    background-position: -512px -382px;
    background-size: auto;
  }

  @media ${device.tabletS} {
    .auth-item-4 ${StyledFeatureImageItemImgWrapper} {
      height: 270px;
      width: 45.2vw;
  }
  .auth-item-4 ${StyledFeatureImageItemImg} {
    background-position: -66vw -49vw;
    background-size: 111vw;
  }
  }

  @media ${device.mobile} {
    .auth-item-4 ${StyledFeatureImageItemImgWrapper} {
      height: 325px;
      width: 75vw;
  }
  .auth-item-4 ${StyledFeatureImageItemImg} {
    background-position: -113vw -84vw;
    background-size: 188vw;
  }
  }

  @media ${device.mobileS} {
    .auth-item-4 ${StyledFeatureImageItemImgWrapper} {
      height: 38vw;
  }
  }
`;

const StyledFeatureImageItem = styled(FeatureImageItem)`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  h3 {
    font-size: 18px;
  }
  
  p {
    color: #333;
    font-size: 14px;
  }

  @media ${device.tabletS} {
    grid-template-columns: initial;
    row-gap: 24px;
  }

  @media ${device.mobile} {
    row-gap: 16px;

    h3 {
      font-size: 16px;
      margin-bottom: 8px;
    }
  }
`;

const StyledFeatureItemText = styled.span`
  display: inline-block;
  line-height: 1.5em;
  margin-bottom: 16px;

  &:last-child {
    margin-bottom: 0;
  }

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 1.6em;
    margin-bottom: 8px;
  }
`;

export { 
    StyledAuthenticationHeading,
    StyledAuthenticationFeatures,
    StyledFeatureImageItem,
    StyledFeatureItemText,
 }