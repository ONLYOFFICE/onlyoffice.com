import styled from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";

const StyledWorthHeading = styled(Heading)`
  margin-bottom: 64px;

  @media ${device.tabletS} {
    margin-bottom: 48px;
  }

  @media ${device.mobile} {
    margin-bottom: 24px;
  }
`;

const StyledWorthCardsWrapper = styled.div`
  display: flex;
  justify-content: center;
  gap: 32px;
  margin-bottom: 64px;

  @media ${device.mobile} {
    flex-direction: column;
    margin-bottom: 24px;
  }
`;

const StyledWorthCard = styled.div`
  padding: 48px;
  background-color: #fff;

  @media ${device.tabletS} {
    padding: 24px;
  }
`;

const StyledWorthTitle = styled(Heading)`
  margin-bottom: 32px;

  @media ${device.tabletS} {
    font-size: 22px;
    margin-bottom: 16px;
  }

  @media ${device.mobile} {
    font-size: 18px;
  }
`;

const StyledWorthList = styled.ul`
  max-width: 351px;

  @media ${device.mobile} {
    max-width: 100%;
  }
`;

const StyledWorthItem = styled.li`
  line-height: 1.33em;
  padding-left: 26px;
  margin-bottom: 16px;
  position: relative;

  @media ${device.tabletS} {
    font-size: 14px;
  }

  @media ${device.tabletS} {
    margin-bottom: 8px;
    padding-left: 24px;
  }

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

  @media ${device.mobile} {
    flex-direction: column;
    gap: 24px;
  }
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