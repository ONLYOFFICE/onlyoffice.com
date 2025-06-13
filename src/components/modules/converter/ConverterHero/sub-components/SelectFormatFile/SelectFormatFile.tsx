import ReactCaptcha from "@hcaptcha/react-hcaptcha";
import { HCaptcha } from "@src/components/widgets/HCaptcha";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledChooseFile,
  StyledChooseFileBtnsWrapper,
  StyledChooseFileButton,
  StyledChooseFileDelete,
  StyledChooseFileFormat,
  StyledChooseFileFormats,
  StyledChooseFileRow,
  StyledChooseFileSelect,
  StyledChooseFileWrapper,
  StyledSelectFormatFile,
} from "./SelectFormatFile.styled";
import { Button } from "@src/components/ui/Button";
import { TSteps } from "../../ConverterHero.types";
import { DeleteConfirmModal } from "../DeleteConfirmModal";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { formats } from "../../data/formats";

const SelectFormatFile = ({
  file,
  setFile,
  setStep,
  selectedFileType,
  outputType,
  setOutputType,
  setHCaptcha,
  color,
  onSubmit,
}: {
  file: File | null;
  setFile: (file: File | null) => void;
  setStep: (step: TSteps) => void;
  selectedFileType: keyof typeof formats | null;
  setOutputType: (type: string | null) => void;
  setHCaptcha: (hCaptcha: string | null) => void;
  outputType: string | null;
  color: string;
  onSubmit: () => void;
}) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [modalText, setModalText] = useState<string>("");
  const [isDeleting, setIsDeleting] = useState<boolean>(false);
  const [isVerified, setIsVerified] = useState<boolean>(false);
  const [isOpenFormats, setIsOpenFormats] = useState<boolean>(false);
  const hCaptchaRef = useRef<ReactCaptcha | null>(null);
  const dropdownRef = useRef<HTMLDivElement | null>(null);

  const { fileName, fileType } = useMemo(() => {
    const parts = file?.name.split(".") ?? [];
    return {
      fileName: parts.slice(0, -1).join(".").toLowerCase(),
      fileType: parts.at(-1)?.toLowerCase() ?? "",
    };
  }, [file]);

  useEffect(() => {
    const handleClickOutside = (event: PointerEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpenFormats(false);
      }
    };

    document.addEventListener("pointerdown", handleClickOutside);

    return () => {
      document.removeEventListener("pointerdown", handleClickOutside);
    };
  }, []);

  const handleFileDeleteClick = useCallback(() => {
    setIsOpen(true);
    setModalText("Are you sure you want to delete this file?");
    setIsDeleting(true);
  }, []);

  const handleFormatSelectToggle = useCallback(() => {
    setIsOpenFormats((prev) => !prev);
  }, []);

  const handleFormatClick = useCallback(
    (format: string) => {
      setIsOpenFormats(false);
      setOutputType(format);
    },
    [setOutputType],
  );

  const handleCancelClick = useCallback(() => {
    setIsOpen(true);
    setModalText("Leave the page and convert new file?");
    setIsDeleting(false);
  }, []);

  const handleConfirmDelete = useCallback(() => {
    setFile(null);
    setStep("select");
  }, [setFile, setStep]);

  const handleConvertClick = useCallback(() => {
    onSubmit();
    setStep("loading");
  }, [setStep, onSubmit]);

  const handleCaptchaVerify = useCallback(
    (token: string | null) => {
      setHCaptcha(token);
      setIsVerified(!!token);
    },
    [setHCaptcha],
  );

  return (
    <StyledSelectFormatFile $color={color}>
      <Heading
        level={3}
        size={4}
        label={"Select a format file to convert"}
        textAlign="center"
        color={color}
      />
      <StyledChooseFileRow>
        <StyledChooseFileWrapper>
          <StyledChooseFile $fileType={selectedFileType}>
            <span>{fileName}</span>.<b>{fileType}</b>
          </StyledChooseFile>
          <StyledChooseFileDelete
            onClick={handleFileDeleteClick}
          ></StyledChooseFileDelete>
        </StyledChooseFileWrapper>
        <StyledChooseFileSelect
          onClick={handleFormatSelectToggle}
          $isOpen={isOpenFormats}
        >
          <span>{outputType}</span>
        </StyledChooseFileSelect>
        <StyledChooseFileFormats ref={dropdownRef} $isOpen={isOpenFormats}>
          {selectedFileType &&
            formats[selectedFileType]?.allOutputFormats.map((format, index) => {
              const isDisabled =
                !formats[selectedFileType]?.outputFormats[fileType]?.includes(
                  format,
                );

              return (
                <StyledChooseFileFormat
                  $selected={format === outputType}
                  $disabled={isDisabled}
                  disabled={isDisabled}
                  onClick={() => handleFormatClick(format)}
                  style={{ fontSize: format === "numbers" ? "9px" : "11px" }}
                  key={index}
                >
                  {format}
                </StyledChooseFileFormat>
              );
            })}
        </StyledChooseFileFormats>
      </StyledChooseFileRow>
      <HCaptcha
        ref={hCaptchaRef}
        onVerify={handleCaptchaVerify}
        onExpire={() => handleCaptchaVerify(null)}
      />
      <StyledChooseFileBtnsWrapper>
        <Button label="Cancel" variant="tertiary" onClick={handleCancelClick} />
        <StyledChooseFileButton
          $backgroundColor={color}
          label="Convert"
          disabled={!isVerified}
          onClick={handleConvertClick}
        />
      </StyledChooseFileBtnsWrapper>
      <DeleteConfirmModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        onDelete={handleConfirmDelete}
        color={color}
        text={modalText}
        isDeleting={isDeleting}
      />
    </StyledSelectFormatFile>
  );
};

export { SelectFormatFile };
