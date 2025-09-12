import { useTranslation } from "next-i18next";
import { getAssetUrl } from "@utils/getAssetUrl";
import {
  StyledHero,
  StyledHeroWrapper,
  StyledHeroImg,
  StyledHeroInput,
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
  const { t } = useTranslation("seamless-collaboration");
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
      desktopSpacing={["136px", "0"]}
      tabletSpacing={["132px", "0"]}
      tabletSmallSpacing={["136px", "0"]}
      mobileSpacing={["96px", "0"]}
    >
      <Container className="sc-fs-container">
        <StyledHeroWrapper>
          <Heading level={1} size={1} className="sc-fs-heading">
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
          <StyledHeroImg
            $imgUrl={getAssetUrl(t("HeroImgUrl"))}
            $imgUrl2x={t("HeroImgUrl2x")}
          />
        </StyledImgWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
