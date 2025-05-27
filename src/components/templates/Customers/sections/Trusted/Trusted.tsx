import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { tabsInfo } from "./data/tabsInfo";
import { IButtonInfo } from "./Trusted.types";

import {
  StyledTrustedButton,
  StyledTrustedHeading,
  StyledTrustedIconItem,
  StyledTrustedIconList,
  StyledTrustedTabItem,
  StyledTrustedTabList
} from "./Trusted.styled";

const Trusted = () => {
  const { t } = useTranslation("customers");
  const [activeTab, setActiveTab] = useState<IButtonInfo>(tabsInfo[0]);
  const [showMore, setShowMore] = useState<boolean>(true);

  return (
    <Section>
      <Container>
        <StyledTrustedHeading size={4} level={2} textAlign="center">
          <Trans t={t} i18nKey={"TrustedHeadingTrustedAndLove"} components={[
            <Text as={"span"} color="main" key={0} />
          ]}
          />
        </StyledTrustedHeading>
        <StyledTrustedTabList>
          {tabsInfo.map((tab) => (
            <StyledTrustedTabItem
            key={tab.id}
            $isActive={activeTab.id === tab.id}
            onClick={() => setActiveTab(tab)}
            >
              {tab.title}
            </StyledTrustedTabItem>
          ))}
        </StyledTrustedTabList>
        <StyledTrustedIconList>
          {showMore ? activeTab.iconsUrl.slice(0, 4).map((icon, index) => (
              <StyledTrustedIconItem key={`${index} ${icon}`} $backgroundUrl={icon} />
            )) :
            activeTab.iconsUrl.map((icon, index) => (
              <StyledTrustedIconItem key={`${index} ${icon}`} $backgroundUrl={icon} />
            ))
          }
        </StyledTrustedIconList>
        {activeTab.iconsUrl.length > 4 && (
          <StyledTrustedButton
            label={showMore ? t("TrustedButtonShowMore") : t("TrustedButtonShowLess")}
            variant="tertiary"
            borderRadius="3px"
            onClick={() => setShowMore(!showMore)}
          />
        )}
      </Container>
    </Section>
  );
};

export { Trusted };