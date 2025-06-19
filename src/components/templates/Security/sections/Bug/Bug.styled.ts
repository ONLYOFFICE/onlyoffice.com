import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledBugBlock = styled.div`
    margin: 0 auto;
    max-width: 544px;
    text-align: center;
    width: 100%;
    padding-top: 181px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 50%;
        transform: translateX(-50%);
        background-image: url("/images/templates/security/compliance/sec_bug_program.svg");
        background-repeat: no-repeat;
        width: 249px;
        height: 183px;

        @media ${device.mobile} {
            background-size: contain;
            height: 144px;
            width: 196px;
        }
    }

    @media ${device.tabletS} {
        max-width: 90vw;
    }

    @media ${device.mobile} {
        padding-top: 144px;
    }
`;

const StyledHeading = styled(Heading)`
    padding: 32px 0;

    @media ${device.tabletS} {
        font-size: 30px;
        letter-spacing: -0.01em;
    }

    @media ${device.mobile} {
        font-size: 20px;
        padding: 24px 0;
    }
`;

const StyledTextBlock = styled.div`
    display: block;
`;

const StyledText = styled(Text)`
    font-size: 14px;
    line-height: 1.6em;
    padding-bottom: 8px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

export {
    StyledBugBlock,
    StyledTextBlock,
    StyledHeading,
    StyledText
}