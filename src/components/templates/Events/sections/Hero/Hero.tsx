import { Trans, useTranslation } from "next-i18next";
import { StyledHero } from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Text } from "@src/components/ui/Text";

const Hero = () => {
  const { t } = useTranslation("events");

  return (
    <StyledHero
      desktopSpacing={["0", "0"]}
      tabletSpacing={["112px", "21px"]}
      tabletSmallSpacing={["96px", "80px"]}
      bgColor="#F5F5F5"
      $imgUrl="/images/templates/events/hero/bg_map-01.png"
    >
      <Container
        className="container"
        maxWidth="1120px"
      >
        <Heading
          className="heading"
          level={1}          
          color="#000"
        >
          <Trans
            t={t}
            i18nKey="onlyofficeAttendsInterestingEventsAroundTheWorld"
            components={[<Text as="span" color="main" key={0} />]}
          />
        </Heading>
      </Container>
    </StyledHero>
  );
};

export { Hero };
