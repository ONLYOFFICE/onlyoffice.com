import React, { useState, useEffect } from "react";
import {
  StyledHeroTabs,
  StyledHeroTabsHeading,
  StyledHeroTabsButtons,
  StyledHeroTabsButton,
  StyledHeroTabsContent,
} from "./HeroTabs.styled";
import { IHeroTabs } from "./HeroTabs.types";
import { Container } from "@src/components/ui/Container";

const HeroTabs = ({ heading, items }: IHeroTabs) => {
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
    <StyledHeroTabs
      desktopSpacing={["96px", "0"]}
      tabletSpacing={["96px", "0"]}
      tabletSmallSpacing={["96px", "0"]}
      mobileSpacing={["48px", "0"]}
    >
      <Container>
        <StyledHeroTabsHeading
          level={1}
          textAlign="center"
          $maxWidth={heading.maxWidth}
        >
          {heading.text}
        </StyledHeroTabsHeading>

        <StyledHeroTabsButtons>
          {items.map((item, index) => (
            <StyledHeroTabsButton
              onClick={() => {
                setActiveTab(item.button.id);
                history.replaceState(null, "", `#${item.button.id}`);
              }}
              key={index}
              $activeTab={activeTab === item.button.id}
              $iconUrl={item.button.icon.url}
              $iconPositionX={item.button.icon.positionX}
              $iconPositionY={item.button.icon.positionY}
              $iconSize={item.button.icon.size}
              $iconWidth={item.button.icon.width}
              $iconHeight={item.button.icon.height}
            >
              {item.button.label}
            </StyledHeroTabsButton>
          ))}
        </StyledHeroTabsButtons>

        <StyledHeroTabsContent>
          {Array.isArray(activeItem?.children)
            ? activeItem.children.map((child, i) =>
                React.cloneElement(child, { key: child.key ?? i }),
              )
            : activeItem?.children}
        </StyledHeroTabsContent>
      </Container>
    </StyledHeroTabs>
  );
};

export { HeroTabs };
