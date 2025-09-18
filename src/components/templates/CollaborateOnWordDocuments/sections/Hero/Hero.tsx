import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroButtons,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";

const Hero = () => {
  const { t: t1 } = useTranslation("collaborate-on-word-documents");
  const { t: t2 } = useTranslation("Editors");
  const { locale } = useRouter();

  return (
    <StyledHero
      desktopSpacing={["120px", "21px"]}
      tabletSpacing={["112px", "21px"]}
      tabletSmallSpacing={["96px", "80px"]}
      mobileSpacing={["96px", "54px"]}
    >
      <Container maxWidth="1280px">
        <StyledHeroWrapper $locale={locale}>
          <Heading level={1} color="#ffffff" label={t1("Header")} />
          <Text size={1} label={t1("SubHeader")} />
          <StyledHeroButtons>
            <Button
              id="hero-run-on-your-own-server"
              as="a"
              href="/download#docs-enterprise"
              label={t2("RunOnYourOwnServer")}
            />
            <Button
              id="hero-see-it-in-action"
              as="a"
              href="/see-it-in-action"
              variant="quaternary"
              label={t2("SeeItInAction")}
            />
          </StyledHeroButtons>
        </StyledHeroWrapper>

        <StyledHeroImg
          $imgUrl={t1("HeroImgUrl")}
          $imgUrl2x={t1("HeroImgUrl2x")}
        />
      </Container>
    </StyledHero>
  );
};

export { Hero };
