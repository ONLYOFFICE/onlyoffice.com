import styled from "styled-components";
import { device } from "@src/utils/device";

const StyledSupport = styled.section`
  width: 100%;
  height: fit-content;
  background: linear-gradient(136deg, #ffc671 0%, #ff7541 59.38%, #ff6f3d 100%);
`;

const StyledSupportBg = styled.div`
  width: 100%;
  background-image: url("/images/templates/docspace-enterprise/support/bg.svg");
  background-position-x: 50%;
  background-repeat: no-repeat;
  background-size: 1396px auto;

  @media ${device.mobile} {
    background-size: 640px auto;
  }

  .container {
    padding: 112px 0 192px;
    text-align: center;

    @media screen and (max-width: 1200px) {
      width: 90vw;
    }

    @media screen and (max-width: 1024px) {
      padding: 80px 0 88px;
    }

    @media ${device.mobile} {
      padding: 48px 0 64px;
    }
  }

  .title {
    font-size: 40px;
    line-height: 53px;
    letter-spacing: -0.02em;
    font-weight: 700;
    color: #fff;

    @media screen and (max-width: 1024px) {
      font-size: 36px;
      line-height: 48px;
    }

    @media ${device.mobile} {
      font-size: 24px;
      line-height: 32px;
    }

    &::before {
      content: "";
      background-image: url("/images/templates/docspace-enterprise/support/logo.svg");
      background-repeat: no-repeat;
      display: block;
      margin: 0 auto 24px;
      text-align: center;
      width: 68px;
      height: 64px;
    }
  }

  .text {
    font-size: 22px;
    font-weight: normal;
    line-height: 160%;
    color: #fff;
    padding: 24px 0 56px;

    @media screen and (max-width: 1024px) {
      font-size: 18px;
      line-height: 27px;
      padding: 12px 0 56px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 21px;
      padding: 16px 0 28px;
    }
  }
`;

const StyledSupportList = styled.div`
  width: 100%;
  height: fit-content;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  column-gap: 32px;
  row-gap: 40px;

  @media ${device.mobile} {
    row-gap: 20px;
  }
`;

const StyledSupportItem = styled.div`
  width: 544px;
  padding-bottom: 9px;

  @media screen and (max-width: 1024px) {
    width: 328px;
  }

  .item__image {
    display: block;
    width: 64px;
    height: 64px;
    margin: 0 auto 12px;
  }

  .item__title {
    padding-bottom: 12px;
    font-size: 24px;
    line-height: 32px;
    letter-spacing: -0.02em;
    color: #fff;

    @media screen and (max-width: 1024px) {
      font-size: 22px;
      line-height: 30px;
    }

    @media ${device.mobile} {
      font-size: 20px;
      line-height: 27px;
    }
  }

  .item__text {
    font-size: 18px;
    line-height: 27px;
    padding-bottom: 28px;
    color: #fff;

    @media screen and (max-width: 1024px) {
      font-size: 16px;
      line-height: 24px;
    }

    @media ${device.mobile} {
      font-size: 14px;
      line-height: 21px;
      padding: 0 0 20px;
    }
  }

  .item__btn {
    background-color: transparent;
    border: 1px solid #ffffff;
    color: #fff;
    border-radius: 3px;
  }
`;

export { StyledSupport, StyledSupportBg, StyledSupportList, StyledSupportItem };
