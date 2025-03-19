import styled, { css } from "styled-components";
import { IList } from "./List.types";
import { device } from "@src/utils/device";

export const StyledList = styled.ul<{
  $gap: IList["gap"];
}>`
  list-style: none;
  display: grid;
  grid-template-columns: 1fr;
  row-gap: ${({ $gap }) => $gap || "16px"};
  text-align: start;

  @media ${device.mobile} {
    font-size: 14px;
  }
`;

export const StyledListItem = styled.li<{
  $fontSize: IList["fontSize"];
  $bulletType: IList["bulletType"];
  $color: IList["color"];
  $lineHeight?: IList["lineHeight"];
}>`
  font-size: ${({ $fontSize }) => $fontSize || "16px"};
  color: ${({ $color }) => $color || "#444444"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.5em"};
  position: relative;
  padding-left: ${({ $bulletType }) =>
    $bulletType === "rhombus" ? "26px" : "32px"};
  display: flex;
  align-items: center;

  &:last-child {
    margin-bottom: 0;
  }

  &:nth-child(odd):last-child {
    @media ${device.tabletS} {
      grid-column: span 2;
      justify-self: center;
      width: 50%;
    }

    @media ${device.mobile} {
      grid-column: unset;
      justify-self: unset;
      width: auto;
    }
  }

  ${({ $bulletType }) =>
    css`
      &::before {
        content: "";
        display: inline-block;
        position: absolute;
        top: 50%;
        left: 0;

        ${$bulletType === "rhombus" &&
        css`
          background: #ff6f3d;
          width: 6px;
          height: 6px;
          transform: rotate(45deg) translateY(-50%);
        `}
        ${$bulletType === "check" &&
        css`
          background: url(../images/icons/check-dark.svg) no-repeat 0 0;
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
          left: 6px;
          transform: rotate(0deg) translateY(-50%);
        `};
      }
    `}

  span,
  em,
  a {
    color: #ff6f3d;
    font-weight: 700;
  }
`;
