import { useState } from "react";
import { useTranslation, Trans } from "next-i18next";
import {
  StyledFeaturesHeading,
  StyledFeaturesTabs,
  StyledFeaturesTab,
  StyledFeaturesContent,
  StyledFeaturesList,
  StyledFeaturesListHeading,
  StyledFeaturesListItem,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("office-for-zapier");
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Section>
      <Container>
        <StyledFeaturesHeading level={2} size={2} textAlign="center">
          <Trans
            t={t}
            i18nKey="BuildZaps"
            components={[<Text as="span" color="main" key="0" />]}
          />
        </StyledFeaturesHeading>

        <StyledFeaturesTabs>
          {items.map((tab, index) => (
            <StyledFeaturesTab
              key={index}
              onClick={() => setActiveTab(index)}
              $active={activeTab === index}
            >
              {t(tab.heading)}
            </StyledFeaturesTab>
          ))}
        </StyledFeaturesTabs>

        <StyledFeaturesContent $isFirstTab={activeTab === 0}>
          {items[activeTab].items.map((group, groupIndex) => (
            <div key={groupIndex}>
              <StyledFeaturesListHeading
                level={4}
                $iconPositionX={group.iconPositionX}
              >
                {t(group.heading)}
              </StyledFeaturesListHeading>

              <StyledFeaturesList>
                {group.items.map((item, itemIndex) => (
                  <StyledFeaturesListItem key={itemIndex}>
                    {t(item)}
                  </StyledFeaturesListItem>
                ))}
              </StyledFeaturesList>
            </div>
          ))}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
