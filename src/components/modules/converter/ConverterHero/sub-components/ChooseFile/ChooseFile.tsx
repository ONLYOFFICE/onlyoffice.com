import { Trans, useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import {
  StyledChooseFile,
  StyledChooseFileFormats,
  StyledChooseFileFormatsButton,
  StyledChooseFileHeading,
  StyledChooseFileInfo,
  StyledChooseFileInput,
  StyledChooseFileSize,
} from "./ChooseFile.styled";
import { ReactNode, useRef, useState } from "react";
import { Link } from "@src/components/ui/Link";
import { FileErrorModal } from "../FileErrorModal";
import { TSteps } from "../../ConverterHero.types";
import { formats } from "../../data/formats";

const ChooseFile = ({
  title,
  setFile,
  setStep,
  allowedTypes,
  color,
}: {
  title: string;
  setFile: (file: File | null) => void;
  setStep: (step: TSteps) => void;
  allowedTypes: Array<keyof typeof formats>;
  color: string;
}) => {
  const { t } = useTranslation("converter-common");
  const inputRef = useRef<HTMLInputElement>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [error, setError] = useState<ReactNode>("");
  const MAX_SIZE = 5 * 1024 * 1024;

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    e.target.value = "";

    if (!file) return;

    if (file.size === 0) {
      showError(t("UploadEmptyError"));
      return;
    }

    if (file.size > MAX_SIZE) {
      showError(
        <Trans t={t} i18nKey="UploadSizeError" components={[<b key="0" />]} />,
      );
      return;
    }

    const extension = file.name.split(".").pop()?.toLowerCase() || "";

    if (!isSupportedExtension(extension, allowedTypes)) {
      showError(
        <Trans
          t={t}
          i18nKey="FormatNotSupported"
          components={{
            br: <br />,
            1: <StyledChooseFileFormatsButton onClick={scrollToBlock} />,
          }}
        />,
      );
      return;
    }

    setFile(file);
    setStep("convertOptions");
  };

  const showError = (message: React.ReactNode) => {
    setError(message);
    setIsOpen(true);
  };

  const isSupportedExtension = (
    extension: string,
    allowedTypes: Array<keyof typeof formats>,
  ): boolean => {
    return allowedTypes.some((type) =>
      formats[type]?.inputFormats?.includes(extension),
    );
  };

  const scrollToBlock = () => {
    const el = document.getElementById("formats-supported");

    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
      setError("");
      setIsOpen(false);
    }
  };

  return (
    <StyledChooseFile $color={color} $borderStyle="dashed">
      <StyledChooseFileHeading
        level={3}
        size={4}
        textAlign="center"
        label={title}
        $fileType={allowedTypes.length > 1 ? "none" : allowedTypes[0]}
        color={color}
      />
      <StyledChooseFileInfo>
        <StyledChooseFileFormats>
          <Trans
            t={t}
            i18nKey="FormatsSupported"
            components={[
              <StyledChooseFileFormatsButton onClick={scrollToBlock} key="0" />,
            ]}
          />
        </StyledChooseFileFormats>
        <StyledChooseFileSize>
          <Trans
            t={t}
            i18nKey="MaxFileSize"
            components={[
              <Link
                href="docspace-registration"
                color="main"
                textUnderline
                hover="underline-none"
                key="0"
              />,
            ]}
          />
        </StyledChooseFileSize>
      </StyledChooseFileInfo>
      <Button
        fullWidth
        label={t("SelectFile")}
        onClick={() => inputRef.current?.click()}
      />
      <StyledChooseFileInput
        type="file"
        ref={inputRef}
        onChange={handleFileChange}
      />
      <span>or drag & drop it here</span>

      <FileErrorModal
        isOpen={isOpen}
        onClose={() => setIsOpen(false)}
        error={error}
      />
    </StyledChooseFile>
  );
};

export { ChooseFile };
