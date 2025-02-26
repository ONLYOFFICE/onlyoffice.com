import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroLogo,
  StyledHeroHeader,
  StyledHeroVideo,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("office-for-box");

  return (
    <StyledHero
      desktopSpacing={["120px", "87px"]}
      tabletSpacing={["112px", "87px"]}
      tabletSmallSpacing={["96px", "110px"]}
      mobileSpacing={["96px", "60px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeroLogo />

          <StyledHeroHeader>
            <Heading
              level={1}
              label={t("FreeOnlineOfficeForBox")}
              color="#ffffff"
            />
            <Text size={1} label={t("OpenAndEditWithinBox")} />
          </StyledHeroHeader>

          <Button
            as="a"
            href="https://app.box.com/app-center/onlyoffice_personal/app"
            variant="quaternary"
            target="_blank"
            label={t("GetItNow")}
          />

          <Text
            fontSize="14px"
            lineHeight="19px"
            label={t("FullyCompatibleWithDocxXlsxAndPptx")}
          />
        </StyledHeroWrapper>

        <StyledHeroVideo>
          <iframe
            width="100%"
            height="auto"
            src="https://www.youtube.com/embed/aIcgdKN7mRo?si=_ngIeFmSs_thsN5A&autoplay=1&mute=1&loop=1"
            title="YouTube"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </StyledHeroVideo>
      </Container>
    </StyledHero>
  );
};

export { Hero };
