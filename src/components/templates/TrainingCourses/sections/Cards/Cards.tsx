import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { Card } from "./sub-components/Card";
import { items } from "./data/items";
import { useRefineCardsItems } from "../../utils/useRefineCardsItems";
import { useFilterCounter } from "../../utils/useFilterCounter";

import { ILocale } from "@src/types/locale";
import {
  TDropdownType,
  TFilterKey,
  TSortDateKey,
  ICardsDataItem,
  ICardsProp
} from "../../TrainingCourses.types";

import {
  StyledCardsFiltersWrapper,
  StyledCardsFilterSelect,
  StyledCardsRefineHeading,
  StyledCardsRefineList,
  StyledCardsRefineText,
  StyledCardsRefineItems,
  StyledCardsSortSelect,
  StyledCardsSortModules,
  StyledCardsSortModuleText,
  StyledCardsSortDate,
  StyledCardsSortDateText,
  StyledCardsRefineMobHeading,
  StyledCardsFilterMobIcon,
  StyledCardsRefineCounter,
  StyledCardsFilterMob,
  StyledCardsFilterMobHeader,
  StyledCardsFilterMobReset,
  StyledCardsFilterMobHeading,
  StyledCardsFilterMobCloseBtn,
  StyledCardsFilterMobMain,
  StyledCardsFilterMobSelect,
  StyledCardsFilterMobOption,
  StyledCardsMobDateHeading,
  StyledCardsMobDateSelect,
  StyledCardsMobDateOption,
  StyledCardsSortMobHeading,
  StyledCardsSortMobSelect,
  StyledCardsSortMobOption,
  StyledCardsFilterMobFooter,
  StyledCardsFilterMobApplyBtn,
  StyledCardsList,
  StyledCardsHeading
} from "./Cards.styled"

const CARDS_CONTENT_LIST: TFilterKey[] = [
  "All",
  "Modules",
  "Purpose"
];

const CARDS_SORT_DATE_LIST: TSortDateKey[] = [
  "NewestOldest",
  "OldestNewest"
];

const MODULES_LIST: ICardsDataItem[] = items.filter(item => item.type === "1");
const PURPOSE_LIST: ICardsDataItem[] = items.filter(item => item.type === "2");

