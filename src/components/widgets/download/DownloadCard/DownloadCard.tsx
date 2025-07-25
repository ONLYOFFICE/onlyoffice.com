import { Trans, useTranslation } from "next-i18next";
import {
  StyledDownloadCard,
  StyledDownloadCardHeading,
  StyledDownloadCardWrapper,
  StyledDownloadCardImage,
  StyledDownloadCardText,
  StyledDownloadCardLink,
  StyledDownloadCardButtons,
  StyledDownloadCardButton,
  StyledDownloadCardIconButton,
} from "./DownloadCard.styled";
import { IDownloadCard } from "./DownloadCard.types";
import { ShoppingBagIcon } from "@src/components/icons";
import { formatDate } from "@src/utils/formatDate";
import { Link } from "@src/components/ui/Link";
import { Badge } from "@src/components/ui/Badge";

const DownloadCard = ({
  locale,
  heading,
  recomended,
  image,
  version,
  fileSize,
  releaseDate,
  license,
  whatsNewLink,
  readInstructionLink,
  sourceCodeOnGithubLink,
  buttons,
  buyButton,
}: IDownloadCard) => {
  const { t } = useTranslation("DownloadCard");

  const hasNone = [
    version,
    fileSize?.primary,
    whatsNewLink,
    releaseDate,
    license,
    sourceCodeOnGithubLink,
    readInstructionLink,
  ].every((x) => !x);

  const hasOneTrue = [fileSize?.primary, license, sourceCodeOnGithubLink].some(
    Boolean,
  );

  return (
    <StyledDownloadCard>
      {!hasNone && (
        <StyledDownloadCardHeading level={4}>
          {heading}{" "}
          {recomended && (
            <Badge verticalAlign="middle" label={t("Recomended")} />
          )}
        </StyledDownloadCardHeading>
      )}

      <StyledDownloadCardWrapper $hasNone={hasNone}>
        <StyledDownloadCardImage
          $imageUrl={image.url}
          $imagePositionX={image.positionX}
          $imagePositionY={image.positionY}
          $imageSize={image.size}
        />

        <div>
          {hasNone && <StyledDownloadCardHeading level={4} label={heading} />}

          <StyledDownloadCardText>
            {version && `${t("Version")} ${version}`}{" "}
            {hasOneTrue && whatsNewLink && (
              <StyledDownloadCardLink
                display="inline-block"
                href={whatsNewLink}
                target="_blank"
                color="main"
                textUnderline
                hover="underline-none"
              >
                {t("WhatsNew")}
              </StyledDownloadCardLink>
            )}
          </StyledDownloadCardText>

          {fileSize?.primary && (
            <StyledDownloadCardText>
              {t("FileSize")} {fileSize.primary} {fileSize.unit}
              {fileSize.secondary
                ? ` / ${fileSize.secondary} ${fileSize.unit}`
                : ""}
            </StyledDownloadCardText>
          )}

          {!hasOneTrue && whatsNewLink && (
            <StyledDownloadCardLink
              display="block"
              href={whatsNewLink}
              target="_blank"
              color="main"
              textUnderline
              hover="underline-none"
            >
              {t("WhatsNew")}
            </StyledDownloadCardLink>
          )}

          {releaseDate && (
            <StyledDownloadCardText>
              {t("ReleaseDate")} {formatDate(releaseDate, locale, "M/D/YYYY")}
            </StyledDownloadCardText>
          )}

          {license && (
            <StyledDownloadCardText>
              {t("License")} {license}
            </StyledDownloadCardText>
          )}

          {sourceCodeOnGithubLink && (
            <StyledDownloadCardText>
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
            </StyledDownloadCardText>
          )}

          {readInstructionLink && (
            <StyledDownloadCardLink
              display="block"
              href={readInstructionLink}
              target="_blank"
              color="main"
              textUnderline
              hover="underline-none"
            >
              {t("ReadInstructions")}
            </StyledDownloadCardLink>
          )}
        </div>
      </StyledDownloadCardWrapper>

      <StyledDownloadCardButtons>
        {buttons.map((item, index) => (
          <StyledDownloadCardButton
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
          <StyledDownloadCardIconButton
            forwardedAs="a"
            variant="tertiary"
            href={buyButton.href}
            target={buyButton.isExternal ? "_blank" : undefined}
            title={t("BuyNow")}
          >
            <ShoppingBagIcon />
          </StyledDownloadCardIconButton>
        )}
      </StyledDownloadCardButtons>
    </StyledDownloadCard>
  );
};

export { DownloadCard };
