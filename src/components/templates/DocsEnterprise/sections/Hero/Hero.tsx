import { useTranslation } from "next-i18next";
import {
  StyledButtonsArea,
  StyledDocsEnterpriseHero,
  StyledDocsEnterpriseHeroContent,
  StyledDocsEnterpriseHeroImage,
  StyledLeftHeroArea,
  StyledSubheaderText,
} from "./Hero.styled";
import { Heading } from "@src/components/ui/Heading";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("docs-enterprise");

  return (
    <StyledDocsEnterpriseHero
      desktopSpacing={["104px", "36px"]}
      tabletSpacing={["104px", "36px"]}
      tabletSmallSpacing={["136px", "72px"]}
      mobileSpacing={["80px", "24px"]}
    >
      <StyledDocsEnterpriseHeroContent>
        <StyledLeftHeroArea>
          <Heading level={1}>{t("Header")}</Heading>
          <StyledSubheaderText
            fontSize="22px"
            lineHeight="33px"
            color="#333333"
          >
            {t("Subheader")}
          </StyledSubheaderText>
          <StyledButtonsArea>
            <Button
              as="a"
              href="/download#docs-enterprise"
              label={t("GetItButton")}
            />
            <Button
              as="a"
              href="/demo-order"
              label={t("ScheduleDemoButton")}
              variant="secondary"
            />
          </StyledButtonsArea>
        </StyledLeftHeroArea>
        <StyledDocsEnterpriseHeroImage $src={t("HeroImage")} $src2x={t("HeroImageRetina")} />
      </StyledDocsEnterpriseHeroContent>
    </StyledDocsEnterpriseHero>
  );
};

export { Hero };
