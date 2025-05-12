import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { device } from "@src/utils/device";

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
    grid-template-columns: repeat(2, 1fr);
    gap: 48px 32px;
    justify-content: space-between;
    margin-top: 48px;

    @media ${device.desktop} {
        width: 90vw;
    }

    @media ${device.tabletS} {
        grid-template-columns: 1fr;
        margin-top: 32px;
        gap: 56px;
    }
    
    & > :nth-child(3) {
        grid-column: span 2;

        @media ${device.tabletS} {
            grid-column: auto;
        }
    }
`;


export { 
    StyledEncryptionHeading,
    StyledEncryptionBlocks
 }