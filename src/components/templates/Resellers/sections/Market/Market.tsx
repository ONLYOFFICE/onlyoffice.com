import { Trans, useTranslation } from "next-i18next";
import {
  StyledMarketWrapper,
  StyledMarketHeading,
  StyledMarketSubHeading,
  StyledMarketText,
  StyledMarketImage,
  StyledMarketLangugesWrapper,
  StyledMarketLangugesText,
  StyledMarketLanguagesList,
  StyledMarketLanguagesItem,
} from "./Market.styled";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Text } from "@src/components/ui/Text";
import { Link } from "@src/components/ui/Link";
import { languages } from "./data/items";

const Market = () => {
  const { t } = useTranslation("resellers");

  return (
    <Section background="#f5f5f5" tabletSmallSpacing={["88px", "88px"]}>
      <Container>
        <StyledMarketWrapper>
          <StyledMarketHeading label={t("LocalMarket")} level={2} size={3} />
          <StyledMarketSubHeading
            label={t("GetHelpPromotingOO")}
            level={4}
            size={5}
          />
          <StyledMarketText size={2} label={t("CollaborateWithUs")} />
          <StyledMarketImage />
        </StyledMarketWrapper>

        <div>
          <StyledMarketLangugesWrapper>
            <StyledMarketSubHeading
              label={t("GetOOInYourLanguage")}
              level={4}
              size={5}
            />
            <Text size={2} label={t("CollaborateWithUs")}>
              <Trans
                t={t}
                i18nKey={t("FullyTranslated")}
                components={[
                  <Link
                    href="https://helpcenter.onlyoffice.com/workspace/administration/available-languages.aspx"
                    color="main"
                    textUnderline
                    hover="underline-none"
                    key="0"
                  />,
                ]}
              />
            </Text>
          </StyledMarketLangugesWrapper>

          <StyledMarketLanguagesList>
            {languages.map((item, index) => (
              <li key={index}>
                <StyledMarketLanguagesItem className={item.id}>
                  {t(item.country)}
                </StyledMarketLanguagesItem>
              </li>
            ))}
          </StyledMarketLanguagesList>

          <StyledMarketLangugesText size={3}>
            <Trans
              t={t}
              i18nKey={t("TheLanguageYouNeed")}
              components={[
                <Link
                  href="mailto:sales@onlyoffice.com"
                  color="main"
                  textUnderline
                  hover="underline-none"
                  key="0"
                />,
              ]}
            />
          </StyledMarketLangugesText>
        </div>
      </Container>
    </Section>
  );
};

export { Market };
