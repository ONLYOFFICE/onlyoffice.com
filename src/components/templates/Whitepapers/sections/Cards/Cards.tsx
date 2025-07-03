import { useMemo, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardWhitepapers } from "./sub-components/CardWhitepapers";
import { CardDatasheets } from "./sub-components/CardDatasheets";
import { cardWhitepapersItems } from "./data/cardWhitepapersItems";
import { cardDatasheetsItems } from "./data/cardDatasheetsItems";
import { useFilterInputICardsItems } from "./utils/useFilterInputICardsItems";
import { ICardsProp } from "../../Whitepapers.types";

import {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortDate,
  StyledCardsContent,
  StyledCardsHeading,
  StyledCardsList,
  StyledCardsFilterHeading,
  StyledCardsRefineList,
  StyledCardsRefineItems,
  StyledCardsRefineText
} from "./Cards.styled";

const Cards = ({ sortValue }: ICardsProp ) => {
  const { t } = useTranslation("whitepapers");
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [choosedFilter, setChoosedFilter] = useState(t("CardsFiltersAll"));

  const cardsContentList = useMemo(() => {
    return [
      t("CardsFiltersAll"),
      t("CardsHeadingWhitepapers"),
      t("CardsHeadingDatasheets")
    ];
  }, [t]);

  const { inputFilterWhitepaperItems, inputFilterDatasheetsItems} = useFilterInputICardsItems(
    cardWhitepapersItems, cardDatasheetsItems, sortValue
  );

  return (
    <Section
      background="#EFEFEF"
      desktopSpacing={["32px", "112px"]}
    >
      <Container>
        <StyledCardsFiltersWrapper>
          <StyledCardsFilterSelect onClick={() => setIsFilterOpen(!isFilterOpen)}>
            <StyledCardsFilterHeading
              level={5}
              size={4}
              label={choosedFilter}
              $isOpen={isFilterOpen}
            />
            <StyledCardsRefineList
              $isOpen={isFilterOpen}
            >
              {cardsContentList.map((label) => (
                <StyledCardsRefineItems
                  key={label}
                  onClick={() => setChoosedFilter(label)}
                  $isActive={choosedFilter === label}
                >
                  <StyledCardsRefineText
                    $isActive={choosedFilter === label}
                    label={label}
                  />
                </StyledCardsRefineItems>
              ))}
            </StyledCardsRefineList>
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
        {inputFilterWhitepaperItems.length > 0 &&
          (choosedFilter === t("CardsHeadingWhitepapers") ||
          choosedFilter === t("CardsFiltersAll")) && (
          <StyledCardsContent>
            <StyledCardsHeading
              label={t("CardsHeadingWhitepapers")}
              textAlign="center"
              level={2}
              size={4}
            />
            <StyledCardsList>
              {inputFilterWhitepaperItems.map((item) => (
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
        )}
        {inputFilterDatasheetsItems.length > 0 &&
        (choosedFilter === t("CardsHeadingDatasheets") ||
        choosedFilter === t("CardsFiltersAll")) && (
          <StyledCardsContent>
            <StyledCardsHeading
              label={t("CardsHeadingDatasheets")}
              textAlign="center"
              level={2}
              size={4}
            />
            <StyledCardsList>
              {inputFilterDatasheetsItems.map((item) => (
                <CardDatasheets
                  key={item.id}
                  title={item.title}
                  product={item.product}
                  image_url={item.image_url}
                  download_url={item.download_url}
                />
              ))}
            </StyledCardsList>
          </StyledCardsContent>
        )}
      </Container>
    </Section>
  );
};

export { Cards };