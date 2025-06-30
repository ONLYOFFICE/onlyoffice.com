import {
  StyledDownloadBanner,
  StyledDownloadBannerContent,
} from "./DownloadBanner.styled";
import { IDownloadBanner } from "./DownloadBanner.types";

const DownloadBanner = ({
  children,
  variant = "primary",
  contentMaxWidth,
}: IDownloadBanner) => {
  return (
    <StyledDownloadBanner $variant={variant}>
      <StyledDownloadBannerContent $contentMaxWidth={contentMaxWidth}>
        {children}
      </StyledDownloadBannerContent>
    </StyledDownloadBanner>
  );
};

export { DownloadBanner };
