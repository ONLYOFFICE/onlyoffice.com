import { Trans, useTranslation } from "next-i18next";
import { StyledHero, StyledHeroWrapper, StyledHeroImg } from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("events");

  return (
    <StyledHero
      desktopSpacing={["143px", "178px"]}
      tabletSpacing={["136px", "145px"]}
      tabletSmallSpacing={["136px", "145px"]}
      mobileSpacing={["96px", "90px"]}
      background="#F5F5F5"
    >
      <Container>
        <StyledHeroWrapper>
          <Heading level={1} color="#333333">
            <Trans
              t={t}
              i18nKey="onlyofficeAttendsInterestingEventsAroundTheWorld"
              components={[<Text as="span" color="main" key={0} />]}
            />
          </Heading>

          <StyledHeroImg />
        </StyledHeroWrapper>
      </Container>
    </StyledHero>
  );
};

export { Hero };
