import { useTranslation, Trans } from "next-i18next";
import {
  StyledDownloadBlock,
  StyledDownloadBlockImageWrapper,
  StyledDownloadBlockImage,
  StyledDownloadBlockWrapper,
  StyledDownloadBlockHeading,
  StyledDownloadBlockBody,
  StyledDownloadBlockText,
  StyledDownloadBlockLink,
  StyledDownloadBlockButtons,
  StyledDownloadBlockButton,
  StyledDownloadBlockIconButton,
} from "./DownloadBlock.styled";
import { IDownloadBlock } from "./DownloadBlock.types";
import { Link } from "@src/components/ui/Link";
import { ShoppingBagIcon } from "@src/components/icons";
import { formatDate } from "@src/utils/formatDate";

const DownloadBlock = ({
  locale,
  heading,
  image,
  version,
  releaseDate,
  license,
  whatsNewLink,
  sourceCodeOnGithubLink,
  readInstructionLink,
  buttons,
  buyButton,
}: IDownloadBlock) => {
  const { t } = useTranslation("DownloadCard");

  return (
    <StyledDownloadBlock>
      <StyledDownloadBlockImageWrapper $imageBackground={image.background}>
        <StyledDownloadBlockImage
          $imageUrl={image.url}
          $imagePositionX={image.positionX}
          $imagePositionY={image.positionY}
          $imageMobilePositionX={image.mobilePositionX}
          $imageMobilePositionY={image.mobilePositionY}
          $imageSize={image.size}
          $imageWidth={image.width}
          $imageHeight={image.height}
          $imageMobileWidth={image.mobileWidth}
          $imageMobileHeight={image.mobileHeight}
        />
      </StyledDownloadBlockImageWrapper>

      <StyledDownloadBlockWrapper>
        <StyledDownloadBlockHeading level={4}>
          {heading}
        </StyledDownloadBlockHeading>

        <StyledDownloadBlockBody>
          <StyledDownloadBlockText>
            {version && `${t("Version")} ${version}`}{" "}
            {whatsNewLink && (
              <StyledDownloadBlockLink
                display="inline-block"
                href={whatsNewLink}
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              >
                {t("WhatsNew")}
              </StyledDownloadBlockLink>
            )}
          </StyledDownloadBlockText>

          {releaseDate && (
            <StyledDownloadBlockText>
              {t("ReleaseDate")} {formatDate(releaseDate, locale, "M/D/YYYY")}
            </StyledDownloadBlockText>
          )}

          {license && (
            <StyledDownloadBlockText>
              {t("License")} {license}
            </StyledDownloadBlockText>
          )}

          {sourceCodeOnGithubLink && (
            <StyledDownloadBlockText>
              <Trans
                t={t}
                i18nKey="SourceCodeOnGitHub"
                components={[
                  <Link
                    key={0}
                    color="main"
                    textUnderline
                    hover="underline-none"
                    href={sourceCodeOnGithubLink}
                  />,
                ]}
              />
            </StyledDownloadBlockText>
          )}

          {readInstructionLink && (
            <StyledDownloadBlockLink
              display="block"
              href={readInstructionLink}
              target="_blank"
              color="main"
              textUnderline
              hover="underline-none"
            >
              {t("ReadInstructions")}
            </StyledDownloadBlockLink>
          )}
        </StyledDownloadBlockBody>

        <StyledDownloadBlockButtons>
          {buttons.map((item, index) => (
            <StyledDownloadBlockButton
              key={index}
              forwardedAs={item.link?.href ? "a" : "button"}
              target={item.link?.isExternal ? "_blank" : undefined}
              href={item.link?.href}
              download={item.link?.download}
              variant="tertiary"
              label={item.label}
              fullWidth
              onClick={item.onClick}
            />
          ))}
          {buyButton && (
            <StyledDownloadBlockIconButton
              forwardedAs="a"
              variant="tertiary"
              href={buyButton.href}
              target={buyButton.isExternal ? "_blank" : undefined}
              title={t("BuyNow")}
            >
              <ShoppingBagIcon />
            </StyledDownloadBlockIconButton>
          )}
        </StyledDownloadBlockButtons>
      </StyledDownloadBlockWrapper>
    </StyledDownloadBlock>
  );
};

export { DownloadBlock };
