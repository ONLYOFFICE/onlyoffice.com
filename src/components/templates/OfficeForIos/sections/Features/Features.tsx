import { useRef } from "react";
import { gsap } from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

import {
  StyledFeaturesAside,
  StyledFeaturesAsideMobile,
  StyledFeaturesAsideMobileImg,
  StyledFeaturesAsideTablet,
  StyledFeaturesAsideTabletImg,
  StyledFeaturesContentList,
  StyledFeaturesWrapper,
} from "./Features.styled";

gsap.registerPlugin(useGSAP, ScrollTrigger);

const Features = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const items = gsap.utils.toArray(".item");
      const tabletImages = gsap.utils.toArray(".tabletImage");
      const mobileImages = gsap.utils.toArray(".mobileImage");

      for (let i = 0; i < items.length - 1; i += 1) {
        gsap.to(tabletImages[i] as HTMLElement, {
          opacity: 0,
          scrollTrigger: {
            trigger: items[i] as HTMLElement,
            start: "bottom center+=30%",
            end: "bottom center-=30%",
            scrub: true,
            // markers: true,
          },
        });

        gsap.to(mobileImages[i] as HTMLElement, {
          opacity: 0,
          scrollTrigger: {
            trigger: items[i] as HTMLElement,
            start: "bottom center+=30%",
            end: "bottom center-=30%",
            scrub: true,
            // markers: true,
          },
        });
      }
    },
    { scope: containerRef },
  );

  const { t } = useTranslation("office-for-ios");

  return (
    <Section background="#FAFAFA" desktopSpacing={["0", "112px"]}>
      <Container maxWidth="1920">
        <StyledFeaturesWrapper ref={containerRef}>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet>
              <StyledFeaturesAsideTabletImg
                className="tabletImage"
                $zIndex="5"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_1.webp"
              />
              <StyledFeaturesAsideTabletImg
                className="tabletImage"
                $zIndex="4"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_2.webp"
              />
              <StyledFeaturesAsideTabletImg
                className="tabletImage"
                $zIndex="3"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_3.webp"
              />
              <StyledFeaturesAsideTabletImg
                className="tabletImage"
                $zIndex="2"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_4.webp"
              />
              <StyledFeaturesAsideTabletImg
                className="tabletImage"
                $zIndex="1"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_5.webp"
              />
            </StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile>
              <StyledFeaturesAsideMobileImg
                className="mobileImage"
                $zIndex="5"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_1.webp"
              />
              <StyledFeaturesAsideMobileImg
                className="mobileImage"
                $zIndex="4"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_2.webp"
              />
              <StyledFeaturesAsideMobileImg
                className="mobileImage"
                $zIndex="3"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_3.webp"
              />
              <StyledFeaturesAsideMobileImg
                className="mobileImage"
                $zIndex="2"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_4.webp"
              />
              <StyledFeaturesAsideMobileImg
                className="mobileImage"
                $zIndex="1"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_5.webp"
              />
            </StyledFeaturesAsideMobile>
          </StyledFeaturesAside>
          <StyledFeaturesContentList>
            <FeatureItem
              className="item"
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
                positionX: "left",
              }}
              heading="Full-featured text processor"
              text="Make use of multiple text processing tools : page, paragraph and text formatting, tables, autoshapes, charts, etc. Create text documents of any size and complexity. Print them via AirPrint."
            />
            <FeatureItem
              className="item"
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
              className="item"
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
              className="item"
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
              className="item"
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
          </StyledFeaturesContentList>
        </StyledFeaturesWrapper>
      </Container>
    </Section>
  );
};

export { Features };
