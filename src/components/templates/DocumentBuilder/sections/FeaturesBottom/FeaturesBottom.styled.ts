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
    background-position-x: calc(50% + 470px);
    background-position-y: 100%;
    background-image: url(${getAssetUrl('/images/templates/document-builder/features/bg_technology.svg')});
    background-repeat: no-repeat;
    border-bottom: 1px solid rgba(237, 240, 246, 0.1);
    padding: 116px 0 143px;

    @media ${device.tablet} {
        background-position-x: calc(100% - 40px);
        background-position-y: 117px;
        padding-top: 104px;
    }

    @media screen and (max-width: 822px) {
        background-position-y: 149px;
    }

    @media screen and (max-width: 750px) {
        background-position-y: 170px;
    }

    @media screen and (max-width: 640px) {
        background-position-y: 191px;
    }

    @media ${device.mobile} {
        background-position-x: calc(100% - 16px);
        background-position-y: bottom;
        background-size: auto 232px;
        padding: 48px 0 56px;
        padding-bottom: 122px;
    }

    &:nth-child(2) {
        background-image: url(${getAssetUrl('/images/templates/document-builder/features/bg_languages.svg')});
        background-position-y: calc(100% - 39px);
        background-position-x: calc(50% + 450px);

        .feature-block {
            &::before {
            background-position: -288px 0;
            }

            .feature-block-text {
                display: inline-block;
                font-weight: 700;
                margin-top: 8px;
                margin-right: 34px;
                padding-bottom: 0;

                @media ${device.mobile} {
                    font-size: 14px;
                    margin-right: 25px;
                }

                @media ${device.mobileS} {
                    font-size: 14px;
                    margin-right: 23px;
                }
            }

            .feature-block-link {
                display: block;
            }

            .feature-block-btn {
                display: block;
                margin-top: 50px;
                width: fit-content;

                @media ${device.mobile} {
                    margin-top: 24px;
                    width: 100%;
                }
            }

        }

        @media ${device.tablet} {
            padding: 72px 0 282px;
            background-position: 40px 379px;
        }

        @media ${device.mobile} {
            background-position-x: 16px;
            background-position-y: calc(100% - 48px);
            background-size: auto 80px;
            padding: 48px 0 176px;
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
        background-position: -233px 0;
        top: -18px;
        left: 0;
        height: 85px;
        width: 65px;
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
    font-size: 24px;
    line-height: 1.5em;
    padding: 0 0 20px;
    max-width: 643px;

    @media ${device.mobile} {
        font-size: 18px;
    }
`;

const StyledText = styled(Text)`
    color: #F5F5F5;
    font-size: 14px;
    line-height: 1.5em;
    padding: 0 0 16px;
    max-width: 680px;

    @media ${device.mobile} {
        font-size: 13px;
    }
`;

const StyledLink = styled(Link)`
    font-size: 14px;
    font-weight: 700;
    display: inline-block;
    margin-top: 8px;
    position: relative;

    &::after {
        content: "";
        background-image: url(${getAssetUrl('/images/templates/document-builder/features/more.svg')});
        background-repeat: no-repeat;
        background-position: 0 0;
        background-size: 6px auto;
        position: absolute;
        top: calc(50% + 1px);
        left: calc(100% + 10px);
        transform: translateY(-50%);
        height: 11px;
        width: 6px;
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