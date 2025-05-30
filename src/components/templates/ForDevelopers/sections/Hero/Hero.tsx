import { Trans, useTranslation } from "next-i18next";
import {
  StyledHeroSection,
  StyledHeroWrapper,
  StyledHeroContent,
  StyledHeroList,
  StyledHeroListItem,
  StyledHeroImage,
  StyledHeroHeading,
} from "./Hero.styled";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { items } from "./data/items";

const Hero = () => {
  const { t } = useTranslation("for-developers");

  return (
    <StyledHeroSection
      desktopSpacing={["123px", "177px"]}
      tabletSpacing={["128px", "121px"]}
      tabletSmallSpacing={["128px", "63px"]}
      mobileSpacing={["96px", "56px"]}
    >
      <Container maxWidth="1419px">
        <StyledHeroWrapper>
          <StyledHeroContent>
            <StyledHeroHeading level={1} size={1} label={t("HeroTitle")} />
            <StyledHeroList>
              {items.map((item, index) => (
                <StyledHeroListItem key={index}>
                  <Trans
                    t={t}
                    i18nKey={String(item.label)}
                    components={[
                      <Text
                        as="span"
                        fontStyle="italic"
                        fontWeight={700}
                        color="#FF6F3D"
                        key="0"
                      />,
                    ]}
                  />
                </StyledHeroListItem>
              ))}
            </StyledHeroList>
          </StyledHeroContent>
          <StyledHeroImage />
        </StyledHeroWrapper>
      </Container>
    </StyledHeroSection>
  );
};

export { Hero };
