import { useTranslation, Trans } from "next-i18next";
import { Text } from "@src/components/ui/Text";
import { Heading } from "@src/components/ui/Heading";
import {
  StyledContainer,
  StyledHero,
  StyledPageDescription,
  StyledWrapper,
  StyledImage,
} from "./Hero.styled";

const Hero = () => {
  const { t } = useTranslation("home-use");
  return (
    <StyledHero
      desktopSpacing={["94px", "112px"]}
      tabletSpacing={["94px", "112px"]}
      tabletSmallSpacing={["160px", "94px"]}
      mobileSpacing={["104px", "71px"]}
      background="#F9F9F9"
    >
      <StyledContainer maxWidth="1280px">
        <StyledWrapper>
          <Heading level={1}>
            <Trans
              t={t}
              i18nKey="TheOnlyOfficeForEveryone"
              components={[<Text as="span" color="main" key={0} />]}
            />
          </Heading>
          <StyledPageDescription>
            {t("TheOnlyOfficeForEveryoneDesc")}
          </StyledPageDescription>
        </StyledWrapper>
        <StyledImage />
      </StyledContainer>
    </StyledHero>
  );
};

export { Hero };
