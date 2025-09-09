import styled, { css } from "styled-components";
import { device } from "@src/utils/device";
import { IHeroSwitch, IHeroSwitchItem } from "./HeroSwitch.types";
import { Section } from "@src/components/ui/Section";
import { Heading } from "@src/components/ui/Heading";

const StyledHeroSwitch = styled(Section)`
  overflow: hidden;
`;

const StyledHeroSwitchHeading = styled(Heading)<{
  $maxWidth: IHeroSwitch["heading"]["maxWidth"];
}>`
  margin-bottom: 56px;
  max-width: ${(props) => props.$maxWidth};

  @media ${device.mobile} {
    margin-bottom: 48px;
  }
`;

const StyledHeroSwitchButtons = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media ${device.mobile} {
    overflow-x: auto;
    margin: 0 -16px;
    padding: 0 16px;
  }
`;

const StyledHeroSwitchButton = styled.button<{ $active?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  border: none;
  padding: 16px 0 24px;
  background-color: transparent;
  cursor: pointer;
  scroll-margin-top: 72px;
  -webkit-tap-highlight-color: transparent;

  &:focus {
    outline: none;
  }
    
  &:first-child {
    padding-right: 16px;

    @media ${device.mobile} {
      padding-right: 8px;
    }
  }

  &::before,
  &::after {
    content: "";
    position: absolute;
    bottom: 0;
    border-bottom: 1px solid transparent;
    transition: border-color 0.2s;
  }

  ${(props) =>
    props.$active &&
    css`
      &::before {
        left: 0;
        border-color: #ff6f3d;
        width: 100%;
      }

      &::after {
        border-color: #ff6f3d;
        width: 100vw;

        @media ${device.mobile} {
          width: 16px;
        }
      }

      &:first-child {
        &::after {
          left: 0;
          transform: translateX(-100%);
        }
      }

      &:last-child {
        &::after {
          right: 0;
          transform: translateX(100%);
        }
      }
    `}

  @media ${device.tablet} {
    scroll-margin-top: 64px;
  }

  @media ${device.tabletS} {
    scroll-margin-top: 48px;
  }

  @media ${device.mobile} {
    min-width: 186px;
  }
`;

const StyledHeroSwitchButtonIcon = styled.span<{
  $iconUrl: IHeroSwitchItem["button"]["icon"]["url"];
  $iconPositionX: IHeroSwitchItem["button"]["icon"]["positionX"];
  $iconPositionY: IHeroSwitchItem["button"]["icon"]["positionY"];
  $iconSize: IHeroSwitchItem["button"]["icon"]["size"];
  $iconWidth: IHeroSwitchItem["button"]["icon"]["width"];
  $iconHeight: IHeroSwitchItem["button"]["icon"]["height"];
}>`
  display: inline-flex;
  margin-right: 24px;
  width: ${(props) => props.$iconWidth || "56px"};
  min-width: ${(props) => props.$iconWidth || "56px"};
  height: ${(props) => props.$iconHeight || "56px"};
  background-image: url(${(props) => props.$iconUrl});
  background-position-x: ${(props) => props.$iconPositionX};
  background-position-y: ${(props) => props.$iconPositionY};
  background-size: ${(props) => props.$iconSize};
  background-repeat: no-repeat;

  @media ${device.mobile} {
    display: none;
  }
`;

const StyledHeroSwitchButtonLabel = styled.div<{ $active?: boolean }>`
  margin-bottom: 4px;
  font-size: 18px;
  font-weight: 700;
  line-height: 24px;
  letter-spacing: -0.02em;
  color: ${(props) => (props.$active ? "#FF6F3D" : "#444444")};
  transition: color 0.2s;

  @media ${device.mobile} {
    font-size: 14px;
    line-height: 19px;
  }
`;

const StyledHeroSwitchButtonText = styled.div`
  font-size: 14px;
  line-height: 21px;
  color: #444444;

  @media ${device.mobile} {
    font-size: 13px;
    line-height: 20px;
  }
`;

const StyledHeroSwitchContent = styled.div`
  position: relative;
  padding: 56px 0 112px;
  background-color: #f5f5f5;

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

  @media ${device.tabletS} {
    padding: 56px 0 88px;
  }

  @media ${device.mobile} {
    padding: 48px 0;
  }
`;

export {
  StyledHeroSwitch,
  StyledHeroSwitchHeading,
  StyledHeroSwitchButtons,
  StyledHeroSwitchButton,
  StyledHeroSwitchButtonIcon,
  StyledHeroSwitchButtonLabel,
  StyledHeroSwitchButtonText,
  StyledHeroSwitchContent,
};
