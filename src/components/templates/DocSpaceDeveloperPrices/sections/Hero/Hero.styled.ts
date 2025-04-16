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

const StyledHeroPrice = styled.div`
  font-size: 14px;
  line-height: 20px;
  color: #666666;
  text-align: center;
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
  StyledHeroPrice,
  StyledHeroLink,
  StyledHeroCaption,
};
