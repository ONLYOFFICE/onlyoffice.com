import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";

const StyledEncryptionHeading = styled(Heading)`
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

const StyledEncryptionBlocks = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
    justify-content: space-between;
    margin-top: 48px;

    & > :nth-child(3) {
        grid-column: span 2;
    }

    @media ${device.desktop} {
        margin: 48px auto 0;
    }

    @media ${device.tabletS} {
        flex-direction: column;
        margin-top: 32px;
        gap: 56px;
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
        background-image: url("/images/templates/security/compliance/sec_icons.svg");
        background-position: -240px 0;
        background-size: cover;
        display: block;
        height: 64px;
        width: 64px;
        position: absolute;
    }

    &:nth-child(2)::before {
        background-position-x: -352px;
    }

    &:nth-child(3) {
        margin-top: 15px;
        .feature-heading {
            padding: 80px 0 16px;
        }
        &::before {
            background-position-x: -788px;
        }
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
            background-position-x: -210px;
        }

        &:nth-child(2)::before {
            background-position-x: -306px;
        }

        &:nth-child(3){
            .feature-heading {
                padding: 64px 0 16px;
            }
            &::before {
                background-position-x: -689px;
            }
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
    font-size: 14px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

export { 
    StyledEncryptionHeading,
    StyledEncryptionBlocks,
    StyledFeatureItem,
    StyledFeatureItemHeading,
    StyledFeatureItemText,
    StyledLink
 }