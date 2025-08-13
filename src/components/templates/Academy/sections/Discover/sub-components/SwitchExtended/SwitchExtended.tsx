import React, { useState } from "react";
import { IHeroTabs } from "@src/components/modules/download/HeroTabs/HeroTabs.types";
import {
  StyledSwitchSubheading,
  StyledHeroTabsButtonCustom,
  StyledSwitchHeading,
  StyledSwitchButtons,
  StyledBtnText,
  StyledSwitchContent
} from "./SwitchExtended.styled";
import { Trans, useTranslation } from "next-i18next";
import { Text } from "@src/components/ui/Text";

interface ISwitchExtended extends IHeroTabs {
  subheading: string;
  setCourse: React.Dispatch<React.SetStateAction<string>>;
}

const SwitchExtended = ({ heading, items, subheading, setCourse }: ISwitchExtended) => {
  const { t } = useTranslation("academy");
  const [activeTab, setActiveTab] = useState<string>(items[0].button.id);
  const activeItem = items.find((item) => item.button.id === activeTab);

  return (
    <>
      <StyledSwitchHeading
        level={2}
        textAlign="center"
        $maxWidth={heading.maxWidth}
      >
        {heading.text}
      </StyledSwitchHeading>
      <StyledSwitchSubheading>{subheading}</StyledSwitchSubheading>
      <StyledSwitchButtons>
        {items.map((item, index) => (
          <StyledHeroTabsButtonCustom
            key={index}
            onClick={() => {
              setActiveTab(item.button.id);
              setCourse(item.button.id);
            }}
            $activeTab={activeTab === item.button.id}
            $iconUrl={item.button.icon.url}
            $iconPositionX={item.button.icon.positionX}
            $iconPositionY={item.button.icon.positionY}
            $iconSize={item.button.icon.size}
            $iconWidth={item.button.icon.width}
            $iconHeight={item.button.icon.height}
          >
            <StyledBtnText>
            <Trans
                t={t}
                i18nKey={item.button.label}
                components={[<Text as="span" key="0" />]}
              />
              
            </StyledBtnText>
          </StyledHeroTabsButtonCustom>
        ))}
      </StyledSwitchButtons>

      <StyledSwitchContent>
        {Array.isArray(activeItem?.children)
          ? activeItem.children.map((child, i) =>
              React.cloneElement(child, { key: child.key ?? i }),
            )
          : activeItem?.children}
      </StyledSwitchContent>
    </>
  );
};

export { SwitchExtended };
