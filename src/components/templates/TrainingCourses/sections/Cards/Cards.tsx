import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { useFilterCounter } from "../../utils/useFilterCounter";
import { items } from "./data/items";
import { ILocale } from "@src/types/locale";
import { TDropdownType, TFilterKey, TSortDateKey } from "../../TrainingCourses.types";

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
  StyledCardsFilterMobApplyBtn
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

const Cards = ({ locale }: ILocale) => {
  console.log(locale);
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

  const sortModules = useMemo(() => {
    const sorted = [...items].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return [{ title: "All" as TFilterKey }, ...sorted];
  }, []);

  const handleDropdownClick = useCallback((dropdown: TDropdownType) => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleModuleSetDefault = useCallback(() => {
    if (choosedFilter !== "Modules") {
      setChoosedModule("All");
      setTempModule("All");
    }
  }, [choosedFilter]);

  const handleChooseFilter = useCallback((label: TFilterKey) => {
    setChoosedFilter(label);
    setTempFilter(label);
    handleModuleSetDefault();
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
          {tempFilter === t("Modules") && (
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