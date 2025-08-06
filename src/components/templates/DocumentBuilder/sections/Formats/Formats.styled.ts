import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { Link } from "@src/components/ui/Link";
import { IApiIconRow } from "./Formats.types";
import "prismjs/themes/prism.css";

const StyledFormatsHeading = styled(Heading)`
    text-align: center;
    padding-bottom: 24px;
`;

const StyledFormatsDesc = styled(Text)`
    line-height: 1.5em;
    margin: 0 auto 56px;
    max-width: 928px;
    text-align: center;

    @media ${device.tablet} {
        font-size: 16px;
    }

    @media ${device.mobile} {
        margin: 0 auto 40px;
    }
`;

const StyledFormatsTabsBox = styled.div`
    @media ${device.mobile} {
        margin: 40px 0;
        overflow-x: scroll;
        width: calc(100% + 16px);
    }
`;

const StyledFormatsTabs = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    justify-content: center;
    margin-bottom: 40px;

    @media ${device.mobile} {
        column-gap: 16px;
        margin-bottom: 0;
        padding: 0 16px;
        width: 569px;
    }
`;

const StyledFormatsTab = styled.button<{
    $active: boolean;
    $iconPositionX: number;
}>`
    align-items: flex-start;
    background-color: #f5f5f5;
    border: none;
    color: ${(props) => (props.$active ? "#ff6f3d" : "#444")};
    cursor: pointer;
    display: flex;
    font-size: 13px;
    font-weight: 700;
    justify-content: center;
    line-height: 1.5em;
    margin: 28px 0 12px 0;
    min-height: 40px;
    padding: 64px 16px 16px;
    position: relative;
    vertical-align: middle;
    transition: color 0.3s;
    text-align: center;
    width: 100%;

    &:hover {
        color: #ff7a4b;
    }

    &::before {
        content: '';
        background-image: url("/images/templates/document-builder/formats/icons_featured.svg");
        background-repeat: no-repeat;
        background-position-x: ${(props) => props.$iconPositionX ? `${props.$iconPositionX}px` : "0px"};
        display: inline-block;
        height: 48px;
        left: calc(50% - 24px);
        top: 0;
        position: absolute;
        width: 48px;
    }

    &::after {
        content: '';
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        border-bottom: 1px solid 
        ${(props) => (props.$active ? "#ff6f3d" : "transparent")};
        transition: border-color .2s;
    }

    @media ${device.tabletS} {
        font-size: 12px;
    }

    @media ${device.mobile} {
        height: 138px;
        padding: 64px 0 16px;
        min-width: 101px;
        word-break: break-word;
    }
`;

const StyledFormatsCodeBlockHeading = styled(Heading)`
    line-height: 1.33em;
    text-align: center;

    @media ${device.mobile} {
        font-size: 20px;
        font-weight: 800;
    }
`;

const StyledFormatsCodeBlockDesc = styled(Text)`
    display: block;
    color: #666666;
    line-height: 1.5em;
    text-align: center;
    margin: 24px auto 32px;
    max-width: 728px;
`;

const CodeBlock = styled.div`
    border: 1px solid #ccc;
    box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
    margin: 0 auto;
    width: 928px;
    border-radius: 6px;
    background-color: #fff;
    transition: box-shadow 0.3s;

    &:hover {
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
    }

    @media ${device.tablet} {
        width: 100%;
    }

    pre[class*="language-"] {
        background: #fff;
        margin: 0;
        padding: 0.5em;
        &.line-numbers {
            font-size: 14px;
            padding-left: 3em;
        }
    }

    @media ${device.mobile} {
        pre[class*="language-"].line-numbers {
            font-size: 11px;
            padding-left: 2.8em;
        }
    }
`;

const CodeWrapper = styled.div`
    width: 914px;
    padding: 7px;
    
    @media ${device.tablet} {
        width: 100%;
    }
`;

const CodeScrollable = styled.div`
    width: 913px;
    height: 506px;
    overflow: auto;

    pre {
        overflow-x: hidden !important;
    }
    
    @media ${device.tablet} {
        width: 100%;
    }
`;

const CodeDocDownload = styled(Link)`
    background-color: #f5f5f5;
    border-radius: 0 0 6px 6px;
    color: #444444;
    font-size: 14px;
    font-weight: 700;
    text-transform: uppercase;
    text-align: center;
    letter-spacing: 0.02em;
    padding: 14px 0 16px;
    display: block;
    transition: color 0.3s;

    &:hover {
        color: #ff7a4b;
    }

    @media ${device.mobile} {
        font-size: 12px;
    }
