import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSection = styled(Section)`
    background-image: url("/images/templates/private-rooms/getting-started/steps-bg.svg");
    background-repeat: no-repeat;
    background-position: 50% 72%;

    @media ${device.tabletS} {
        background-position: 73% 110%;
    }

    @media ${device.mobile} {
        background-image: none;
    }
`;

const StyledGettingStartedHeading = styled(Heading)`
    font-size: 32px;
    margin-bottom: 56px;
    text-align: center;
    
    @media ${device.mobile} {
        font-size: 20px;
        margin-bottom: 48px;
    }
`;

const StyledGettingStartedWrapper = styled.div`
    display: flex;
    align-items: center;

    @media ${device.tabletS} {
        flex-direction: column;
        padding: 0 0 90px;
    }

    @media ${device.mobile} {
        align-items: flex-start;
        padding: 0;
    }
`;

const StyledGettingStartedWrapperLeft = styled.div`
    max-width: 530px;
    width: 100%;

    @media ${device.desktop} {
        max-width: 482px;
    }

    @media ${device.tablet} {
        width: 40vw;
    }

    @media ${device.tablet} {
        width: 100%;
    }

    @media ${device.mobile} {
        max-width: 100%;
    }
`;

const StyledWrapperLeftText = styled(Text)`
    font-size: 14px;
    line-height: 1.6em;
    margin-left: 80px;
    margin-bottom: 32px;
    min-height: 64px;
    padding: 9px 0 9px 96px;
    position: relative;

    &:last-child {
        margin-bottom: 0;
    }

    &::before {
        content: "";
        background-image: url("/images/templates/private-rooms/getting-started/icons-steps.svg");
        background-position-x: 0;
        background-repeat: no-repeat;
        position: absolute;
        top: 50%;
        left: 0;
        transform: translateY(-50%);
        height: 64px;
        width: 64px;
    }

    &:nth-child(2)::before {
        background-position-x: -110px;
    }

    &:nth-child(3)::before {
        background-position-x: -220px;
    }

    &:nth-child(4)::before {
        background-position-x: -330px;
    }

    &:nth-child(5)::before {
        background-position-x: -440px;
    }

    @media ${device.desktop} {
        margin-left: 32px;
    }

    @media ${device.tablet} {
        margin-left: 5vw;
    }

    @media ${device.tabletS} {
        margin: 32px auto 0;
        width: 55vw;

        &:first-child {
            margin: 0 auto;
        }
    }

    @media ${device.mobile} {
        font-size: 13px;
        margin: 24px auto 0;
        width: 100%;
    }
`;

const StyledGettingStartedWrapperRight = styled.div`
    box-sizing: border-box;
    box-shadow: 0px 7px 15px rgba(85, 85, 85, 0.1);
    display: block;
    margin: 0 0 0 133px;
    transition: box-shadow 0.3s;
    width: 352px;

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    @media ${device.tablet} {
        margin: 0 0 0 5vw;
    }

    @media ${device.tabletS} {
        margin: 80px auto 0;
    }

    @media ${device.mobile} {
        margin: 40px auto 0;
        width: 100%;
    }
`;

const StyledWrapperRightBlock = styled.div`
    background-color: #fff;
    padding: 120px 32px 32px;
    position: relative;

    &::before {
        content: '';
        background-image: url("/images/templates/private-rooms/getting-started/private_room.svg");
        background-repeat: no-repeat;
        background-size: 72px 72px;
        background-position: 50% 50%;
        position: absolute;
        top: 32px;
        left: 32px;
        height: 72px;
        width: 72px;
    }
`;

const StyledWrapperRightBlockHeading = styled(Heading)`
    font-size: 18px;
    line-height: 133%;

    @media ${device.mobile} {
        font-size: 16px;
    }
`;

const StyledWrapperRightBlockText = styled(Text)`
    color: #808080;
    font-style: italic;
    font-size: 13px;
    line-height: 160%;
    display: block;
    margin-top: 16px;
    margin-bottom: 12px;

    @media ${device.mobile} {
        margin-bottom: 22px;
    }
`;

const StyledButton = styled(Button)`
    border-radius: 3px;
    font-weight: 700;
    letter-spacing: 0.04em;
    padding: 20px 24px;

    @media ${device.tabletS} {
        font-size: 12px;
    }

    @media ${device.mobile} {
        font-size: 13px;
        letter-spacing: 0.08em;
        padding: 16px 26px;
    }
`;

const StyledQuoteModal = styled.div`

[class*="StyledQuoteModal"] {
    padding: 40px;
  }

[class*="StyledModalWrapper"] {
    max-width: 624px;
}

[class*="StyledQuoteModalWrapper"] {
    padding: 0;
}

[class*="StyledQuoteModalGetItNow"] {
    padding: 0;
}

[class*="StyledHeading"] {
    text-align: left;
}

[class*="StyledText"] {
    color: #808080;
}

[class*="StyledPhoneInput"] {
    display: none;
}
`;

export {
    StyledSection,
    StyledGettingStartedHeading,
    StyledGettingStartedWrapper,
    StyledGettingStartedWrapperLeft,
    StyledGettingStartedWrapperRight,
    StyledWrapperLeftText,
    StyledWrapperRightBlock,
    StyledWrapperRightBlockHeading,
    StyledWrapperRightBlockText,
    StyledButton,
    StyledQuoteModal
}