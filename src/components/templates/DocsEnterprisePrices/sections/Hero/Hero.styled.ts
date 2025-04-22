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
  margin-bottom: 56px;
  background-color: #ffffff;
  box-shadow: 0px 7px 25px 0px rgba(85, 85, 85, 0.15);

  @media ${device.tablet} {
    grid-template-columns: initial;
    margin-bottom: 40px;
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

const StyledHeroLinkWrapper = styled.div`
  padding: 4px 0;
  text-align: center;

  @media ${device.mobile} {
    padding: 6px 0;
  }
`;

const StyledHeroLink = styled(Link)`
  display: block;
  font-size: 16px;
  line-height: 27px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 23px;
  }
`;

const StyledHeroToggleButtonsText = styled.div`
  font-size: 12px;
  font-weight: 400;
  line-height: 16px;
  color: #666666;
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
  padding-top: 32px;
`;

export {
  StyledHero,
  StyledHeroHeader,
  StyledHeroText,
  StyledHeroWrapper,
  StyledHeroItem,
  StyledHeroPriceWrapper,
  StyledHeroPrice,
  StyledHeroLinkWrapper,
  StyledHeroLink,
  StyledHeroToggleButtonsText,
  StyledHeroTotal,
  StyledHeroTotalWrapper,
  StyledHeroTotalPrice,
  StyledHeroBtnWrapper,
};
