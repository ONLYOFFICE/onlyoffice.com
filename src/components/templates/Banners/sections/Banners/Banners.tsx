import { useTranslation } from "next-i18next";
import { useState } from "react";
import {
  StyledTabs,
  StyledTab,
  StyledBannerBlock,
  StyledBannerTitle,
  StyledBannerImage,
  StyledBannerNote,
  StyledTextarea
} from "./Banners.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

const Banners = () => {
  const { t } = useTranslation("banners");

  const tabGroups = Array.from(
    new Map(
      items.map((item) => [
        item.tabKey,
        {
          key: item.tabKey,
          title: item.title,
          format: item.format,
          dimensions: item.dimensions,
        },
      ])
    ).values()
  );

  const [activeTab, setActiveTab] = useState(tabGroups[0]?.key || "");

  const selectedItems = items.filter((item) => item.tabKey === activeTab);

  return (
    <Section
      desktopSpacing={["0px", "80px"]}
      tabletSpacing={["0px", "80px"]}
      tabletSmallSpacing={["0px", "80px"]}
      mobileSpacing={["0px", "80px"]}
    >
      <Container maxWidth="1050px">
         <StyledTabs>
          {tabGroups.map((tab) => (
            <StyledTab
              key={tab.key}
              active={tab.key === activeTab}
              onClick={() => setActiveTab(tab.key)}
            >
              <div style={{ fontSize: "12px" }}>{tab.dimensions}</div>
              <div style={{ fontSize: "12px" }}>{t(tab.format)}</div>
            </StyledTab>
          ))}
        </StyledTabs>

        {selectedItems.map((banner, index) => (
          <StyledBannerBlock key={index}>
            <StyledBannerTitle>
              {String(index + 1).padStart(2, "0")}. {t(banner.title)}
            </StyledBannerTitle>
            <StyledBannerImage src={banner.image} alt={t(banner.title)} />
            <StyledBannerNote>{t("CopyBannerCode")}</StyledBannerNote>
            <StyledTextarea rows={3} readOnly value={banner.code} />
          </StyledBannerBlock>
        ))}
      </Container>
    </Section>
  );
};

export { Banners };
