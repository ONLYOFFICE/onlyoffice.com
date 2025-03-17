import styled, { css } from "styled-components";
import { IList } from "./List.types";
import { device } from "@src/utils/device";

export const StyledList = styled.ul<{
  $gap: IList["gap"];
}>`
  list-style: none;
  font-size: 16px;
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
  font-size: ${({ $color }) => $color || "#333"};
  color: ${({ $color }) => $color || "#333"};
  line-height: ${({ $lineHeight }) => $lineHeight || "1.5em"};
  position: relative;

  &:last-child {
    margin-bottom: 0;
  }

  ${({ $bulletType }) =>
    css`
      &::before {
        content: "";
        display: inline-block;

        ${$bulletType === "rhombus" &&
        css`
          background: #ff6f3d;
          width: 6px;
          height: 6px;
          margin: 0 20px 3px 0px;
          -ms-transform: rotate(45deg);
          -webkit-transform: rotate(45deg);
          transform: rotate(45deg);
        `}
        ${$bulletType === "check" &&
        css`
          background: url(../images/icons/check-dark.svg) no-repeat 0 0;
          width: 12px;
          height: 12px;
          background-size: 12px 12px;
          margin: 0 14px 0 6px;
          -ms-transform: rotate(0deg);
          -webkit-transform: rotate(0deg);
          transform: rotate(0deg);
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
