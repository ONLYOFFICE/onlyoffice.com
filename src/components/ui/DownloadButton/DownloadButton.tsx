import { useTranslation } from "react-i18next";
import { ButtonStyled } from "./DownloadButton.styled";
import { IDownloadButton } from "./DownloadButton.types";

const DownloadButton = ({
  variant,
  platform,
  href,
  target,
}: IDownloadButton) => {
  const { t } = useTranslation("common");
  const label = t(`DownloadButton${platform}`);

  return (
    <ButtonStyled
      variant={variant}
      platform={platform}
      href={href}
      target={target}
    >
      {["ForWindows", "ForLinux", "ForMacOS"].includes(platform) && label}
    </ButtonStyled>
  );
};

export { DownloadButton };
