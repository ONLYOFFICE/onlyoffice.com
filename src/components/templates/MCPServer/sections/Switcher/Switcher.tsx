import { useEffect, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { items } from "./data/items";

import { getAssetUrl } from "@utils/getAssetUrl";

import {
  StyledSwitcherHeading,
  StyledSwitcherWrapper,
  StyledSwitcherDescription,
  StyledSwitcherScroll,
  StyledSwitcherProgressBar,
  StyledSwitcherInfo,
  StyledSwitcherTitle,
  StyledSwitcherText,
  StyledSwitcherImageWrapper,
  StyledSwitcherImage,
  StyledSwitcherInfoWrapper,
  StyledSwitcherHiderWrapper
} from "./Switcher.styled";

interface IHeadingItemOffsets {
  offsetHeight: number;
  offsetTop: number;
}

const Switcher = () => {
  const { t } = useTranslation("mcp-server");
  const [activeSwitcher, setActiveSwitcher] = useState(0);
  const headingItemRefs = useRef<(HTMLHeadElement | null)[]>([]);
  const [headingItemOffsets, setHeadingItemOffsets] = useState<IHeadingItemOffsets[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [progressBarHeight, setProgressBarHeight] = useState(0);
  const [progressBarPosition, setProgressBarPosition] = useState(0);

  useEffect(() => {
    if (headingItemRefs.current) {
      const offsets = headingItemRefs.current.map((item) => (
        item ? {
          offsetHeight: item.offsetHeight,
          offsetTop: item.offsetTop,
        } : {
          offsetHeight: 0,
          offsetTop: 0,
        }
      ))

      setHeadingItemOffsets(offsets);
      setProgressBarHeight(offsets[activeSwitcher].offsetHeight);
      setProgressBarPosition(offsets[activeSwitcher].offsetTop);
    }
  }, [activeSwitcher]);

  const switchHandleClick = (index: number) => {
    setActiveSwitcher(index);
    setProgressBarHeight(headingItemOffsets[index].offsetHeight);
    setProgressBarPosition(headingItemOffsets[index].offsetTop);
  };

  return (
    <Section
      desktopSpacing={["124px", "112px"]}
      tabletSpacing={["124px", "112px"]}
    >
      <Container>
        <StyledSwitcherHeading
          label={t("FeaturesSectionTitle")}
          level={2}
          size={2}
          textAlign="center"
          color="#fff"
        />
        <StyledSwitcherWrapper>
          <StyledSwitcherDescription>
            <StyledSwitcherScroll>
              <StyledSwitcherProgressBar
                ref={progressBarRef}
                $height={progressBarHeight}
                $translateY={progressBarPosition}
              />
            </StyledSwitcherScroll>
            <StyledSwitcherInfoWrapper>
              {items.map((item, index) => (
                <StyledSwitcherInfo key={item.title} 
                ref={(elem) => {
                  headingItemRefs.current[index] = elem;
                  return void 0;
                }}>
                  <StyledSwitcherTitle
                    $isActive={activeSwitcher === index}
                    color="#fff"
                    onClick={() => switchHandleClick(index)}
                  >
                    {t(item.title)}
                  </StyledSwitcherTitle>
                  <StyledSwitcherHiderWrapper $isActive={activeSwitcher === index}>
                    <StyledSwitcherText
                      color="#fff"
                    >
                      {t(item.text)}
                    </StyledSwitcherText>
                  </StyledSwitcherHiderWrapper>
                </StyledSwitcherInfo>
              ))}
            </StyledSwitcherInfoWrapper>
          </StyledSwitcherDescription>
          <StyledSwitcherImageWrapper>
            {items.map((item, index) => (
              <StyledSwitcherImage
                $isActive={activeSwitcher === index}
                key={item.img.url}
                $imageUrl={item.img.url}
              />
            ))}
          </StyledSwitcherImageWrapper>
        </StyledSwitcherWrapper>
      </Container>
    </Section>
  );
};

export { Switcher };