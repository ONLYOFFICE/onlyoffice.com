import styled from "styled-components";
import { device } from "@src/utils/device";
import { Text } from "@src/components/ui/Text";

const StyledQuoteModal = styled.div`
  border-radius: 5px;
  padding: 72px 96px 80px;
  background-color: #ffffff;

  @media ${device.tablet} {
    padding: 48px 24px 56px;
  }
`;

const StyledQuoteModalWrapper = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tablet} {
    row-gap: 24px;
  }
`;

const StyledQuoteModalGetItNow = styled.div`
  display: grid;
  grid-template-columns: auto auto;
  gap: 16px;

  @media ${device.mobile} {
    grid-template-columns: initial;
  }
`;

const StyledQuoteModalText = styled(Text)`
  margin-top: 16px;

  @media ${device.mobile} {
    font-size: 12px;
  }
`;

export {
  StyledQuoteModal,
  StyledQuoteModalWrapper,
  StyledQuoteModalGetItNow,
  StyledQuoteModalText,
};
