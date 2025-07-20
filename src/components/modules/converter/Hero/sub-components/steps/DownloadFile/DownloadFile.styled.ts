import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import {
  themeColors,
  IThemeColors,
} from "@src/components/modules/converter/Hero/config/theme";
import { Text } from "@src/components/ui/Text";

const StyledDownloadFile = styled.div<{ $theme?: keyof IThemeColors }>`
  display: grid;
  row-gap: 32px;
  border: 2px solid
    ${(props) => (props.$theme ? themeColors[props.$theme] : "#ff6f3d")};
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

const StyledDownloadFileImageWrapper = styled.div`
  position: relative;
  margin-bottom: 14px;
`;

const StyledDownloadFileImage = styled.img<{
  $isFormatZip: boolean;
  $formatType?: "text" | "presentation" | "pdf" | "spreadsheet" | null;
}>`
  box-sizing: border-box;
  display: block;
  margin: 0 auto;
  box-shadow: 0 7px 15px rgba(85, 85, 85, 0.1);

  ${(props) =>
    props.$isFormatZip
      ? css`
          width: 100px;
          height: 120px;
        `
      : css`
          border: 1px solid #e2e2e2;
          border-radius: 2px;
          padding: 16px;
          width: ${props.$formatType === "presentation" ? "120px" : "100px"};
          height: ${props.$formatType === "presentation" ? "100px" : "120px"};
        `}

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledDownloadFileIcon = styled.div<{ $isFormatZip: boolean }>`
  display: none;
  margin: 0 auto 8px;
  background-repeat: no-repeat;
  background-size: contain;

  ${(props) =>
    props.$isFormatZip
      ? css`
          width: 40px;
          height: 48px;
          background-image: url("/images/modules/converter/hero/file-result-zip.svg");
        `
      : css`
          width: 24px;
          height: 24px;
          background-image: url("/images/modules/converter/hero/file-result.svg");
        `}

  @media ${device.mobile} {
    display: block;
  }
`;

const StyledDownloadFileImageLabel = styled.div`
  position: absolute;
  top: 15px;
  left: calc(50% + 32px);
  width: 36px;
  height: 22px;
  background-image: url("/images/modules/converter/hero/zip-label.svg");

  @media ${device.mobile} {
    top: 13px;
    left: calc(50% + 6px);
  }
`;

const StyledDownloadFileText = styled(Text)`
  word-break: break-word;
`;

const StyledDownloadFileBtns = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  justify-content: center;
  gap: 12px;

  @media ${device.mobile} {
    grid-template-columns: initial;
    grid-template-rows: auto auto;
    justify-content: initial;
    gap: 8px;
  }
`;

const StyledDownloadFileBanner = styled.div`
  display: flex;
  align-items: center;
  border: 1px solid #e2e2e2;
  border-radius: 6px;
  padding: 16px 24px;
  background-color: #f9f9f9;

  @media ${device.mobile} {
    display: block;
    padding: 16px;
  }
`;

const StyledDownloadFileBannerBody = styled.div`
  display: grid;
  row-gap: 8px;
  margin-right: 24px;

  @media ${device.mobile} {
    margin-right: initial;
    margin-bottom: 24px;
  }
`;

export {
  StyledDownloadFile,
  StyledDownloadFileImageWrapper,
  StyledDownloadFileImage,
  StyledDownloadFileIcon,
  StyledDownloadFileImageLabel,
  StyledDownloadFileText,
  StyledDownloadFileBtns,
  StyledDownloadFileBanner,
  StyledDownloadFileBannerBody,
};
