import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroContainer,
  StyledHeroHeading,
  StyledHeroSection,
  StyledHeroText,
  StyledHeroСomparison,
  StyledHeroСomparisonItem,
} from "./Hero.styled";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { comparisonLogos } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("best-google-docs-alternative");

  return (
    <StyledHeroSection
      background="#f6f6f6"
      desktopSpacing={["158px", "108px"]}
      tabletSpacing={["158px", "108px"]}
      tabletSmallSpacing={["158px", "140px"]}
      mobileSpacing={["95px", "61px"]}
    >
      <StyledHeroContainer>
        <StyledHeroHeading>
          <Trans
            t={t}
            i18nKey="HeroTitle"
            components={[<Text as="span" color="#FF6F3D" key="0" />]}
          />
        </StyledHeroHeading>
        <StyledHeroСomparison>
          {comparisonLogos.map(({ src, alt, type }, index) => (
            <StyledHeroСomparisonItem
              key={index}
              src={src}
              alt={alt}
              $type={type}
            />
          ))}
        </StyledHeroСomparison>
        <Button
          as="a"
          href="/download?from=comparison#docs-enterprise"
          label={t("GetOODocsNow")}
        />
        <StyledHeroText>
          {t("CompatibleWithMicrosoftOfficeFormats")}
        </StyledHeroText>
      </StyledHeroContainer>
    </StyledHeroSection>
  );
};

export { Hero };
