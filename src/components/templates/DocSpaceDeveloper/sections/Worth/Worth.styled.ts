import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";

const StyledWorthHeading = styled(Heading)`
  margin-bottom: 64px;
`;

const StyledWorthCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 64px;
`;

const StyledWorthCard = styled.div`
  padding: 48px;
  background-color: #fff;
`;

const StyledWorthTitle = styled(Heading)`
  margin-bottom: 32px;
`;

const StyledWorthList = styled.ul`
  max-width: 351px;
`;

const StyledWorthItem = styled.li`
  padding-left: 26px;
  margin-bottom: 16px;
  position: relative;

  &::before {
    content: '';
    display: block;
    background: #ff6f3d;
    width: 6px;
    height: 6px;
    margin-right: 10px;
    top: 15px;
    left: -24px;
    position: relative;
    transform: rotate(45deg);
  }
`;

const StyledWorthButtonsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 16px;
`;

export {
  StyledWorthHeading,
  StyledWorthCardsWrapper,
  StyledWorthCard,
  StyledWorthTitle,
  StyledWorthList,
  StyledWorthItem,
  StyledWorthButtonsWrapper
};