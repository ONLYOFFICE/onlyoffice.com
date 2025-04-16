import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { DownloadButton } from "@src/components/ui/DownloadButton";

const StyledFreeAppsHeading = styled(Heading)`
  margin: 0 auto 56px;
  max-width: 720px;

  @media ${device.tablet} {
    margin: 0 auto 40px;
    max-width: 100%;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledFreeAppsDownloadButton = styled(DownloadButton)`
  background-color: #000000;
  filter: initial;
`;

export { StyledFreeAppsHeading, StyledFreeAppsDownloadButton };
