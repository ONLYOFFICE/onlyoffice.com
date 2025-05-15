import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroContent,
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroWrapper,
  StyledButton,
  StyledText,
  StyledContainer
} from "./Hero.styled";
import { Button } from "@src/components/ui/Button";
import { hero } from "./data/hero";
import { Section } from "@src/components/ui/Section";

const Hero = () => {
  const { t } = useTranslation("technology-partners");

  return (
    <Section
      desktopSpacing={["42px", "124px"]}
      tabletSpacing={["65px", "65px"]}
      tabletSmallSpacing={["85px", "85px"]}
    >
      <StyledContainer>
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading>
              <Trans
                t={t}
                i18nKey="BecomeONLYOFFICE"
              />
            </StyledHeroHeading>
              <StyledText label={t(hero.text)} className="first-text"/>
            <StyledButton>
              <Button as="a" href="~/partnership-request.aspx" label={t(hero.textBtn)} />
            </StyledButton>
          </StyledHeroContent>
          <StyledHeroImage
            $imgUrl={hero.imgUrl}
            $imgHeight={hero.imgHeight}
            $imgWidth={hero.imgWidth}
          />
        </StyledHeroWrapper>
      </StyledContainer>
    </Section>
  );
};

export { Hero };
