import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledPRForm = styled.form`
  margin: 0 auto;
  max-width: 544px;

  @media ${device.tablet} {
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
  StyledPRForm,
  StyledDownloadModalWrapper,
  StyledDownloadModalText,
};
