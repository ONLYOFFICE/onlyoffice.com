import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
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
  const { t } = useTranslation("office-for-owncloud");

  return (
    <StyledHero
      desktopSpacing={["134px", "76px"]}
      tabletSpacing={["119px", "72px"]}
      tabletSmallSpacing={["119px", "72px"]}
      mobileSpacing={["99px", "40px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading
              level={1}
              size={1}
              label={t("OnlineOfficeForOwnCloud")}
              color="#ffffff"
            />
            <Text size={1} label={t("CollaborateOnDocuments")} />
          </StyledHeroHeader>

          <StyledHeroHeaderBtns>
            <Button
              id="hero-get-it-now"
              as="a"
              href="/download?from=officeforowncloud#docs-enterprise"
              label={t("GetItNow")}
            />
            <Button
              id="hero-request-free-demo"
              as="a"
              variant="quaternary"
              href="mailto:sales@onlyoffice.com?subject=Demo%20request:%20OwnCloud%20templates"
              label={t("RequestFreeDemo")}
            />
          </StyledHeroHeaderBtns>
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={getAssetUrl(t("HeroImgUrl"))}
          $imgUrl2x={t("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
