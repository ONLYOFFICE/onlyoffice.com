import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledContactBlock = styled.div`
    position: relative;

    &::after {
        content: '';
        background-image: url(${getAssetUrl('/images/templates/document-builder/contact-block/enterprise_level.svg')});
        background-repeat: no-repeat;
        background-position: 0 0;
        position: absolute;
        top: 120px;
        right: 0;
        transform: translateY(-50%);
        height: 259px;
        width: 417px;

        @media ${device.desktop} {
            background-size: contain;
            height: 20vw;
            right: 0;
            width: 32.8vw;
        }

        @media ${device.tablet} {
            height: 27vw;
            top: 171px;
            width: 43.75vw;
        }

        @media ${device.tabletS} {
            top: 135px;
        }

        @media ${device.mobile} {
            display: block;
            margin: 0 auto;
            position: relative;
            top: 27.5vw;
            height: 47.5vw;
            width: 76vw;
        }

        @media ${device.mobileS} {
            top: 30.5vw;
        }
    }
`;

const StyledContactBlockHeading = styled(Heading)`
    line-height: 1.33em;
    max-width: 640px;

    @media ${device.tablet} {
        width: 43vw;
    }

    @media ${device.tabletS} {
        font-size: 32px;
    }

    @media ${device.mobile} {
        font-size: 20px;
        text-align: center;
        width: 100%;
    }
`;

const StyledContactBlockText = styled(Text)`
    font-size: 18px;
    line-height: 1.5em;
    padding: 32px 0 18px;
    max-width: 640px;
    
    &:nth-child(3) {
        padding: 0 0 32px;
    }
    
    @media ${device.tablet} {
        width: 43vw;
    }
    
    @media ${device.mobile} {
        font-size: 14px;
        text-align: center;
        width: 100%;
    }
`;

const StyledButton = styled(Button)`
    align-items: center;
    justify-content: center;
    border: none;
    border-radius: 9px;
    color: #ffffff;
    font-size: 13px;
    font-weight: 600;
    line-height: 18px;
    letter-spacing: 0.04em;
    cursor: pointer;
    text-align: center;
    text-transform: uppercase;
    display: inline-block;
    padding: 19px 24px;
    background-color: #ff6f3d;
    transition: background-color 0.2s;

    &:hover {
        background-color: #ff865c;
    }

    @media ${device.mobile} {
        font-size: 12px;
        line-height: 16px;
        padding: 16px 26px;
        display: block;
        margin: 0 auto;
        height: 48px;
        width: fit-content;
    }
`;

export {
    StyledContactBlock,
    StyledContactBlockHeading,
    StyledContactBlockText,
    StyledButton
}