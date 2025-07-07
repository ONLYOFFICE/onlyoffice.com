import { useCallback, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardWhitepapers } from "./sub-components/CardWhitepapers";
import { CardDatasheets } from "./sub-components/CardDatasheets";
import { cardWhitepapersItems } from "./data/cardWhitepapersItems";
import { cardDatasheetsItems } from "./data/cardDatasheetsItems";
import { useRefineCardsItems } from "./utils/useRefineCardsItems";
import { useHandleClickOutside } from "./utils/useHandleClickOutside";
import { useFilterCounter } from "./utils/useFilterCounter";
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

const CARDS_CONTENT_LIST = [
  "CardsFiltersAll",
  "CardsHeadingWhitepapers",
  "CardsHeadingDatasheets"
];

const CARDS_SORT_DATE_LIST = [
  "CardsSortNewestOldest",
  "CardsSortOldestNewest"
];

const Cards = ({ sortValue }: ICardsProp) => {
  const { t } = useTranslation("whitepapers");

  const [dataSheetsDisplayCount, setDataSheetsDisplayCount] = useState<number>(6);
  const [dataSheetsShowButton, setDataSheetsShowButton] = useState<boolean>(true);
  const [choosedFilter, setChoosedFilter] = useState<string>(t("CardsFiltersAll"));
  const [choosedModule, setChoosedModule] = useState<string>(t("CardsFiltersAll"));
  const [choosedDate, setChoosedDate] = useState<string>(t("CardsSortNewestOldest"));

  const [tempFilter, setTempFilter] = useState<string>(choosedFilter);
  const [tempModule, setTempModule] = useState<string>(choosedModule);
  const [tempDate, setTempDate] = useState<string>(choosedDate);

  const filterBtnRef = useRef<HTMLDivElement>(null);
  const moduleBtnRef = useRef<HTMLDivElement>(null);
  const dateBtnRef = useRef<HTMLDivElement>(null);
  const [activeDropdown, setActiveDropdown] = useState<"filter" | "module" | "date" | null>(null);
  const [filterMobDisplay, setFilterMobDisplay] = useState(false);
  const { filterCounter } = useFilterCounter(choosedFilter, choosedModule, choosedDate, t);

  useHandleClickOutside(setActiveDropdown, filterBtnRef, moduleBtnRef, dateBtnRef);

  const sortModules = useMemo(() => {
    const sorted = [...cardDatasheetsItems].sort((a, b) =>
      a.title.localeCompare(b.title)
    );
    return [{ title: t("CardsFiltersAll") }, ...sorted];
  }, [t]);

  const { refineWhitepaperItems, refineDatasheetsItems } = useRefineCardsItems(
    cardWhitepapersItems,
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
    const defaultFilter = t("CardsFiltersAll");
    const defaultDate = t("CardsSortNewestOldest");
    setChoosedFilter(defaultFilter);
    setChoosedModule(defaultFilter);
    setChoosedDate(defaultDate);
    setTempFilter(defaultFilter);
    setTempModule(defaultFilter);
    setTempDate(defaultDate);
  }, [t]);

  const handleModuleSetDefault = useCallback(() => {
    if (choosedFilter !== t("CardsHeadingDatasheets")) {
      setChoosedModule(t("CardsFiltersAll"));
    }
  }, [choosedFilter, t]);

  const handleChooseFilter = useCallback((label: string) => {
    setChoosedFilter(label);
    handleModuleSetDefault();
  }, [handleModuleSetDefault]);

  const handleDropdownClick = useCallback((dropdown: "filter" | "module" | "date") => {
    setActiveDropdown(prev => prev === dropdown ? null : dropdown);
  }, []);

  const handleShowMore = () => {
    setDataSheetsDisplayCount(cardDatasheetsItems.length);
    setDataSheetsShowButton(false);
  };

  return (
    <>
      <Section background="#EFEFEF" desktopSpacing={["32px", "112px"]}>
        <Container>
          <StyledCardsFiltersWrapper>
            <StyledCardsFilterSelect onClick={() => handleDropdownClick("filter")} ref={filterBtnRef}>
              <StyledCardsRefineHeading
                level={5}
                size={4}
                label={choosedFilter}
                $isOpen={activeDropdown === "filter"}
              />
              <StyledCardsRefineList $isOpen={activeDropdown === "filter"}>
                {CARDS_CONTENT_LIST.map(label => (
                  <StyledCardsRefineItems
                    key={t(label)}
                    onClick={() => handleChooseFilter(t(label))}
                    $isActive={choosedFilter === t(label)}
                  >
                    <StyledCardsRefineText
                      $isActive={choosedFilter === t(label)}
                      label={t(label)}
                    />
                  </StyledCardsRefineItems>
                ))}
              </StyledCardsRefineList>
            </StyledCardsFilterSelect>

            <StyledCardsSortSelect ref={moduleBtnRef}>
              {choosedFilter === t("CardsHeadingDatasheets") && (
                <StyledCardsSortModules onClick={() => handleDropdownClick("module")}>
                  <StyledCardsSortModuleText
                    fontSize="11px"
                    textTransform="uppercase"
                    color="#808080"
                    label={t("CardsSortModules")}
                  />
                  <StyledCardsRefineHeading
                    $isOpen={activeDropdown === "module"}
                    label={choosedModule}
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
                          label={item.title}
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
                  label={choosedDate}
                  level={5}
                  size={6}
                />
                <StyledCardsRefineList $isOpen={activeDropdown === "date"}>
                  {CARDS_SORT_DATE_LIST.map(date => (
                    <StyledCardsRefineItems
                      key={t(date)}
                      onClick={() => setChoosedDate(t(date))}
                      $isActive={choosedDate === t(date)}
                    >
                      <StyledCardsRefineText
                        $isActive={choosedDate === t(date)}
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
              label={choosedFilter}
            />
            <StyledCardsFilterMobIcon onClick={openMobileFilters}>
              {filterCounter > 0 && (
                <StyledCardsRefineCounter label={filterCounter.toString()} color="#fff" size={3} />
              )}
            </StyledCardsFilterMobIcon>
          </StyledCardsFiltersWrapper>

          {refineWhitepaperItems.length > 0 &&
            (choosedFilter === t("CardsHeadingWhitepapers") || choosedFilter === t("CardsFiltersAll")) && (
              <StyledCardsContent>
                <StyledCardsHeading label={t("CardsHeadingWhitepapers")} textAlign="center" level={2} size={4} />
                <StyledCardsList>
                  {refineWhitepaperItems.map(item => (
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
          {refineDatasheetsItems.length > 0 &&
            (choosedFilter === t("CardsHeadingDatasheets") || choosedFilter === t("CardsFiltersAll")) && (
              <StyledCardsContent>
                <StyledCardsHeading label={t("CardsHeadingDatasheets")} textAlign="center" level={2} size={4} />
                <StyledCardsList>
                  {refineDatasheetsItems.map((item, index) => (
                    <CardDatasheets
                      key={item.id}
                      title={item.title}
                      product={item.product}
                      image_url={item.image_url}
                      download_url={item.download_url}
                      displayOther={index < dataSheetsDisplayCount}
                    />
                  ))}
                </StyledCardsList>
                {choosedModule === t("CardsFiltersAll") && (
                  <StyledCardsDatasheetsShowBtn $display={dataSheetsShowButton} onClick={handleShowMore}>
                    {t("CardsButtonShowMore")}
                  </StyledCardsDatasheetsShowBtn>
                )}
              </StyledCardsContent>
            )}
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
                key={t(label)}
                onClick={() => setTempFilter(t(label))}
                $isActive={tempFilter === t(label)}
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
                key={t(date)}
                onClick={() => setTempDate(t(date))}
                $isActive={tempDate === t(date)}
              >
                {t(date)}
              </StyledCardsMobDateOption>
            ))}
          </StyledCardsMobDateSelect>
          {tempFilter === t("CardsHeadingDatasheets") && (
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
                    {item.title}
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
