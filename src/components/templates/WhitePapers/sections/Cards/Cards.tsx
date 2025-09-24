import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardDatasheets } from "./sub-components/CardDatasheets";
import { cardWhitePapersItems } from "./data/cardWhitePapersItems";
import { cardDatasheetsItems } from "./data/cardDatasheetsItems";
import { useRefineCardsItems } from "./utils/useRefineCardsItems";
import { useHandleClickOutside } from "./utils/useHandleClickOutside";
import { useFilterCounter } from "./utils/useFilterCounter";
import { ICardsProp, TFilterKey, TSortDateKey } from "../../WhitePapers.types";
import { ILocale } from "@src/types/locale";

import {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortDate,
  StyledCardsContent,
  StyledCardsList,
  StyledCardsRefineHeading,
  StyledCardsRefineList,
  StyledCardsRefineItems,
  StyledCardsRefineText,
  StyledCardsSortModuleText,
  StyledCardsSortDateText,
  StyledCardsDatasheetsShowBtn,
  StyledCardsFilterMobIcon,
  StyledCardsFilterMob,
  StyledCardsFilterMobHeader,
  StyledCardsFilterMobMain,
  StyledCardsFilterMobFooter,
  StyledCardsFilterMobCloseBtn,
  StyledCardsFilterMobReset,
  StyledCardsFilterMobHeading,
  StyledCardsFilterMobSelect,
  StyledCardsFilterMobOption,
  StyledCardsFilterMobApplyBtn,
  StyledCardsMobDateSelect,
  StyledCardsMobDateOption,
  StyledCardsSortMobHeading,
  StyledCardsSortMobSelect,
  StyledCardsSortMobOption,
  StyledCardsMobDateHeading,
  StyledCardsRefineCounter,
  StyledCardsRefineMobHeading
} from "./Cards.styled";

const CARDS_CONTENT_LIST: TFilterKey[] = [
  "CardsFiltersAll",
  "WhitePapers",
  "Datasheets"
];

const CARDS_SORT_DATE_LIST: TSortDateKey[] = [
  "CardsSortNewestOldest",
  "CardsSortOldestNewest"
];

