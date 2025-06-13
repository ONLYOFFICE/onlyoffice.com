import { Button } from "@src/components/ui/Button";
import styled from "styled-components";

const StyledSelectFormatFile = styled.div<{
  $color: string;
  $borderStyle?: string;
}>`
  width: 100%;
  padding: 48px;
  display: grid;
  gap: 32px;
  justify-items: center;
  background-color: #fff;
  border-radius: 10px;
  border-width: 2px;
  border-color: ${({ $color }) => $color};
  border-style: solid;
`;

const StyledChooseFileRow = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: 1fr minmax(103px, auto);
  gap: 8px;
  position: relative;
`;

const StyledChooseFileWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 15px 16px;
  border: 1px dashed #aaaaaa;
  border-radius: 4px;
`;

const StyledChooseFile = styled.div<{ $fileType: string | null }>`
  max-width: 429px;
  padding-left: 32px;
  position: relative;
  font-size: 14px;

  ${({ $fileType }) =>
    `
      &::before {
        content: "";
        position: absolute;
        top: -2px;
        left: 0;
        display: block;
        width: 24px;
        height: 24px;
        background-image: url("/images/modules/converter/convert_icons.svg");
        background-repeat: no-repeat;
        background-position-y: 100%;
        background-position-x: ${
          $fileType === "spreadsheet"
            ? "-260px"
            : $fileType === "presentation"
              ? "-300px"
              : $fileType === "pdf"
                ? "-526px"
                : "-220px"
        };
      }
    `}
`;

const StyledChooseFileDelete = styled.button`
  border: none;
  background-color: transparent;
  cursor: pointer;
  width: 24px;
  height: 24px;
  background-image: url("/images/modules/converter/convert_icons.svg");
  background-repeat: no-repeat;
  background-position: -380px 100%;

  &:hover {
    background-position: -420px 100%;
  }
`;

const StyledChooseFileSelect = styled.button<{ $isOpen: boolean }>`
  border: none;
  background-color: transparent;
  border: 1px solid #aaaaaa;
  padding: 20px 16px;
  border-radius: 3px;
  display: grid;
  grid-template-columns: auto auto;
  align-items: center;
  gap: 4px;
  cursor: pointer;
  text-transform: uppercase;
  text-align: center;
  font-weight: 600;
  transition-duration: 0.2s;

  &::after {
    content: "";
    display: block;
    width: 16px;
    height: 16px;
    background-image: url("/images/modules/converter/convert_icons.svg");
    background-repeat: no-repeat;
    background-position: -460px 100%;
    transform: ${({ $isOpen }) =>
      $isOpen ? "rotate(-90deg)" : "rotate(90deg)"};
  }

  &:hover {
    border-color: #ff6f3d;
    color: #ff6f3d;

    &::after {
      background-position: -492px 100%;
    }
  }
`;

const StyledChooseFileFormats = styled.div<{ $isOpen: boolean }>`
  width: 234px;
  padding: 24px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 8px;
  box-shadow: 0px 7px 25px rgba(85, 85, 85, 0.15);
  border: 1px solid #666666;
  border-radius: 3px;
  background-color: #fff;
  z-index: 1;
  position: absolute;
  top: 65px;
  right: 0;
  visibility: ${({ $isOpen }) => ($isOpen ? "visible" : "hidden")};
  cursor: default;
`;

const StyledChooseFileFormat = styled.button<{
  $selected: boolean;
  $disabled: boolean;
}>`
  border: none;
  background-color: transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 0;
  font-weight: 600;
  line-height: 16px;
  text-transform: uppercase;
  border-radius: 2px;
  background-color: ${({ $selected, $disabled }) =>
    $selected && !$disabled ? "#FF6F3D" : "#EFEFEF"};
  color: ${({ $selected, $disabled }) =>
    $selected ? "#fff" : $disabled ? "#AAAAAA" : "#333333"};
`;

const StyledChooseFileBtnsWrapper = styled.div`
  display: flex;
  gap: 8px;
`;

const StyledChooseFileButton = styled(Button)<{ $backgroundColor: string }>`
  background-color: ${({ $backgroundColor }) => $backgroundColor};
`;

export {
  StyledSelectFormatFile,
  StyledChooseFileRow,
  StyledChooseFileWrapper,
  StyledChooseFile,
  StyledChooseFileDelete,
  StyledChooseFileSelect,
  StyledChooseFileFormats,
  StyledChooseFileFormat,
  StyledChooseFileBtnsWrapper,
  StyledChooseFileButton,
};
