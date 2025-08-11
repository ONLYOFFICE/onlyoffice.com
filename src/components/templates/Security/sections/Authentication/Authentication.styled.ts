import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import { 
  StyledContentImage, 
  StyledContentImageContent, 
  StyledContentImageImg, 
  StyledContentImageImgWrapper
} from "@src/components/widgets/ContentImage/ContentImage.styled";
import { Text } from "@src/components/ui/Text";
import { 
  StyledFeatureImageItemContent, 
  StyledFeatureImageItemLink 
} from "@src/components/widgets/FeatureImageItem/FeatureImageItem.styled";

const StyledAuthenticationHeading = styled(Heading)`
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    margin: 0 auto;
    margin-bottom: 62px;
    text-align: center;

    @media ${device.desktop} {
        width: 90vw;
    }

    @media ${device.tabletS} {
        font-size: 30px;
        letter-spacing: -0.01em;
        margin-bottom: 32px;
    }

    @media ${device.mobile} {
        font-size: 20px;
        margin-bottom: 24px;
    }
`;

const StyledHowItWorksFeatures = styled.div`
  display: grid;
  row-gap: 72px;

  @media ${device.tablet} {
    row-gap: 54px;
  }

  @media ${device.tabletS} {
    row-gap: 32px;
  }
  
  ${StyledContentImage} {
    justify-content: space-between;
    
    @media ${device.tablet} {
      flex-direction: column;

      &:nth-child(2), &:nth-child(4) {
        flex-direction: column-reverse;
      }
    }

    @media ${device.tabletS} {
      &:nth-child(2), &:nth-child(4) {
        flex-direction: column;
      }
    }
  }

  .feature-item {
    h3 {
      font-size: 18px;
      line-height: 1.33em;
      padding-bottom: 16px;

      @media ${device.mobile} {
        font-size: 16px;
      }
    }

    ${StyledFeatureImageItemContent} {
      row-gap: 0;
    }

    ${StyledContentImageImgWrapper} {
      flex: none;
      margin: 0 auto;

      @media ${device.tablet} {
        margin: 32px 0 auto;
      }

      @media ${device.mobile} {
        margin: 24px 0 auto;
      }
    }

    ${StyledContentImageContent} {
      flex: 0 1 544px;
      margin: 0;

      @media ${device.tablet} {
        flex: 0 1 17vw;
      }
    }

    ${StyledContentImageImg} {
      background-size: auto;
      background-position: 0 0;
      padding: 0;

      @media ${device.tabletS} {
        margin: 0 auto;
      }

      @media ${device.mobile} {
        background-size: 188vw;
      }
    }
    
    &:first-child {
      ${StyledContentImageImg} {
        height: 208px;
        width: 282px;

        @media ${device.mobile} {
          height: 46.25vw;
          width: 62.5vw;
        }
      }
    }

    &:nth-child(2) {
      ${StyledContentImageImg} {
        background-position: -512px -20px;
        height: 168px;
        width: 296px;
                
        @media ${device.mobile} {
          background-position: -112vw -3.5vw;
          height: 39vw;
          width: 68vw;
        }
      }
    }

    &:nth-child(3) {
      ${StyledContentImageImg} {
        background-position: -28px -441px;
        height: 160px;
        width: 312px;
                        
        @media ${device.mobile} {
          background-position: -5.5vw -96vw;
          height: 38vw;
          width: 70vw;
        }
      }
    }

    &:nth-child(4) {
      ${StyledContentImageImg} {
        background-position: -512px -399px;
        height: 245px;
        width: 339px;
                        
        @media ${device.mobile} {
          background-position: -112.5vw -87vw;
          height: 56vw;
          width: 76vw;
        }
      }
    }

    ${StyledFeatureImageItemLink} {
      font-size: 14px;

      @media ${device.mobile} {
        font-size: 13px;
      }
    }
  }
`;

const StyledFeatureImageItemText = styled(Text)`
  font-size: 14px;
  line-height: 1.6em;
  padding-bottom: 16px;

  @media ${device.mobile} {
    font-size: 13px;
    padding-bottom: 8px;
  }
`;

export { 
  StyledAuthenticationHeading,
  StyledFeatureImageItemText,
  StyledHowItWorksFeatures
 }