import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledCost = styled.section`
  background: #f9f9f9;

  .container {
    padding: 112px 0;

    @media screen and (max-width: 1200px) {
      width: 90vw;
    }

    @media ${device.mobile} {
      padding: 48px 0;
    }
  }
`;

const StyledCostContent = styled.div`
  background: #ffffff;
  border: 1px solid #cccccc;
  box-shadow: 0 7px 25px rgba(85, 85, 85, 0.15);
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: relative;

  &::after {
    content: "";
    position: absolute;
    top: -1px;
    right: -1px;
    width: 50%;
    height: 100%;
    background-image: url("/images/templates/docspace-enterprise/cost/cost_picture.svg");
    background-repeat: no-repeat;
    background-position: 100% 0;
    background-size: contain;

    @media ${device.mobile} {
      width: 100%;
      height: 50%;
    }
  }
`;

const StyledCostContentLeft = styled.div`
  padding: 48px 0 48px 48px;
  width: 50%;

  @media ${device.tabletS} {
    padding: 32px 0 32px 32px;
  }

  @media ${device.mobile} {
    width: 100%;
    padding: 245px 16px 16px;
  }

  .title {
    font-size: 40px;
    font-weight: 700;
    letter-spacing: -0.02em;
    line-height: 1.33em;

    @media ${device.tabletS} {
      font-size: 30px;
      letter-spacing: -0.01em;
    }

    @media ${device.mobile} {
      font-size: 20px;
    }
  }
`;

const StyledCostList = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-size: 16px;
  line-height: 1.6em;
  margin: 24px 0;

  @media ${device.mobile} {
    font-size: 14px;
    margin: 20px 0 12px;
  }
`;

const StyledCostItem = styled.li`
  max-width: 384px;
  padding: 0 0 8px 32px;
  position: relative;

  &::before {
    content: "";
    width: 12px;
    height: 12px;
    display: inline-block;
    position: absolute;
    top: 4px;
    left: 6px;
    background-image: url("/images/icons/check-orange.svg");
    background-repeat: no-repeat;
  }
`;

const StyledCostFooter = styled.div`
  background: #ffffff;
  margin: 56px 0 0;
  padding: 24px;
  border-radius: 6px;
  border: 1px solid #e2e2e2;

  @media ${device.tabletS} {
    padding: 32px;
  }

  @media ${device.mobile} {
    margin: 48px 0 0;
    padding: 24px 42px;
  }

  @media ${device.mobileS} {
    padding: 24px 16px;
  }

  &::before {
    content: "";
    display: block;
    background-image: url("/images/icons/heart.svg");
    background-repeat: no-repeat;
    background-size: contain;
    width: 40px;
    height: 40px;
    margin: 0 auto 12px;
  }

  .text {
    font-weight: normal;
    line-height: 160%;
    font-size: 16px;
    text-align: center;

    @media ${device.tabletS} {
      font-size: 14px;
    }
  }
`;

export {
  StyledCost,
  StyledCostContent,
  StyledCostContentLeft,
  StyledCostList,
  StyledCostItem,
  StyledCostFooter,
};
