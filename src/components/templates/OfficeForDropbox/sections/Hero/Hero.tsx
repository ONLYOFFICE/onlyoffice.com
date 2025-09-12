import { Trans, useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroImg,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-dropbox");

  return (
    <StyledHero
      desktopSpacing={["120px", "21px"]}
      tabletSpacing={["112px", "21px"]}
      tabletSmallSpacing={["96px", "80px"]}
      mobileSpacing={["96px", "54px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />
          <Heading level={1}>
            <Trans
              t={t}
              i18nKey="FreeOnlineOfficeForDropbox"
              components={[<Text as="span" color="#0061ff" key="0" />]}
            />
          </Heading>
          <Text size={1} label={t("EditOfficeFilesRightInDropbox")} />
          <Button
            id="hero-get-free-app"
            as="a"
            href="https://dropbox.onlyoffice.com/oauth/redirect"
            target="_blank"
            label={t("GetFreeApp")}
          />
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
