import styled, { css } from "styled-components";
import { ILink } from "./Link.types";
import Link from "next/link";

const StyledLink = styled(Link)<{
  $display: ILink["display"];
  $fontSize: ILink["fontSize"];
  $fontWeight: ILink["fontWeight"];
  $lineHeight: ILink["lineHeight"];
  $color: ILink["color"];
  $textTransform: ILink["textTransform"];
  $textUnderline: ILink["textUnderline"];
  $hover: ILink["hover"];
}>`
  display: ${(props) => props.$display};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight};
  line-height: ${(props) => props.$lineHeight};
  color: ${(props) => (props.$color === "main" ? "#ff6f3d" : props.$color)};
  text-transform: ${(props) => props.$textTransform};
  text-decoration: ${(props) =>
  props.$textUnderline === false ? "none" : "underline"};


  ${(props) =>
    props.$hover === "color" &&
    css`
      transition: color 0.2s;

      &:hover {
        color: #ff6f3d;
      }
    `}

  ${(props) =>
    props.$hover === "underline" &&
    css`
      &:hover {
        text-decoration: underline;
      }
    `}

  ${(props) =>
    props.$hover === "underline-none" &&
    css`
      &:hover {
        text-decoration: none;
      }
    `}
`;

export { StyledLink };
