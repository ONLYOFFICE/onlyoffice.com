import styled from "styled-components";
import { device } from "@src/utils/device";
import { IHeroTabs, IHeroTabsItem } from "./HeroTabs.types";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroTabs = styled(Section)`
  overflow: hidden;
`;

const StyledHeroTabsHeading = styled(Heading)<{
  $maxWidth: IHeroTabs["heading"]["maxWidth"];
}>`
  margin: 0 auto 96px;
  max-width: ${(props) => props.$maxWidth};

  @media ${device.mobile} {
    margin: 0 auto 48px;
  }
`;

const StyledHeroTabsButtons = styled.div`
  display: flex;
  justify-content: center;
`;

const StyledHeroTabsButton = styled.button<{
  $activeTab: boolean;
  $iconUrl: IHeroTabsItem["button"]["icon"]["url"];
  $iconPositionX: IHeroTabsItem["button"]["icon"]["positionX"];
  $iconPositionY: IHeroTabsItem["button"]["icon"]["positionY"];
  $iconSize: IHeroTabsItem["button"]["icon"]["size"];
  $iconWidth: IHeroTabsItem["button"]["icon"]["width"];
  $iconHeight: IHeroTabsItem["button"]["icon"]["height"];
}>`
  position: relative;
  display: inline-flex;
  flex-direction: column;
  align-items: center;
  border: none;
  border-bottom: 1px solid
    ${(props) => (props.$activeTab ? "#ff6f3d" : "transparent")};
  padding: 0 0 16px;
  font-size: 12px;
  font-weight: 600;
  line-height: 16px;
  letter-spacing: 0.08em;
  color: ${(props) => (props.$activeTab ? "#ff6f3d" : "#444444")};
  width: 204px;
  text-align: center;
  text-transform: uppercase;
  background-color: transparent;
  transition:
    border-color 0.2s,
    color 0.2s;
  cursor: pointer;

  &::before {
    content: "";
    display: inline-block;
    margin-bottom: 16px;
    width: ${(props) => props.$iconWidth || "56px"};
    min-width: ${(props) => props.$iconWidth || "56px"};
    height: ${(props) => props.$iconHeight || "56px"};
    background-image: url(${(props) => props.$iconUrl});
    background-position-x: ${(props) => props.$iconPositionX};
    background-position-y: ${(props) => props.$iconPositionY};
    background-size: ${(props) => props.$iconSize};
    background-repeat: no-repeat;
  }

  &:not(:last-child) {
    margin-right: 24px;
  }

  @media ${device.mobile} {
    width: 36vw;
  }
`;

const StyledHeroTabsContent = styled.div`
  position: relative;
  padding: 112px 0;
  background-color: #f2f2f2;

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    transform: translateX(-100%);
    background-color: inherit;
    z-index: -1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    right: 0;
    bottom: 0;
    width: 100vw;
    height: 100%;
    transform: translateX(100%);
    background-color: inherit;
    z-index: -1;
    pointer-events: none;
  }

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

export {
  StyledHeroTabs,
  StyledHeroTabsHeading,
  StyledHeroTabsButtons,
  StyledHeroTabsButton,
  StyledHeroTabsContent,
};
