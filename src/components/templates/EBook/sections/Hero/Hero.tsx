import { useTranslation } from "next-i18next";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroInput,
  StyledLBackImg,
  StyledImgWrapper,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";
import { Button } from "@src/components/ui/Button";
import { useRouter } from "next/router";
import { Input } from "@src/components/ui/Input";
import { useState } from "react";
import { Trans } from "next-i18next";

const Hero = () => {
  const { t } = useTranslation("e-book");
  const { t: t2 } = useTranslation("Editors");
  const { query } = useRouter();
  const [email, setEmail] = useState("");
  const hasDocsDownload = query.docs === "download";

  const saveEmail = () => {
    if (email) {
      localStorage.setItem("email", email);
    }
  };

  return (
    <StyledHero
      desktopSpacing={["152px", "11px"]}
      tabletSpacing={["120px", "56px"]}
      tabletSmallSpacing={["120px", "43px"]}
      mobileSpacing={["96px", "28px"]}
    >
      <Container>
        <StyledHeroWrapper>
          <Heading level={1} color="#ffffff">
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
        <StyledImgWrapper>
          <StyledLBackImg />
          <StyledHeroImg
            $imgUrl={t("HeroImgUrl")}
            $imgUrl2x={t("HeroImgUrl2x")}
          />
        </StyledImgWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
