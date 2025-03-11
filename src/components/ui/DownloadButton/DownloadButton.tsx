import { useTranslation } from "next-i18next";
import { StyledDownloadButton } from "./DownloadButton.styled";
import { IDownloadButton, IPlatformData } from "./DownloadButton.types";

const DownloadButton = ({
  id,
  className,
  variant = "primary",
  platform = "ForWindows",
  href,
  target = "_blank",
  rel,
  title,
}: IDownloadButton) => {
  const { t } = useTranslation("DownloadButton");
  const platformData = t(platform, { returnObjects: true }) as IPlatformData;
  const theme =
    variant === "primary" || variant === "quaternary" ? "dark" : "light";

  return (
    <StyledDownloadButton
      id={id}
      className={className}
      $variant={variant}
      $platform={platform}
      $icon={platformData?.icon?.[theme]}
      href={href}
      target={target === "_self" ? undefined : target}
      rel={!rel && target === "_blank" ? "noopener noreferrer" : rel}
      title={title}
    >
      <span>{platformData?.text}</span>
    </StyledDownloadButton>
  );
};

export { DownloadButton };
