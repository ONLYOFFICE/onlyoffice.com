import React, { useState, useEffect } from "react";
import {
  StyledHeroSwitch,
  StyledHeroSwitchHeading,
  StyledHeroSwitchButtons,
  StyledHeroSwitchButton,
  StyledHeroSwitchButtonIcon,
  StyledHeroSwitchButtonLabel,
  StyledHeroSwitchButtonText,
  StyledHeroSwitchContent,
} from "./HeroSwitch.styled";
import { IHeroSwitch } from "./HeroSwitch.types";
import { Container } from "@src/components/ui/Container";

const HeroSwitch = ({ heading, items }: IHeroSwitch) => {
  const [activeTab, setActiveTab] = useState<string | null>(null);
  const activeItem = items.find((item) => item.button.id === activeTab);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const hash = window.location.hash.replace("#", "");
      const isValidTab = items.some((item) => item.button.id === hash);

      setActiveTab(isValidTab ? hash : items[0].button.id);
    }
  }, [items]);

  return (
    <StyledHeroSwitch
      desktopSpacing={["56px", "0"]}
      tabletSpacing={["56px", "0"]}
      tabletSmallSpacing={["56px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledHeroSwitchHeading
          level={1}
          size={3}
          $maxWidth={heading.maxWidth}
        >
          {heading.text}
        </StyledHeroSwitchHeading>

        <StyledHeroSwitchButtons>
          {items.map((item, index) => (
            <StyledHeroSwitchButton
              key={index}
              onClick={() => {
                setActiveTab(item.button.id);
                history.replaceState(null, "", `#${item.button.id}`);
              }}
              id={item.button.id}
              $active={activeTab === item.button.id}
            >
              <StyledHeroSwitchButtonIcon
                $iconUrl={item.button.icon.url}
                $iconPositionX={item.button.icon.positionX}
                $iconPositionY={item.button.icon.positionY}
                $iconSize={item.button.icon.size}
                $iconWidth={item.button.icon.width}
                $iconHeight={item.button.icon.height}
              />
              <div>
                <StyledHeroSwitchButtonLabel
                  $active={activeTab === item.button.id}
                >
                  {item.button.label}
                </StyledHeroSwitchButtonLabel>
                <StyledHeroSwitchButtonText>
                  {item.button.text}
                </StyledHeroSwitchButtonText>
              </div>
            </StyledHeroSwitchButton>
          ))}
        </StyledHeroSwitchButtons>

        <StyledHeroSwitchContent>
          {Array.isArray(activeItem?.children)
            ? activeItem.children.map((child, i) =>
                React.cloneElement(child, { key: child.key ?? i }),
              )
            : activeItem?.children}
        </StyledHeroSwitchContent>
      </Container>
    </StyledHeroSwitch>
  );
};

export { HeroSwitch };
