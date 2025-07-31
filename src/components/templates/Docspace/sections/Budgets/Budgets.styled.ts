import styled from "styled-components";
import { Container } from "@src/components/ui/Container";
import { device } from "@src/utils/device";

const StyledContainer = styled(Container)`
  padding: 0 32px;
  text-align: center;

  @media ${device.mobile} {
     padding: 0 16px;
  }
`;

const StyledSubHeading = styled.p`
  font-size: 18px;
  padding: 24px 0 56px;

  @media ${device.mobile} {
    font-size: 16px;
    padding: 24px 0 32px;
  }
`;

const StyledCardsContainer = styled.div`
  margin: 56px auto 112px;
  max-width: 1120px;
  gap: 32px;
  display: flex;
`;

const StyledBudgetsItems = styled.div`
  display: grid;
  row-gap: 32px;

  @media ${device.tablet} {
    row-gap: 16px;
  }
`;

const StyledBudgetItem = styled.div`
  &:nth-child(even) {
    display: grid;
    grid-template-columns: minmax(269px, 448px) minmax(227px, 640px);
    column-gap: 32px;

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }
  }

  &:nth-child(odd) {
    display: grid;
    grid-template-columns: minmax(227px, 640px) minmax(269px, 448px);
    column-gap: 32px;

    @media ${device.mobile} {
      display: flex;
      flex-direction: column;
      row-gap: 16px;
    }
  }
`;
export {
  StyledContainer,
  StyledSubHeading,
  StyledCardsContainer,
  StyledBudgetsItems,
  StyledBudgetItem,
};
