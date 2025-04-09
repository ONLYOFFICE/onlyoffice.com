import { Trans, useTranslation } from "next-i18next";
import { Container } from "@src/components/ui/Container";
import { Heading } from "@src/components/ui/Heading";
import { Section } from "@src/components/ui/Section";
import {
  StyledMarketWrapper,
  StyledMarketSubTitle,
  StyledMarketText,
  StyledMarketImage,
  StyledOOLanguages,
  StyledOOLanguage,
  StyledOOLanguageText,
} from "./Market.styled";
import { laguages } from "./data/items";
import { Link } from "@src/components/ui/Link";

const Market = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section background="#f5f5f5" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledMarketWrapper>
          <Heading label={t("LocalMarket")} level={2} size={3} />
          <StyledMarketSubTitle
            label={t("GetHelpPromotingOO")}
            level={4}
            size={5}
          />
          <StyledMarketText label={t("CollaborateWithUs")} lineHeight="150%" />
          <StyledMarketImage />

          <StyledMarketSubTitle
            label={t("GetOOInYourLanguage")}
            level={4}
            size={5}
          />
          <StyledMarketText lineHeight="150%">
            <Trans
              t={t}
              i18nKey={t("FullyTranslated")}
              components={[
                <Link
                  href="https://helpcenter.onlyoffice.com/workspace/administration/available-languages.aspx"
                  color="main"
                  lineHeight="160%"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledMarketText>
          <StyledOOLanguages>
            {laguages.map(
              (
                {
                  country,
                  positionX = "0px",
                  positionY = "0px",
                  mobPositionX = "0px",
                  mobPositionY = "0px",
                },
                index,
              ) => (
                <StyledOOLanguage
                  key={index}
                  $positionX={positionX}
                  $positionY={positionY}
                  $mobPositionX={mobPositionX}
                  $mobPositionY={mobPositionY}
                >
                  {t(country)}
                </StyledOOLanguage>
              ),
            )}
          </StyledOOLanguages>
          <StyledOOLanguageText lineHeight="150%">
            <Trans
              t={t}
              i18nKey={t("TheLanguageYouNeed")}
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  lineHeight="160%"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledOOLanguageText>
        </StyledMarketWrapper>
      </Container>
    </Section>
  );
};

export { Market };
