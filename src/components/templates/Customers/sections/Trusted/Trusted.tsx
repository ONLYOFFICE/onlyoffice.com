import { useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { tabsInfo } from "./data/tabsInfo";
import { IButtonInfo } from "./Trusted.types";

import { StyledTrustedHeading, StyledTrustedTabItem, StyledTrustedTabList } from "./Trusted.styled";

const Trusted = () => {
  const { t } = useTranslation("customers");
  const [activeTab, setActiveTab] = useState<IButtonInfo>(tabsInfo[0]);

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
      </Container>
    </Section>
  );
};

export { Trusted };