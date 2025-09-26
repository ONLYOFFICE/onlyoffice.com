import { useTranslation } from "next-i18next";
import { Button } from "@src/components/ui/Button";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

import {
  StyledHeroSection,
  StyledButtonsArea,
  StyledHeroContent,
  StyledHeroImage,
  StyledLeftHeroArea,
} from "./Hero.styled";
import { useState, useEffect } from "react";
import { getAssetUrl } from "@src/utils/getAssetUrl";

const Hero = () => {
  const { t } = useTranslation("mcp-server");
  const [mobile, setMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setMobile(true);
      } else {
        setMobile(false);
      }
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <StyledHeroSection
      desktopSpacing={["184px", "124px"]}
      tabletSpacing={["184px", "124px"]}
      tabletSmallSpacing={["152px", "80px"]}
      mobileSpacing={["96px", "48px"]}
    >
    <StyledHeroContent>
        <StyledLeftHeroArea>
          <Heading level={1} size={2} color="#fff">{t("HeroTitle")}</Heading>
          <Text
            fontSize="22px"
            lineHeight="1.5em"
            color="#ffffff"
          >
            {t("HeroSubtitle")}
          </Text>
          <Text color="#ffffff">{t("HeroDescription")}</Text>
          {mobile && <StyledHeroImage $src={getAssetUrl("/images/templates/mcp-server/hero/main.svg")} />}
          <StyledButtonsArea>
          <Button
            as="a"
            href="https://github.com/ONLYOFFICE/docspace-mcp"
            label={t("GetItNow")}
          />
          <Button
            as="a"
            href="/demo-order"
            label={t("ScheduleDemo")}
            variant="quinary"
          />
          </StyledButtonsArea>
        </StyledLeftHeroArea>
        {!mobile && <StyledHeroImage $src={getAssetUrl("/images/templates/mcp-server/hero/main.svg")} />}
      </StyledHeroContent>
    </StyledHeroSection>
  );
};

export { Hero };