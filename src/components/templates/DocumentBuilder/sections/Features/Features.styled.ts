import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledSection = styled(Section)`
    background-color: #333;
`;

const StyledFeaturesWrapper = styled.div`
    background-position-x: calc(50% + 410px);
    background-position-y: calc(100% - 70px);
    background-image: url(${getAssetUrl('/images/templates/document-builder/features/bg_docx.svg')});
    background-repeat: no-repeat;
    border-bottom: 1px solid rgba(237, 240, 246, 0.1);
    padding: 116px 0 143px;

    @media ${device.tablet} {
        background-position-x: center;
        background-position-y: calc(100% - 94px);
        padding: 88px 0 180px;
    }

    @media ${device.mobile} {
        background-size: auto 21px;
        background-position-x: 13px;
        background-position-y: calc(100% - 37px);
        padding: 48px 0 56px;
    }

    &:nth-child(2) {
        background-image: url(${getAssetUrl('/images/templates/document-builder/features/bg_unique.svg')});
        background-position-y: bottom;
        background-position-x: calc(50% + 470px);

        .feature-block::before {
            background-position: -164px 0;
        }

        @media ${device.tablet} {
            background-position-x: calc(50% + 216px);
        }

        @media ${device.mobile} {
            background-position-x: calc(100% + 50px);
            background-position-y: calc(100% + 18px);
            background-size: 248px auto;
        }
    }
`;

const FeaturesBlock = styled.div`
    padding-left: 96px;
    position: relative;

    &::before {
        content: "";
        position: absolute;
        background-image: url(${getAssetUrl('/images/templates/document-builder/features/icons.svg')});
        background-repeat: no-repeat;
        background-position: 3px 0;
        top: -18px;
        left: 0;
        height: 85px;
        width: 72px;
    }

    @media ${device.tablet} {
        padding-left: 112px;
    }

    @media ${device.mobile} {
        padding-left: 0;
        padding-top: 83px;

        &::before {
            top: 0;
            left: -7px;
            transform: scale(0.75);
        }
    }
`;

const StyledHeading = styled(Heading)`
    color: #fff;
    font-size: 32px;
    line-height: 1.33em;
    padding: 0 0 20px;

    @media ${device.mobile} {
        font-size: 20px;
    }
`;

const StyledText = styled(Text)`
    color: #F5F5F5;
    font-size: 18px;
    line-height: 1.5em;
    padding: 0 0 16px;
    max-width: 826px;

    @media ${device.mobile} {
        font-size: 14px;
        line-height: 1.6em;
    }
`;

const StyledLink = styled(Link)`
    border: none;
    color: #FF6F3D;
    cursor: pointer;
    background-color: transparent;
    font-size: 16px;
    display: inline-block;
    margin-top: 8px;
    text-decoration: underline;
    position: relative;

    &:hover {
        text-decoration: none;
    }

    &::after {
        content: "";
        background-image: url(${getAssetUrl('/images/templates/document-builder/features/more.svg')});
        background-repeat: no-repeat;
        background-position: 0 0;
        position: absolute;
        top: calc(50% + 1px);
        left: calc(100% + 10px);
        transform: translateY(-50%);
        height: 16px;
        width: 9px;
    }

    @media ${device.mobile} {
        font-size: 14px;

        &::after {
            background-size: 6px auto;
            height: 11px;
            width: 6px;
            top: calc(50% + 2px);
        }
    }
`;

export {
    StyledSection,
    StyledFeaturesWrapper,
    FeaturesBlock,
    StyledHeading,
    StyledText,
    StyledLink
}