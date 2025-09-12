import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSelfHostingWrapper = styled.div`
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
`;

const StyledHeading = styled(Heading)`
    padding-bottom: 32px;

    @media ${device.mobile} {
        padding-bottom: 24px;
    }
`;

const StyledWrapperRightImg = styled.div`    
    background-image: url("/images/templates/security/compliance/sec_black_imgs.svg");
    background-size: cover;
    background-repeat: no-repeat;
    display: inline-block;
    height: 348px;
    width: 519px;

    @media ${device.mobile} {
        height: 64vw;
        width: 87.5vw;
    }
`;

const StyledText = styled(Text)`
    line-height: 1.6em;
    padding-bottom: 16px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

export { 
    StyledSelfHostingWrapper,
    StyledWrapperLeft,
    StyledWrapperRightImg,
    StyledText,
    StyledHeading
 }