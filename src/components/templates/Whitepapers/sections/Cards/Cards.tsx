import { useEffect, useMemo, useRef, useState } from "react";
import { useTranslation } from "next-i18next";
import { Section } from "@src/components/ui/Section";
import { Container } from "@src/components/ui/Container";
import { CardWhitepapers } from "./sub-components/CardWhitepapers";
import { CardDatasheets } from "./sub-components/CardDatasheets";
import { cardWhitepapersItems } from "./data/cardWhitepapersItems";
import { cardDatasheetsItems } from "./data/cardDatasheetsItems";
import { useRefineCardsItems } from "./utils/useRefineCardsItems";
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
  StyledCardsMobDateHeading
} from "./Cards.styled";

const Cards = ({ sortValue }: ICardsProp ) => {
  const { t } = useTranslation("whitepapers");

  const [dataSheetsDisplayCount, setDataSheetsDisplayCount] = useState<number>(6);
  const [dataSheetsShowButton, setDataSheetsShowButton] = useState<boolean>(true);

  const [choosedFilter, setChoosedFilter] = useState<string>(t("CardsFiltersAll"));
  const filterBtnRef = useRef<HTMLDivElement>(null);

  const [choosedModule, setChoosedModule] = useState<string>(t("CardsFiltersAll"));
  const moduleBtnRef = useRef<HTMLDivElement>(null);

  const [choosedDate, setChoosedDate] = useState<string>(t("CardsSortNewestOldest"));
  const dateBtnRef = useRef<HTMLDivElement>(null);

  const [activeDropdown, setActiveDropdown] = useState<"filter" | "module" | "date" | null>(null);

  const handleModuleSetDefault = () => {
    if (choosedFilter !== t("CardsHeadingDatasheets")) {
      setChoosedModule(t("CardsFiltersAll"));
    }
  }

  const handleChooseFilter = (label: string) => {
    setChoosedFilter(label);
    handleModuleSetDefault();
  }

  const handleDropdownClick = (dropdown: "filter" | "module" | "date") => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  }

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as Node;

      const isClickInside =
        filterBtnRef.current?.contains(target) ||
        moduleBtnRef.current?.contains(target) ||
        dateBtnRef.current?.contains(target);
      if (!isClickInside) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleShowMore = () => {
    setDataSheetsDisplayCount(refineDatasheetsItems.length);
    setDataSheetsShowButton(false);
  }

  const cardsContentList = useMemo(() => {
    return [
      t("CardsFiltersAll"),
      t("CardsHeadingWhitepapers"),
      t("CardsHeadingDatasheets")
    ];
  }, [t]);

  const cardsSortDateList = useMemo(() => {
    return [
      t("CardsSortNewestOldest"),
      t("CardsSortOldestNewest")
    ];
  }, [t]);

  const sortModules = useMemo(() => {
    return [
      {title: t("CardsFiltersAll")},
      ...cardDatasheetsItems.sort((a, b) => a.title.localeCompare(b.title))
    ];
  }, [t]);

  const { refineWhitepaperItems, refineDatasheetsItems} = useRefineCardsItems(
    cardWhitepapersItems,
    cardDatasheetsItems,
    sortValue,
    choosedModule,
    choosedDate
  );

  const [filterMobDisplay, setFilterMobDisplay] = useState(false);
  const handleMobResetFilters = () => {
    setChoosedFilter(t("CardsFiltersAll"));
    setChoosedModule(t("CardsFiltersAll"));
    setChoosedDate(t("CardsSortNewestOldest"));
  }

  return (
    <>
      <Section
        background="#EFEFEF"
        desktopSpacing={["32px", "112px"]}
      >
        <Container>
          <StyledCardsFiltersWrapper>
            <StyledCardsFilterSelect onClick={() => handleDropdownClick("filter")} ref={filterBtnRef}>
              <StyledCardsRefineHeading
                level={5}
                size={4}
                label={choosedFilter}
                $isOpen={activeDropdown === "filter"}
              />
              <StyledCardsRefineList
                $isOpen={activeDropdown === "filter"}
              >
                {cardsContentList.map((label) => (
                  <StyledCardsRefineItems
                    key={label}
                    onClick={() => handleChooseFilter(label)}
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
                    {sortModules.map((item) => (
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
                  {cardsSortDateList.map((date) => (
                    <StyledCardsRefineItems
                      key={date}
                      onClick={() => setChoosedDate(date)}
                      $isActive={choosedDate === date}
                    >
                      <StyledCardsRefineText
                        $isActive={choosedDate === date}
                        label={date}
                      />
                    </StyledCardsRefineItems>
                  ))}
                </StyledCardsRefineList>
              </StyledCardsSortDate>
            </StyledCardsSortSelect>
            <StyledCardsFilterMobIcon
              onClick={() => setFilterMobDisplay(true)}
            />
          </StyledCardsFiltersWrapper>
          {refineWhitepaperItems.length > 0 &&
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
                {refineWhitepaperItems.map((item) => (
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
                <StyledCardsDatasheetsShowBtn
                  $display={dataSheetsShowButton}
                  onClick={handleShowMore}
                >
                  {t("CardsButtonShowMore")}
                </StyledCardsDatasheetsShowBtn>
              )}
            </StyledCardsContent>
          )}
        </Container>
      </Section>

      <StyledCardsFilterMob $display={filterMobDisplay}>
        <StyledCardsFilterMobHeader>
          <StyledCardsFilterMobReset
            $display={true}
            onClick={handleMobResetFilters}
          >
            {t("CardsMobFiltersReset")}
          </StyledCardsFilterMobReset>
          <StyledCardsFilterMobHeading
            label={t("CardsMobFiltersHeading")}
            level={5}
          />
          <StyledCardsFilterMobCloseBtn
            onClick={() => setFilterMobDisplay(false)}
          />
        </StyledCardsFilterMobHeader>
        <StyledCardsFilterMobMain>
          <StyledCardsFilterMobSelect>
            {cardsContentList.map((label) => (
              <StyledCardsFilterMobOption
                key={label}
                onClick={() => handleChooseFilter(label)}
                $isActive={choosedFilter === label}
              >
                {label}
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
            {cardsSortDateList.map((date) => (
              <StyledCardsMobDateOption
                key={date}
                onClick={() => setChoosedDate(date)}
                $isActive={choosedDate === date}
              >
                {date}
              </StyledCardsMobDateOption>
            ))}
          </StyledCardsMobDateSelect>
          {choosedFilter === t("CardsHeadingDatasheets") && (
            <>
              <StyledCardsSortMobHeading
                label={t("CardsMobFiltersModules")}
                level={5}
                size={6}
                textTransform="uppercase"
                color="#808080"
              />
              <StyledCardsSortMobSelect>
                {sortModules.map((item) => (
                  <StyledCardsSortMobOption
                    key={item.title}
                    onClick={() => setChoosedModule(item.title)}
                    $isActive={choosedModule === item.title}
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
            label={t("CardsMobFiltersApply")}
            borderRadius="3px"
            onClick={() => setFilterMobDisplay(false)}
          />
        </StyledCardsFilterMobFooter>
      </StyledCardsFilterMob>
    </>
  );
};

export { Cards };