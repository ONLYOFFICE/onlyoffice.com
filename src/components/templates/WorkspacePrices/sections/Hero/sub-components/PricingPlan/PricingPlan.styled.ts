import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { CounterSelector } from "@src/components/widgets/CounterSelector";

const StyledPricingPlan = styled.div<{ $active?: boolean }>`
  border: ${(props) =>
    props.$active ? "2px solid #ff6f3d" : "1px solid #cccccc"};
  border-radius: 5px;
  box-shadow: 0px 7px 15px 0px rgba(85, 85, 85, 0.1);
`;

const StyledPricingPlanHeader = styled.div`
  display: grid;
  row-gap: 24px;
  padding: 32px 32px 0;
  text-align: center;

  @media ${device.mobile} {
    row-gap: 16px;
    padding: 16px;
  }
`;

const StyledPricingPlanHeading = styled(Heading)`
  @media ${device.desktop} {
    min-height: 64px;
  }

  @media ${device.mobile} {
    min-height: initial;
  }
`;

const StyledPricingPlanPrice = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 54px;
  letter-spacing: -0.02em;
  color: #ff6f3d;

  span {
    font-size: 24px;

    @media ${device.mobile} {
      font-size: 18px;
    }
  }

  @media ${device.mobile} {
    font-size: 28px;
    line-height: 40px;
  }
`;

const StyledPricingPlanBtn = styled(Button)`
  @media ${device.mobile} {
    order: 5;
  }
`;

const StyledPricingPlanCounterSelector = styled(CounterSelector)`
  margin: 0 -32px;

  @media ${device.mobile} {
    margin: 0 -16px;
  }
`;

const StyledPricingPlanItem = styled.div<{ $withBorder?: boolean }>`
  padding: 24px;

  ${(props) =>
    props.$withBorder &&
    css`
      border-top: 1px solid #cccccc;
      border-bottom: 1px solid #cccccc;
    `}

  @media ${device.tabletS} {
    padding: ${(props) => (props.$withBorder ? "24px 16px" : "16px")};
  }

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledPricingPlanFeatures = styled.div`
  &:not(:last-child) {
    margin-bottom: 24px;
  }
`;

const StyledPricingPlanFeaturesHeading = styled(Text)<{
  $displayOnMobile?: boolean;
  $rowGap?: string;
}>`
  margin-bottom: ${(props) => props.$rowGap};

  ${(props) =>
    props.$displayOnMobile &&
    css`
      display: none;

      @media ${device.mobile} {
        display: block;
      }
    `}
`;

const StyledPricingPlanFeaturesList = styled.ul`
  font-size: 13px;
  line-height: 18px;
`;

const StyledPricingPlanFeaturesItem = styled.li`
  position: relative;
  padding-left: 28px;
  padding-top: 3px;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    display: inline-block;
    width: 24px;
    height: 24px;
    background-image: url("/images/templates/workspace-prices/hero/check.svg");
    background-repeat: no-repeat;
    background-size: contain;
  }

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

export {
  StyledPricingPlan,
  StyledPricingPlanHeader,
  StyledPricingPlanHeading,
  StyledPricingPlanPrice,
  StyledPricingPlanBtn,
  StyledPricingPlanCounterSelector,
  StyledPricingPlanItem,
  StyledPricingPlanFeatures,
  StyledPricingPlanFeaturesHeading,
  StyledPricingPlanFeaturesList,
  StyledPricingPlanFeaturesItem,
};
