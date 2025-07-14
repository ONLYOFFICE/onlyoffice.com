import { memo } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledHeroHeading,
  StyledHeroLeft,
  StyledHeroRight,
  StyledHeroText,
  StyledHeroVideo,
  StyledHeroWrapper
} from "./Hero.styled";

const HeroComponent = () => {
  const { t } = useTranslation("training-courses");
  return (
    <Section
      background="#f5f5f5"
      desktopSpacing={["0", "0"]}
      tabletSpacing={["0", "0"]}
      tabletSmallSpacing={["0", "0"]}
      mobileSpacing={["0", "0"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLeft>
            <StyledHeroHeading
              level={1}
              size={2}
              label={t("TrainingCourses")}
            />
            <StyledHeroText
              label={t("ONLYOFFICEFeatures")}
            />
          </StyledHeroLeft>
          <StyledHeroRight>
            <StyledHeroVideo
              src="https://www.youtube.com/embed/7HY30Xg7PdI?autoplay=1&amp;mute=1"
              name="youtube embed"
              frameBorder="0"
              allow="autoplay; encrypted-media"
              allowFullScreen={true}
            />
          </StyledHeroRight>
        </StyledHeroWrapper>
      </Container>
    </Section>
  );
};

const Hero = memo(HeroComponent);

export { Hero };