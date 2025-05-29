import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { tabsInfo } from "./data/tabsInfo";
import { IButtonInfo } from "./Trusted.types";

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

  const containerRef = useRef<HTMLUListElement>(null);
  const [atStart, setAtStart] = useState(true);
  const [atEnd, setAtEnd]   = useState(false);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const onScroll = () => {
      const { scrollLeft, clientWidth, scrollWidth } = el;
      setAtStart(scrollLeft <= 0);
      setAtEnd(scrollLeft + clientWidth >= scrollWidth - 2);
    };

    el.addEventListener('scroll', onScroll);
    onScroll();

    return () => el.removeEventListener('scroll', onScroll);
  }, []);

  const scrollToStart = () => {
    containerRef.current?.scrollTo({ left: 0, behavior: 'smooth' });
  };

  const scrollToEnd = () => {
    if (!containerRef.current) return;
    containerRef.current.scrollTo({ left: containerRef.current.scrollWidth, behavior: 'smooth' });
  };

  return (
    <Section>
      <Container tabletSpacing="16px">
        <StyledTrustedHeading size={4} level={2} textAlign="center">
          <Trans t={t} i18nKey={"TrustedHeadingTrustedAndLove"} components={[
            <Text as={"span"} color="main" key={0} />
          ]}
          />
        </StyledTrustedHeading>
        <StyledTrustedTabBtnWrapper>
          {locale !== "zh" && locale !== "ja" && (
            <ScrollButtonLeft onClick={scrollToStart} $atStart={!atStart} />
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
            <ScrollButtonRight onClick={scrollToEnd} $atEnd={!atEnd} />
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