import styled, { css } from "styled-components";
import { IText } from "./Text.types";
import { device } from "@src/utils/device";

const StyledText = styled.p<{
  $size: IText["size"];
  $display: IText["display"];
  $fontSize: IText["fontSize"];
  $fontWeight: IText["fontWeight"];
  $fontStyle: IText["fontStyle"];
  $lineHeight: IText["lineHeight"];
  $color: IText["color"];
  $textAlign: IText["textAlign"];
  $textTransform: IText["textTransform"];
  $textDecoration: IText["textDecoration"];
  $truncate: IText["truncate"];
}>`
  display: ${(props) => props.$display};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  font-style: ${(props) => props.$fontStyle};
  line-height: ${(props) => props.$lineHeight};
  color: ${(props) => props.$color};
  text-align: ${(props) => props.$textAlign};
  text-transform: ${(props) => props.$textTransform};
  text-decoration: ${(props) => props.$textDecoration};

  ${(props) =>
    props.$size === 1 &&
    css`
      font-size: 18px;
      line-height: 27px;

      @media ${device.mobile} {
        font-size: 16px;
        line-height: 24px;
      }
    `}

  ${(props) =>
    props.$size === 2 &&
    css`
      font-size: 16px;
      line-height: 24px;

      @media ${device.mobile} {
        font-size: 14px;
        line-height: 21px;
      }
    `}

  ${(props) =>
    props.$size === 3 &&
    css`
      font-size: 14px;
      line-height: 21px;
    `}

  ${(props) =>
    props.$size === 4 &&
    css`
      font-size: 13px;
      line-height: 21px;
    `}

  ${(props) =>
    props.$truncate &&
    css`
      max-width: 100%;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
`;

export { StyledText };
