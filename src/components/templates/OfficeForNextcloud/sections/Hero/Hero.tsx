import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroHeaderBtns,
  StyledHeroImg,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-nextcloud");

  return (
    <StyledHero
      desktopSpacing={["120px", "75px"]}
      tabletSpacing={["120px", "75px"]}
      tabletSmallSpacing={["120px", "95px"]}
      mobileSpacing={["96px", "47px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading
              level={1}
              size={1}
              label={t("OnlineOfficeForNextcloud")}
              color="#ffffff"
            />
            <Text size={1} label={t("WorkOnOfficeDocuments")} />
          </StyledHeroHeader>

          <StyledHeroHeaderBtns>
            <Button
              id="hero-get-it-now"
              as="a"
              href="/download?from=officefornextcloud#docs-enterprise"
              label={t("GetItNow")}
            />
            <Button
              id="hero-request-free-demo"
              as="a"
              variant="quaternary"
              href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20Nextcloud%20templates"
              label={t("RequestFreeDemo")}
            />
          </StyledHeroHeaderBtns>
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={t("HeroImgUrl")}
          $imgUrl2x={t("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
