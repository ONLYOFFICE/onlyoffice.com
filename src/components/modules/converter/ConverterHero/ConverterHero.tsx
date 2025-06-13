import { useEffect, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import {
  StyledConverterHeroSection,
  StyledConverterHeroWrapper,
  StyledConverterHeroHeading,
  StyledConverterHeroConverterBlock,
  StyledConverterHeroContainer,
} from "./ConverterHero.styled";
import { LearnMore } from "./sub-components/LearnMore";
import { ChooseFile } from "./sub-components/ChooseFile";
import { SelectFormatFile } from "./sub-components/SelectFormatFile";
import { LoadingConverter } from "./sub-components/LoadingConverter";
import { DownloadFile } from "./sub-components/DownloadFile";
import { Text } from "@src/components/ui/Text";
import { formats } from "./data/formats";
import type { TSteps } from "./ConverterHero.types";

type ConverterHeroProps = {
  allowedTypes: Array<keyof typeof formats>;
  learnMore?: boolean;
  defaultOutputType?: string;
};

export const ConverterHero = ({
  allowedTypes,
  learnMore = false,
  defaultOutputType,
}: ConverterHeroProps) => {
  const { t } = useTranslation("online-document-converter");

  const [file, setFile] = useState<File | null>(null);
  const [step, setStep] = useState<TSteps>("select");
  const [fileType, setFileType] = useState<keyof typeof formats | null>(null);
  const [fileExtension, setFileExtension] = useState<string | null>(null);
  const [outputType, setOutputType] = useState<string | null>(null);
  const [isConvToImg] = useState(false);
  const [hCaptcha, setHCaptcha] = useState<string | null>(null);
  const [message, setMessage] = useState("");

  function create_UUID() {
    let dt = new Date().getTime();
    const uuid = "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(
      /[xy]/g,
      (c) => {
        const r = (dt + Math.random() * 16) % 16 | 0;
        dt = Math.floor(dt / 16);
        return (c === "x" ? r : (r & 0x3) | 0x8).toString(16);
      },
    );
    return uuid;
  }

  const handleSubmit = async () => {
    if (!file) {
      setMessage("Please choose a file first");
      return;
    }

    setStep("loading");

    const formData = new FormData();
    formData.append("file", file);
    formData.append("toextension", "." + outputType);
    formData.append("converttoimage", String(isConvToImg));
    formData.append("type", "convertrequest");
    formData.append("recaptchaResponse", hCaptcha as string);
    formData.append("email", "");
    formData.append("filetype", fileType as string);
    formData.append("uuid", create_UUID());
    formData.append("pagename", window.location.pathname);

    try {
      const hCaptchaResponse = await fetch("/api/hcaptcha-verify", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ token: hCaptcha }),
      });

      const hCaptchaData = await hCaptchaResponse.json();

      console.log(hCaptchaData);

      if (hCaptchaData.status === "errorhCaptchaInvalid") {
        console.log(hCaptchaData);
      }

      const response = await fetch("/api/convert", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      console.log(data);
    } catch (err) {
      console.error("Error", err);
    }
  };

  useEffect(() => {
    if (!file) return;

    const extension = file.name.split(".").pop()?.toLowerCase() ?? null;
    setFileExtension(extension);

    const normalizedExt = extension?.toLowerCase();

    if (defaultOutputType) {
      setFileType(defaultOutputType as keyof typeof formats);
    } else if (normalizedExt === "pdf") {
      setFileType("pdf");
    } else {
      const matchedType = Object.entries(formats).find(([, formatData]) =>
        formatData.inputFormats.includes(normalizedExt!),
      );
      setFileType((matchedType?.[0] as keyof typeof formats) || null);
    }
  }, [file, defaultOutputType]);

  useEffect(() => {
    if (!fileExtension && !fileType) return;

    const autoPdfExts = ["docx", "docxf", "xlsx", "pptx", "djvu"];
    if (fileExtension && autoPdfExts.includes(fileExtension)) {
      setOutputType("pdf");
      return;
    }

    switch (fileType) {
      case "text":
      case "pdf":
        setOutputType("docx");
        break;
      case "spreadsheet":
        setOutputType("xlsx");
        break;
      case "presentation":
        setOutputType("pptx");
        break;
      default:
        setOutputType(null);
    }
  }, [fileExtension, fileType]);

  useEffect(() => {
    console.log(message);
  }, [message]);

  return (
    <StyledConverterHeroSection
      desktopSpacing={["128px", "185px"]}
      tabletSpacing={["128px", "185px"]}
      tabletSmallSpacing={["128px", "110px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <StyledConverterHeroContainer>
        <StyledConverterHeroWrapper>
          <StyledConverterHeroHeading size={1}>
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={[<Text as="span" color="main" key="hero-title" />]}
            />
          </StyledConverterHeroHeading>

          <StyledConverterHeroConverterBlock>
            {step === "select" && (
              <ChooseFile
                title={t("ChooseFileTitle")}
                setFile={setFile}
                setStep={setStep}
                allowedTypes={allowedTypes}
                color="#444444"
              />
            )}
            {step === "convertOptions" && file && (
              <SelectFormatFile
                selectedFileType={fileType}
                file={file}
                setFile={setFile}
                setStep={setStep}
                outputType={outputType}
                setOutputType={setOutputType}
                setHCaptcha={setHCaptcha}
                color="#FF6F3D"
                onSubmit={handleSubmit}
              />
            )}
            {step === "loading" && (
              <LoadingConverter
                setFile={setFile}
                setStep={setStep}
                color="#FF6F3D"
              />
            )}
            {step === "result" && (
              <DownloadFile
                setFile={setFile}
                setStep={setStep}
                color="#FF6F3D"
              />
            )}
          </StyledConverterHeroConverterBlock>

          {learnMore && <LearnMore fileType="" description="" />}
        </StyledConverterHeroWrapper>
      </StyledConverterHeroContainer>
    </StyledConverterHeroSection>
  );
};
