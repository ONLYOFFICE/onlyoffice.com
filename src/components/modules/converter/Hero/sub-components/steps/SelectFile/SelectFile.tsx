import { useState, useRef } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledSelectFile,
  StyledSelectFileHeading,
  StyledSelectFileText,
  StyledSelectFileAnchorBtn,
  StyledFileErrorModalTextBtn,
} from "./SelectFile.styled";
import { ISelectFile } from "./SelectFile.types";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { FileErrorModal } from "../../modals/FileErrorModal";
import { getFileData } from "./utils/getFileData";
import { themeColors } from "@src/components/modules/converter/Hero/config/theme";

const SelectFile = ({
  theme,
  heading,
  setSelectedFile,
  setStep,
}: ISelectFile) => {
  const { t } = useTranslation("converter");
  const maxFileSize = 5 * 1024 * 1024;
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [dragActive, setDragActive] = useState(false);
  const [isOpenFileErrorModal, setIsOpenFileErrorModal] = useState(false);
  const [fileErrorReason, setFileErrorReason] = useState<
    "fileFormat" | "fileSize" | "fileSizeZero" | null
  >(null);

  const handleFileValidation = (file: File) => {
    const outputFormats = getFileData(
      file.name.split(".").pop()?.toLowerCase() || "",
      window.location.pathname,
    );

    if (outputFormats === null) {
      setFileErrorReason("fileFormat");
      setIsOpenFileErrorModal(true);
      fileInputRef.current!.value = "";
      return false;
    }
    if (file.size === 0) {
      setFileErrorReason("fileSizeZero");
      setIsOpenFileErrorModal(true);
      fileInputRef.current!.value = "";
      return false;
    }
    if (file.size > maxFileSize) {
      setFileErrorReason("fileSize");
      setIsOpenFileErrorModal(true);
      fileInputRef.current!.value = "";
      return false;
    }

    setSelectedFile(file);
    setStep("convert");
    return true;
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      handleFileValidation(file);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(false);

    const file = e.dataTransfer.files?.[0];
    if (file) {
      handleFileValidation(file);
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    setDragActive(true);
  };

  const handleDragLeave = () => setDragActive(false);

  const openFileDialog = () => {
    fileInputRef.current?.click();
  };

  const scrollToBlock = () => {
    setIsOpenFileErrorModal(false);
    const element = document.getElementById("supported-formats");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <StyledSelectFile
        onDrop={handleDrop}
        onDragOver={handleDragOver}
        onDragLeave={handleDragLeave}
        $dragActive={dragActive}
        $theme={theme}
      >
        <StyledSelectFileHeading
          level={3}
          color={theme ? themeColors[theme] : themeColors.default}
          $theme={theme}
        >
          {heading}
        </StyledSelectFileHeading>

        <StyledSelectFileText>
          <Text size={2}>
            <Trans
              t={t}
              i18nKey="MostPopularFormats"
              components={[
                <StyledSelectFileAnchorBtn
                  key="0"
                  onClick={(e) => {
                    e.preventDefault();
                    const el = document.getElementById("supported-formats");
                    if (el) {
                      el.scrollIntoView({ behavior: "smooth" });
                    }
                  }}
                />,
              ]}
            />
          </Text>
          <Text size={3}>
            <Trans
              t={t}
              i18nKey="MaximumFileSize"
              components={[
                <Link
                  key="0"
                  href="/docspace-registration"
                  color="main"
                  textUnderline
                  hover="underline-none"
                />,
              ]}
            />
          </Text>
        </StyledSelectFileText>

        <input
          type="file"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />

        <Button
          onClick={openFileDialog}
          fullWidth
          backgroundColor={theme ? themeColors[theme] : undefined}
          label={t("SelectFile")}
        />
        <Text size={2} label={t("OrDrag&DropItHere")} />
      </StyledSelectFile>

      <FileErrorModal
        isOpen={isOpenFileErrorModal}
        setIsOpenFileErrorModal={setIsOpenFileErrorModal}
        theme={theme}
      >
        {fileErrorReason === "fileFormat" ? (
          <>
            <Text
              size={2}
              textAlign="center"
              label={t("TheFileFormatIsNotSupported")}
            />
            <StyledFileErrorModalTextBtn onClick={scrollToBlock}>
              {t("SupportedFiles")}
            </StyledFileErrorModalTextBtn>
          </>
        ) : fileErrorReason === "fileSizeZero" ? (
          <Text
            size={2}
            textAlign="center"
            label={t("TheUploadedFileHaZeroSize")}
          />
        ) : fileErrorReason === "fileSize" ? (
          <Text size={2} textAlign="center">
            <Trans
              t={t}
              i18nKey="TheUploadedFileLikelyExceededTheMaximumFileSize"
              components={[<Text key={0} as="b" />]}
            />
          </Text>
        ) : null}
      </FileErrorModal>
    </>
  );
};

export { SelectFile };
