import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import { device } from "@src/utils/device";
import styled from "styled-components";

const StyledSection = styled(Section)`
    background-color: #333333;
    `;

const ProtectBlock = styled.div`
    background-image: url("/images/templates/private-rooms/protect/try-bg.svg");
    background-repeat: no-repeat;
    background-position: 50% 70%;
    margin: 0 auto;
    padding: 124px 0;
    text-align: center;

    @media ${device.mobile} {
        background-image: none;
        padding: 73px 0;
    }
`;

const StyledHeading = styled(Heading)`
    color: #ffffff;
    font-size: 18px;
    line-height: 1.33em;
    letter-spacing: 0;
    text-align: center;
    padding: 0 0 32px;
    margin: 0 auto;

    @media ${device.mobile} {
        font-size: 16px;
        padding-bottom: 16px;
    }
`;

const StyledButton = styled(Button)`
    display: block;
    background-color: #ffffff;
    border-radius: 3px;
    color: #444444;
    font-size: 14px;
    font-weight: 600;
    text-transform: uppercase;
    padding: 19px 35px;
    margin: 0 auto;
    width: fit-content;
    
    @media ${device.mobile} {
        font-size: 12px;
        padding: 16px 35px;
        width: 86%;
    }

    @media ${device.mobileS} {
        width: 100%;
    }
`;

export {
    StyledSection,
    ProtectBlock,
    StyledHeading,
    StyledButton
}