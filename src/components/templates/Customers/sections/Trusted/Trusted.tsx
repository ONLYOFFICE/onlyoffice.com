import { useRef, useState } from "react";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { tabsInfo } from "./data/tabsInfo";
import { IButtonInfo } from "./Trusted.types";
import { useOnScroll } from "./utils/useOnScroll";
import { scrollToEnd, scrollToStart } from "./utils/scrollTo";

import {
  ScrollButtonLeft,
  ScrollButtonRight,
  StyledTrustedButton,
  StyledTrustedHeading,
  StyledTrustedIconItem,
  StyledTrustedIconList,
  StyledTrustedTabBtn,
  StyledTrustedTabBtnWrapper,
  StyledTrustedTabItem,
  StyledTrustedTabList
} from "./Trusted.styled";

const Trusted = () => {
  const { t } = useTranslation("customers");
  const { locale } = useRouter();
  const [activeTab, setActiveTab] = useState<IButtonInfo>(tabsInfo[0]);
  const [showMore, setShowMore] = useState<boolean>(true);
  const containerRef = useRef<HTMLUListElement | null>(null);
  const { atStart, atEnd } = useOnScroll(containerRef);

  return (
    <Section mobileSpacing={["0", "48px"]}>
      <Container tabletSpacing="16px">
        <StyledTrustedHeading size={4} level={2} textAlign="center">
          <Trans t={t} i18nKey={"TrustedHeadingTrustedAndLove"} components={[
            <Text as={"span"} color="main" key={0} />
          ]}
          />
        </StyledTrustedHeading>
        <StyledTrustedTabBtnWrapper>
          {locale !== "zh" && locale !== "ja" && (
            <ScrollButtonLeft
              $atStart={!atStart}
              onClick={() => scrollToStart(containerRef.current)}
            />
          )}
          <StyledTrustedTabList ref={containerRef} $locale={locale ?? ""}>
            {tabsInfo.map((tab) => (
              <StyledTrustedTabItem
                key={tab.id}
                $isActive={activeTab.id === tab.id}
                onClick={() => setActiveTab(tab)}
              >
                <StyledTrustedTabBtn
                  $isActive={activeTab.id === tab.id}
                  variant="tertiary"
                  label={t(tab.title)}
                />
              </StyledTrustedTabItem>
            ))}
          </StyledTrustedTabList>
          {locale !== "zh" && locale !== "ja" && (
            <ScrollButtonRight
              $atEnd={!atEnd}
              onClick={() => scrollToEnd(containerRef.current)}
            />
          )}
        </StyledTrustedTabBtnWrapper>
        <StyledTrustedIconList $showMore={showMore} key={activeTab.id}>
          {activeTab.iconsUrl.map((icon, index) => (
            <StyledTrustedIconItem key={`${index} ${icon}`} $backgroundUrl={icon} />
          ))}
        </StyledTrustedIconList>
        {activeTab.iconsUrl.length > 8 && (
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