import { useTranslation, Trans } from "next-i18next";
import {
  StyledHeroWrapper,
  StyledHeroHeading,
  StyledHeroBtns,
  StyledHeroImageWrapper,
  StyledHeroImage,
} from "./Hero.styled";
import { ILocale } from "@src/types/locale";
import { Container } from "@src/components/ui/Container";
import { Button } from "@src/components/ui/Button";
import { Section } from "@src/components/ui/Section";

const Hero = ({ locale }: ILocale) => {
  const { t } = useTranslation("main");

  return (
    <Section
      desktopSpacing={["72px", "0"]}
      tabletSpacing={["80px", "132px"]}
      tabletSmallSpacing={["96px", "50px"]}
      mobileSpacing={["48px", "28px"]}
    >
      <Container maxWidth="1360px">
        <StyledHeroWrapper>
          <StyledHeroHeading level={1} textAlign="center">
            <Trans
              t={t}
              i18nKey="RunYourPrivateOfficeWithTheOO"
              components={[<span key={0} />]}
            />
          </StyledHeroHeading>

          <StyledHeroBtns>
            <Button
              as="a"
              id="hero-get-it-now"
              label={t("GetItNow")}
              href="/download?from=default#docs-enterprise"
            />
            <Button
              as="a"
              variant="secondary"
              id="hero-see-it-in-action"
              label={t("SeeItInAction")}
              href="/docspace-registration?from=default"
            />
          </StyledHeroBtns>
        </StyledHeroWrapper>

        <StyledHeroImageWrapper>
          <StyledHeroImage $img={t("HeroImg")} $img2x={t("HeroImg2x")}>
            {locale !== "zh" && (
              <video
                autoPlay
                loop
                muted
                onContextMenu={(e) => e.preventDefault()}
              >
                <source
                  src="/images/main/hero/hero-video.mp4"
                  type="video/mp4"
                />
              </video>
            )}
          </StyledHeroImage>
        </StyledHeroImageWrapper>
      </Container>
    </Section>
  );
};

export { Hero };
