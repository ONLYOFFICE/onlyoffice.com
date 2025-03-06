import { useTranslation } from "next-i18next";
import { StyledDownloadButton } from "./DownloadButton.styled";
import { IDownloadButton } from "./DownloadButton.types";

const DownloadButton = ({
  id,
  variant,
  platform,
  href,
  target,
}: IDownloadButton) => {
  const { t } = useTranslation("DownloadButton");

  return (
    <StyledDownloadButton
      id={id}
      $variant={variant}
      $platform={platform}
      href={href}
      target={target}
    >
      <span>{t(`platforms.${platform}`)}</span>
    </StyledDownloadButton>
  );
};

export { DownloadButton };
