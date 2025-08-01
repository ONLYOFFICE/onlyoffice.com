import styled from "styled-components";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";

const StyledCouponWrapper = styled.div`
  max-width: 553px;
  width: 100%;
  display: grid;
  justify-items: center;
  text-align: center;
  margin: 0 auto;
`;

const StyledCouponTitle = styled(Heading)`
  font-size: 18px;
  line-height: 24px;
`;

const StyledCouponText = styled(Text)`
  margin: 16px 0 24px;
  font-size: 16px;
  line-height: 22px;
  letter-spacing: -0.02em;
  color: #666666;
`;

const StyledCanceledChooseReasonsWrapper = styled.div`
  max-width: 906px;
  width: 100%;
  display: grid;
  gap: 24px;
  margin: 40px auto 0;
  padding: 40px 45px 36px;
  background-color: #f5f5f5;

  @media ${device.tabletS} {
    margin: 52px auto 0;
  }

  @media ${device.mobile} {
    width: auto;
    margin: 47px -16px 0;
    padding: 36px 16px 32px;
    gap: 16px;
  }
`;

const StyledCanceledChooseReasons = styled.ul`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 10px 70px;

  @media ${device.tabletS} {
    column-gap: 32px;
  }

  @media ${device.mobile} {
    grid-template-columns: 1fr;
  }
`;

const StyledCanceledChooseReasonItem = styled.li`
  position: relative;
  font-size: 14px;
  line-height: 22px;
  color: #666666;
  padding-left: 30px;
  list-style-type: none;

  &::before {
    content: "";
    position: absolute;
    left: -8px;
    display: inline-block;
    width: 6px;
    height: 11px;
    margin: 2px 11px;
    border: 0 solid #444444;
    border-width: 0 2px 2px 0;
    transform: rotateZ(45deg);
    pointer-events: none;
  }
`;

const StyledCouponValidation = styled(Text)`
  max-width: 736px;
  margin: 32px auto 0;
  font-size: 13px;
  line-height: 24px;
  text-align: center;
  color: #666666;

  @media ${device.tabletS} {
    margin-top: 24px;
  }

  @media ${device.mobile} {
    max-width: 100%;
    margin-top: 19px;
    font-size: 12px;
  }
`;

export {
  StyledCouponWrapper,
  StyledCouponTitle,
  StyledCouponText,
  StyledCanceledChooseReasonsWrapper,
  StyledCanceledChooseReasons,
  StyledCanceledChooseReasonItem,
  StyledCouponValidation,
};
