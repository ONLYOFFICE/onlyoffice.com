import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";



const StyledComlianceHeading = styled(Heading)`
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

const StyledComplianceBlocks = styled.div`
    display: flex;
    gap: 32px;
    justify-content: space-between;
    margin-top: 48px;

    @media ${device.desktop} {
        width: 90vw;
    }

    @media ${device.tabletS} {
        flex-direction: column;
        margin-top: 32px;
        gap: 56px;
    }
`;

const StyledComplianceBlock = styled.div`
    display: flex;
    flex-direction: column;
    gap: 16px;
    padding-top: 80px;
    position: relative;
    width: 50%;

    &::before {
        content: "";
        position: absolute;
        top: 0;
        left: 0;
        width: 64px;
        height: 64px;
        background-image: url("/images/templates/security/compliance/sec_icons.svg");
    }
`;

export { 
    StyledComlianceHeading,
    StyledComplianceBlocks,
    StyledComplianceBlock
 }