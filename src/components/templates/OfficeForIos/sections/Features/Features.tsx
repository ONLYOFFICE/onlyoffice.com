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

const Features = () => {
  const { t } = useTranslation("office-for-ios");
  return (
    <Section background="#FAFAFA" desktopSpacing={["0", "112px"]}>
      <Container maxWidth="1920">
        <StyledFeaturesWrapper>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet>
              <StyledFeaturesAsideTabletImg
                $zIndex="1"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_1.webp"
              />
              <StyledFeaturesAsideTabletImg
                $zIndex="2"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_2.webp"
              />
              <StyledFeaturesAsideTabletImg
                $zIndex="3"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_3.webp"
              />
              <StyledFeaturesAsideTabletImg
                $zIndex="4"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_4.webp"
              />
              <StyledFeaturesAsideTabletImg
                $zIndex="5"
                $bgUrlTablet="/images/templates/office-for-ios/features/img-tablet_5.webp"
              />
            </StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile>
              <StyledFeaturesAsideMobileImg
                $zIndex="1"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_1.webp"
              />
              <StyledFeaturesAsideMobileImg
                $zIndex="2"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_2.webp"
              />
              <StyledFeaturesAsideMobileImg
                $zIndex="3"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_3.webp"
              />
              <StyledFeaturesAsideMobileImg
                $zIndex="4"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_4.webp"
              />
              <StyledFeaturesAsideMobileImg
                $zIndex="5"
                $bgUrlMobile="/images/templates/office-for-ios/features/img-mobile_5.webp"
              />
            </StyledFeaturesAsideMobile>
          </StyledFeaturesAside>
          <StyledFeaturesContentList>
            <FeatureItem
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
                positionX: "left",
              }}
              heading="Full-featured text processor"
              text="Make use of multiple text processing tools : page, paragraph and text formatting, tables, autoshapes, charts, etc. Create text documents of any size and complexity. Print them via AirPrint."
            />
            <FeatureItem
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
              maxWidth="280px"
              icon={{
                url: "/images/storybook/widgets/feature-item/working.svg",
              }}
              heading="Heading"
              text="Working with office files directly within the Box frontend"
            />
            <FeatureItem
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
