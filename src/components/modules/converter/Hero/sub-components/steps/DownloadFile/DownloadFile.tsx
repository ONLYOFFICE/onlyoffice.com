import { Trans, useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledDownloadFile,
  StyledDownloadFileImageWrapper,
  StyledDownloadFileImage,
  StyledDownloadFileIcon,
  StyledDownloadFileImageLabel,
  StyledDownloadFileText,
  StyledDownloadFileBtns,
  StyledDownloadFileBanner,
  StyledDownloadFileBannerBody,
} from "./DownloadFile.styled";
import { IDownloadFile } from "./DownloadFile.types";
import { themeColors } from "@src/components/modules/converter/Hero/config/theme";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Link } from "@src/components/ui/Link";
import { Rating } from "./sub-components/Rating";
import { getFormatType } from "../../../utils/getFormatType";

const DownloadFile = ({
  theme,
  selectedFile,
  resultData,
  setIsOpenCancelConvertModal,
  outputFileType,
  ratingData,
}: IDownloadFile) => {
  const { t } = useTranslation("converter");
  const router = useRouter();

  const fileName = selectedFile?.name.split(".").slice(0, -1).join() || "";
  const fileType = selectedFile?.name.split(".").pop()?.toLowerCase() || "";
  const formatType = getFormatType(fileType, router.route);

  const isFormatZip = ["bmp", "gif", "jpg", "png"];
  const isOutputFormatZip = isFormatZip.includes(outputFileType);

  return (
    <>
      <StyledDownloadFile $theme={theme}>
        <Heading
          level={3}
          textAlign="center"
          color={theme ? themeColors[theme] : themeColors.default}
          label={t("YourFileIsConverted")}
        />

        <div>
          <StyledDownloadFileImageWrapper>
            <StyledDownloadFileImage
              $isFormatZip={isOutputFormatZip}
              $formatType={formatType}
              src={
                isOutputFormatZip
                  ? "/images/modules/converter/hero/zip-template.svg"
                  : resultData?.thumbnail
              }
              alt={`${fileName}.${isOutputFormatZip ? "zip" : outputFileType}`}
            />
            <StyledDownloadFileIcon $isFormatZip={isOutputFormatZip} />
            {isOutputFormatZip && <StyledDownloadFileImageLabel />}
          </StyledDownloadFileImageWrapper>
          <StyledDownloadFileText size={3} textAlign="center">
            {fileName}.<b>{isOutputFormatZip ? "zip" : outputFileType}</b>
          </StyledDownloadFileText>
        </div>

        <StyledDownloadFileBtns>
          <Button
            onClick={() => setIsOpenCancelConvertModal(true)}
            variant="tertiary"
            label={t("ConvertNew")}
          />
          <Button
            as="a"
            href={resultData?.fileUrl}
            download
            backgroundColor={theme ? themeColors[theme] : undefined}
            label={t("Download")}
          />
        </StyledDownloadFileBtns>

        <StyledDownloadFileBanner>
          <StyledDownloadFileBannerBody>
            <Heading level={4} label={t("NeedToMakeSomeEdits")} />
            <Text size={2}>
              <Trans
                t={t}
                i18nKey="CreateYourFreeOnlineOffice"
                components={[
                  <Link
                    key={0}
                    href="/docspace-registration"
                    color="main"
                    textUnderline
                    hover="underline-none"
                  />,
                ]}
              />
            </Text>
          </StyledDownloadFileBannerBody>
          <Button as="a" href="/docspace-registration#login" label={t("Login")} />
        </StyledDownloadFileBanner>
      </StyledDownloadFile>

      <Rating {...ratingData} />
    </>
  );
};

export { DownloadFile };
