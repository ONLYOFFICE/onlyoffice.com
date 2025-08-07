import { useRouter } from "next/router";
import {
  StyledHero,
  StyledContainer,
  StyledHeading,
  StyledMobileHeading,
  StyledMobileContainer,
  StyledAccountContainer,
  StyledList,
  StyledListItem,
  StyledCreateAccountWrapper,
  StyledContentWrapper,
  StyledHeroImg,
} from "./Hero.styled";
import { useTranslation } from "next-i18next";
import { Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { heroItems } from "./data/items";
import { useState } from "react";
import { YouTubeCard } from "@src/components/modules/docspace/YouTubeCard";
import { Input } from "@src/components/ui/Input";
import { Button } from "@src/components/ui/Button";

const Hero = () => {
  const { t } = useTranslation("docspace");
  const [email, setEmail] = useState("");
  const { locale } = useRouter();

  const saveEmail = () => {
    if (email) {
      localStorage.setItem("email", email);
    }
  };

  return (
    <StyledHero
      desktopSpacing={["143px", "80px"]}
      tabletSpacing={["136px", "84px"]}
      tabletSmallSpacing={["112px", "64px"]}
      mobileSpacing={["96px", "43px"]}
    >
      <StyledContainer>
        <StyledHeading level={1} textAlign="left" $locale={locale}>
          <Trans
            t={t}
            i18nKey={"HeroTitle"}
            components={[
              <Text as="span" color="main" key={0} />,
              <p key={1} />,
            ]}
          />
        </StyledHeading>
        <StyledContentWrapper>
          <StyledAccountContainer>
            <StyledMobileContainer>
              <StyledMobileHeading level={1} textAlign="left">
                <Trans
                  t={t}
                  i18nKey={"HeroTitle"}
                  components={[
                    <Text as="span" color="main" key={0} />,
                    <p key={1} />,
                  ]}
                />
              </StyledMobileHeading>
              <StyledList>
                {heroItems.map((item, index) => (
                  <StyledListItem key={index}>{t(item)}</StyledListItem>
                ))}
              </StyledList>
            </StyledMobileContainer>

            <StyledCreateAccountWrapper>
              <Input
                placeholder={t("HeroInputPlaceholder")}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <Button
                as="a"
                label={t("HeroButton")}
                href="/docspace-registration"
                onClick={saveEmail}
              />
            </StyledCreateAccountWrapper>
          </StyledAccountContainer>
          {locale === "zh" ? (
            <StyledHeroImg
              $imgUrl="/images/templates/docspace/hero/zh/hero.png"
              $imgUrl2x="/images/templates/docspace/hero/zh/hero@2x.png"
            />
          ) : (
            <YouTubeCard
              videoImgUrl="/images/templates/docspace/hero/yt-cover.png"
              videoUrl="https://www.youtube.com/embed/DU14HFeZErU?si=_TiGQD8IP8qG1hLe"
              border
            />
          )}
        </StyledContentWrapper>
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