const Cards = ({ sortValue, locale }: ICardsProp & ILocale) => {
  const { t } = useTranslation("whitepapers");

  const [dataSheetsDisplayCount, setDataSheetsDisplayCount] = useState<number>(6);
  const [whitepapersDisplayCount, setWhitepapersDisplayCount] = useState<number>(6);
  const [dataSheetsShowButton, setDataSheetsShowButton] = useState<boolean>(true);
  const [whitePaperShowButton, setWhitePaperShowButton] = useState<boolean>(true)
  const [choosedFilter, setChoosedFilter] = useState<TFilterKey>("CardsFiltersAll");
  const [choosedModule, setChoosedModule] = useState<TFilterKey>("CardsFiltersAll");
  const [choosedDate, setChoosedDate] = useState<TSortDateKey>("CardsSortNewestOldest");

  const [tempFilter, setTempFilter] = useState<TFilterKey>(choosedFilter);
  const [tempModule, setTempModule] = useState<TFilterKey>(choosedModule);
  const [tempDate, setTempDate] = useState<TSortDateKey>(choosedDate);

  const filterBtnRef = useRef<HTMLDivElement>(null);
  const moduleBtnRef = useRef<HTMLDivElement>(null);
  const dateBtnRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<"filter" | "module" | "date" | null>(null);
  const [filterMobDisplay, setFilterMobDisplay] = useState(false);
  const { filterCounter } = useFilterCounter(choosedFilter, choosedModule, choosedDate);

  useHandleClickOutside(setActiveDropdown, filterBtnRef, moduleBtnRef, dateBtnRef);
  
  const allCards = useMemo(
    () => [
      ...cardWhitePapersItems, 
      ...cardDatasheetsItems.filter(item => !(locale !== "fr" && item.id === 15))],
    [locale]
  );

  const sortModules = useMemo(() => {
    const datasheets = allCards.filter(c => c.type === "Datasheets");

    if (locale !== "fr") {
      const sorted = datasheets
      .filter((item) => Number(item.id) !== 15)
      .sort((a, b) => a.title.localeCompare(b.title));
      return [{ title: "CardsFiltersAll" as TFilterKey }, ...sorted];
    } else {
      const sorted = [...datasheets].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return [{ title: "CardsFiltersAll" as TFilterKey }, ...sorted];
    }
  }, [locale, allCards]);

  const { refinedItems } = useRefineCardsItems(
    allCards,
    sortValue,
    choosedModule,
    choosedDate,
    choosedFilter
  );

  const openMobileFilters = () => {
    setFilterMobDisplay(true);
  };

  const applyMobileFilters = () => {
    setChoosedFilter(tempFilter);
    setChoosedModule(tempModule);
    setChoosedDate(tempDate);
    setFilterMobDisplay(false);
  };

  const handleMobResetFilters = useCallback(() => {
    const defaultFilter = "CardsFiltersAll";
    const defaultDate = "CardsSortNewestOldest";
    setChoosedFilter(defaultFilter);
    setChoosedModule(defaultFilter);
    setChoosedDate(defaultDate);
    setTempFilter(defaultFilter);
    setTempModule(defaultFilter);
    setTempDate(defaultDate);
  }, []);

  const handleModuleSetDefault = useCallback(() => {
    if (choosedFilter !== "Datasheets") {
      setChoosedModule("CardsFiltersAll");
      setTempModule("CardsFiltersAll");
    }
  }, [choosedFilter]);

  const handleChooseFilter = useCallback((label: TFilterKey) => {
    setChoosedFilter(label);
    setTempFilter(label);
    handleModuleSetDefault();
  }, [handleModuleSetDefault]);

  const handleChooseMobFilter = useCallback((label: TFilterKey) => {
    setTempFilter(label);
    if (label !== "Datasheets") {
      setTempModule("CardsFiltersAll");
    }
  }, []);

  const handleDropdownClick = useCallback((dropdown: "filter" | "module" | "date") => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleShowMore = (type: string) => {
    if (type === "WhitePapers") {
      setWhitepapersDisplayCount(refinedItems.filter(i => i.type === "WhitePapers").length)
      setWhitePaperShowButton(false);
    }
    if (type === "Datasheets") {
      setDataSheetsDisplayCount(refinedItems.filter(i => i.type === "Datasheets").length)
      setDataSheetsShowButton(false);
    }
  };

  useEffect(() => {
    if (filterMobDisplay) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [filterMobDisplay]);

  return (
    <>
      <Section background="#EFEFEF" desktopSpacing={["32px", "112px"]}>
        <Container>
          <StyledCardsFiltersWrapper>
            <StyledCardsFilterSelect onClick={() => handleDropdownClick("filter")} ref={filterBtnRef}>
              <StyledCardsRefineHeading
                level={5}
                size={4}
                label={t(choosedFilter)}
                $isOpen={activeDropdown === "filter"}
              />
              <StyledCardsRefineList $isOpen={activeDropdown === "filter"}>
                {CARDS_CONTENT_LIST.map(label => (
                  <StyledCardsRefineItems
                    key={label}
                    onClick={() => handleChooseFilter(label)}
                    $isActive={choosedFilter === label}
                  >
                    <StyledCardsRefineText
                      $isActive={choosedFilter === label}
                      label={t(label)}
                    />
                  </StyledCardsRefineItems>
                ))}
              </StyledCardsRefineList>
            </StyledCardsFilterSelect>

            <StyledCardsSortSelect ref={moduleBtnRef}>
              {t(choosedFilter) === t("Datasheets") && (
                <StyledCardsSortModules onClick={() => handleDropdownClick("module")}>
                  <StyledCardsSortModuleText
                    fontSize="11px"
                    textTransform="uppercase"
                    color="#808080"
                    label={t("CardsSortModules")}
                  />
                  <StyledCardsRefineHeading
                    $isOpen={activeDropdown === "module"}
                    label={t(choosedModule)}
                    level={5}
                    size={6}
                  />
                  <StyledCardsRefineList $isOpen={activeDropdown === "module"}>
                    {sortModules.map(item => (
                      <StyledCardsRefineItems
                        key={item.title}
                        onClick={() => setChoosedModule(item.title)}
                        $isActive={choosedModule === item.title}
                      >
                        <StyledCardsRefineText
                          $isActive={choosedModule === item.title}
                          label={t(item.title)}
                        />
                      </StyledCardsRefineItems>
                    ))}
                  </StyledCardsRefineList>
                </StyledCardsSortModules>
              )}
              <StyledCardsSortDate onClick={() => handleDropdownClick("date")} ref={dateBtnRef}>
                <StyledCardsSortDateText
                  label={t("CardsSortBy")}
                  fontSize="11px"
                  textTransform="uppercase"
                  color="#808080"
                />
                <StyledCardsRefineHeading
                  $isOpen={activeDropdown === "date"}
                  label={t(choosedDate)}
                  level={5}
                  size={6}
                />
                <StyledCardsRefineList $isOpen={activeDropdown === "date"}>
                  {CARDS_SORT_DATE_LIST.map(date => (
                    <StyledCardsRefineItems
                      key={date}
                      onClick={() => setChoosedDate(date)}
                      $isActive={choosedDate === date}
                    >
                      <StyledCardsRefineText
                        $isActive={choosedDate === date}
                        label={t(date)}
                      />
                    </StyledCardsRefineItems>
                  ))}
                </StyledCardsRefineList>
              </StyledCardsSortDate>
            </StyledCardsSortSelect>

            <StyledCardsRefineMobHeading
              level={5}
              size={4}
              label={t(choosedFilter)}
            />
            <StyledCardsFilterMobIcon onClick={openMobileFilters}>
              {filterCounter > 0 && (
                <StyledCardsRefineCounter label={filterCounter.toString()} color="#fff" size={3} />
              )}
            </StyledCardsFilterMobIcon>
          </StyledCardsFiltersWrapper>

          {refinedItems.length > 0 &&
              (
              <StyledCardsContent>
                <StyledCardsList>
                  {refinedItems.map((item, i) => {
                    const whitepaperIndex = refinedItems.filter(i => i.type === "WhitePapers").indexOf(item);
                    const datasheetIndex = refinedItems.filter(i => i.type === "Datasheets").indexOf(item);
                  return (
                    <CardDatasheets
                      key={`${item.type}-${item.id}`}
                      {...item}
                      title={t(item.title)}
                      product={t(item.product)}
                      download_url={t(item.download_url)}
                      displayOther={
                      item.type === "Datasheets"
                      ? datasheetIndex > -1 && datasheetIndex < dataSheetsDisplayCount
                      : item.type === "WhitePapers"
                      ? whitepaperIndex > -1 && whitepaperIndex < whitepapersDisplayCount
                      : true }
                    locale={locale}
                    />
                  )})}
                </StyledCardsList>
                {choosedFilter !== "Datasheets" &&
                  whitepapersDisplayCount < refinedItems.filter(i => i.type === "WhitePapers").length && (
                    <StyledCardsDatasheetsShowBtn
                      variant="tertiary"
                      $display={whitePaperShowButton}
                      onClick={() => handleShowMore("WhitePapers")}
                    >
                      {t("CardsButtonShowMore")}
                    </StyledCardsDatasheetsShowBtn>
                  )}

                {choosedFilter !== "WhitePapers" &&
                  dataSheetsDisplayCount < refinedItems.filter(i => i.type === "Datasheets").length && (
                    <StyledCardsDatasheetsShowBtn
                      variant="tertiary"
                      $display={dataSheetsShowButton}
                      onClick={() => handleShowMore("Datasheets")}
                    >
                      {t("CardsButtonShowMore")}
                    </StyledCardsDatasheetsShowBtn>
                  )}
              </StyledCardsContent>
            )
          }
        </Container>
      </Section>

      <StyledCardsFilterMob $display={filterMobDisplay}>
        <StyledCardsFilterMobHeader>
          <StyledCardsFilterMobReset $display={true} onClick={handleMobResetFilters}>
            {t("CardsMobFiltersReset")}
          </StyledCardsFilterMobReset>
          <StyledCardsFilterMobHeading label={t("CardsMobFiltersHeading")} level={5} />
          <StyledCardsFilterMobCloseBtn onClick={() => setFilterMobDisplay(false)} />
        </StyledCardsFilterMobHeader>
        <StyledCardsFilterMobMain>
          <StyledCardsFilterMobSelect>
            {CARDS_CONTENT_LIST.map(label => (
              <StyledCardsFilterMobOption
                key={label}
                onClick={() => handleChooseMobFilter(label)}
                $isActive={tempFilter === label}
              >
                {t(label)}
              </StyledCardsFilterMobOption>
            ))}
          </StyledCardsFilterMobSelect>
          <StyledCardsMobDateHeading
            label={t("CardsSortBy")}
            level={5}
            size={6}
            textTransform="uppercase"
            color="#808080"
          />
          <StyledCardsMobDateSelect>
            {CARDS_SORT_DATE_LIST.map(date => (
              <StyledCardsMobDateOption
                key={date}
                onClick={() => setTempDate(date)}
                $isActive={tempDate === date}
              >
                {t(date)}
              </StyledCardsMobDateOption>
            ))}
          </StyledCardsMobDateSelect>
          {tempFilter === t("Datasheets") && (
            <>
              <StyledCardsSortMobHeading
                label={t("CardsMobFiltersModules")}
                level={5}
                size={6}
                textTransform="uppercase"
                color="#808080"
              />
              <StyledCardsSortMobSelect>
                {sortModules.map(item => (
                  <StyledCardsSortMobOption
                    key={item.title}
                    onClick={() => setTempModule(item.title)}
                    $isActive={tempModule === item.title}
                  >
                    {t(item.title)}
                  </StyledCardsSortMobOption>
                ))}
              </StyledCardsSortMobSelect>
            </>
          )}
        </StyledCardsFilterMobMain>
        <StyledCardsFilterMobFooter>
          <StyledCardsFilterMobApplyBtn
            onClick={applyMobileFilters}
            label={t("CardsMobFiltersApply")}
            borderRadius="3px"
          />
        </StyledCardsFilterMobFooter>
      </StyledCardsFilterMob>
    </>
  );
};

export { Cards };
