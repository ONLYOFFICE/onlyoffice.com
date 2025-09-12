import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  themeColors,
  IThemeColors,
} from "@src/components/modules/converter/Hero/config/theme";

const StyledConvertFile = styled.div<{
  $theme?: keyof IThemeColors;
  $isLoading: boolean;
}>`
  display: grid;
  justify-items: ${(props) => props.$isLoading && "center"};
  row-gap: 32px;
  border: 2px solid
    ${(props) =>
      props.$theme
        ? themeColors[props.$theme]
        : props.$isLoading
          ? "#666666"
          : "#ff6f3d"};
  border-radius: 10px;
  padding: 48px;
  background-color: #ffffff;

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    padding: 32px 16px;
  }
`;

const StyledConvertFileWrapper = styled.div`
  display: flex;
  align-items: start;
`;

const StyledConvertFileSelect = styled.div`
  display: flex;
  align-items: center;
  border: 1px dashed #aaaaaa;
  border-radius: 4px;
  padding: 15px;
  margin-right: 8px;
  width: 100%;
  min-height: 56px;

  @media ${device.mobile} {
    border: none;
    border-radius: initial;
    padding: 4px 0;
  }
`;

const StyledConvertFileSelectIcon = styled.span<{
  $formatType?: "text" | "spreadsheet" | "presentation" | "pdf" | null;
}>`
  margin-right: 8px;
  width: 24px;
  height: 24px;
  background-image: url(${getAssetUrl('/images/modules/converter/hero/input-formats.svg')});

  ${(props) =>
    props.$formatType === "spreadsheet"
      ? css`
          background-position-x: -40px;
        `
      : props.$formatType === "presentation"
        ? css`
            background-position-x: -80px;
          `
        : props.$formatType === "pdf"
          ? css`
              background-position-x: -120px;
            `
          : null}

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledConvertFileSelectName = styled.div`
  display: block;
  flex: 0 1 100%;
  margin-right: 16px;
  font-size: 14px;
  line-height: 22px;
  width: 200px;
  overflow: hidden;
  word-break: break-word;
  white-space: nowrap;
  text-overflow: ellipsis;

  > b {
    white-space: nowrap;
  }

  @media ${device.mobile} {
    width: initial;
    overflow: initial;
    white-space: initial;
    text-overflow: initial;
  }
`;

const StyledConvertFileRemoveBtn = styled.button`
  border: none;
  padding: 0;
  width: 24px;
  min-width: 24px;
  height: 24px;
  background-color: transparent;
  cursor: pointer;

  svg {
    rect,
    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    svg {
      rect {
        &:nth-child(1),
        &:nth-child(2) {
          fill: #ff6f3d;
        }
      }

      path {
        fill: #ff6f3d;
      }
    }
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledConvertFileOutputWrapper = styled.div`
  position: relative;
`;

const StyledConvertFileOutputBtn = styled(Button)<{
  $active: boolean;
}>`
  padding: 15px 8px;
  min-width: 103px;
  min-height: 56px;

  svg {
    margin-left: 4px;
    transform: ${(props) => props.$active && "rotate(180deg)"};

    path {
      transition: fill 0.2s;
    }
  }

  &:hover {
    svg path {
      fill: #ff6f3d;
    }
  }

  @media ${device.mobile} {
    padding: 11px 8px;
    min-height: 48px;
  }
`;

const StyledConvertFileOutputFormats = styled.div`
  position: absolute;
  top: calc(100% + 4px);
  right: 0;
  border: 1px solid #666666;
  border-radius: 9px;
  padding: 24px;
  background-color: #ffffff;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  z-index: 1;
`;

const StyledConvertFileOutputFormatsHeading = styled(Text)`
  margin-bottom: 8px;
`;

const StyledConvertFileOutputFormatsList = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
`;

const StyledConvertFileOutputFormat = styled.button<{
  $currentFormat: boolean;
  $isNumbersFormat: boolean;
}>`
  border: none;
  padding: ${(props) => (props.$isNumbersFormat ? "8px 4px" : "8px 10px")};
  font-size: ${(props) => (props.$isNumbersFormat ? "9px" : "11px")};
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.02m;
  text-align: center;
  text-transform: uppercase;
  color: ${(props) =>
    props.$isNumbersFormat
      ? "#AAAAAA"
      : props.$currentFormat
        ? "#ffffff"
        : "#333333"};
  background-color: ${(props) =>
    props.$currentFormat ? "#ff6f3d" : "#efefef"};
  cursor: pointer;
  pointer-events: ${(props) => props.$isNumbersFormat && "none"};

  &:disabled {
    color: #aaaaaa;
    background-color: #efefef;
    pointer-events: none;
    cursor: none;
  }
`;

const StyledConvertFileBtns = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 8px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    grid-template-rows: auto auto;
    justify-content: initial;
  }
`;

const StyledConvertFileLoadingTextWrapper = styled.div`
  display: flex;
  align-items: center;
  min-height: 48px;

  @media ${device.mobile} {
    min-height: 63px;
  }
`;

const StyledConvertFileLoadingText = styled(Text)<{ $fade: boolean }>`
  opacity: ${(props) => (props.$fade ? 1 : 0)};
  transition: opacity 1000ms ease-in-out;
`;

export {
  StyledConvertFile,
  StyledConvertFileWrapper,
  StyledConvertFileSelect,
  StyledConvertFileSelectIcon,
  StyledConvertFileSelectName,
  StyledConvertFileRemoveBtn,
  StyledConvertFileOutputWrapper,
  StyledConvertFileOutputBtn,
  StyledConvertFileOutputFormats,
  StyledConvertFileOutputFormatsHeading,
  StyledConvertFileOutputFormatsList,
  StyledConvertFileOutputFormat,
  StyledConvertFileBtns,
  StyledConvertFileLoadingTextWrapper,
  StyledConvertFileLoadingText,
};
