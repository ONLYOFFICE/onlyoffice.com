import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";

import {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortDate,
  StyledCardsContent,
  StyledCardsHeading
} from "./Cards.styled";

const Cards = () => {
  const { t } = useTranslation("whitepapers");

  return (
    <Section
      background="#EFEFEF"
      desktopSpacing={["32px", "112px"]}
    >
      <Container>
        <StyledCardsFiltersWrapper>
          <StyledCardsFilterSelect>
            {t("CardsFiltersAll")}
          </StyledCardsFilterSelect>
          <StyledCardsSortSelect>
            <StyledCardsSortModules>
              {t("CardsSortModules")}
            </StyledCardsSortModules>
            <StyledCardsSortDate>
              {t("CardsSortBy")}
            </StyledCardsSortDate>
          </StyledCardsSortSelect>
        </StyledCardsFiltersWrapper>
        <StyledCardsContent>
          <StyledCardsHeading
            label={t("CardsHeadingWhitepapers")}
            textAlign="center"
            level={2}
            size={4}
          />
        </StyledCardsContent>
        <StyledCardsContent>
          <StyledCardsHeading
            label={t("CardsHeadingDatasheets")}
            textAlign="center"
            level={2}
            size={4}
          />
        </StyledCardsContent>
      </Container>
    </Section>
  );
};

export { Cards };