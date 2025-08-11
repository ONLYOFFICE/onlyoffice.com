import styled from "styled-components";
import { Text } from "@src/components/ui/Text";
import { device } from "@src/utils/device";
import {
  StyledHeroTabsButton,
  StyledHeroTabsHeading,
  StyledHeroTabsButtons,
  StyledHeroTabsContent,
} from "@src/components/modules/download/HeroTabs/HeroTabs.styled";

const StyledHeroTabsButtonCustom = styled(StyledHeroTabsButton)`
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 24px;
  padding: 0px 0px 24px;
  text-align: left;
  font-size: 18px;
  line-height: 1.33em;
  font-weight: 700;
  letter-spacing: -0.02em;
  text-transform: none;
  margin-bottom: -1px;
  min-width: 352px;

  &:not(:last-child) {
    margin-right: 0px;
  }

  &::before {
    margin: 0;
  }

  @media ${device.desktop} {
    min-width: 30vw;
    gap: 16px;
  }

  @media ${device.tabletS} {
    min-width: calc(33% - 80px);
  }

  @media ${device.mobile} {
    font-size: 16px;
    min-width: 190px;
  }
`;

const StyledBtnText = styled.div`
  > span {
    font-size: 12px;
    font-weight: 600;
    line-height: 16px;
    letter-spacing: 0.08em;
    color: #444444;
    text-transform: uppercase;
  }
`;

const StyledSwitchSubheading = styled(Text)`
  text-align: center;
  margin-bottom: 72px;

  @media ${device.mobile} {
    font-size: 16px;
    margin-bottom: 32px;
  }
`;

const StyledSwitchHeading = styled(StyledHeroTabsHeading)`
  margin-bottom: 24px;
`;

const StyledSwitchButtons = styled(StyledHeroTabsButtons)`
  border-bottom: 1px solid #cccccc;
  gap: 32px;

  @media ${device.desktop} {
    gap: 8px;
  }

  @media ${device.mobile} {
    overflow-x: scroll;
    gap: 24px;
    justify-content: start;
  }
`;

const StyledSwitchContent = styled(StyledHeroTabsContent)`
  max-width: 1071px;
  margin: auto;
  padding: 112px 0 0;

  @media ${device.desktop} {
    max-width: 90vw;
  }
  @media ${device.tablet} {
    padding: 88px 0 0;
  }

  @media ${device.tabletS} {
    padding: 72px 0 0;
  }

  @media ${device.mobile} {
    padding: 48px 0 0;
  }
`;

export {
  StyledSwitchHeading,
  StyledSwitchSubheading,
  StyledHeroTabsButtonCustom,
  StyledSwitchButtons,
  StyledBtnText,
  StyledSwitchContent,
};
