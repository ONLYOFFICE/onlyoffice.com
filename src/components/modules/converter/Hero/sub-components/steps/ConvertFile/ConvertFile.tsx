import { useState, useRef, useEffect } from "react";
import { useTranslation, Trans } from "next-i18next";
import { useRouter } from "next/router";
import ReactHCaptcha from "@hcaptcha/react-hcaptcha";
import {
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
} from "./ConvertFile.styled";
import { IConvertFile } from "./ConvertFile.types";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";
import { HCaptcha } from "@src/components/ui/HCaptcha";
import { Link } from "@src/components/ui/Link";
import { Text } from "@src/components/ui/Text";
import { LoadingImage } from "./sub-components/LoadingImage";
import { loadingText } from "./data/text";
import { ChevronDownIcon, TrashIcon } from "@src/components/icons";
import { formats } from "@src/components/modules/converter/Hero/data/formats";
import { themeColors } from "@src/components/modules/converter/Hero/config/theme";
import { getAllOutputFormats } from "./utils/getAllOutputFormats";
import { getDefaultOutputFormat } from "./utils/getDefaultOutputFormat";
import { getFormatType } from "../../../utils/getFormatType";
import { FileErrorModal } from "../../modals/FileErrorModal";
import { languages } from "@src/config/data/languages";
import { getLink } from "@src/utils/getLink";
import { validateTestEmail } from "@src/utils/IsTestEmail";

