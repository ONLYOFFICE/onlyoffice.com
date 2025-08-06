import { 
    StyledContentImageContent, 
    StyledContentImageImg, 
    StyledContentImageImgWrapper 
} from "@src/components/widgets/ContentImage/ContentImage.styled";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { StyledFeatureImageItemContent } from "@src/components/widgets/FeatureImageItem/FeatureImageItem.styled";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledFeaturesWrapper = styled.div`
    margin-top: 80px;

    @media ${device.tabletS} {
        margin-top: 64px;
    }

    @media ${device.mobile} {
        margin-top: 0;
    }

    .feature-item h3 {
        margin-bottom: 8px;

        @media ${device.tablet} {
            padding: 24px 0;
            margin-bottom: 0;
        }

        @media ${device.mobile} {
            font-size: 16px;
        }
    }
`;

const StyledFeatureImageItem = styled(FeatureImageItem)`

    &:nth-child(2n-1) {
        @media ${device.tablet} {
            flex-direction: column;
        }
    }

    &:nth-child(2n) {
        @media ${device.tablet} {
            flex-direction: column-reverse;
        }
        @media ${device.tabletS} {
            flex-direction: column;
        }
    }

    ${StyledFeatureImageItemContent} {
        padding-bottom: 70px;

        @media ${device.tablet} {
            margin-bottom: 24px;
            padding-bottom: 0;
            row-gap: 0;
        }
    }

    &:nth-child(2n-1) ${StyledContentImageImg} {
        background-position: 100% 50%;

        @media ${device.tablet} {
            background-position: 50% 0;
        }

        @media ${device.tabletS} {
            background-position: 50% 50%;
        }

        @media ${device.mobile} {
            background-size: contain !important;
            height: 50vh !important;
        }
    }

    &:nth-child(2n) ${StyledContentImageImg} {
        background-position: 0 50%;
        
        @media ${device.tablet} {
            background-position: 50% 0;
        }

        @media ${device.tabletS} {
            background-position: 50% 50%;
        }

        @media ${device.mobile} {
            background-size: contain !important;
            height: 50vh !important;
        }
    }

    ${StyledContentImageImg} {
        background-size: 450px;
        height: 450px;
    }

    ${StyledContentImageImgWrapper} {
        flex: auto;

        @media ${device.tablet} {
            width: 50%;
        }
        @media ${device.tabletS} {
            width: 100%;
        }
    }

    ${StyledContentImageContent} {
        @media ${device.tablet} {
            flex: auto;
            margin-left: 0;
        }
        @media ${device.tabletS} {
            margin-top: 0;
        }
    }
`;

export {
    StyledFeaturesWrapper,
    StyledFeatureImageItem
 }