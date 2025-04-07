import { useTranslation } from "next-i18next";
import { StyledDownloadButton } from "./DownloadButton.styled";
import { IDownloadButton } from "./DownloadButton.types";

const DownloadButton = ({
  id,
  className,
  variant = "primary",
  platform,
  href,
  target,
  rel,
  title,
}: IDownloadButton) => {
  const { t } = useTranslation("DownloadButton");

  const imageSrc = ["app-store", "google-play"].includes(platform)
    ? t(
        `${platform}.${
          ["primary", "quaternary"].includes(variant) ? "dark" : "light"
        }`,
      )
    : undefined;

  return (
    <StyledDownloadButton
      id={id}
      className={className}
      $variant={variant}
      $platform={platform}
      href={href ?? ""}
      target={target}
      rel={!rel && target === "_blank" ? "noopener noreferrer" : rel}
      title={title}
      $imageSrc={imageSrc}
    >
      {["windows", "macos", "linux"].includes(platform) && t(platform)}
    </StyledDownloadButton>
  );
};

export { DownloadButton };
