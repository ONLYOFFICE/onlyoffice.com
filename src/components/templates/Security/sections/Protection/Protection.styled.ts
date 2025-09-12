import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledProtectionHeading = styled(Heading)`
    font-size: 32px;
    font-weight: bold;
    letter-spacing: -0.02em;
    line-height: 1.33em;
    margin: 0 auto;
    text-align: center;

    @media ${device.desktop} {
        width: 90vw;
    }

    @media ${device.tabletS} {
        font-size: 30px;
    }

    @media ${device.mobile} {
        font-size: 20px;
    }
`;

const StyledProtectionBlocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 56px 32px;
    justify-content: space-between;
    margin-top: 48px;

    @media ${device.desktop} {
        margin: 48px auto 0;
    }

    @media ${device.tabletS} {
        flex-direction: column;
        margin-top: 32px;
        gap: 32px;
    }

    @media ${device.mobile} {
        margin-top: 24px;
    }
`;

const StyledFeatureItem = styled.div`
    justify-items: flex-start;
    text-align: left;
    position: relative;

    &::before {
        content: "";
        background-image: url(${getAssetUrl('/images/templates/security/compliance/sec_icons.svg')});
        background-position: -463px 0;
        background-repeat: no-repeat;
        background-size: cover;
        display: block;
        height: 64px;
        width: 64px;
        position: absolute;
    }

    &:nth-child(2)::before {
        background-position-x: -688px;
    }

    &:nth-child(3) {
        .feature-desc {
            &:nth-child(2) {
                padding-bottom: 23px;
            }

            &:not(:nth-child(2)) {
                padding-left: 32px;
                position: relative;

                &::before {
                    background-color: #ff6f3d;
                    display: block;
                    content: "";
                    margin-right: 15px;
                    left: 12px;
                    top: 8px;
                    height: 6px;
                    width: 6px;
                    position: absolute;
                    transform: rotate(-45deg);
                }
            }
        }
        &::before {
            background-position-x: -888px;
        }  
    }

    &:nth-child(4)::before {
        background-position-x: -990px;
    }

    &:nth-child(5)::before {
        background-position-x: -581px;
    }

    &:nth-child(6)::before {
        background-position-x: -1081px;
    }

    @media ${device.tabletS} {
        grid-column: span 2;
    }

    @media ${device.mobile} {
        &::before {
            height: 56px;
            width: 56px;
        }

        &:first-child::before {
            background-position-x: -404px;
        }

        &:nth-child(2)::before {
            background-position-x: -603px;
        }

        &:nth-child(3)::before {
            background-position-x: -775px;
        }

        &:nth-child(4)::before {
            background-position-x: -868px;
        }

        &:nth-child(5)::before {
            background-position-x: -508px;
        }

        &:nth-child(6)::before {
            background-position-x: -945px;
        }
    }
`;

const StyledFeatureItemHeading = styled(Heading)`
    padding: 72px 0 16px;
    
    @media ${device.mobile} {
        padding-top: 64px;
    }
`;

const StyledFeatureItemText = styled(Text)`
    padding-bottom: 16px;
    line-height: 1.6em;

    @media ${device.mobile} {
        font-size: 13px;
        padding-bottom: 12px;
    }
`;

const StyledLink = styled(Link)`
    display: block;
    padding-bottom: 16px;
    font-size: 14px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

export { 
    StyledProtectionHeading,
    StyledProtectionBlocks,
    StyledFeatureItem,
    StyledFeatureItemHeading,
    StyledFeatureItemText,
    StyledLink
 }