const Cards = ({ filterValue, locale }: ICardsProp & ILocale) => {
  const { t } = useTranslation("training-courses");

  const [choosedFilter, setChoosedFilter] = useState<TFilterKey>("All");
  const [choosedModule, setChoosedModule] = useState<TFilterKey>("All");
  const [choosedDate, setChoosedDate] = useState<TSortDateKey>("NewestOldest");

  const [tempFilter, setTempFilter] = useState<TFilterKey>(choosedFilter);
  const [tempModule, setTempModule] = useState<TFilterKey>(choosedModule);
  const [tempDate, setTempDate] = useState<TSortDateKey>(choosedDate);

  const [activeDropdown, setActiveDropdown] = useState<TDropdownType>(null);
  const filterBtnRef = useRef<HTMLDivElement>(null);
  const moduleBtnRef = useRef<HTMLDivElement>(null);
  const dateBtnRef = useRef<HTMLDivElement>(null);

  const [filterMobDisplay, setFilterMobDisplay] = useState(false);
  const { filterCounter } = useFilterCounter(choosedFilter, choosedModule, choosedDate);

  const { refineModulesItems, refinePurposeItems } = useRefineCardsItems(
    MODULES_LIST,
    PURPOSE_LIST,
    filterValue,
    choosedModule,
    choosedDate
  );

  const sortModules = useMemo(() => {
    const uniqueModule = [...new Set(MODULES_LIST.flatMap(item => item.module))];
    return ["All", ...uniqueModule];
  }, []);

  const handleDropdownClick = useCallback((dropdown: TDropdownType) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleModuleSetDefault = useCallback((label: TFilterKey) => {
    if (label !== "Modules") {
      setChoosedModule("All");
      setTempModule("All");
    }
  }, []);

  const handleChooseFilter = useCallback((label: TFilterKey) => {
    setChoosedFilter(label);
    setTempFilter(label);
    handleModuleSetDefault(label);
  }, [handleModuleSetDefault]);

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
    const defaultFilter = "All";
    const defaultDate = "NewestOldest";
    setChoosedFilter(defaultFilter);
    setChoosedModule(defaultFilter);
    setChoosedDate(defaultDate);
    setTempFilter(defaultFilter);
    setTempModule(defaultFilter);
    setTempDate(defaultDate);
  }, []);

  const handleChooseMobFilter = useCallback((label: TFilterKey) => {
    setTempFilter(label);
    if (label !== "Modules") {
      setTempModule("All");
    }
  }, []);

  return (
    <>
      <Section background="#f5f5f5">
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
              {t(choosedFilter) === t("Modules") && (
                <StyledCardsSortModules onClick={() => handleDropdownClick("module")}>
                  <StyledCardsSortModuleText
                    fontSize="11px"
                    textTransform="uppercase"
                    color="#808080"
                    label={t("ModulesWithPoints")}
                  />
                  <StyledCardsRefineHeading
                    $isOpen={activeDropdown === "module"}
                    label={t(choosedModule)}
                    level={5}
                    size={6}
                    textTransform="capitalize"
                  />
                  <StyledCardsRefineList $isOpen={activeDropdown === "module"}>
                    {sortModules.map((item) => (
                      <StyledCardsRefineItems
                        key={item}
                        onClick={() => setChoosedModule(item)}
                        $isActive={choosedModule === item}
                      >
                        <StyledCardsRefineText
                          textTransform="capitalize"
                          $isActive={choosedModule === item}
                          label={t(item)}
                        />
                      </StyledCardsRefineItems>
                    ))}
                  </StyledCardsRefineList>
                </StyledCardsSortModules>
              )}
              <StyledCardsSortDate onClick={() => handleDropdownClick("date")} ref={dateBtnRef}>
                <StyledCardsSortDateText
                  label={t("SortBy")}
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

          {refineModulesItems.length > 0 && (choosedFilter === "Modules" || choosedFilter === "All") && (
            <>
              <StyledCardsHeading
                level={2}
                size={4}
                textAlign="center"
                label={t("Modules")}
              />
              <StyledCardsList>
                {refineModulesItems.map((moduleCard) => (
                  <Card
                    key={moduleCard.id}
                    locale={locale}
                    icon_url={moduleCard.icon_url}
                    title={t(moduleCard.title)}
                    type={moduleCard.type}
                    module={moduleCard.module}
                    sessions={moduleCard.sessions}
                    hours={moduleCard.hours}
                    price={moduleCard.price}
                    description={t(moduleCard.description)}
                    new={moduleCard.new}
                    course={t(moduleCard.title)}
                  />
                ))}
              </StyledCardsList>
            </>
          )}

          {refinePurposeItems.length > 0 && (choosedFilter === "Purpose" || choosedFilter === "All") && (
            <>
              <StyledCardsHeading
                level={2}
                size={4}
                textAlign="center"
                label={t("Purpose")}
              />
              <StyledCardsList>
                {refinePurposeItems.map((purposeCard) => (
                  <Card
                    key={purposeCard.id}
                    locale={locale}
                    icon_url={purposeCard.icon_url}
                    title={t(purposeCard.title)}
                    type={purposeCard.type}
                    module={purposeCard.module}
                    sessions={purposeCard.sessions}
                    hours={purposeCard.hours}
                    price={purposeCard.price}
                    description={t(purposeCard.description)}
                    new={purposeCard.new}
                    course={t(purposeCard.title, {lng: "en"})}
                  />
                ))}
              </StyledCardsList>
            </>
          )}

        </Container>
      </Section>


      <StyledCardsFilterMob $display={filterMobDisplay}>
        <StyledCardsFilterMobHeader>
          <StyledCardsFilterMobReset $display={true} onClick={handleMobResetFilters}>
            {t("Reset")}
          </StyledCardsFilterMobReset>
          <StyledCardsFilterMobHeading label={t("Filters")} level={5} />
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
            label={t("SortBy")}
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
          {tempFilter === t("Modules") && (
            <>
              <StyledCardsSortMobHeading
                label={t("Module")}
                level={5}
                size={6}
                textTransform="uppercase"
                color="#808080"
              />
              <StyledCardsSortMobSelect>
                {sortModules.map(item => (
                  <StyledCardsSortMobOption
                    key={item}
                    onClick={() => setTempModule(item)}
                    $isActive={tempModule === item}
                  >
                    {t(item)}
                  </StyledCardsSortMobOption>
                ))}
              </StyledCardsSortMobSelect>
            </>
          )}
        </StyledCardsFilterMobMain>
        <StyledCardsFilterMobFooter>
          <StyledCardsFilterMobApplyBtn
            onClick={applyMobileFilters}
            label={t("ApplyFilter")}
            borderRadius="3px"
          />
        </StyledCardsFilterMobFooter>
      </StyledCardsFilterMob>
    </>
  );
};

export { Cards };