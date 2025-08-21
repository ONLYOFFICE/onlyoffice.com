import { useTranslation, Trans } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroVideo,
  StyledHeroInput,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";
import { useState } from "react";
import { Input } from "@src/components/ui/Input";

const Hero = () => {
  const { t } = useTranslation("form-creator");
  const { t: t2 } = useTranslation("Editors");
  const { locale, query } = useRouter();
  const [email, setEmail] = useState("");
  const hasDocsDownload = query.docs === "download";

  const saveEmail = () => {
    if (email) {
      localStorage.setItem("email", email);
    }
  };

  return (
    <StyledHero
      desktopSpacing={["120px", "84px"]}
      tabletSpacing={["112px", "84px"]}
      tabletSmallSpacing={["96px", "80px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper $hasMedia={locale !== "ru"}>
          <Heading level={1}>
            <Trans
              t={t}
              i18nKey="Header"
              components={[<Text as="span" color="main" key="0" />]}
            />
          </Heading>
          <Text size={1} label={t("SubHeader")} />
          {hasDocsDownload ? (
            <Button
              id="hero-get-it-now"
              as="a"
              href="/download#docs-enterprise"
              label={t2("GetItNow")}
            />
          ) : (
            <StyledHeroInput>
              <Input
                placeholder={t2("EnterYourEmail")}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                id="hero-get-it-now"
                as="a"
                href="/docspace-registration"
                label={t2("CreateNow")}
                onClick={saveEmail}
              />
            </StyledHeroInput>
          )}
        </StyledHeroWrapper>
        {locale !== "ru" && (
          <StyledHeroVideo>
            {locale === "zh" ? (
              <iframe
                src="https://player.bilibili.com/player.html?bvid=BV1ZFKHzWE5g&autoplay=1&muted=1&high_quality=1"
                title="Bilibili"
                frameBorder="0"
                allow="autoplay; encrypted-media; fullscreen"
                allowFullScreen
                style={{ width: "100%", aspectRatio: "16 / 9" }}
              />
            ) : (
              <iframe
                width="100%"
                height="auto"
                src="https://www.youtube.com/embed/rH1sMMwtyPE?si=5W4XWOJD9KAc71VZ&autoplay=1&mute=1"
                title="YouTube"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                style={{ width: "100%", aspectRatio: "16 / 9" }}
              />
            )}
          </StyledHeroVideo>
        )}
      </Container>
    </StyledHero>
  );
};

export { Hero };
