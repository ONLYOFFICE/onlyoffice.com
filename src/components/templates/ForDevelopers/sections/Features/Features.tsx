import { useState } from "react";
import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import {
  StyledFeaturesContent,
  StyledFeaturesListItem,
  StyledFeaturesListDescription,
} from "./Features.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureIconsItem } from "@src/components/widgets/FeatureIconsItem";
import { items } from "./data/items";

const Features = () => {
  const { t } = useTranslation("for-developers");
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState(0);

return (
    <Section
      desktopSpacing={["112px", "112px"]}
      mobileSpacing={["48px", "48px"]}
      tabletSpacing={["88px", "88px"]}
    >
      <Container>
        <StyledFeaturesContent>
          {items[activeTab].items

.map((group, groupIndex) => {
  const buttons =
    group.links?.slice(0, 2).map((link, index) => ({
      ...link,
      label: t(String(link.label)),
      isPrimary: index === 0,
    })) ?? [];

    return (
      <FeatureIconsItem
        key={groupIndex}
        connectorsHeading={t(group.connectorsHeading ?? "")}
        connectorsSubheading={t(group.connectorsSubheading ?? "")}
        buttons={buttons}
        image={{
          url: t(group.image.url),
          url2x: group.image.url2x ? t(group.image.url2x) : undefined,
          height: 520,
        }}
        text={group.items.map((key) => {
        const entry = group.textWithLinks?.find((item) => item.label === key);
        return {
          label: t(key),            
          links: entry?.links ?? [],
        };
      })}
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
        connectorsItems={
          group.connectorsItems?.map((item) => ({
            ...item,
            label: t(item.label),
          }))
        }
        />
        );
        })}
        </StyledFeaturesContent>
      </Container>
    </Section>
  );
};

export { Features };
