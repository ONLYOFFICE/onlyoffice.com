import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";

const StyledHero = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroHeader = styled.div`
  display: grid;
  row-gap: 24px;
  margin: 0 auto 40px;
  max-width: 928px;
  text-align: center;

  @media ${device.tablet} {
    row-gap: 16px;
  }

  @media ${device.mobile} {
    margin: 0 auto 24px;
  }
`;

const StyledHeroText = styled.div`
  font-size: 22px;
  line-height: 33px;

  @media ${device.mobile} {
    font-size: 16px;
    line-height: 24px;
  }
`;

const StyledHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  border: 1px solid #cccccc;
  background-color: #ffffff;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);

  @media ${device.tablet} {
    grid-template-columns: initial;
  }
`;

const StyledHeroItem = styled.div<{ $info?: boolean }>`
  display: grid;
  row-gap: ${(props) => (props.$info ? "24px" : "40px")};
  padding: 48px;

  @media ${device.mobile} {
    row-gap: ${(props) => (props.$info ? "8px" : "32px")};
    padding: ${(props) => (props.$info ? "32px 16px 0" : "48px 16px 16px")};
  }
`;

const StyledHeroPriceWrapper = styled.div`
  font-size: 16px;
  line-height: 24px;
  text-align: center;

  @media ${device.mobile} {
    padding: 5px 0;
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledHeroPrice = styled.span`
  margin: 0 5px;
  font-size: 32px;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: -0.02em;
  color: #ff6f3d;

  span {
    font-size: 18px;
    line-height: 24px;

    @media ${device.mobile} {
      font-size: 16px;
      line-height: 24px;
    }
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledHeroList = styled.ul`
  padding: 8px 0;
  font-size: 16px;
  line-height: 24px;

  li {
    position: relative;
    padding-left: 32px;

    &::before {
      content: "";
      position: absolute;
      top: 0;
      left: 0;
      width: 24px;
      height: 24px;
      background-image: url("/images/icons/check-gray.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:not(:last-child) {
      margin-bottom: 8px;
    }
  }

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 21px;
  }
`;

const StyledHeroLink = styled(Link)`
  padding: 4px 0;
  font-size: 16px;
  line-height: 26px;
  text-align: center;

  @media ${device.mobile} {
    padding: 6px 0;
    font-size: 14px;
    line-height: 23px;
  }
`;

const StyledHeroTabsList = styled.ul`
  li {
    position: relative;
    padding-left: 20px;
    font-size: 13px;
    line-height: 18px;

    &::before {
      content: "";
      position: absolute;
      top: 4px;
      left: 0;
      width: 12px;
      height: 12px;
      background-image: url("/images/icons/check-small.svg");
      background-repeat: no-repeat;
      background-size: contain;
    }

    &:not(:last-child) {
      margin-bottom: 10px;
    }
  }
`;

const StyledHeroCheckboxes = styled.div`
  display: grid;
  row-gap: 8px;
`;

const StyledHeroCheckboxWrapper = styled.div`
  display: flex;
  column-gap: 8px;
`;

const StyledHeroBox = styled.div`
  display: grid;
  row-gap: 8px;
`;

const StyledHeroBoxItem = styled.div`
  padding: 16px;
  background-color: #f9f9f9;

  &:not(:last-child) {
    position: relative;

    &::after {
      content: "";
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
      border-bottom: 1px solid #e2e2e2;

      @media ${device.mobile} {
        left: 50%;
        width: calc(100% - 32px);
        transform: translateX(-50%);
      }
    }
  }
`;

const StyledHeroTotal = styled.div`
  border-top: 1px solid #cccccc;
`;

const StyledHeroTotalWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 15px 0 3px;

  @media ${device.mobile} {
    padding: 20px 0 8px;
  }
`;

const StyledHeroTotalPrice = styled.div`
  font-size: 40px;
  font-weight: 700;
  line-height: 52px;
  letter-spacing: -0.02em;
  color: #ff6f3d;

  span {
    font-size: 24px;
    line-height: 32px;

    @media ${device.mobile} {
      font-size: 18px;
      line-height: 24px;
    }
  }

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 38px;
  }
`;

const StyledHeroBtnWrapper = styled.div`
  padding-top: 40px;

  @media ${device.mobile} {
    padding-top: 32px;
  }
`;

const StyledHeroCaption = styled.div`
  display: grid;
  row-gap: 8px;
  margin-top: 24px;
  text-align: center;
`;

export {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPriceWrapper,
  StyledHeroPrice,
  StyledHeroList,
  StyledHeroLink,
  StyledHeroTabsList,
  StyledHeroCheckboxes,
  StyledHeroCheckboxWrapper,
  StyledHeroBox,
  StyledHeroBoxItem,
  StyledHeroBtnWrapper,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroCaption,
};
