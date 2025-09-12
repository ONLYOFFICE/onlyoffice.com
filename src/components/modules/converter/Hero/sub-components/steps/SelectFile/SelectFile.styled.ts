import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  themeColors,
  IThemeColors,
} from "@src/components/modules/converter/Hero/config/theme";

const StyledSelectFile = styled.div<{
  $dragActive: boolean;
  $theme?: keyof IThemeColors;
}>`
  display: grid;
  row-gap: 32px;
  border: 2px dashed
    ${(props) => (props.$theme ? themeColors[props.$theme] : "#666666")};
  border-radius: 10px;
  padding: 48px;
  text-align: center;
  background-color: ${(props) =>
    props.$dragActive ? "rgba(154, 218, 243, 0.5)" : "#ffffff"};
  box-shadow: 0 7px 25px 0 rgba(120, 139, 150, 0.15);
  transition: background-color 0.2s;

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    row-gap: 24px;
    padding: 32px 16px;
  }
`;

const StyledSelectFileHeading = styled(Heading)<{
  $theme?: keyof IThemeColors;
}>`
  ${(props) =>
    props.$theme &&
    css`
      position: relative;
      display: flex;
      align-items: center;
      justify-content: center;

      &::before {
        content: "";
        display: inline-block;
        margin-right: 10px;
        width: 32px;
        height: 32px;
        background-image: url(${getAssetUrl('/images/modules/converter/hero/formats.svg')});

        ${props.$theme === "text"
          ? css`
              background-position-x: 0;
            `
          : props.$theme === "spreadsheet"
            ? css`
                background-position-x: -48px;
              `
            : props.$theme === "presentation"
              ? css`
                  background-position-x: -96px;
                `
              : props.$theme === "pdf"
                ? css`
                    background-position-x: -144px;
                  `
                : null}

        @media ${device.mobile} {
          margin-right: initial;
          margin-bottom: 4px;
        }
      }

      @media ${device.mobile} {
        flex-direction: column;
      }
    `};
`;

const StyledSelectFileText = styled.div`
  display: grid;
  row-gap: 12px;
`;

const StyledSelectFileAnchorBtn = styled.button`
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledFileErrorModalTextBtn = styled.button`
  border: none;
  padding: 0;
  font-size: 16px;
  line-height: 24px;
  color: #ff6f3d;
  text-align: center;
  text-decoration: underline;
  background-color: transparent;
  cursor: pointer;

  &:hover {
    text-decoration: none;
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

export {
  StyledSelectFile,
  StyledSelectFileHeading,
  StyledSelectFileText,
  StyledSelectFileAnchorBtn,
  StyledFileErrorModalTextBtn,
};
