import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardWhitePapers } from "./sub-components/CardWhitePapers";
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
  StyledCardsHeading,
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
  const [dataSheetsShowButton, setDataSheetsShowButton] = useState<boolean>(true);
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

  const sortModules = useMemo(() => {
    if (locale !== "fr") {
      const sorted = [...cardDatasheetsItems].filter((item) => item.id !== 15).sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return [{ title: "CardsFiltersAll" as TFilterKey }, ...sorted];
    } else {
      const sorted = [...cardDatasheetsItems].sort((a, b) =>
        a.title.localeCompare(b.title)
      );
      return [{ title: "CardsFiltersAll" as TFilterKey }, ...sorted];
    }
  }, [locale]);

  const { refineWhitepaperItems, refineDatasheetsItems } = useRefineCardsItems(
    cardWhitePapersItems,
    cardDatasheetsItems,
    sortValue,
    choosedModule,
    choosedDate
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

  const handleShowMore = () => {
    setDataSheetsDisplayCount(cardDatasheetsItems.length);
    setDataSheetsShowButton(false);
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

          {refineWhitepaperItems.length > 0 &&
            (t(choosedFilter) === t("WhitePapers") || t(choosedFilter) === t("CardsFiltersAll")) && (
              <StyledCardsContent>
                <StyledCardsHeading label={t("WhitePapers")} textAlign="center" level={2} size={4} />
                <StyledCardsList>
                  {refineWhitepaperItems.map(item => (
                    <CardWhitePapers
                      key={item.id}
                      head={t(item.head)}
                      title={t(item.title)}
                      date={item.date}
                      download_url={t(item.download_url)}
                      description={t(item.description)}
                      locale={locale}
                      id_url={item.id_url}
                    />
                  ))}
                </StyledCardsList>
              </StyledCardsContent>
            )
          }
          {refineDatasheetsItems.length > 0 &&
            (t(choosedFilter) === t("Datasheets") || t(choosedFilter) === t("CardsFiltersAll")) && (
              <StyledCardsContent>
                <StyledCardsHeading label={t("Datasheets")} textAlign="center" level={2} size={4} />
                <StyledCardsList>
                  {locale !== "fr" && refineDatasheetsItems.map((item, index) => (
                    item.id !== 15 && (
                      <CardDatasheets
                        key={item.id}
                        title={t(item.title)}
                        product={t(item.product)}
                        image_url={item.image_url}
                        download_url={t(item.download_url)}
                        displayOther={index < dataSheetsDisplayCount}
                        locale={locale}
                        id_url={item.id_url}
                      />
                    )
                  ))}

                  {locale === "fr" && refineDatasheetsItems.map((item, index) => (
                    <CardDatasheets
                      key={item.id}
                      title={t(item.title)}
                      product={t(item.product)}
                      image_url={item.image_url}
                      download_url={t(item.download_url)}
                      displayOther={index < dataSheetsDisplayCount}
                      locale={locale}
                      id_url={item.id_url}
                    />
                  ))}
                </StyledCardsList>
                {choosedModule === "CardsFiltersAll" && (
                  <StyledCardsDatasheetsShowBtn $display={dataSheetsShowButton} onClick={handleShowMore}>
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
