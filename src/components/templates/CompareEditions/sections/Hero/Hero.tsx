import { useTranslation, Trans } from "next-i18next";
import { Link } from "@src/components/ui/Link";
import { Heading } from "@src/components/ui/Heading";
import { Container } from "@src/components/ui/Container";
import {
  StyledHero,
  StyledDescription,
  StyledEditionCards,
  StyledEditionCard,
  StyledEditionDescription,
  StyledEditionLink,
  StyledCards,
} from "./Hero.styled";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("compare-editions");

  return (
    <StyledHero
      background="#f6f6f6"
      desktopSpacing={["144px", "56px"]}
      tabletSpacing={["144px", "56px"]}
      tabletSmallSpacing={["120px", "56px"]}
      mobileSpacing={["96px", "16px"]}
    >
      <Container>
        <Heading level={1}>{t("HeroTitle")}</Heading>
        <StyledDescription>{t("HeroDescription")}</StyledDescription>
      </Container>
      <StyledCards>
        <Heading level={3}>{t("ChooseEdition")}</Heading>
        <StyledEditionCards>
          {items.map((item, index) => (
            <StyledEditionCard $positionX={item.positionX} key={index}>
              <Heading level={4}>{t(item.title)}</Heading>
              <StyledEditionDescription>
                <Trans
                  t={t}
                  i18nKey={item.description}
                  components={[
                    <span key="0"></span>,
                    <Link
                      key="1"
                      href={item.link}
                      target="_blank"
                      color="main"
                      textUnderline
                      hover="underline-none"
                    />,
                  ]}
                />
              </StyledEditionDescription>
              {!item.isExternal && (
                <StyledEditionLink
                  color="main"
                  textUnderline={true}
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {t("LearnMore")}
                </StyledEditionLink>
              )}
            </StyledEditionCard>
          ))}
        </StyledEditionCards>
      </StyledCards>
    </StyledHero>
  );
};

export { Hero };
