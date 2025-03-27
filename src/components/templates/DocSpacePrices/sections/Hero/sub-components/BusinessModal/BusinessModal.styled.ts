import styled from "styled-components";
import { device } from "@src/utils/device";
import { Button } from "@src/components/ui/Button";
import { Text } from "@src/components/ui/Text";

const StyledBusinessModal = styled.div`
  border-radius: 5px;
  padding: 32px;
  background-color: #ffffff;

  @media ${device.mobile} {
    padding: 16px;
  }
`;

const StyledBusinessModalInputWrapper = styled.div`
  display: grid;
  row-gap: 8px;
  margin-bottom: 32px;
`;

const StyledBusinessModalItems = styled.div`
  display: grid;
  row-gap: 8px;
  padding: 16px 0;
  margin-top: 9px;
`;

const StyledBusinessModalItem = styled.div`
  display: flex;
  justify-content: space-between;
`;

const StyledBusinessModalLabel = styled.span`
  font-size: 14px;
  line-height: 22px;
  color: #666666;

  @media ${device.mobile} {
    font-size: 13px;
  }
`;

const StyledBusinessModalValue = styled.span`
  font-size: 16px;
  font-weight: 600;
  line-height: 22px;

  @media ${device.mobile} {
    font-size: 15px;
  }
`;

const StyledBusinessModalTotal = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-top: 1px solid #cccccc;
  padding: 16px 0 3px;
`;

const StyledBusinessModalTotalCurrency = styled(Text)`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.02em;

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledBusinessModalBtns = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  column-gap: 16px;
  margin-top: 32px;

  @media ${device.mobile} {
    column-gap: 6px;
  }
`;

const StyledBusinessModalBtn = styled(Button)`
  @media ${device.mobile} {
    padding: 15px 10px;
  }
`;

export {
  StyledBusinessModal,
  StyledBusinessModalInputWrapper,
  StyledBusinessModalItems,
  StyledBusinessModalItem,
  StyledBusinessModalLabel,
  StyledBusinessModalValue,
  StyledBusinessModalTotal,
  StyledBusinessModalTotalCurrency,
  StyledBusinessModalBtns,
  StyledBusinessModalBtn,
};
