import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { StepCarousel } from "../StepCarousel/StepCarousel";
import { IHowToStartSwitcher } from "./HowToStartSwitcher.types";
import { StyledHowToStartSwitcher } from "./HowToStartSwitcher.styled";

export const HowToStartSwitcher = ({
  id,
  className,
  items,
  defaultSelected,
  namespace,
  onTabChange,
}: IHowToStartSwitcher) => {
  const { t } = useTranslation(namespace);
  const [selectedTab, setSelectedTab] = useState(defaultSelected || items[0].id);

  const handleTabChange = (tabId: string) => {
    setSelectedTab(tabId);
    onTabChange?.(tabId);
  };

  const tabItems = items.map((item) => ({
    id: item.id,
    label: t(item.label),
    content: (
      <StepCarousel
        id={`${id}-${item.id}-carousel`}
        items={item.items.map((carouselItem) => ({
          ...carouselItem,
          imgUrl: t(carouselItem.imgUrl),
          heading: carouselItem.headingLinks ? (
            <Trans
              t={t}
              i18nKey={String(carouselItem.heading)}
              components={carouselItem.headingLinks.map((link, index) => (
                <Link
                  key={index}
                  href={link.url}
                  target={link.isExternal ? "_blank" : undefined}
                  color="main"
                  textUnderline
                  hover="underline-none"
                />
              ))}
            />
          ) : (
            t(String(carouselItem.heading))
          ),
        }))}
      />
    ),
  }));

  return (
    <StyledHowToStartSwitcher
      id={id}
        className={className}
        items={tabItems}
        selected={selectedTab}
        onChange={handleTabChange}
      />
  );
};
