import { memo } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledHeroHeading,
  StyledHeroLeft,
  StyledHeroRight,
  StyledHeroWrapper
} from "./Hero.styled";

const HeroComponent = () => {
  const { t } = useTranslation("training-courses");
  return (
    <Section>
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLeft>
            <StyledHeroHeading
              level={1}
              size={2}
              label={t("TrainingCourses")}
            />
          </StyledHeroLeft>
          <StyledHeroRight></StyledHeroRight>
        </StyledHeroWrapper>
      </Container>
    </Section>
  );
};

const Hero = memo(HeroComponent);

export { Hero };