const ConvertFile = ({
  theme,
  selectedFile,
  setIsOpenCancelConvertModal,
  setIsOpenDeleteFileModal,
  step,
  setStep,
  setResultData,
  setOutputFileType,
  currentUUIDRef,
}: IConvertFile) => {
  const { t } = useTranslation("converter");
  const router = useRouter();

  const fileName = selectedFile?.name.split(".").slice(0, -1).join() || "";
  const fileType = selectedFile?.name.split(".").pop()?.toLowerCase() || "";

  let defaultOutFormat = "";
  const formatType = getFormatType(fileType, router.route);

  if (formatType) {
    defaultOutFormat = getDefaultOutputFormat(
      fileType,
      formatType,
      router.route,
    );
  }

  const outputRef = useRef<HTMLDivElement>(null);
  const hcaptchaRef = useRef<ReactHCaptcha | null>(null);

  const [captchaToken, setCaptchaToken] = useState<string | null>(null);
  const [captchaError, setCaptchaError] = useState(false);
  const [isOpenOutputFormats, setIsOpenOutputFormats] = useState(false);
  const [outputFormat, setOutputFormat] = useState(defaultOutFormat);
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [fade, setFade] = useState(true);
  const [isOpenFileErrorModal, setIsOpenFileErrorModal] = useState(false);
  const [inputValue, setInputValue] = useState("");
  const [isTestEmailValid, setIsTestEmailValid] = useState(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (outputRef.current && !outputRef.current.contains(e.target as Node)) {
        setIsOpenOutputFormats(false);
      }
    };

    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentTextIndex((prev) => (prev + 1) % loadingText.length);
        setFade(true);
      }, 1000);
    }, 7000);

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      clearInterval(interval);
    };
  }, []);

  const allOutputFormats = getAllOutputFormats(
    selectedFile?.name.split(".").pop()?.toLowerCase() || "",
  );

  const handleConvert = async () => {
    if (!isTestEmailValid) {
      if (!captchaToken) {
        setCaptchaError(true);
        return;
      }
    }

    if (!selectedFile) return;

    setStep("loading");

    const uuid = crypto.randomUUID();
    currentUUIDRef.current = uuid;

    const languageData = languages.find(
      (lang) => lang.shortKey === router.locale,
    );

    const formData = new FormData();
    formData.append("file", selectedFile);
    formData.append("outputtype", outputFormat);
    formData.append(
      "converttoimage",
      ["bmp", "gif", "jpg", "png"].includes(outputFormat) ? "true" : "false",
    );
    formData.append("formatType", formatType ?? "");
    formData.append("uuid", uuid);
    formData.append("region", languageData?.key || "en-US");
    formData.append("hCaptchaResponse", captchaToken || "");
    formData.append("email", inputValue);

    try {
      const res = await fetch("/api/converter", {
        method: "POST",
        body: formData,
      });

      const data = await res.json();

      if (data.status === "errorHCaptchaInvalid") {
        setCaptchaError(true);
        return;
      }

      if (data.status === "stopConvertRequestSuccessful") {
        return;
      }

      if (data.status === "error") {
        setStep("convert");
        setIsOpenFileErrorModal(true);
      } else {
        setResultData(data);
        setOutputFileType(outputFormat);
        setStep("download");
      }
    } catch (err) {
      console.error("Error during conversion:", err);
    } finally {
      currentUUIDRef.current = null;
      hcaptchaRef.current?.resetCaptcha();
      setCaptchaError(false);
      setCaptchaToken(null);
    }
  };

  const handleHCaptchaChange = async (token: string | null) => {
    if (token) {
      setCaptchaToken(token);
      setCaptchaError(false);
    }
  };

  return (
    <>
      <StyledConvertFile $theme={theme} $isLoading={step === "loading"}>
        <Heading
          level={3}
          textAlign="center"
          color={theme ? themeColors[theme] : themeColors.default}
          label={
            step === "convert"
              ? t("SelectAFormatFileToConvert")
              : t("FileIsConverting")
          }
        />

        {step === "convert" ? (
          <>
            <StyledConvertFileWrapper>
              <StyledConvertFileSelect>
                <StyledConvertFileSelectIcon $formatType={formatType} />
                <StyledConvertFileSelectName>
                  {fileName}.<b>{`${fileType}`}</b>
                </StyledConvertFileSelectName>
                <StyledConvertFileRemoveBtn
                  onClick={() => setIsOpenDeleteFileModal(true)}
                >
                  <TrashIcon />
                </StyledConvertFileRemoveBtn>
              </StyledConvertFileSelect>

              <StyledConvertFileOutputWrapper ref={outputRef}>
                <StyledConvertFileOutputBtn
                  onClick={() => setIsOpenOutputFormats(!isOpenOutputFormats)}
                  variant="tertiary"
                  $active={isOpenOutputFormats}
                >
                  {outputFormat}
                  <ChevronDownIcon />
                </StyledConvertFileOutputBtn>
                {isOpenOutputFormats && (
                  <StyledConvertFileOutputFormats>
                    {formatType !== "pdf" && (
                      <StyledConvertFileOutputFormatsHeading
                        forwardedAs="div"
                        size={4}
                        textAlign="center"
                        label={
                          formatType === "text"
                            ? t("Document")
                            : formatType === "spreadsheet"
                              ? t("Spreadsheet")
                              : t("Presentation")
                        }
                      />
                    )}

                    <StyledConvertFileOutputFormatsList>
                      {allOutputFormats.map((format) => (
                        <StyledConvertFileOutputFormat
                          onClick={() => {
                            setOutputFormat(format);
                            setIsOpenOutputFormats(false);
                          }}
                          key={format}
                          $currentFormat={format === outputFormat}
                          $isNumbersFormat={format === "numbers"}
                          disabled={
                            !formatType ||
                            !(fileType in formats[formatType].outputFormats) ||
                            !(
                              formats[formatType].outputFormats[
                                fileType as keyof (typeof formats)[typeof formatType]["outputFormats"]
                              ] as string[]
                            ).includes(format)
                          }
                        >
                          {format}
                        </StyledConvertFileOutputFormat>
                      ))}
                    </StyledConvertFileOutputFormatsList>
                  </StyledConvertFileOutputFormats>
                )}
              </StyledConvertFileOutputWrapper>
            </StyledConvertFileWrapper>

            <HCaptcha
              ref={hcaptchaRef}
              onVerify={handleHCaptchaChange}
              onExpire={() => {
                setCaptchaToken(null);
                setCaptchaError(true);
              }}
              position="center"
              error={captchaError ? t("CaptchaTimeIsUp") : ""}
            />

            <input
              id="email-input"
              style={{ display: "none" }}
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              onBlur={async () => {
                const isTestEmailValid = await validateTestEmail(inputValue);
                setIsTestEmailValid(isTestEmailValid === true);
              }}
              type="email"
            />
          </>
        ) : (
          <>
            <LoadingImage />

            <StyledConvertFileLoadingTextWrapper>
              <StyledConvertFileLoadingText
                $fade={fade}
                size={2}
                textAlign="center"
              >
                <Trans
                  i18nKey={loadingText[currentTextIndex].key}
                  t={t}
                  components={[
                    <Link
                      key="0"
                      href={
                        loadingText[currentTextIndex].link.href ===
                        "templatesLink"
                          ? getLink("templates", router.locale!)
                          : loadingText[currentTextIndex].link.href
                      }
                      target={
                        loadingText[currentTextIndex].link.isExternal
                          ? "_blank"
                          : undefined
                      }
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />,
                  ]}
                />
              </StyledConvertFileLoadingText>
            </StyledConvertFileLoadingTextWrapper>
          </>
        )}

        {step === "convert" ? (
          <StyledConvertFileBtns>
            <Button
              onClick={() => setIsOpenCancelConvertModal(true)}
              variant="tertiary"
              label={t("Cancel")}
            />
            <Button
              onClick={handleConvert}
              backgroundColor={theme ? themeColors[theme] : undefined}
              disabled={
                isTestEmailValid ? false : captchaToken === null ? true : false
              }
              label={t("Convert")}
            />
          </StyledConvertFileBtns>
        ) : (
          <Button
            onClick={() => setIsOpenCancelConvertModal(true)}
            variant="tertiary"
            label={t("Cancel")}
          />
        )}
      </StyledConvertFile>

      <FileErrorModal
        isOpen={isOpenFileErrorModal}
        setIsOpenFileErrorModal={setIsOpenFileErrorModal}
        theme={theme}
      >
        <Text
          size={2}
          textAlign="center"
          label={t("TheFileAppearsToBeBroken")}
        />
      </FileErrorModal>
    </>
  );
};

export { ConvertFile };
