import { useEffect, useRef, useState } from "react";
import { Trans, useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";
import { IHeadingItemOffsets } from "../../DocSpaceDeveloper.types";

import {
  StyledSwitcherHeading,
  StyledSwitcherWrapper,
  StyledSwitcherDescription,
  StyledSwitcherScroll,
  StyledSwitcherProgressBar,
  StyledSwitcherInfo,
  StyledSwitcherTitle,
  StyledSwitcherText,
  StyledSwitcherLink,
  StyledSwitcherImageWrapper,
  StyledSwitcherImage,
  StyledSwitcherInfoWrapper,
  StyledSwitcherHiderWrapper
} from "./Switcher.styled";

const Switcher = () => {
  const { t } = useTranslation("docspace-developer");
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
      desktopSpacing={["56px", "56px"]}
      tabletSpacing={["56x", "56px"]}
      tabletSmallSpacing={["48px", "48px"]}
      mobileSpacing={["32px", "32px"]}
    >
      <Container>
        <StyledSwitcherHeading
          label={t("SwitcherHeadingBringYour")}
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
                <StyledSwitcherInfo key={item.title}>
                  <StyledSwitcherTitle
                    $isActive={activeSwitcher === index}
                    color="#fff"
                    onClick={() => switchHandleClick(index)}
                    ref={(elem) => {
                      headingItemRefs.current[index] = elem;
                      return void 0;
                    }}
                  >
                    {t(item.title)}
                  </StyledSwitcherTitle>
                  <StyledSwitcherHiderWrapper $isActive={activeSwitcher === index}>
                    <StyledSwitcherText
                      color="#fff"
                    >
                      <Trans
                        t={t}
                        i18nKey={item.text}
                        components={[<Text as={"span"} key={0} fontWeight={600} />]}
                      />
                    </StyledSwitcherText>
                    {item.link && (
                      <StyledSwitcherLink
                        color="main"
                        label={t(item.link.label)}
                        href={item.link.href}
                        textUnderline={true}
                        hover="underline-none"
                        fontSize="14px"
                      />
                    )}
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
                $imageUrl={t(item.img.url)}
                $imageUrl2x={t(item.img.url2x)}
              />
            ))}
          </StyledSwitcherImageWrapper>
        </StyledSwitcherWrapper>
      </Container>
    </Section>
  );
};

export { Switcher };