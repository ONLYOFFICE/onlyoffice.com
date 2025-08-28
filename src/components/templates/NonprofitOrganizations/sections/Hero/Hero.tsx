import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";

import {
  StyledHeroWrapperBg,
  StyledHeroHeading,
  StyledHeroText,
  StyledHeroButtonWrapper
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("nonprofit-organizations");
  return (
    <StyledHeroWrapperBg>
      <Section
        desktopSpacing={["200px", "200px"]}
        tabletSpacing={["200px", "200px"]}
        tabletSmallSpacing={["112px", "550px"]}
        mobileSpacing={["60px", "350px"]}
      >
        <Container>
          <StyledHeroHeading
            level={1}
            size={2}
            label={t("TheONLYOFFICEForNonProfits")}
          />
          <StyledHeroText
            size={1}
            label={t("RunAndGrowYourNonProfitProjectWithONLYOFFICE")}
          />
          <StyledHeroButtonWrapper>
            <Button
              label={t("RequestADiscount")}
              variant="primary"
              borderRadius="3px"
              as="a"
              href="mailto:sales@onlyoffice.com?subject=Request%20a%20discount%20for%20a%20non-profit"
            />
          </StyledHeroButtonWrapper>
        </Container>
      </Section>
    </StyledHeroWrapperBg>
  );
};

export { Hero };