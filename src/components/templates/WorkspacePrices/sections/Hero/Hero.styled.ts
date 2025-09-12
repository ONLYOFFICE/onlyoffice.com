import styled from "styled-components";
import { device } from "@src/utils/device";
import { Section } from "@src/components/ui/Section";
import { Link } from "@src/components/ui/Link";

import { getAssetUrl } from "@utils/getAssetUrl";
const StyledHero = styled(Section)`
  margin-top: -72px;
  background-color: #f5f5f5;

  @media ${device.tablet} {
    margin-top: -64px;
  }

  @media ${device.tabletS} {
    margin-top: -48px;
  }
`;

const StyledHeroTabs = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeroTab = styled.button`
  display: flex;
  align-items: center;
  border: 1px solid #cccccc;
  border-bottom: none;
  border-radius: 3px 3px 0px 0px;
  margin-bottom: -1px;
  padding: 23px 80px;
  font-size: 18px;
  font-weight: 600;
  line-height: 29px;
  color: #ff6f3d;
  background-color: #ffffff;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    margin-right: 10px;
    width: 32px;
    height: 32px;
    background-image: url(${getAssetUrl('/images/templates/workspace-prices/hero/on-premises.svg')});
    background-repeat: no-repeat;
    background-size: contain;

    @media ${device.mobile} {
      width: 40px;
      height: 40px;
    }
  }

  @media ${device.mobile} {
    padding: 12px 11px;
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledHeroWrapper = styled.div`
  border-top: 1px solid #cccccc;
  background-color: #ffffff;
`;

const StyledHeroContent = styled(Section)`
  scroll-margin-top: 72px;

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }
`;

const StyledHeroHeader = styled.div`
  display: grid;
  justify-items: center;
  row-gap: 32px;
  margin-bottom: 56px;
  text-align: center;

  @media ${device.tabletS} {
    margin-bottom: 48px;
  }

  @media ${device.mobile} {
    margin-bottom: 32px;
    row-gap: 24px;
  }
`;

const StyledHeroLink = styled(Link)`
  font-size: 18px;
  line-height: 29px;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 22px;
  }
`;

const StyledHeroPricingPlans = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  column-gap: 32px;
  margin-bottom: 56px;

  @media ${device.desktop} {
    margin: 0 -32px 56px;
  }

  @media ${device.tablet} {
    margin: 0 -28px 56px;
  }

  @media ${device.tabletS} {
    margin: 0 -28px 80px;
  }

  @media ${device.tablet} {
    column-gap: 8px;
  }

  @media ${device.mobile} {
    grid-template-columns: initial;
    row-gap: 16px;
    margin: 0 0 64px;
  }
`;

const StyledHeroPricingPlanPlaceholder = styled.div`
  @media ${device.mobile} {
    display: none;
  }
`;

const StyledHeroPricingPlanText = styled.div`
  margin-top: 24px;
  font-size: 13px;
  line-height: 18px;
  color: #666666;
  text-align: center;

  @media ${device.mobile} {
    margin-top: initial;
  }
`;

export {
  StyledHero,
  StyledHeroTabs,
  StyledHeroTab,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroHeader,
  StyledHeroLink,
  StyledHeroPricingPlans,
  StyledHeroPricingPlanPlaceholder,
  StyledHeroPricingPlanText,
};
