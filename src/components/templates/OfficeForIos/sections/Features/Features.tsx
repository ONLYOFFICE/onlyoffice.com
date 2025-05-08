import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { FeatureItem } from "@src/components/widgets/FeatureItem";

import {
  StyledFeaturesAside,
  StyledFeaturesAsideMobile,
  StyledFeaturesAsideTablet,
  StyledFeaturesContentList,
  StyledFeaturesWrapper,
} from "./Features.styled";

const Features = () => {
  const { t } = useTranslation("office-for-ios");
  return (
    <Section background="#e1ffe1" desktopSpacing={["0", "112px"]}>
      <Container maxWidth="1920">
        <StyledFeaturesWrapper>
          <StyledFeaturesAside>
            <StyledFeaturesAsideTablet></StyledFeaturesAsideTablet>
            <StyledFeaturesAsideMobile></StyledFeaturesAsideMobile>
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
