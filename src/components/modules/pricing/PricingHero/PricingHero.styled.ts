import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";
import { Link } from "@src/components/ui/Link";

const StyledPricingHero = styled(Section)`
  margin-top: -72px;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledPricingHeroHeading = styled(Heading)`
  margin-bottom: 56px;

  @media ${device.tabletS} {
    margin-bottom: 40px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
  }
`;

const StyledPricingHeroWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: start;
  border: 1px solid #cccccc;
  margin-bottom: 56px;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);
  background-color: #ffffff;

  @media ${device.tabletS} {
    grid-template-columns: initial;
    margin-bottom: 40px;
  }
`;

const StyledPricingHeroItem = styled.div<{ $info?: boolean }>`
  display: grid;
  row-gap: ${(props) => (props.$info ? "24px" : "32px")};
  padding: 48px;

  @media ${device.tabletS} {
    row-gap: ${(props) => (props.$info ? "24px" : "40px")};
  }

  @media ${device.mobile} {
    row-gap: ${(props) => (props.$info ? "8px" : "32px")};
    padding: ${(props) => (props.$info ? "32px 16px 0" : "48px 16px 16px")};
  }
`;

const StyledPricingHeroPrice = styled.div`
  font-size: 32px;
  font-weight: 700;
  line-height: 43px;
  letter-spacing: -0.02em;
  color: #ff6f3d;
  text-align: center;

  @media ${device.mobile} {
    font-size: 24px;
    line-height: 32px;
  }
`;

const StyledPricingHeroList = styled.ul`
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
  }
`;

const StyledPricingHeroLinkWrapper = styled.div`
  padding: 4px 0;
  text-align: center;

  @media ${device.mobile} {
    padding: 6px 0;
  }
`;

const StyledPricingHeroLink = styled(Link)`
  display: block;
  font-size: 16px;
  line-height: 27px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 23px;
  }
`;

const StyledPricingWrapperTotal = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  border-top: 1px solid #cccccc;
  padding: 20px 0 8px;

  @media ${device.tabletS} {
    padding: 12px 0 4px;
  }

  @media ${device.mobile} {
    padding: 20px 0 8px;
  }
`;

const StyledPricingWrapperTotalPrice = styled.div`
  font-size: 24px;
  font-weight: 700;
  line-height: 32px;
  letter-spacing: -0.02em;
  color: #ff6f3d;

  span {
    font-size: 40px;
    line-height: 52px;

    @media ${device.mobile} {
      font-size: 24px;
      line-height: 38px;
    }
  }

  @media ${device.mobile} {
    font-size: 18px;
    line-height: 24px;
  }
`;

const StyledPricingHeroPartners = styled.div`
  position: relative;
  display: grid;
  row-gap: 8px;
  padding-top: 56px;
  text-align: center;
  background-image: url("/images/modules/pricing/pricing-hero/map.svg");
  background-repeat: no-repeat;
  background-size: 58px 32px;
  background-position: top center;

  &::before,
  &::after {
    content: "";
    position: absolute;
    top: 16px;
    width: calc(50% - 39px);
    height: 1px;
    background-color: #cccccc;
  }

  &::before {
    left: 0;
  }

  &::after {
    right: 0;
  }
`;

export {
  StyledPricingHero,
  StyledPricingHeroHeading,
  StyledPricingHeroWrapper,
  StyledPricingHeroItem,
  StyledPricingHeroPrice,
  StyledPricingHeroList,
  StyledPricingHeroLinkWrapper,
  StyledPricingHeroLink,
  StyledPricingWrapperTotal,
  StyledPricingWrapperTotalPrice,
  StyledPricingHeroPartners,
};
