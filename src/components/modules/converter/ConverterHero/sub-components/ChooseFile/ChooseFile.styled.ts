import { Heading } from "@src/components/ui/Heading";
import styled from "styled-components";
import { IFormats } from "../../data/formats";

const StyledChooseFile = styled.div<{ $color?: string; $borderStyle?: string }>`
  width: 100%;
  padding: 48px;
  display: grid;
  gap: 32px;
  justify-items: center;
  background-color: #fff;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ $color }) => $color};
  border-style: ${({ $borderStyle }) => $borderStyle || "solid"};
`;

const StyledChooseFileHeading = styled(Heading)<{
  $fileType: keyof IFormats | "none";
}>`
  display: flex;
  justify-content: center;
  align-items: center;

  ${({ $fileType }) =>
    $fileType !== "none" &&
    `
      &::before {
        content: "";
        display: block;
        width: 32px;
        height: 32px;
        margin-right: 10px;
        background-image: url("/images/modules/converter/input_format_icons.svg");
        background-repeat: no-repeat;
        background-position-x: ${
          $fileType === "spreadsheet"
            ? "-48px"
            : $fileType === "presentation"
              ? "-96px"
              : $fileType === "pdf"
                ? "-144px"
                : "0"
        };
      }
    `}
`;

const StyledChooseFileInfo = styled.div`
  display: grid;
  gap: 16px;
`;

const StyledChooseFileFormats = styled.span`
  font-size: 16px;
  line-height: 26px;
`;

const StyledChooseFileSize = styled.span`
  font-size: 16px;
  line-height: 26px;
`;

const StyledChooseFileInput = styled.input`
  display: none;
`;

const StyledChooseFileFormatsButton = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  color: #ff6f3d;
  text-decoration: underline;
  font-size: 16px;
  line-height: 26px;

  &:hover {
    text-decoration: none;
  }
`;

export {
  StyledChooseFile,
  StyledChooseFileHeading,
  StyledChooseFileInfo,
  StyledChooseFileFormats,
  StyledChooseFileSize,
  StyledChooseFileInput,
  StyledChooseFileFormatsButton,
};
