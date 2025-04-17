import styled, { css } from "styled-components";
import { IList } from "./List.types";
import { device } from "@src/utils/device";

const StyledList = styled.ul<{ $variant: IList["variant"] }>`
  ${(props) =>
    props.$variant === "medium" &&
    css`
      padding: 8px 0;
      font-size: 16px;
      line-height: 24px;

      @media ${device.mobile} {
        font-size: 14px;
        line-height: 21px;
      }
    `}
`;

const StyledListItem = styled.li<{ $variant: IList["variant"] }>`
  position: relative;

  ${(props) =>
    props.$variant === "medium"
      ? css`
          padding-left: 32px;

          &::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 24px;
            height: 24px;
            background-image: url("/images/icons/check-gray.svg");
            background-repeat: no-repeat;
            background-size: contain;
          }

          &:not(:last-child) {
            margin-bottom: 8px;
          }
        `
      : props.$variant === "small"
      ? css`
          padding-left: 20px;
          font-size: 13px;
          line-height: 18px;

          &::before {
            content: "";
            position: absolute;
            top: 4px;
            left: 0;
            width: 12px;
            height: 12px;
            background-image: url("/images/icons/check-small.svg");
            background-repeat: no-repeat;
            background-size: contain;
          }

          &:not(:last-child) {
            margin-bottom: 10px;
          }
        `
      : null}
`;

export { StyledList, StyledListItem };
