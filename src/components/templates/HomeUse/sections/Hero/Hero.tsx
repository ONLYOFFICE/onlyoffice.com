import { useTranslation, Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import {
  StyledContainer,
  StyledHero,
  StyledPageDescription,
  StyledPageTitle,
  StyledWrapper,
  StyledImage,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("home-use");
  return (
    <StyledHero
      desktopSpacing={["48px", "112px"]}
      tabletSpacing={["48px", "112px"]}
      tabletSmallSpacing={["112px", "94px"]}
      mobileSpacing={["56px", "71px"]}
      background="#F9F9F9"
    >
      <StyledContainer maxWidth="1280px">
        <StyledWrapper>
          <StyledPageTitle>
            <Trans
              t={t}
              i18nKey="TheOnlyOfficeForEveryone"
              components={[<Text as="span" color="main" key={0} />]}
            />
          </StyledPageTitle>
          <StyledPageDescription>{t("TheOnlyOfficeForEveryoneDesc")}</StyledPageDescription>
        </StyledWrapper>
        <StyledImage />
      </StyledContainer>
    </StyledHero>
  );
};


export { Hero };
