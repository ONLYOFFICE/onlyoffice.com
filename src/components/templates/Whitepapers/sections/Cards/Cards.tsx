import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardWhitepapers } from "./sub-components/CardWhitepapers";
import { CardDatasheets } from "./sub-components/CardDatasheets";
import { cardWhitepapersItems } from "./data/cardWhitepapersItems";
import { cardDatasheetsItems } from "./data/cardDatasheetsItems";
import { ICardsProp } from "../../Whitepapers.types";

import {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortDate,
  StyledCardsContent,
  StyledCardsHeading,
  StyledCardsList
} from "./Cards.styled";

const Cards = ({ sortValue }: ICardsProp ) => {
  const { t } = useTranslation("whitepapers");
  console.log(sortValue);

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
          <StyledCardsList>
            {cardWhitepapersItems.map((item) => (
              <CardWhitepapers
                key={item.id}
                head={item.head}
                title={item.title}
                date={item.date}
                download_url={item.download_url}
                description={item.description}
              />
            ))}
          </StyledCardsList>
        </StyledCardsContent>
        <StyledCardsContent>
          <StyledCardsHeading
            label={t("CardsHeadingDatasheets")}
            textAlign="center"
            level={2}
            size={4}
          />
          <StyledCardsList>
            {cardDatasheetsItems.map((item) => (
              <CardDatasheets
                key={item.id}
                title={item.title}
                product={item.product}
                image_url={item.image_url}
                download_url={item.download_url}
                date={item.date}
              />
            ))}
          </StyledCardsList>
        </StyledCardsContent>
      </Container>
    </Section>
  );
};

export { Cards };