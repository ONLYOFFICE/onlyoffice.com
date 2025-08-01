import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IDownloadBanner } from "./DownloadBanner.types";

const StyledDownloadBanner = styled.div<{
  $variant: IDownloadBanner["variant"];
}>`
  ${(props) =>
    props.$variant === "primary"
      ? css`
          border: 1px solid #d8d8d8;
          border-radius: 9px;
          padding: 24px;
          font-size: 14px;
          line-height: 22px;

          @media ${device.mobile} {
            padding: 16px;
            font-size: 13px;
            line-height: 21px;
          }
        `
      : props.$variant === "secondary"
        ? css`
            border: 1px solid #d8d8d8;
            border-radius: 5px;
            padding: 16px;
            font-size: 13px;
            line-height: 21px;
            text-align: center;
            background: rgba(255, 255, 255, 0.6);
          `
        : null}
`;

const StyledDownloadBannerContent = styled.div<{
  $contentMaxWidth: IDownloadBanner["contentMaxWidth"];
}>`
  margin: 0 auto;
  max-width: ${(props) => props.$contentMaxWidth};
`;

export { StyledDownloadBanner, StyledDownloadBannerContent };
