import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import styled from "styled-components";
import { Link } from "@src/components/ui/Link";
import { IApiIcon } from "./Formats.types";

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

    @media ${device.tablet} {
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

const StyledBlockIconsWrapper = styled.div`
    margin: 64px auto 24px;
    padding: 0 24px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 16px;

    @media ${device.desktop} {
        margin: 64px auto 24px;
        padding: 0;
    }
`;

const StyledBlockIconsWrapperBlock = styled(Text)<Omit<IApiIcon, "label">>`
    background-color: #fff;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 21.5px 16px 21.5px ${({paddingLeft}) => paddingLeft}px;
    border-radius: 5px;
    position: relative;
    width: ${({width}) => width}px;

    &::before {
        background-image: url("/images/templates/document-builder/formats/api-features-icons.svg");
        background-repeat: no-repeat;
        background-position-x: ${({iconPosX}) => iconPosX}px;
        content: "";
        display: block;
        position: absolute;
        top: 50%;
        left: ${({ leftIcon }) => `calc(50% - ${leftIcon}px)`};
        transform: translateY(-50%);
        height: 32px;
        width: 32px;
    }

    @media ${device.desktop} {
        max-height: 74px;
        width: ${({widthDesktop}) => widthDesktop ? widthDesktop : 15}%;
        
        &::before {
            left: ${({ leftIconDesktop, leftIcon }) => leftIconDesktop ? `calc(50% - ${leftIconDesktop}px)` : `calc(50% - ${leftIcon}px)`};
        }
    }

    @media ${device.tablet} {
        width: calc(33% - 10px);
        &::before {
            left: ${({ leftIconTablet }) => `calc(50% - ${leftIconTablet}px)`};
        }
    }

    @media ${device.mobile} {
        &:nth-child(n){
            font-size: 13px;
            text-align: center;
            padding: 56px 16px 16px 16px;
            min-height: 91.5px;
            max-height: 130px;
            width: calc(50% - 8px);
            
            &::before {
                top: 16px;
                left: 50%;
                transform: translateX(-50%);
            }
        }

    }

    /* &:nth-child(2)::before {
        background-position-x: -48px;
        left: calc(50% - 46px);
    }

    &:nth-child(3)::before {
        background-position-x: -96px;
        left: calc(50% - 44px);
    }

    &:nth-child(4)::before {
        background-position-x: -144px;
        left: calc(50% - 36px);
    }

    &:nth-child(5)::before {
        background-position-x: -192px;
        left: calc(50% - 52px);
    }

    &:nth-child(6)::before {
        background-position-x: -240px;
        left: calc(50% - 50px);
    }

    &:nth-child(7){
        width: 138px;
        &::before {
            background-position-x: -287px;
            left: calc(50% - 41px);
        }
    }

    &:nth-child(8){
        width: 156px;
        &::before {
            background-position-x: -336px;
            left: calc(50% - 62px);
        }
    }

    &:nth-child(9){
        width: 184px;
        &::before {
            background-position-x: -385px;
            left: calc(50% - 75px);
        }
    }

    &:nth-child(10){
        width: 171px;
        &::before {
            background-position-x: -432px;
            left: calc(50% - 66px);
        }
    }

    &:nth-child(8), &:nth-child(9), &:nth-child(10) {
        padding-left: 54px;
    }
    
    &:nth-child(11){
        padding-left: 59px;
        width: 139px;
        &::before {
            background-position-x: -480px;
            left: calc(50% - 46px);
        }
    }

    &:nth-child(12){
        padding-left: 53px;
        width: 198px;
        &::before {
            background-position-x: -528px;
            left: calc(50% - 82px);
        }
    }

    &:nth-child(13){
        padding-left: 48px;
        width: 192.5px;
        &::before {
            background-position-x: -576px;
            left: calc(50% - 82px);
        }
    }

    &:nth-child(14){
        padding-left: 48px;
        &::before {
            background-position-x: -624px;
            left: calc(50% - 44px);
        }
    }

    &:nth-child(15){
        &::before {
            background-position-x: -672px;
            left: calc(50% - 59px);
        }
    }

    &:nth-child(16){
        &::before {
            background-position-x: -720px;
            left: calc(50% - 37px);
        }
    }

    &:nth-child(17){
        &::before {
            background-position-x: -768px;
            left: calc(50% - 58px);
        }
    }

    &:nth-child(18){
        padding-left: 48px;
        &::before {
            background-position-x: -816px;
            left: calc(50% - 62px);
        }
    }

    &:nth-child(14), &:nth-child(15), &:nth-child(16), &:nth-child(17), &:nth-child(18) {
        width: 159.2px;
    }

    
    @media ${device.desktop} {
        max-height: 74px;
        width: 15%;

        &:nth-child(7) {
            width: 12.7%;
        }
        
        &:nth-child(8) {
            width: 14.6%;
            &::before {
                left: calc(50% - 53px);
            }
        }
        
        &:nth-child(9) {
            width: 17.1%;
            &::before {
                left: calc(50% - 65px);
            }
        }
        
        &:nth-child(10) {
            width: 15.9%;
            &::before {
                left: calc(50% - 61px);
            }
        }
        
        &:nth-child(11) {
            width: 12.7%;
        }
        
        &:nth-child(12) {
            width: 18.3%;
            &::before {
                left: calc(50% - 72px);
            }
        }

        &:nth-child(14) {
            width: 12.2%;
        }

        &:nth-child(15) {
            width: 15.3%;
            padding-left: 53px;
        }

        &:nth-child(16) {
            width: 12.2%;
            &::before {
                left: calc(50% - 33px);
            }
        }

        &:nth-child(17) {
            width: 15.5%;
        }

        &:nth-child(18) {
            width: 15.3%;
        }
    }

    @media ${device.tablet} {
        &:nth-child(n) {
            width: calc(33% - 10px);
        }

        &:nth-child(8)::before {
            left: calc(50% - 62px);
        }

        &:nth-child(9)::before {
            left: calc(50% - 76px);
        }

        &:nth-child(10)::before {
            left: calc(50% - 70px);
        }

        &:nth-child(12)::before {
            left: calc(50% - 82px);
        }
    }

    @media ${device.mobile} {
        &:nth-child(n){
            font-size: 13px;
            text-align: center;
            padding: 56px 16px 16px 16px;
            min-height: 91.5px;
            width: calc(50% - 8px);

            &::before {
                top: 16px;
                left: 50%;
                transform: translateX(-50%);
            }
        }
    } */
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
    StyledBlockIconsWrapper,
    StyledBlockIconsWrapperBlock,
}