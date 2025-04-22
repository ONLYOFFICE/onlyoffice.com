import { useTranslation, Trans } from "next-i18next";
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
  const { t } = useTranslation("office-for-drupal");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <StyledHero
      desktopSpacing={["133px", "84px"]}
      tabletSpacing={["133px", "84px"]}
      tabletSmallSpacing={["128px", "89px"]}
      mobileSpacing={["96px", "64px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading level={1} size={1}>
              <Trans
                t={t}
                i18nKey="OnlineOfficeForConnector"
                components={[<Text as="span" color="#009CDE" key="0" />]}
              />
            </Heading>
            <Text size={1} label={t("Subheader")} />
          </StyledHeroHeader>

          <StyledHeroHeaderBtns>
            <Button
              onClick={() => scrollToBlock()}
              id="hero-get-started"
              label={t("GetStarted")}
            />
            <Button
              as="a"
              variant="secondary"
              id="hero-request-free-demo"
              href="/demo-order?from=officefordrupal"
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