`;

const StyledTextDocumentWrapper = styled.div`
    align-items: center;
    display: flex;
    gap: 16px;
    margin-top: 54px;
    padding-bottom: 32px;

    @media ${device.tablet} {
        gap: 32px;
    }

    @media ${device.mobile} {
        flex-direction: column;
        gap: 32px;
        margin-top: 32px;
    }
`;

const StyledWrapperLeftBlock = styled(Text)`
    padding-right: 30px;
    span {
        font-weight: 700;
        padding-right: 6px;
    }

    @media ${device.mobile} {
        padding-right: 0;
    }
`;

const StyledWrapperRigthBlock = styled.div`
    display: flex;
    gap: 16px;

    @media ${device.desktop} {
        flex-wrap: wrap;
        row-gap: 42px;
    }

    @media ${device.tabletS} {
        justify-content: center;
        width: 100%;
    }

    @media ${device.mobile} {
        row-gap: 0;
    }
`;

const StyledWrapperRightLinks = styled(Link)`
    display: flex;
    color: #444444;
    font-size: 14px;
    padding-left: 40px;
    min-width: 138px;
    position: relative;

    &::before {
        background-image: url("/images/templates/document-builder/formats/api-for-icons.svg");
        background-position: 0 0;
        background-repeat: no-repeat;
        content: "";
        position: absolute;
        bottom: 50%;
        left: 0;
        transform: translateY(50%);
        height: 32px;
        width: 32px;
    }

    &:nth-child(2){
        padding-left: 50px;

        &::before {
            background-position-x: -141px;
            width: 40px;
        }
    }

    &:nth-child(3)::before {
        background-position-x: -197px;
    }
    
    &:nth-child(4){
        padding-left: 50px;
        
        &::before {
            background-position-x: -247px;
            width: 46px;
        }
    }

    &:nth-child(5)::before {
        background-position-x: -306px;
    }

    &:nth-child(6)::before {
        background-position-x: -354px;
    }

    @media ${device.mobile} {
        padding: 40px 0;
        justify-content: center;
        min-width: 85px;

        &:nth-child(2), &:nth-child(4) {
            padding-left: 0;
        }

        &::before {
            top: 0;
            left: 50%;
            transform: translateX(-50%);
        }
    }
`;

const StyledBlockIconsWrapperSec = styled.div`
        margin: 112px auto 24px;
        padding: 0 24px;

        @media ${device.desktop} {
            margin: 64px auto 24px;
            padding: 0;
        }
    `;

const StyledBlockIconsWrapperRow = styled.div`
    display: flex;
    justify-content: space-between;
    gap: 16px;
    margin: 16px 0;

    @media ${device.tablet} {
        flex-wrap: wrap;
    }
`;

const StyledBlockIconsWrapperBlockSec = styled.div<Omit<IApiIconRow, "label" | "iconPosX">>`
    background: #FFFFFF;
    border-radius: 5px;
    display: flex;
    justify-content: center;
    padding: 16px;
    width: ${({width}) => width};
    min-width: ${({minWidth}) => minWidth};

    @media ${device.tablet} {
        &:nth-child(n) {
            width: ${({widthTablet}) => widthTablet};  
            min-width: ${({minWidthTablet}) => minWidthTablet};
        }
    }

    @media ${device.mobile} {
        &:nth-child(n) {
            width: ${({widthMobile}) => widthMobile};
        }
    }
`;

const StyledBlockIconsWrapperBlockText = styled(Text)<Omit<IApiIconRow, "width">>`
    align-items: center;
    color: #333333;
    cursor: default;
    display: flex;
    font-size: 14px;
    line-height: 1.5em;
    text-decoration: none;
    position: relative;

    &::before {
        align-items: center;
        display: flex;
        flex-shrink: 0;
        background-image: url("/images/templates/document-builder/formats/api-features-icons.svg");
        background-position-x: ${({iconPosX}) => iconPosX}px;
        content: '';
        display: block;
        height: 32px;
        margin-right: 8px;
        width: 32px;
    }

    @media ${device.mobile} {
        font-size: 13px;
        text-align: center;
        display: block;

        &::before {
            margin: 0 auto 8px;
        }
    }
`;

export {
    StyledFormatsHeading,
    StyledFormatsDesc,
    StyledFormatsTabsBox,
    StyledFormatsTabs,
    StyledFormatsTab,
    StyledFormatsCodeBlockHeading,
    StyledFormatsCodeBlockDesc,
    CodeBlock,
    CodeWrapper,
    CodeScrollable,
    CodeDocDownload,
    StyledTextDocumentWrapper,
    StyledWrapperLeftBlock,
    StyledWrapperRightLinks,
    StyledWrapperRigthBlock,
    StyledBlockIconsWrapperSec,
    StyledBlockIconsWrapperRow,
    StyledBlockIconsWrapperBlockSec,
    StyledBlockIconsWrapperBlockText
}