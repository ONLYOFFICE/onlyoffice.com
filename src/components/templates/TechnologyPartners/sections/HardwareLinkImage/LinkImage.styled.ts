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
        background-position: -84px -3px;
        content: "";
        height: 56px;
        left: 50%;
        position: absolute;
        transform: translateX(-50%);
        top: -64px;
        width: 114px;
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
    padding: 32px;
    position: relative;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0px 3px 9px rgba(85, 85, 85, 0.1);
    }

    &::before {
        background-image: url("/images/templates/technology-partners/image-link/hardware.svg");
        background-position: 0 0;
        background-repeat: no-repeat;
        background-size: auto;
        content: "";
        height: 36px;
        left: 50%;
        position: absolute;
        top: 50%;
        transform: translate(-50%, -50%);
        width: 421px;
    }

    &:first-child {
        width: 485px;
    }

    &:nth-child(2) {
        width: 193px;
        &::before {
            background-position: -434px 0;
            width: 129px;
        }
    }

    @media ${device.mobile} {
        &:first-child, &:nth-child(2) {
            height: 72px;
            width: 100%;
        }

        &:first-child::before, &:nth-child(2)::before {
            background-size: cover;
            height: 22px;
        }

        &:first-child::before {
            width: 257px;
        }

        &:nth-child(2)::before {
            background-position: -263px 0;
            width: 84px;
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