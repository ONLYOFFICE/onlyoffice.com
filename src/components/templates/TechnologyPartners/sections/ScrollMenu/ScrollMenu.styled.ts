import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled, { css } from "styled-components";

interface StickyBoxProps { isSticky?: boolean; }

const StyledStickyBox = styled.div<StickyBoxProps>` 
    background-color: #ffffff; 
    position: sticky; 
    width: 100%; 
    top: 72px;
    z-index: 21; 

    @media ${device.tablet} {
        top: 64px;
    }

    @media ${device.tabletS} {
        top: 48px;
    }
    
`;

const DwnFourBlockBtns = styled.div`
    display: flex;
    justify-content: center;
    height: 60px;
    margin: 0 auto;
    width: 1120px;

    @media ${device.desktop} {
        width: 100vw;
    }

    @media ${device.tabletS} {
        overflow-x: auto;
        justify-content: start;
    }
`;

const DwnFourBlockBtn = styled(Text)`
    align-items: center;
    background-color: #fff;
    border: none;
    border-bottom: 1px solid #FFFFFF;
    color: #333;
    cursor: pointer;
    display: flex;
    justify-content: center;
    font-weight: 600;
    font-size: 12px;
    letter-spacing: 0.04em;
    line-height: 1.33em;
    padding: 24px;
    text-align: center;
    text-transform: uppercase;
    width: 100%;

    &:hover {
        color: #FF6F3D;
        transition-duration: 0.3s;
    }

    &.active-block-btn {
        border-bottom-color: #FF6F3D;
        color: #FF6F3D;
    }

    @media ${device.tablet} {
        white-space: nowrap;
    }

    @media ${device.mobile} {
        padding-left: 18px;
        padding-right: 18px;
    }
`;

export {
    StyledStickyBox,
    DwnFourBlockBtns,
    DwnFourBlockBtn
}