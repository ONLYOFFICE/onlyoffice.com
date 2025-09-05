import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledFeaturesHeading,
  StyledFeaturesTabs,
  StyledFeaturesTab,
  StyledFeaturesContent,
  StyledFeaturesDescription,
  StyledFeaturesListItem,
  StyledFeaturesListDescription,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";
import { FeatureImageItem } from "@src/components/widgets/FeatureImageItem";
import { getLink } from "@src/utils/getLink";

const Features = () => {
  const { t } = useTranslation("accessibility");
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["88px", "88px"]}
    >
      <Container>
        <StyledFeaturesHeading level={2} size={2} textAlign="center">
          {t("AccessibilityTitle")}
        </StyledFeaturesHeading>
        <StyledFeaturesDescription>
          {t("AccessibilityDescription")}
        </StyledFeaturesDescription>

        <StyledFeaturesTabs>
          {items.map((tab, index) => (
            <StyledFeaturesTab
              key={index}
              onClick={() => setActiveTab(index)}
              $active={activeTab === index}
              $iconPositionX={tab.iconPositionX}
            >
              {t(tab.heading)}
            </StyledFeaturesTab>
          ))}
        </StyledFeaturesTabs>

        <StyledFeaturesContent>
          {items[activeTab].items
            .filter(
              (group) =>
                !(
                  locale?.startsWith("zh") &&
                  group.heading === "AutoCorrectFeatures"
                ),
            )
            .map((group, groupIndex) => (
              <FeatureImageItem
                links={group.links?.map((link) => ({
                  ...link,
                  label: t(String(link.label)),
                  href: link.href.includes("app-directory")
                    ? link.href.replace(
                        "https://www.onlyoffice.com/app-directory",
                        getLink("marketplace", locale!),
                      )
                    : link.href,
                }))}
                key={groupIndex}
                image={{
                  url: t(group.image.url),
                  url2x: group.image.url2x ? t(group.image.url2x) : undefined,
                  height: 520,
                }}
                heading={t(group.heading)}
                text={
                  group.items.length === 1 ? (
                    <StyledFeaturesListDescription>
                      {t(group.items[0])}
                    </StyledFeaturesListDescription>
                  ) : (
                    <ul>
                      {group.items.map((el, i) => (
                        <StyledFeaturesListItem key={i}>
                          {t(el)}
                        </StyledFeaturesListItem>
                      ))}
                    </ul>
                  )
                }
                position={{
                  desktop:
                    activeTab !== 0
                      ? groupIndex % 2 === 1
                        ? "right"
                        : "left"
                      : groupIndex % 2 === 1
                        ? "left"
                        : "right",
                }}
              />
            ))}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
