import styled, { css } from "styled-components";
import { IContentImage } from "./ContentImage.types";
import { device } from "@src/utils/device";

const StyledContentImage = styled.div<{
  $gap: IContentImage["gap"];
  $position: IContentImage["position"];
  $justifyContent?: string;
  $alignItems?: string;
  $rowGap?: IContentImage["rowGap"];
  $marginTop?: IContentImage["marginTop"];
}>`
  display: flex;
  align-items: ${(props) => props.$alignItems ?? 'center'};
  justify-content: ${(props) => props.$justifyContent ?? ''};

  @media ${device.tabletS} {
    flex-direction: ${(props) =>
      props.$position?.mobile === "bottom" ? "column-reverse" : "column"};
    align-items: initial;
    row-gap: ${(props) => props.$rowGap ?? 0}px;
  }
`;

const StyledContentImageContent = styled.div<{
  $marginTop?: IContentImage["marginTop"];
  $contentWidth?: IContentImage["contentWidth"];
  $position?: IContentImage["position"];
  $gap?: IContentImage["gap"];
}>`
  flex: 0 1 ${(props) => `${props.$contentWidth}px`};

  ${(props) =>
    props.$position?.desktop === "right"
      ? css`
          margin-left: ${(props.$gap?.desktop ?? 32) + "px"};

          ${props.$gap?.tablet &&
          css`
            @media ${device.tablet} {
              margin-left: ${`${props.$gap?.tablet}px`};
            }
          `}

          @media ${device.tabletS} {
            margin-left: 0;
          }
        `
      : css`
          margin-right: ${(props.$gap?.desktop ?? 32) + "px"};

          ${props.$gap?.tablet &&
          css`
            @media ${device.tablet} {
              margin-right: ${`${props.$gap?.tablet}px`};
            }
          `}

          @media ${device.tabletS} {
            margin-right: 0;
          }
        `}

  ${(props) =>
    props.$position?.mobile === "top"
      ? css`
          @media ${device.tabletS} {
            margin-bottom: ${(props.$gap?.tabletS ?? 24) + "px"};
          }

          @media ${device.mobile} {
            margin-bottom: ${(props.$gap?.mobile ?? 16) + "px"};
          }
        `
      : css`
          @media ${device.tabletS} {
            margin-top: ${(props.$marginTop?.tabletS ?? 24) + "px"};

            @media ${device.mobile} {
              margin-top: ${(props.$marginTop?.mobile ?? 16) + "px"};
            }
          }
        `}

  @media ${device.tabletS} {
    flex: initial;
  }
`;

const StyledContentImageImgWrapper = styled.div<{
  $image: IContentImage["image"];
  $position?: IContentImage["position"];
  $displaytabletS?: string;
}>`
  flex: 0 1 ${(props) => `${props.$image.width}px`};

  ${(props) =>
    props.$position?.desktop === "right" &&
    css`
      order: -1;

      @media ${device.tabletS} {
        order: initial;
      }
    `}

  @media ${device.tabletS} {
    display: ${(props) => props.$displaytabletS || ""};
  }
`;

const StyledContentImageImg = styled.div<{
  $image: IContentImage["image"];
}>`
  padding-bottom: ${(props) =>
    props.$image.height && props.$image.width
      ? `${((props.$image.height / props.$image.width) * 100).toFixed(4)}%`
      : "0%"};
  background-image: url(${(props) => props.$image.url});
  background-repeat: no-repeat;
  background-size: contain;
  background-position: center;

  ${(props) =>
    props.$image.url2x &&
    css`
      @media ${device.retina} {
        background-image: url(${props.$image.url2x});
      }
    `}
`;

export {
  StyledContentImage,
  StyledContentImageContent,
  StyledContentImageImgWrapper,
  StyledContentImageImg,
};
