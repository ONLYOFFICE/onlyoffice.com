import { useTranslation } from "next-i18next";
import { useRouter } from "next/router";
import { useState } from "react";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroHeaderBtns,
  StyledHeroVideo,
  StyledHeading,
  StyledHeroInput,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { Input } from "@src/components/ui/Input";

const Hero = () => {
  const { t } = useTranslation("office-suite");
  const { locale, query } = useRouter();
  const hasDocSpaceRegistration = query.docspace === "registration";
  const [email, setEmail] = useState("");

  const scrollToBlock = () => {
    const element = document.getElementById("how-to-start");
    if (element) element.scrollIntoView({ behavior: "smooth" });
  };

  const saveEmail = () => {
    if (email) {
      localStorage.setItem("email", email);
    }
  };

  return (
    <StyledHero
      desktopSpacing={["136px", "162px"]}
      tabletSpacing={["136px", "162px"]}
      tabletSmallSpacing={["112px", "58px"]}
      mobileSpacing={["96px", "48px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <StyledHeading level={1} size={2} label={t("Header")} />
          <Text size={1} label={t("Subheader")} />
          {!hasDocSpaceRegistration ? (
            <StyledHeroHeaderBtns>
              <Button
              as="a"
                href="/download?from=office-suite#docs-enterprise"
                id="hero-get-started"
                label={t("GetItNow")}
              />
              <Button
                as="a"
                variant="tertiary"
                id="hero-request-free-demo"
                href="/see-it-in-action?from=office-suite"
                label={t("SeeItInAction")}
              />
            </StyledHeroHeaderBtns>
          ) : (
            <StyledHeroInput>
              <Input
                placeholder={t("EnterYourEmail")}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                id="hero-get-it-now"
                as="a"
                href="/docspace-registration"
                label={t("CreateNow")}
                onClick={saveEmail}
              />
            </StyledHeroInput>
          )}
        </StyledHeroWrapper>
        <StyledHeroVideo>
          {locale === "zh" ? (
            <iframe
              width="100%"
              height="auto"
              src="//player.bilibili.com/player.html?isOutside=true&aid=BV1ZFKHzWE5g&bvid=BV1ZFKHzWE5g&cid=BV1ZFKHzWE5g"
              title="BiliBili"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          ) : (
            <iframe
              width="100%"
              height="auto"
              src="https://www.youtube.com/embed/HqRMneSGHk0?autoplay=1&mute=1"
              title="YouTube"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </StyledHeroVideo>
      </Container>
    </StyledHero>
  );
};

export { Hero };
