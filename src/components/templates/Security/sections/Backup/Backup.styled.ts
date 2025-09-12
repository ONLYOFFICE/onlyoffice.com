import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import { Link } from "@src/components/ui/Link";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledBackupWrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: row;
    justify-content: space-between;

    @media ${device.desktop} {
        flex-direction: column;
    }
`;

const StyledWrapperLeft = styled.div`
    width: 544px;
    padding-bottom: 36px;

    p:nth-of-type(2) {
        padding-bottom: 0;
    }

    @media ${device.desktop} {
        padding-top: 32px;
        width: 100%;
        p:nth-of-type(2) {
            padding-bottom: 32px;
        }
    }
    
    @media ${device.tabletS} {
        padding-top: 0;

        p:nth-of-type(2) {
            padding-bottom: 24px;
        }
    }

    @media ${device.mobile} {
        padding-bottom: 24px;
    }
`;

const StyledHeading = styled(Heading)`
    padding-bottom: 32px;

    @media ${device.mobile} {
        padding-bottom: 24px;
    }
`;

const StyledWrapperRightImg = styled.div`    
    background-image: url(${getAssetUrl('/images/templates/security/compliance/sec_black_imgs.svg')});
    background-size: cover;
    background-repeat: no-repeat;
    background-position-x: -731px;
    display: inline-block;
    height: 348px;
    width: 519px;

    @media ${device.mobile} {
        background-position-x: -134.5vw;
        height: 64vw;
        width: 87.5vw;
    }

    @media ${device.mobileS} {
        background-position-x: -134.5vw;
    }
`;

const StyledText = styled(Text)`
    color: #fff;
    font-size: 14px;
    line-height: 1.6em;
    padding-bottom: 12px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 14px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

export { 
    StyledBackupWrapper,
    StyledWrapperLeft,
    StyledWrapperRightImg,
    StyledText,
    StyledHeading,
    StyledLink
 }