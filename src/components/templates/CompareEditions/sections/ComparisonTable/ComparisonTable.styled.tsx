import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Container } from "@src/components/ui/Container";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledTableParagraph = styled.p`
  font-size: 16px;
  line-height: 1.6em;
  text-align: center;
  margin: 0 auto;
  padding: 32px 0;
  color: #333;

  @media ${device.tablet} {
    padding: 24px 0;
    text-align: center;
  }
  @media ${device.mobile} {
    padding: 16px 0;
    text-align: center;
    font-size: 12px;
    line-height: 1.33em;
  }
`;

const StyledTable = styled.table`
  width: 100%;
  border-collapse: collapse;
  background-color: #ffffff;

  @media ${device.tablet} {
    border-collapse: separate;
    border-spacing: 0;
  }
`;

const StyledTableHeadCell = styled.th`
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  padding: 32px;
  background-color: #f5f5f5;
  border-bottom: 1px solid #e0e0e0;
  text-align: center;
  vertical-align: middle;
  width: 25%;

  &:first-child {
    width: 25%;
    text-align: left;
  }

  &:nth-child(2n) {
    background-color: #eeeeee;
  }

  &:not(:first-child) {
    text-align: center;
    width: 25%;
  }

  @media ${device.tablet} {
    &:first-child {
      background-color: #f5f5f5;
      box-sizing: border-box;
      padding: 20px 32px;
      text-align: center;
      width: 100%;
    }

    &:not(:first-child) {
      flex: 1;
      padding: 16px;
    }
  }

  @media ${device.mobile} {
    font-size: 16px;
    &:first-child {
      padding: 13px 16px;
    }

    &:not(:first-child) {
      padding: 7px 10px;
      font-size: 13px;
      min-height: 25px;
    }
  }
`;

const StyledTableRow = styled.tr`
  @media ${device.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledTableCell = styled.td<{ $thin?: boolean; $empty?: boolean }>`
  padding: ${(props) => (props.$thin ? "16px 20px" : "31px 32px")};
  font-size: 16px;
  border-bottom: 1px solid #cccccc;
  color: #333333;
  vertical-align: middle;

  &:nth-child(2n) {
    background-color: #f7f7f7;
  }

  &:not(:first-child) {
    text-align: center;
  }

  @media ${device.tablet} {
    &:first-child {
      padding: 19px 32px;
      width: 100%;
      text-align: center;
    }

    &:not(:first-child) {
      flex: 1;
      padding: 20px 10px;
      align-items: center;
    }

    ${(props) =>
      props.$empty &&
      css`
        display: none;
      `}
  }

  @media ${device.mobile} {
    &:first-child {
      font-size: 12px;
      padding: 15px 16px;
    }
    &:not(:first-child) {
      padding: 16px;
      font-size: 12px;
    }

    .download {
      background-image: url(${getAssetUrl('/images/icons/comptry-reg.svg')});
      background-position: center;
      background-repeat: no-repeat;
      background-size: 24px;
      font-size: 0;
      min-width: initial;
      padding: 12px 20px;
      min-height: 40px;
    }
  }

  > a.wl {
    border-bottom: 1px dashed #ff6f3d;
    color: #333333;
    text-decoration: none;
  }
`;

const StyledTableNote = styled.p`
  display: block;
  font-size: 14px;
  line-height: 1.5em;
  max-width: 928px;
  padding: 104px 0 24px;
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
    padding: 88px 35px 16px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
    padding: 72px 35px 16px;
  }

  @media ${device.mobile} {
    font-size: 13px;
    padding: 64px 16px 0;
  }
`;

const StyledBullet = styled.span<{ className: string }>`
  background-color: #333333;
  width: 10px;
  height: 10px;
  display: block;
  margin: 0 auto;
  border-radius: 10px;

  &.yes {
    opacity: 1;
  }
  &.no {
    opacity: 0.1;
  }
`;

const StyledInfo = styled.span<{ $text: string; $right?: boolean }>`
  background-image: url(../images/icons/info.svg);
  cursor: pointer;
  display: inline-block;
  margin-left: 8px;
  height: 24px;
  opacity: 0.29;
  position: absolute;
  transition-duration: 0.3s;
  vertical-align: middle;
  width: 24px;

  &::after {
    content: "${({ $text }) => $text}";
    background: rgba(0, 0, 0, 0.6);
    border-radius: 5px;
    box-sizing: border-box;
    color: #ffffff;
    font-size: 13px;
    font-weight: 400;
    left: ${(props) => (props.$right ? " calc(50% - 180px)" : "24px")};
    line-height: 18px;
    width: max-content;
    max-width: 320px;
    padding: 6px 8px;
    text-align: left;
    top: ${(props) => (props.$right ? "48px" : "40px")};
    z-index: 1;
    position: absolute;
    transform: translateY(-50%);
    opacity: 0;
    pointer-events: none;
    transition: opacity 0.2s;

    @media ${device.tablet} {
      left: ${(props) =>
        props.$right ? " calc(50% - 190px)" : "calc(100% - 100px)"};
      max-width: 150px;
    }
  }

  &:hover {
    opacity: 1;
    &::after {
      opacity: 1;
    }
  }

  @media ${device.mobile} {
    margin-top: -4px;
  }
`;

const StyledContainer = styled(Container)`
  @media ${device.tablet} {
    padding: 0;
  }
`;

export {
  StyledBullet,
  StyledTableNote,
  StyledInfo,
  StyledTableParagraph,
  StyledTable,
  StyledTableHeadCell,
  StyledTableRow,
  StyledTableCell,
  StyledContainer,
};
