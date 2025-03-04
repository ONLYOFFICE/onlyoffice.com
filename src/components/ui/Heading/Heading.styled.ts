import styled, { css } from "styled-components";
import { IHeading } from "./Heading.types";
import { device } from "@src/utils/device";

const StyledHeading = styled.h1<{
  $color: IHeading["color"];
  $level: IHeading["level"];
  $size: IHeading["size"];
  $textAlign: IHeading["textAlign"];
  $textTransform: IHeading["textTransform"];
}>`
  color: ${(props) => (props.$color ? props.$color : "#333333")};
  text-align: ${(props) => props.$textAlign};
  text-transform: ${(props) => props.$textTransform};

  ${(props) =>
    props.$size === 1 &&
    css`
      font-size: 48px;
      line-height: 64px;
      letter-spacing: -0.03em;

      @media ${device.tabletS} {
        font-size: 44px;
        line-height: 60px;
        letter-spacing: -0.02em;
      }

      @media ${device.mobile} {
        font-size: 28px;
        line-height: 37px;
      }
    `}

  ${(props) =>
    props.$size === 2 &&
    css`
      font-size: 40px;
      line-height: 52px;
      letter-spacing: -0.02em;

      @media ${device.tabletS} {
        font-size: 36px;
        line-height: 48px;
      }

      @media ${device.mobile} {
        font-size: 24px;
        line-height: 32px;
      }
    `}

  ${(props) =>
    props.$size === 3 &&
    css`
      font-size: 32px;
      line-height: 43px;
      letter-spacing: -0.02em;

      @media ${device.tabletS} {
        font-size: 30px;
        line-height: 40px;
      }

      @media ${device.mobile} {
        font-size: 20px;
        line-height: 27px;
      }
    `}

  ${(props) =>
    props.$size === 4 &&
    css`
      font-size: 24px;
      line-height: 32px;
      letter-spacing: -0.02em;

      @media ${device.mobile} {
        font-size: 18px;
        line-height: 24px;
      }
    `}

  ${(props) =>
    props.$size === 5 &&
    css`
      font-size: 18px;
      line-height: 24px;
      letter-spacing: -0.02em;

      @media ${device.mobile} {
        font-size: 16px;
        line-height: 22px;
      }
    `}

  ${(props) =>
    props.$size === 6 &&
    css`
      font-size: 14px;
      line-height: 16px;

      @media ${device.mobile} {
        font-size: 13px;
        line-height: 16px;
      }
    `}

  ${(props) =>
    props.$size === 7 &&
    css`
      font-size: 13px;
      line-height: 18px;
      letter-spacing: 0.04em;

      @media ${device.mobile} {
        font-size: 12px;
      }
    `}
`;

export { StyledHeading };
