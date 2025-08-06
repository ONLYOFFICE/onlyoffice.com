import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

const StyledContainer = styled(Container)`
    text-align: center;
`;

const StyledHeading = styled(Heading)`
    font-size: 40px;
    text-align: center;
    position: relative;

    &::before {
        background-image: url("/images/templates/technology-partners/heading-icons/tech-h-icons.svg");
        background-position: -305.5px 1px;
        content: "";
        height: 64px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        top: -73px;
        width: 56px;
    }

    @media ${device.tablet} {
        letter-spacing: -0.01em;
    }

    @media ${device.mobile} {
        font-size: 24px;
    }
`;

const StyledText = styled(Text)`
    font-size: 18px;
    line-height: 1.6em;
    text-align: center;
    margin: 24px 0 40px;

    @media ${device.mobile} {
        font-size: 16px;
        margin: 16px 0 32px;
    }
`;

const WrapperLink = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 16px;
    margin: 0 auto 40px;
    max-width: 900px;

    @media ${device.mobile} {
        gap: 8px;
        margin-bottom: 32px;
    }
`;

const StyledLink = styled(Link)`
    background-color: #FFFFFF;
    border: 1px solid #EFEFEF;
    border-radius: 6px;
    box-sizing: border-box;
    display: block;
    height: 96px;
    padding: 26px 34px;
    position: relative;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
    }

    &::before {
        background-image: url("/images/templates/technology-partners/image-link/os-distr.png");
        background-position: -4px 0;
        background-repeat: no-repeat;
        background-size: cover;
        content: "";
        height: 44px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 72px;
    }

    &:first-child {
        width: 162px;
    }

    &:nth-child(2) {
        width: 190px;
        &::before {
            background-position: -1200px 0;
            width: 124px;
        }
    }

    &:nth-child(3) {
        width: 180px;
        &::before {
            background-position: -242px 0;
            width: 112px;
        }
    }

    &:nth-child(4) {
        width: 140px;
        &::before {
            background-position: -383px 0;
            width: 64px;
        }
    }

    &:nth-child(5) {
        width: 264px;
        &::before {
            background-position: -475px 0;
            width: 196px;
        }
    }

    &:nth-child(6) {
        width: 158px;
        &::before {
            background-position: -694px 0;
            width: 91px;
        }
    }

    &:nth-child(7) {
        width: 172px;
        &::before {
            background-position: -818px 0;
            width: 96px;
        }
    }

    &:nth-child(8) {
        width: 140px;
        &::before {
            background-position: -942px 0;
            width: 72px;
        }
    }

    &:nth-child(9) {
        width: 210px;
        &::before {
            background-position: -1042px 0;
            width: 142px;
        }
    }

    @media ${device.mobile} {
        padding: 14px;

        &:nth-child(n) {
            height: 72px;
            width: calc(50vw - 20px);
            
            &::before {
                height: 32px;
            }
        }

        &:first-child {
            padding: 20px 40px;

            &::before {
                width: 59px;
            }
        }

        &:last-child {
            width: 100%;
        }

        &:first-child::before {
            background-position: 0 1px;
        }

        &:nth-child(2)::before {
                background-position: -870px 0px;
                width: 100px;
        }

        &:nth-child(3)::before {
                background-position: -170px 0px;
                width: 94px;
        }

        &:nth-child(4)::before {
                background-position: -275px 0px;
                width: 52px;
        }

        &:nth-child(5)::before {
                background-position: -281px 4px;
                background-size: auto 26px;
                width: 113px;
        }

        &:nth-child(6)::before {
                background-position: -500px 0px;
                width: 74px;
        }

        &:nth-child(7)::before {
                background-position: -590px 0px;
                width: 76px;
        }

        &:nth-child(8)::before {
                background-position: -677px 0px;
                width: 68px;
        }

        &:nth-child(9)::before {
                background-position: -751px 0px;
                width: 120px;
        }
    }
`;

export {
    StyledContainer,
    StyledHeading,
    StyledText,
    WrapperLink,
    StyledLink,
}