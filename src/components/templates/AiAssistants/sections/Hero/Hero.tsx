import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import {
  StyledHeroHeading,
  StyledHeroImage,
  StyledHeroInput,
  StyledHeroSection,
  StyledHeroWrapper,
} from "./Hero.styled";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";
import { useState } from "react";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("ai-assistants");
  const [email, setEmail] = useState<string>("");

  const saveEmail = () => {
    if (email) {
      localStorage.setItem("email", email);
    }
  };

  return (
    <StyledHeroSection
      background="#f5f5f5"
      desktopSpacing={["136px", "0"]}
      tabletSpacing={["136px", "0"]}
      tabletSmallSpacing={["96px", "0"]}
      mobileSpacing={["96px", "0"]}
    >
      <Container maxWidth="1280px">
        <StyledHeroWrapper>
          <StyledHeroHeading size={1} textAlign="center">
            <Trans
              t={t}
              i18nKey="HeroTitle"
              components={[<Text as="span" color="#FF6F3D" key="0" />]}
            />
          </StyledHeroHeading>
          <StyledHeroInput>
            <Input
              id="hero-input"
              label={t("HeroInputPlaceholder")}
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <Button
              id="hero-create-free-account"
              as="a"
              href="/docspace-registration"
              label={t("CreateFreeAccount")}
              onClick={saveEmail}
            />
          </StyledHeroInput>
          <StyledHeroImage $image={t("HeroImg")} $image2x={t("HeroImg2x")} />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
