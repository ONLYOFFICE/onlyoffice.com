import styled, { css } from "styled-components";
import { IPlanCard } from "./PlanCard.types";
import { device } from "@src/utils/device";

const StyledPlanCard = styled.div<{
  $isActive: IPlanCard["isActive"];
}>`
  border: ${(props) =>
    props.$isActive ? "2px solid #ff6f3d" : "1px solid #e2e2e2"};
  border-radius: 5px;
  padding: 40px 32px 32px;
  text-align: center;
  background-color: #ffffff;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);

  @media ${device.mobile} {
    padding: 24px 16px;
  }
`;

const StyledPlanCardLabel = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 19px;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 18px;
  }
`;

const StyledPlanCardBody = styled.div<{
  $headingLabel: IPlanCard["headingLabel"];
}>`
  ${(props) =>
    props.$headingLabel
      ? css`
          margin-top: 20px;
          margin-bottom: 70px;

          @media ${device.tablet} {
            margin-bottom: 56px;
          }

          @media ${device.mobile} {
            margin-top: 12px;
            margin-bottom: 32px;
          }
        `
      : css`
          margin-top: 32px;
          margin-bottom: 64px;

          @media ${device.tablet} {
            margin-bottom: 50px;
          }
        `}
`;

const StyledPlanCardPriceWrapper = styled.div`
  display: flex;
  align-items: baseline;
  justify-content: center;
`;

const StyledPlanCardPricePrev = styled.div`
  margin-right: 8px;
  font-weight: 600;
  font-size: 18px;
  line-height: 24px;
  color: #808080;
  text-decoration-line: line-through;
  text-decoration-thickness: 1px;
`;

const StyledPlanCardPriceFrom = styled.div`
  margin-right: 8px;
  font-size: 16px;
  line-height: 24px;
`;

const StyledPlanCardPriceCurrent = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 48px;
  max-height: 48px;
  color: #ff6f3d;
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 36px;
  }

  span {
    font-weight: 700;
    font-size: 24px;
  }
`;

const StyledPlanCardPriceFree = styled.div`
  font-size: 28px;
  line-height: 54px;
  font-weight: 700;
  color: #ff6f3d;
  text-transform: uppercase;

  @media ${device.mobile} {
    font-size: 24px;
  }
`;

const StyledPlanCardPriceLabel = styled.div`
  margin-top: 8px;
  font-size: 14px;
  line-height: 19px;

  @media ${device.mobile} {
    margin-top: 0;
    font-size: 13px;
    line-height: 18px;
  }
`;

const StyledPlanCardBtns = styled.div`
  display: grid;
  row-gap: 24px;
`;

export {
  StyledPlanCard,
  StyledPlanCardLabel,
  StyledPlanCardBody,
  StyledPlanCardPriceWrapper,
  StyledPlanCardPricePrev,
  StyledPlanCardPriceFrom,
  StyledPlanCardPriceFree,
  StyledPlanCardPriceCurrent,
  StyledPlanCardPriceLabel,
  StyledPlanCardBtns,
};
