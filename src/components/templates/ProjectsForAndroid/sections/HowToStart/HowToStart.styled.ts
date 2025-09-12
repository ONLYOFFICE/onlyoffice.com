import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHowToStartWrapper = styled.div`
    display: flex;
    justify-content: space-between;

    @media ${device.tablet} {
        flex-direction: column;
    }
`;

const WrapperLeftBlock = styled.div`
    display: flex;
    flex-direction: column;

    @media ${device.tabletS} {
        margin-left: 12px;
    }

    .StyledLinkWrapper {
        display: flex;
        margin-top: 32px;

        @media ${device.tabletS} {
            flex-direction: column;
            margin-top: 16px;
        }
    }

    @media ${device.mobile} {
        padding: 16px;
        margin-left: 0;
    }
`;

const StyledHeading = styled(Heading)`
    font-size: 32px;
    margin: 32px 0 0;

    @media ${device.mobile} {
        font-size: 20px;
        margin-top: 0;
    }
`;

const StyledText = styled(Text)`
    margin-top: 32px;
    line-height: 160%;
`;

const StyledLink = styled(Link)`
    font-size: 18px;

    @media ${device.tabletS} {
        padding: 10px 0;
    }
    &:first-child {
        margin-left: 12px;
        margin-right: 24px;

        @media ${device.tabletS} {
            margin-left: 0;
        }
    }

    @media ${device.mobile} {
        font-size: 16px;
    }
    
`;

const WrapperRightBlock = styled.div`
    background-image: url(${getAssetUrl('/images/templates/projects-for-android/how-to-start/proj-how-to-start.svg')});
    background-repeat: no-repeat;
    display: block;
    height: 400px;
    width: 544px;
    margin-bottom: 100px;

    @media ${device.tablet} {
        margin: auto;
    }

    @media ${device.tabletS} {
        background-size: contain;
        max-width: 100%;
    }

    @media ${device.mobile} {
        height: 50vh;
    }
`;

export {
    StyledHowToStartWrapper,
    WrapperLeftBlock,
    WrapperRightBlock,
    StyledHeading,
    StyledText,
    StyledLink
}