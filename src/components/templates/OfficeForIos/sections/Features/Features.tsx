import { useRef } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";
import { featuresAnimation } from "./lib/featuresAnimation";
import { items } from "./data/items";

import {
  StyledFeaturesAside,
  StyledFeaturesAsideMobile,
  StyledFeaturesAsideMobileImg,
  StyledFeaturesAsideTablet,
  StyledFeaturesAsideTabletImg,
  StyledFeaturesContentList,
  StyledFeaturesWrapper,
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("office-for-ios");
  const containerRef = useRef<HTMLDivElement>(null);
  featuresAnimation(containerRef);
  const len = items.length;

  return (
    <Section background="#FAFAFA" desktopSpacing={["0", "112px"]}>
      <Container maxWidth="1920">
        <StyledFeaturesWrapper ref={containerRef}>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet>
              {items.map((item, i) => {
                const reverseIndex = len - i;
                return (
                  <StyledFeaturesAsideTabletImg
                    key={item.heading}
                    className="tabletImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlTablet={item.bgUrlTablet}
                  />
                );
              })}
            </StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile>
              {items.map((item, i) => {
                const reverseIndex = len - i;
                return (
                  <StyledFeaturesAsideMobileImg
                    key={item.heading}
                    className="mobileImage"
                    $zIndex={String(reverseIndex)}
                    $bgUrlMobile={item.bgUrlMobile}
                  />
                );
              })}
            </StyledFeaturesAsideMobile>
          </StyledFeaturesAside>
          <StyledFeaturesContentList>
            {items.map((item, i) => {
              return (
                <FeatureItem
                  key={item.heading}
                  className="item"
                  maxWidth="280px"
                  icon={{
                    url: item.iconUrl,
                  }}
                  heading={item.heading}
                  text={item.text}
                />
              );
            })}
          </StyledFeaturesContentList>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features, featuresAnimation };
