import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { StyledContentImage, StyledContentImageImg, StyledContentImageImgWrapper } from "@src/components/widgets/ContentImage/ContentImage.styled";

const StyledHowItWorksHeading = styled(Heading)`
  font-size: 32px;
  line-height: 133%;
  text-align: center;
  margin: 0 auto;
  margin-bottom: 24px;
  max-width: 790px;

  @media ${device.mobile} {
    font-size: 20px;
    margin-bottom: 16px;
  }
`;

const StyledHowItWorksText = styled(Text)`
  font-size: 14px;
  line-height: 150%;
  text-align: center;
  margin: 0 auto 72px;
  max-width: 640px;

  @media ${device.tabletS} {
    margin-bottom: 32px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    margin: 0 auto 16px;
  }
`;

const StyledFeatureImageItemText = styled.div`
  font-size: 14px;
  line-height: 1.6em;
  padding-bottom: 24px;
  width: 550px;

  @media ${device.tablet} {
    width: 50vw;
  }

  @media ${device.tabletS} {
    padding-bottom: 16px;
    width: 100%;
  }

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledHowItWorksFeatures = styled.div`
  display: grid;
  row-gap: 72px;

  @media ${device.tabletS} {
    row-gap: 32px;
  }
  
  ${StyledContentImage} {
    justify-content: space-between;
  }

  .feature-item {
    h3 {
      font-size: 18px;
      line-height: 1.33em;
      padding: 0 0 16px;

      @media ${device.tabletS} {
        padding-bottom: 8px;
      }

      @media ${device.mobile} {
        font-size: 16px;
      }
    }

    ${StyledContentImageImgWrapper} {
      @media ${device.tabletS} {
        width: 70%;
      }

      @media ${device.mobile} {
        width: 90%;
      }
    }
    
    &:first-child, &:nth-child(3) {
      ${StyledContentImageImgWrapper} {
        margin-left: 70px;

        @media ${device.tabletS} {
          margin: 54px auto 0;
        }
      }
    }

    &:nth-child(2) {
      ${StyledContentImageImgWrapper} {
        margin-left: 0;
        margin-right: 120px;

        @media ${device.tabletS} {
          margin: 54px auto 0;
        }
      }
    }
  }
`;

export {
  StyledHowItWorksHeading,
  StyledHowItWorksText,
  StyledHowItWorksFeatures,
  StyledFeatureImageItemText,
};
