import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledDownloadModal = styled.div`
  border-radius: 5px;
  padding: 72px 96px 80px;
  background-color: #ffffff;

  @media ${device.tablet} {
    padding: 48px 24px 56px;
  }
`;

const StyledDownloadModalWrapper = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tablet} {
    row-gap: 24px;
  }
`;

const StyledDownloadModalText = styled(Text)`
  margin-top: 16px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export {
  StyledDownloadModal,
  StyledDownloadModalWrapper,
  StyledDownloadModalText,
};
